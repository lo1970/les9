# Conventions

## Langue

Le texte destiné aux humains est en français : README, docs, interface, messages d'erreur, commentaires utiles.

Les identifiants techniques restent en anglais : paquets, fichiers, variables, routes HTTP, champs JSON. Les libellés visibles sont traduits.

## Internationalisation

Les langues du produit, dans ce squelette, sont le français et le néerlandais. L'anglais est prévu dans `packages/i18n` sans être une langue du MVP.

- Ajouter une clé dans `fr` et la même clé dans `nl`.
- Ne pas activer une route `/en`.
- Une clé anglaise manquante retombe sur le français.

## Monorepo

| Emplacement       | Rôle                                |
| ----------------- | ----------------------------------- |
| `apps/web`        | Site Next.js                        |
| `apps/mobile`     | Application Expo, iOS et Android    |
| `apps/api`        | API Hono                            |
| `packages/domain` | Types partagés                      |
| `packages/i18n`   | Catalogues et négociation de langue |

Les paquets s'appellent `@les9/*`. Les applications dépendent des paquets compilés (`dist`). Les scripts de la racine construisent d'abord les paquets.

Commandes à utiliser :

```bash
pnpm lint
pnpm format:check
pnpm typecheck
pnpm test
pnpm build
```

Le formatage est Prettier. Le lint est ESLint. TypeScript est en mode strict.

## Données

Pas de contenu éditorial d'un autre produit dans le code. Une gazette de test n'existe que dans les tests de l'API, sous le nom « Gazette démo », pour vérifier le contrat.

Pas de secret. Pas de `.env` commité. Pas de numéro de téléphone. Pas de donnée personnelle. Pas de mot de passe, pas de chaîne de connexion PostgreSQL.

## Ce que ce dépôt ne fait pas

Pas de déploiement. Pas de compte Apple ou Google. Pas de binaire soumis à un store. Pas de poussée directe sur `main`. Merger, déployer et publier exigent l'accord de Lo.
