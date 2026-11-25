# Les9

Squelette : un site, une application iOS/Android et une API dans le même dépôt. Les types et les textes français et néerlandais sont partagés.

Ce dépôt se construit en local et en CI. Il ne déploie rien, ne publie rien sur un store, et ne contient aucun secret. Le contenu réel de Les9 n'est pas inventé ici.

La stack est celle de la pull request [lo1970/gazetlocal#1](https://github.com/lo1970/gazetlocal/pull/1) (branche `cursor/squelette-monorepo-7589`). Le détail est dans [docs/architecture.md](docs/architecture.md).

## Stack

| Face   | Choix               | Pourquoi                                                     |
| ------ | ------------------- | ------------------------------------------------------------ |
| Web    | Next.js 16          | Site lisible, pages par langue, React partagé avec le mobile |
| Mobile | Expo SDK 58         | Une base TypeScript pour iOS et Android                      |
| API    | Hono sur Node.js 22 | Petit serveur testable, sans base ni compte cloud            |
| Dépôt  | pnpm                | Un seul monorepo, une seule CI                               |

La suite est dans [docs/feuille-de-route.md](docs/feuille-de-route.md). Les questions ouvertes sont dans [docs/questions-pour-lo.md](docs/questions-pour-lo.md). Les habitudes de code sont dans [docs/conventions.md](docs/conventions.md).

## Prérequis

- Node.js 22
- pnpm 10 (`corepack enable` puis `corepack prepare pnpm@10.33.4 --activate`)

## Démarrer

```bash
pnpm install
pnpm dev:web
```

Le site écoute sur le port 3000. `/` envoie vers `/fr`. `/nl` est le néerlandais.

```bash
pnpm dev:api
```

L'API écoute sur le port 3001.

```text
GET /health
GET /v1/gazettes
```

```bash
pnpm dev:mobile
```

Expo démarre le projet mobile. Le build de CI exporte un bundle web (`expo export`), sans certificat et sans store.

## Vérifier

Les mêmes commandes que la CI :

```bash
pnpm format:check
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

## Langues

Français et néerlandais sont exigés. L'anglais est un catalogue partiel, non activé dans les routes. Les règles pour les agents suivants sont dans `.cursor/rules/`.

## Limites

- Pas de déploiement, pas de nom de domaine branché, pas de base de données.
- Pas de mesure d'audience, pas de police chargée depuis un tiers.
- Pas de secret, pas de donnée personnelle, pas de numéro de téléphone.
- Merger, déployer et publier sur un store exigent l'accord de Lo.
