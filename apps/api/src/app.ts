import type { GazetteStore, Locale } from '@les9/domain';
import { negotiateLocale, translate } from '@les9/i18n';
import type { Context } from 'hono';
import { Hono } from 'hono';
import { EmptyGazetteStore } from './store.js';

function jsonNotFound(c: Context, locale: Locale) {
  c.header('Content-Language', locale);
  return c.json(
    { error: { code: 'not_found', message: translate(locale, 'api.notFound') } },
    404,
  );
}

/** API HTTP commune au site et à l'application. Aucune base n'est branchée. */
export function createApp(store: GazetteStore = new EmptyGazetteStore()) {
  const app = new Hono();

  app.use('*', async (c, next) => {
    await next();
    c.header('Cache-Control', 'no-store');
    c.header('X-Content-Type-Options', 'nosniff');
  });

  app.get('/health', (c) => c.json({ status: 'ok' }));

  app.get('/v1/gazettes', async (c) => {
    const locale = negotiateLocale(c.req.header('accept-language'));
    c.header('Content-Language', locale);
    const gazettes = await store.list();
    return c.json({ gazettes });
  });

  app.get('/v1/gazettes/:slug', async (c) => {
    const locale = negotiateLocale(c.req.header('accept-language'));
    const gazette = await store.findBySlug(c.req.param('slug'));
    if (!gazette) {
      return jsonNotFound(c, locale);
    }
    c.header('Content-Language', locale);
    return c.json({ gazette });
  });

  app.get('/v1/gazettes/:slug/news', async (c) => {
    const locale = negotiateLocale(c.req.header('accept-language'));
    const gazette = await store.findBySlug(c.req.param('slug'));
    if (!gazette) {
      return jsonNotFound(c, locale);
    }
    c.header('Content-Language', locale);
    const news = await store.listNews(gazette.id);
    return c.json({ news });
  });

  app.get('/v1/gazettes/:slug/announcements', async (c) => {
    const locale = negotiateLocale(c.req.header('accept-language'));
    const gazette = await store.findBySlug(c.req.param('slug'));
    if (!gazette) {
      return jsonNotFound(c, locale);
    }
    c.header('Content-Language', locale);
    const announcements = await store.listAnnouncements(gazette.id);
    return c.json({ announcements });
  });

  app.notFound((c) => {
    const locale = negotiateLocale(c.req.header('accept-language'));
    return jsonNotFound(c, locale);
  });

  return app;
}

export const app = createApp();
