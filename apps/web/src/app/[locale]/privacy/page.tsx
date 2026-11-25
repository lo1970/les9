import { isRequiredLocale } from '@les9/domain';
import { translate } from '@les9/i18n';
import { notFound } from 'next/navigation';

type PrivacyProps = {
  params: Promise<{ locale: string }>;
};

export default async function PrivacyPage({ params }: PrivacyProps) {
  const { locale } = await params;
  if (!isRequiredLocale(locale)) {
    notFound();
  }

  return (
    <main id="contenu" className="prose">
      <p className="kicker">{translate(locale, 'app.name')}</p>
      <h1>{translate(locale, 'privacy.title')}</h1>
      <p>{translate(locale, 'privacy.lead')}</p>
      <p>{translate(locale, 'privacy.minimization')}</p>
      <p>{translate(locale, 'privacy.noAnalytics')}</p>
      <p>{translate(locale, 'privacy.hosting')}</p>
      <p>{translate(locale, 'privacy.noAccount')}</p>
    </main>
  );
}
