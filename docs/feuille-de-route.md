# Feuille de route

Du squelette jusqu'à un site et des apps utilisables en local. Merger, déployer et publier restent des décisions séparées.

## 1. Squelette

Cette branche. Site Next.js (`/fr`, `/nl`), application Expo, API Hono, types et catalogues FR/NL partagés, CI. Le contenu est vide. Rien n'est déployé. PostgreSQL est prévu, pas branché.

## 2. Réponses de produit

Les questions de [questions-pour-lo.md](questions-pour-lo.md) : ce qu'est Les9, pour qui, quelles fonctions, d'où vient le contenu, quel domaine, quelle identité. Le modèle « gazette » vient du squelette gazetlocal. Il ne devient le modèle de Les9 que si tu le confirmes.

## 3. Site utilisable en local

Pages, navigation et états vides qui correspondent aux réponses. Toujours `pnpm dev:web`, sans mise en ligne.

## 4. Apps utilisables en local

Les mêmes données partagées, sur iOS et Android, via Expo. Pas de binaire envoyé à un store.

## 5. API branchée aux écrans

Le site et l'application lisent `GET /v1/gazettes` (ou les routes retenues après tes réponses). Le dépôt reste vide tant qu'il n'y a pas de contenu réel.

## 6. PostgreSQL dans l'Union européenne

Seulement après le choix d'hébergement. Aucun mot de passe et aucune chaîne de connexion dans le dépôt public. Les secrets restent hors de git.

## Accords exigés

Ces trois actions ne font pas partie des étapes ci-dessus. Chacune attend un accord explicite de Lo :

- merger cette branche, ou une suivante, dans `main` ;
- déployer le site ou l'API ;
- publier l'app sur l'App Store ou le Play Store.
