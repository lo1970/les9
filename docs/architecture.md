# Architecture

État au 25 novembre 2026. Rien ici n'est déployé.

## Ce que gazetlocal contient vraiment

Le modèle demandé est [lo1970/gazetlocal](https://github.com/lo1970/gazetlocal) : un monorepo site web plus apps iOS et Android, version générique d'un autre produit.

Lecture de `main` au commit `b47c23c2` : le dépôt ne contient que `README.md` (`# gazetlocal`). Pas de dossiers, pas de `package.json`, pas de config, pas de doc technique. Il n'y a donc aucun fichier à recopier, et aucun secret à laisser de côté parce qu'il n'y en a pas.

Les choix ci-dessous suivent la forme décrite pour gazetlocal (un dépôt, un site, une app pour iOS et Android, du code partagé). Ce ne sont pas des choix lus dans son code. Quand gazetlocal aura une stack, il faudra recaler Les9 dessus avant d'ajouter des fonctions.

## Forme du monorepo

```
apps/web            site
apps/mobile         une app Expo pour iOS et Android
packages/shared     module TypeScript sans interface
```

npm workspaces relie les trois. Le site et l'app dépendent de `@les9/shared` en `"*"`. npm 10, utilisé ici, ne comprend pas le protocole `workspace:` (écart noté plus bas) : le `*` est la forme documentée par Expo pour npm, et le paquet est `private`, donc non publiable.

Expo SDK 58 détecte le monorepo tout seul. Pas de `metro.config.js` manuel : la doc Expo demande de ne pas redéfinir `watchFolders` ni la résolution des `node_modules` à partir du SDK 52.

## Briques

| Brique | Rôle |
| --- | --- |
| Node.js 22, npm | Installation à la racine |
| TypeScript | Site, app, module partagé |
| Vite | Dev et build du site, fichiers statiques |
| Expo SDK 58, React Native | Une base de code pour iOS et Android |
| `@les9/shared` | `appName` et une page d'attente, lus par les deux apps |

Pas de backend, pas d'authentification, pas de base de données, pas de CI, pas de fichier `.env`.

## Spécifique à Les9

- Dépôt public `lo1970/les9`. Rien de privé n'y entre : pas de secret, pas de `.env` réel, pas de donnée personnelle.
- Noms techniques en anglais : `@les9/web`, `@les9/mobile`, `@les9/shared`.
- Identifiants provisoires, pas un domaine : `app.les9.mobile` (iOS et Android) et le scheme `les9`. À remplacer quand le nom de domaine et l'identité seront choisis.
- Textes visibles réduits à un placeholder. Aucun texte, marque ou domaine d'un autre produit.
- Icônes mobiles : fichiers du modèle Expo, en attendant une identité. Ce n'est pas un logo Les9.
- Langue de la page d'attente : français. C'est un défaut de lecture, pas une décision de produit. Le `lang` du HTML est `fr`.

## Écarts assumés

- Aucune reprise fichier à fichier de gazetlocal : il n'y a pas de stack à reprendre.
- Outil de monorepo : npm, parce qu'il est déjà là et qu'Expo le prend en charge. Pas de pnpm, Yarn, Bun ou Turborepo tant que gazetlocal n'en montre pas un.
- Dépendance interne en `"*"` plutôt qu'en `workspace:*` : npm 10.9 refuse ce protocole (`EUNSUPPORTEDPROTOCOL`). Le paquet partagé est marqué `private`.
- Site en Vite plutôt qu'un framework plus lourd : le squelette doit s'installer et se builder sans compte ni service externe.
- Projets natifs `ios/` et `android/` non commités. Expo les génère sur la machine de build (`npx expo prebuild`, ou au premier `expo run`). Les commiter sans Xcode ni Android SDK ici produirait un arbre non vérifié.
- Pas de projet EAS, pas d'identifiant Expo. En créer un demanderait un compte et risquerait de poser un identifiant dans le dépôt public.
- Pas de licence. Le dépôt public reste sans licence tant que Lo n'en choisit pas une.
- Pas de pipeline qui déploie ou publie.
- `npm audit` signale trois avis modérés, tous transitifs (`minimatch` via `@expo/fingerprint`, donc Expo). Les corriger demanderait de forcer une montée de version. Ils ne sont pas un secret et ne touchent pas le build du site. On ne lance pas `npm audit fix --force`.

## Ouvert

- Ce qu'est Les9 : contenu, public, fonctions. Voir [questions-pour-lo.md](questions-pour-lo.md).
- Nom de domaine, langue, identité visuelle.
- Comptes, données, hébergeur.
- Recalage sur la stack réelle de gazetlocal dès qu'elle existe.
- Licence du dépôt public.
