import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  icons: ["/logo/twds.png"],
  title: "台灣數位串流有限公司",
  description:
    "發源自開源社群、擁抱，並持續貢獻於開源社群，在注重開源的同時不忘資安上的保護。",
  openGraph: {
    title: "台灣數位串流有限公司",
    description:
      "發源自開源社群、擁抱，並持續貢獻於開源社群，在注重開源的同時不忘資安上的保護。",
    url: "https://www.twds.com.tw/",
    images: "https://www.twds.com.tw/img/og.jpg",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <head>
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </head>
      <body>
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId="UA-155852877-1" />
    </html>
  );
}
