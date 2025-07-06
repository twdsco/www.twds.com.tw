import type { Metadata } from "next";
import "../globals.css";
import { getTranslations } from "next-intl/server";

const locale = 'zh-tw';
const t = await getTranslations({ locale, namespace: 'Metadata' });

export const metadata: Metadata = {
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body>
        {children}
      </body>
    </html>
  );
} 