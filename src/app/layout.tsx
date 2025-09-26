import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import SiteInfoRibbon from "@/components/SiteInfoRibbon";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-jp",
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "匿名で作品を公開しています。デジタルの余白を紡ぎながら、静かに制作活動を続けています。",
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${inter.variable} ${notoSansJP.variable} font-sans antialiased`}>
        {children}
        <SiteInfoRibbon />
      </body>
    </html>
  );
}
