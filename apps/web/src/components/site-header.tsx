import type { Locale } from '@les9/domain';
import { translate } from '@les9/i18n';
import Link from 'next/link';
import { LanguageSwitcher } from './language-switcher';

export function SiteHeader({ locale }: { locale: Locale }) {
  return (
    <header className="topbar">
      <a className="skip" href="#contenu">
        {translate(locale, 'nav.skip')}
      </a>
      <div className="topbar-inner">
        <Link className="brand" href={`/${locale}`}>
          {translate(locale, 'app.name')}
        </Link>
        <nav className="sections" aria-label={translate(locale, 'nav.home')}>
          <Link href={`/${locale}`}>{translate(locale, 'nav.home')}</Link>
          <Link href={`/${locale}/privacy`}>{translate(locale, 'nav.privacy')}</Link>
        </nav>
        <LanguageSwitcher locale={locale} />
      </div>
    </header>
  );
}
