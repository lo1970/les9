import { isRequiredLocale } from '@les9/domain';
import { translate } from '@les9/i18n';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';
import { SiteFooter } from '../../components/site-footer';
import { SiteHeader } from '../../components/site-header';
import '../globals.css';

export function generateStaticParams() {
  return [{ locale: 'fr' }, { locale: 'nl' }];
}

export const dynamicParams = false;

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isRequiredLocale(locale)) {
    return {};
  }

  return {
    title: translate(locale, 'meta.title'),
    description: translate(locale, 'meta.description'),
    robots: { index: false, follow: false },
  };
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;
  if (!isRequiredLocale(locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <SiteHeader locale={locale} />
        {children}
        <SiteFooter locale={locale} />
      </body>
    </html>
  );
}
