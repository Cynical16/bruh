import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mamba Accounts",
  description: "Quality, Legal & Safe Accounts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://cdn.sellix.io/static/css/embed.css" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        {children}
        <Script src="https://cdn.sellix.io/static/js/embed.js" />
      </body>
    </html>
  );
}
