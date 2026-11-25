# Architecture

Les9 reprend la stack et la forme du squelette de [gazetlocal#1](https://github.com/lo1970/gazetlocal/pull/1), branche `cursor/squelette-monorepo-7589`, commit `fbbf3e14`. Cette pull request n'est pas sur `main`. Rien ici n'est déployé.

## Stack reprise

Un seul langage, TypeScript, relie les trois faces. Les types vivent dans `@les9/domain`. Les textes d'interface vivent dans `@les9/i18n`.

**Web — Next.js 16 (React).** Pages servies par le serveur, une URL par langue (`/fr`, `/nl`), pas de script tiers. `/` redirige vers `/fr`. Next.js partage React avec le mobile.

**Mobile — Expo SDK 58 (React Native).** Une seule base vise iOS et Android. Elle importe les mêmes types et les mêmes catalogues. Le squelette exporte un bundle web pour prouver que l'application se construit, sans certificat ni store.

**API — Hono sur Node.js 22.** Petit serveur TypeScript, testé sans base et sans compte cloud. Le dépôt vide (`EmptyGazetteStore`) tient la place du stockage.

**Monorepo — pnpm 10.** Web, mobile, API et paquets partagés, avec une CI unique : format, lint, types, tests, build.

**PostgreSQL, hébergé dans l'Union européenne, est prévu et n'est pas branché.** Aucune chaîne de connexion, aucun mot de passe, aucun client de base dans le dépôt.

## Forme du contenu

Le modèle vient du squelette gazetlocal. Le dépôt Les9 ne le remplit pas.

```text
Gazette
  id, slug, name
  identity.primaryColor
  defaultLocale, locales (fr, nl)

NewsItem / Announcement
  gazetteId, slug
  title, body : { fr, nl, en? }
  publishedAt
```

## API

| Méthode et chemin                      | Comportement actuel                  |
| -------------------------------------- | ------------------------------------ |
| `GET /health`                          | `{ "status": "ok" }`                 |
| `GET /v1/gazettes`                     | `{ "gazettes": [] }`                 |
| `GET /v1/gazettes/:slug`               | 404 tant que la gazette n'existe pas |
| `GET /v1/gazettes/:slug/news`          | idem                                 |
| `GET /v1/gazettes/:slug/announcements` | idem                                 |

`Accept-Language` choisit le français ou le néerlandais pour les messages d'erreur. L'anglais, ou l'absence d'en-tête, retombe sur le français. Les réponses portent `Content-Language` et `Cache-Control: no-store`.

Le CORS n'est pas ouvert.

## Internationalisation

- Catalogues complets : français et néerlandais.
- Catalogue partiel : anglais, présent, non routé.
- Le site redirige `/` vers `/fr`.
- L'application mobile bascule la langue dans l'écran, sur les mêmes clés.
- Aucune police distante : la pile système évite un appel vers un tiers.

## Données

- Pas de compte, pas de profil, pas de géolocalisation.
- Pas d'analytics tiers. La télémétrie Next.js et Expo est désactivée dans la CI.
- Hébergement européen plus tard, seulement avec l'accord de Lo. Rien n'est déployé.
- Pas de secret. Pas de `.env`. Pas de clé. Pas de mot de passe.
- Le squelette envoie `noindex`.
- L'API n'écrit que le port d'écoute. Elle ne journalise pas les en-têtes d'un visiteur.

## Spécifique à Les9

- Dépôt public `lo1970/les9`. Noms `@les9/*`.
- Les textes visibles disent « Les9 » et qu'aucun contenu réel n'est en place. Ils ne reprennent pas le pitch ni les articles d'un autre produit.
- Le modèle « gazette / actualité / annonce » est celui du squelette de référence. Que Les9 soit ce produit-là reste une question ouverte : [questions-pour-lo.md](questions-pour-lo.md).

## Écarts qui restent

- Les PNG mobiles ne sont pas les binaires de gazetlocal. Ils reprennent le dessin de `apps/web/src/app/icon.svg` (trois traits). Ce n'est pas un logo Les9.
- gazetlocal est un dépôt privé. Les9 est public : la même absence de secret, avec cette contrainte en plus.
- Pas de licence, comme le squelette de référence.
- Pas d'identifiant de paquet iOS ou Android. Le squelette de référence n'en fixe pas non plus. Aucune signature.
- Dossiers natifs `ios/` et `android/` non versionnés.
- Pas de projet EAS, pas de compte Expo dans le dépôt.
- PostgreSQL non branché.

## Hors de ce dépôt

Aucun workflow ne déploie. Merger dans `main`, mettre le site en ligne, ou publier sur l'App Store ou le Play Store exige l'accord explicite de Lo.
