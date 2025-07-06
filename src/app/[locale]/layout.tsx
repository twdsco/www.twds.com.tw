import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navigation from "@/components/Navigation";
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    icons: [{ rel: "icon", url: "/logo/twds_circle.svg" }],
    title: t('title'),
    description: t('description'),
    keywords: "networking, security, open source, sustainability, technology, startups, future, Taiwan, sustainability, education, cybersecurity",
    authors: [{ name: "Taiwan Digital Streaming Co." }],
    openGraph: {
      title: t('title'),
      description: t('description'),
      type: "website",
      locale: locale === 'zh-tw' ? 'zh_TW' : 'en_US',
    },
    twitter: {
      card: "summary_large_image",
      title: t('title'),
      description: t('description'),
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Load messages for the current locale
  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <Navigation />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
} 