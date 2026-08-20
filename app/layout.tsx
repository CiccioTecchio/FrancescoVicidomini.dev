import type { Metadata, Viewport } from "next";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "../src/index.scss";

const siteUrl = "https://francescovicidomini.dev";
const title = "Francesco Vicidomini | Front-End Developer";
const description =
  "Portfolio and CV of Francesco Vicidomini, Front-End Developer based in Salerno specialized in Angular, RxJS, TypeScript, UI/UX, performance, and modern web architectures.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  authors: [{ name: "Francesco Vicidomini" }],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title,
    description,
    type: "profile",
    url: "/",
    siteName: "Francesco Vicidomini",
    locale: "en_US",
    images: [
      { url: "/Propic-CV.jpg", alt: "Francesco Vicidomini profile photo" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/Propic-CV.jpg"],
  },
};

export const viewport: Viewport = { themeColor: "#0f172a" };

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
