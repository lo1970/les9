import assert from 'node:assert/strict';
import test from 'node:test';
import { fr, messageKeys, negotiateLocale, nl, translate } from '../dist/index.js';

test('le néerlandais couvre toutes les clés françaises', () => {
  for (const key of messageKeys) {
    assert.equal(typeof nl[key], 'string');
    assert.ok(nl[key].length > 0, key);
  }
});

test("l'anglais partiel retombe sur le français", () => {
  assert.equal(translate('en', 'home.newsEmpty'), fr['home.newsEmpty']);
  assert.equal(translate('en', 'api.notFound'), 'Resource not found.');
});

test('la négociation de langue reste sur le français et le néerlandais', () => {
  assert.equal(negotiateLocale(undefined), 'fr');
  assert.equal(negotiateLocale('fr-BE,fr;q=0.9'), 'fr');
  assert.equal(negotiateLocale('nl-BE,nl;q=0.8,en;q=0.5'), 'nl');
  assert.equal(negotiateLocale('en-US,en;q=0.8'), 'fr');
});
