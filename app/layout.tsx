import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "A.S.D. Iron Boxe Pomigliano | Palestra di Pugilato - Maestro Claudio Cricrì",
  description:
    "Palestra di pugilato a Pomigliano d'Arco (NA). Corsi di pugilato agonistico, amatoriale, gym boxe, settore giovanile e preparazione atletica guidati dal Maestro Claudio Cricrì.",
  openGraph: {
    title: "A.S.D. Iron Boxe Pomigliano | Pugilato & Preparazione Atletica",
    description:
      "La vera nobile arte a Pomigliano d'Arco. Ring regolamentare, sacchi, corsi per tutti i livelli con il Maestro Claudio Cricrì.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="it"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#0b0c0e] text-zinc-100 selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
