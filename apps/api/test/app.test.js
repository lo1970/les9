import assert from 'node:assert/strict';
import test from 'node:test';
import { createApp } from '../dist/app.js';

const demoStore = {
  async list() {
    return [demoGazette];
  },
  async findBySlug(slug) {
    return slug === demoGazette.slug ? demoGazette : null;
  },
  async listNews() {
    return [demoNews];
  },
  async listAnnouncements() {
    return [];
  },
};

const demoGazette = {
  id: 'demo',
  slug: 'demo',
  name: 'Gazette démo',
  identity: { primaryColor: '#1c1915' },
  defaultLocale: 'fr',
  locales: ['fr', 'nl'],
};

const demoNews = {
  id: 'n1',
  gazetteId: 'demo',
  slug: 'note',
  title: { fr: 'Titre de test', nl: 'Testtitel' },
  body: { fr: 'Texte de test', nl: 'Testtekst' },
  publishedAt: '2026-01-01T00:00:00.000Z',
};

test('la santé répond sans donnée personnelle', async () => {
  const response = await createApp().request('/health');
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { status: 'ok' });
});

test('la liste par défaut est vide', async () => {
  const response = await createApp().request('/v1/gazettes');
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { gazettes: [] });
});

test('une gazette inconnue répond en français ou en néerlandais', async () => {
  const french = await createApp().request('/v1/gazettes/inconnue', {
    headers: { 'accept-language': 'fr-BE' },
  });
  assert.equal(french.status, 404);
  assert.equal(french.headers.get('content-language'), 'fr');
  assert.deepEqual(await french.json(), {
    error: { code: 'not_found', message: 'Ressource introuvable.' },
  });

  const dutch = await createApp().request('/v1/gazettes/inconnue', {
    headers: { 'accept-language': 'nl-BE,nl;q=0.9' },
  });
  assert.equal(dutch.status, 404);
  assert.deepEqual(await dutch.json(), {
    error: { code: 'not_found', message: 'Bron niet gevonden.' },
  });
});

test("l'anglais de l'en-tête retombe sur le français", async () => {
  const response = await createApp().request('/v1/gazettes/inconnue', {
    headers: { 'accept-language': 'en' },
  });
  const body = await response.json();
  assert.equal(body.error.message, 'Ressource introuvable.');
});

test('un dépôt de test renvoie le même contrat de contenu', async () => {
  const app = createApp(demoStore);
  const list = await app.request('/v1/gazettes');
  assert.deepEqual(await list.json(), { gazettes: [demoGazette] });

  const news = await app.request('/v1/gazettes/demo/news');
  assert.equal(news.status, 200);
  assert.deepEqual(await news.json(), { news: [demoNews] });

  const missing = await app.request('/v1/gazettes/autre');
  assert.equal(missing.status, 404);
});

test('une route inconnue reste un JSON localisé', async () => {
  const response = await createApp().request('/v1/ailleurs');
  assert.equal(response.status, 404);
  assert.match(response.headers.get('content-type') ?? '', /json/);
  assert.equal(response.headers.get('cache-control'), 'no-store');
});
