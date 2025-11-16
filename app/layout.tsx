import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BIBA - YÖM Koleji İngilizce Konuşma Asistanı",
  description: "YÖM Okulları için özel olarak geliştirilen yapay zeka destekli İngilizce konuşma asistanı. Öğrencilerinizin İngilizce konuşma becerilerini geliştirin.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
