# Feuille de route

Du squelette jusqu'à un site et des apps utilisables en local. Aucune date. Merger, déployer et publier restent des décisions séparées.

## 1. Squelette

Cette branche. Le site se lance et se build en local. L'app mobile partage `@les9/shared` et se lance avec Expo. Les textes sont des placeholders.

## 2. Réponses de produit

Les questions de [questions-pour-lo.md](questions-pour-lo.md) : ce qu'est Les9, pour qui, quelles fonctions, d'où vient le contenu, quelle langue, quel domaine, quelle identité.

Sans ces réponses, on ne remplit pas les pages avec un contenu inventé.

## 3. Recaler la stack

gazetlocal n'a aujourd'hui qu'un README. Dès qu'il a une structure et des outils, on aligne Les9 (dossiers, gestionnaire de paquets, framework web, outillage mobile) et on ne garde des écarts que ceux qui sont documentés.

## 4. Site utilisable en local

Pages, navigation et états vides qui correspondent aux réponses. Le contenu d'exemple reste clairement de l'exemple. Toujours `npm run dev:web`, sans mise en ligne.

## 5. Apps utilisables en local

Les mêmes données partagées, sur iOS et Android, via Expo Go ou un simulateur. Pas de binaire envoyé à un store.

## 6. Comptes et données, seulement si c'est dans le périmètre

Si les réponses demandent des comptes ou un stockage, on l'ajoute dans un second temps. Les secrets restent hors du dépôt public (aucun `.env` réel, aucune clé). Sinon, cette étape n'existe pas.

## Accords exigés

Ces trois actions ne font pas partie des étapes ci-dessus. Chacune attend un accord explicite de Lo :

- merger cette branche, ou une suivante, dans `main` ;
- déployer le site ;
- publier l'app sur l'App Store ou le Play Store.
