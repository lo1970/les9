import { isRequiredLocale } from '@les9/domain';
import { translate } from '@les9/i18n';
import { notFound } from 'next/navigation';

type HomeProps = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: HomeProps) {
  const { locale } = await params;
  if (!isRequiredLocale(locale)) {
    notFound();
  }

  return (
    <main id="contenu">
      <header className="masthead">
        <p className="kicker">{translate(locale, 'home.kicker')}</p>
        <h1>{translate(locale, 'home.title')}</h1>
        <p className="dek">{translate(locale, 'app.tagline')}</p>
        <p className="lead">{translate(locale, 'home.lead')}</p>
      </header>
      <div className="sheet">
        <section className="columns">
          <article>
            <h2>{translate(locale, 'home.newsTitle')}</h2>
            <p className="empty">{translate(locale, 'home.newsEmpty')}</p>
          </article>
          <article>
            <h2>{translate(locale, 'home.announcementsTitle')}</h2>
            <p className="empty">{translate(locale, 'home.announcementsEmpty')}</p>
          </article>
        </section>
        <section className="gazettes">
          <h2>{translate(locale, 'home.gazettesTitle')}</h2>
          <p className="empty">{translate(locale, 'home.gazettesEmpty')}</p>
        </section>
      </div>
    </main>
  );
}
