import type { Locale, OptionalLocale } from '@les9/domain';
import { en, fr, messageKeys, nl } from './messages.js';

export { en, fr, messageKeys, nl };
export type { MessageKey } from './messages.js';

const required = { fr, nl } as const;

/**
 * Traduit une clé. Le français et le néerlandais sont complets.
 * L'anglais retombe sur le français quand la clé n'est pas encore traduite.
 */
export function translate(locale: Locale | OptionalLocale, key: keyof typeof fr): string {
  if (locale === 'en') {
    return en[key] ?? fr[key];
  }
  return required[locale][key];
}

/** Choisit fr ou nl. Toute autre langue, dont l'anglais, retombe sur le français. */
export function negotiateLocale(header: string | undefined): Locale {
  if (!header) {
    return 'fr';
  }

  for (const range of header.split(',')) {
    const tag = range.split(';')[0]?.trim().toLowerCase();
    const base = tag?.split('-')[0];
    if (base === 'fr' || base === 'nl') {
      return base;
    }
  }

  return 'fr';
}
