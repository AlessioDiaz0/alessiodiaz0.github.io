import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const default_font = Inter({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  metadataBase: new URL("https://alessiodiaz0.github.io"),
  title: "Alessio Diaz Cama",
  description: "Portfolio | Next.js",
  openGraph: {
    title: "Alessio Diaz Cama",
    description: "Portfolio | Next.js",
    images: [
      {
        url: "/vercel-preview.png",
        width: 1200,
        height: 630,
        alt: "Vercel Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alessio Diaz Cama",
    description: "Portfolio | Next.js",
    images: ["/vercel-preview.png"],
  },
  icons: {
    icon: "/vercel.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${default_font.className} antialiased bg-[#0d0d1f]`}>
        {children}
      </body>
    </html>
  );
}
