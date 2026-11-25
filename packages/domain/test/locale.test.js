import assert from 'node:assert/strict';
import test from 'node:test';
import { isRequiredLocale } from '../dist/index.js';

test('le français et le néerlandais sont des langues du produit', () => {
  assert.equal(isRequiredLocale('fr'), true);
  assert.equal(isRequiredLocale('nl'), true);
});

test("l'anglais n'est pas une langue exigée du MVP", () => {
  assert.equal(isRequiredLocale('en'), false);
  assert.equal(isRequiredLocale(''), false);
});
