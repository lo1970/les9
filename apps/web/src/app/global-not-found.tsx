import { translate } from '@les9/i18n';
import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: translate('fr', 'web.notFound'),
  robots: { index: false, follow: false },
};

/** Page inconnue : français par défaut, avec le néerlandais et un retour vers chaque langue. */
export default function GlobalNotFound() {
  return (
    <html lang="fr">
      <body>
        <main id="contenu" className="prose">
          <h1>{translate('fr', 'web.notFound')}</h1>
          <p lang="nl">{translate('nl', 'web.notFound')}</p>
          <p className="choices">
            <Link href="/fr" hrefLang="fr" lang="fr">
              {translate('fr', 'nav.home')}
            </Link>
            <Link href="/nl" hrefLang="nl" lang="nl">
              {translate('nl', 'nav.home')}
            </Link>
          </p>
        </main>
      </body>
    </html>
  );
}
