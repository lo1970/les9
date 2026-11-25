/** Langues exigées dès le MVP. */
export const REQUIRED_LOCALES = ['fr', 'nl'] as const;

export type Locale = (typeof REQUIRED_LOCALES)[number];

/**
 * Langue prévue dans la structure, non activée pour le MVP.
 * Les catalogues peuvent rester partiels.
 */
export const OPTIONAL_LOCALES = ['en'] as const;

export type OptionalLocale = (typeof OPTIONAL_LOCALES)[number];

export function isRequiredLocale(value: string): value is Locale {
  return (REQUIRED_LOCALES as readonly string[]).includes(value);
}

/** Identité visuelle propre à une gazette. Pas de contenu éditorial. */
export interface GazetteIdentity {
  /** Couleur principale au format hexadécimal, par exemple #1c1915. */
  primaryColor: string;
}

/** Une gazette locale : commune ou quartier, avec son nom et son identité. */
export interface Gazette {
  id: string;
  slug: string;
  name: string;
  identity: GazetteIdentity;
  defaultLocale: Locale;
  locales: readonly Locale[];
}

/** Texte présent en français et en néerlandais. L'anglais reste facultatif. */
export interface LocalizedText {
  fr: string;
  nl: string;
  en?: string;
}

export interface NewsItem {
  id: string;
  gazetteId: string;
  slug: string;
  title: LocalizedText;
  body: LocalizedText;
  publishedAt: string;
}

export interface Announcement {
  id: string;
  gazetteId: string;
  slug: string;
  title: LocalizedText;
  body: LocalizedText;
  publishedAt: string;
}

export interface GazetteListResponse {
  gazettes: readonly Gazette[];
}

/**
 * Accès au contenu. L'implémentation actuelle est vide.
 * PostgreSQL, hébergé dans l'UE, prendra cette place plus tard.
 */
export interface GazetteStore {
  list(): Promise<readonly Gazette[]>;
  findBySlug(slug: string): Promise<Gazette | null>;
  listNews(gazetteId: string): Promise<readonly NewsItem[]>;
  listAnnouncements(gazetteId: string): Promise<readonly Announcement[]>;
}
