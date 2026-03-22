import type { Metadata, Viewport } from "next";
import localFont from 'next/font/local';
import "./globals.css";

const soriaFont = localFont({
  src: "../public/soria-font.ttf",
  variable: "--font-soria",
});

const vercettiFont = localFont({
  src: "../public/Vercetti-Regular.woff",
  variable: "--font-vercetti",
});

export const metadata: Metadata = {
  title: "Yuan Yoshimi ✌️",
  description: "A Computer Science student at UC Irvine specializing in Architecture & Embedded Systems.",
  keywords: "Yuan Yoshimi, Computer Science, UC Irvine, Embedded Systems, Software Engineer, React, Python, C++, Robotics, Portfolio",
  authors: [{ name: "Yuan Yoshimi" }],
  creator: "Yuan Yoshimi",
  publisher: "Yuan Yoshimi",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Yuan Yoshimi - CS Student & Software Engineer",
    description: "A Computer Science student at UC Irvine specializing in Architecture & Embedded Systems.",
    url: "https://yuanyoshimi.github.io",
    siteName: "Yuan Yoshimi's Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yuan Yoshimi - CS Student & Software Engineer",
    description: "A Computer Science student at UC Irvine specializing in Architecture & Embedded Systems.",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overscroll-y-none">
      <body
        className={`${soriaFont.variable} ${vercettiFont.variable} font-sans antialiased`}
      >
        {children}
      </body>
      {/* Add your Google Analytics ID here if you have one */}
    </html>
  );
}
