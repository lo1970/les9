import type { Locale } from '@les9/domain';
import { translate } from '@les9/i18n';

export function SiteFooter({ locale }: { locale: Locale }) {
  return (
    <footer className="site-footer">
      <p>{translate(locale, 'app.name')}</p>
      <p>{translate(locale, 'footer.note')}</p>
    </footer>
  );
}
