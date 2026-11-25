'use client';

import { isRequiredLocale } from '@les9/domain';
import { translate } from '@les9/i18n';
import { usePathname } from 'next/navigation';

export default function NotFound() {
  const pathname = usePathname() ?? '/fr';
  const segment = pathname.split('/')[1] ?? 'fr';
  const locale = isRequiredLocale(segment) ? segment : 'fr';

  return (
    <main id="contenu" className="prose">
      <h1>{translate(locale, 'web.notFound')}</h1>
    </main>
  );
}
