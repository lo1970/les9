'use client';

import type { Locale } from '@les9/domain';
import { translate } from '@les9/i18n';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname() ?? `/${locale}`;
  const rest = pathname.replace(/^\/(fr|nl)(?=\/|$)/, '');

  return (
    <nav className="languages" aria-label={translate(locale, 'lang.switchLabel')}>
      {(['fr', 'nl'] as const).map((code) => (
        <Link
          key={code}
          href={`/${code}${rest}`}
          hrefLang={code}
          lang={code}
          aria-current={code === locale ? 'true' : undefined}
        >
          {translate(locale, code === 'fr' ? 'lang.fr' : 'lang.nl')}
        </Link>
      ))}
    </nav>
  );
}
