/**
 * Catalogues d'interface.
 * Toute clé ajoutée dans `fr` doit exister dans `nl`.
 * `en` peut rester partiel : l'anglais n'est pas une langue du MVP.
 */
export const fr = {
  'app.name': 'Les9',
  'app.tagline': 'Squelette local, en français et en néerlandais.',
  'home.kicker': 'Squelette',
  'home.title': 'Les9',
  'home.lead':
    "Le site, l'application et l'API lisent le même catalogue. Aucun contenu réel n'est encore en place.",
  'home.newsTitle': 'Actualités',
  'home.newsEmpty': 'Aucune actualité publiée pour le moment.',
  'home.announcementsTitle': 'Annonces',
  'home.announcementsEmpty': 'Aucune annonce publiée pour le moment.',
  'home.gazettesTitle': 'Gazettes',
  'home.gazettesEmpty': "Aucune gazette n'est ouverte pour le moment.",
  'nav.skip': 'Aller au contenu',
  'nav.home': 'Accueil',
  'nav.privacy': 'Données et vie privée',
  'lang.switchLabel': 'Langue',
  'lang.fr': 'Français',
  'lang.nl': 'Nederlands',
  'privacy.title': 'Données et vie privée',
  'privacy.lead':
    "Cette version ne collecte pas de compte et n'envoie rien à un service d'analyse.",
  'privacy.minimization':
    'Les données prévues plus tard resteront limitées à ce qui sert le produit, une fois celui-ci défini.',
  'privacy.noAnalytics':
    "Aucun traceur tiers n'est actif par défaut. Les polices viennent de l'appareil, sans service extérieur.",
  'privacy.hosting':
    "Rien n'est hébergé pour l'instant. Le jour où ce sera le cas, l'hébergement devra être dans l'Union européenne.",
  'privacy.noAccount':
    "Pas de compte, pas de publicité, pas de mesure d'audience dans cette version.",
  'footer.note': "Le même contenu pour le site et l'application.",
  'api.notFound': 'Ressource introuvable.',
  'web.notFound': "Cette page n'existe pas.",
  'meta.title': 'Les9',
  'meta.description': 'Squelette Les9. Le contenu reste à définir.',
} as const;

export type MessageKey = keyof typeof fr;

export const nl = {
  'app.name': 'Les9',
  'app.tagline': 'Lokaal skelet, in het Frans en het Nederlands.',
  'home.kicker': 'Skelet',
  'home.title': 'Les9',
  'home.lead':
    'De site, de app en de API lezen dezelfde catalogus. Er staat nog geen echte inhoud.',
  'home.newsTitle': 'Nieuws',
  'home.newsEmpty': 'Er is nog geen nieuws gepubliceerd.',
  'home.announcementsTitle': 'Aankondigingen',
  'home.announcementsEmpty': 'Er is nog geen aankondiging gepubliceerd.',
  'home.gazettesTitle': 'Gazetten',
  'home.gazettesEmpty': 'Er is nog geen gazet geopend.',
  'nav.skip': 'Naar de inhoud',
  'nav.home': 'Start',
  'nav.privacy': 'Gegevens en privacy',
  'lang.switchLabel': 'Taal',
  'lang.fr': 'Français',
  'lang.nl': 'Nederlands',
  'privacy.title': 'Gegevens en privacy',
  'privacy.lead':
    'Deze versie verzamelt geen account en stuurt niets naar een analysedienst.',
  'privacy.minimization':
    'Gegevens die later nodig zijn, blijven beperkt tot wat het product vraagt, zodra dat vastligt.',
  'privacy.noAnalytics':
    'Er staat standaard geen tracker van derden aan. Lettertypes komen van het toestel, zonder externe dienst.',
  'privacy.hosting':
    'Er wordt nog niets gehost. Als dat gebeurt, moet de hosting in de Europese Unie staan.',
  'privacy.noAccount':
    'Geen account, geen reclame en geen publieksmeting in deze versie.',
  'footer.note': 'Dezelfde inhoud voor de site en de app.',
  'api.notFound': 'Bron niet gevonden.',
  'web.notFound': 'Deze pagina bestaat niet.',
  'meta.title': 'Les9',
  'meta.description': 'Skelet Les9. De inhoud moet nog worden bepaald.',
} as const satisfies Record<MessageKey, string>;

/** Catalogue anglais incomplet, volontairement hors MVP. */
export const en: Partial<Record<MessageKey, string>> = {
  'app.name': 'Les9',
  'home.title': 'Les9',
  'api.notFound': 'Resource not found.',
  'web.notFound': 'This page does not exist.',
  'meta.title': 'Les9',
};

export const messageKeys = Object.keys(fr) as MessageKey[];
