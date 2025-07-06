import type { Metadata } from "next";
import "../globals.css";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from '@/i18n/routing';

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
      url: "https://www.twds.com.tw/",
      images: "https://www.twds.com.tw/img/og.png",
    },
    twitter: {
      card: "summary_large_image",
      title: t('title'),
      description: t('description'),
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  setRequestLocale(routing.defaultLocale);
  return (
    <html lang="zh-TW">
      <body>
        {children}
      </body>
    </html>
  );
} 