import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EllaYoga — Studio de Yoga à Tel Aviv",
  description: "EllaYoga, studio de yoga à Tel Aviv. Cours de Hatha, Vinyasa, Yin Yoga, Ashtanga et plus encore. Deux studios : Port de Tel Aviv et Tour Azrieli Sarona.",
  keywords: "yoga tel aviv, cours yoga, hatha yoga, vinyasa, yin yoga, studio yoga israël",
  openGraph: {
    title: "EllaYoga — Studio de Yoga à Tel Aviv",
    description: "Deux studios au cœur de Tel Aviv. Cours pour tous les niveaux, instructeurs certifiés.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
