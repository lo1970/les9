# Les9

Monorepo local : un site web et une app mobile (iOS et Android) qui partagent le même petit module.

Ce dépôt ne déploie rien et ne publie rien sur un store. Merger, déployer ou publier demande l'accord de Lo. Voir [docs/feuille-de-route.md](docs/feuille-de-route.md).

## Contenu

| Chemin | Rôle |
| --- | --- |
| `apps/web` | Site, Vite et TypeScript |
| `apps/mobile` | App iOS et Android, un seul projet Expo |
| `packages/shared` | Nom et pages d'attente, importés par le site et l'app |
| `docs/architecture.md` | Choix techniques et écarts |
| `docs/feuille-de-route.md` | Étapes jusqu'à un site et des apps utilisables |
| `docs/questions-pour-lo.md` | Questions ouvertes |

## Prérequis

Node.js 22 et npm 10. Pour ouvrir l'app sur un téléphone ou un simulateur : Expo Go, ou Xcode (iOS, sur macOS) et Android Studio (Android).

## Installation

À la racine du dépôt :

```bash
npm install
```

## Site web

```bash
npm run dev:web
```

Ouvre [http://localhost:5173](http://localhost:5173).

Vérifier le typecheck et le build, sans serveur :

```bash
npm run check
```

Le résultat du build est dans `apps/web/dist/`. Ce dossier n'est pas versionné.

## App iOS et Android

```bash
npm run dev:mobile
```

Expo affiche un QR code. Avec Expo Go, ouvre ce projet. Sur une machine qui a un simulateur :

```bash
npm run ios -w @les9/mobile
npm run android -w @les9/mobile
```

`ios` demande macOS et Xcode. `android` demande Android Studio. Les dossiers natifs `apps/mobile/ios` et `apps/mobile/android` ne sont pas dans git : Expo les génère sur la machine qui compile.

## Ce qui n'est pas dans ce dépôt

Pas de compte, pas de serveur, pas de fichier `.env`, pas de clé. Les textes affichés sont des placeholders.
