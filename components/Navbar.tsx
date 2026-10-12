"use client";

import { useState } from "react";
import { Dumbbell, Menu, X, PhoneCall } from "lucide-react";

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-800/80 bg-[#0b0c0e]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8 h-20">
        {/* Zone 1: Brand wordmark (single line) */}
        <a
          href="#"
          className="flex items-center gap-2.5 text-xl sm:text-2xl font-black tracking-tight text-white uppercase whitespace-nowrap shrink-0 group"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded bg-red-600 text-white shadow-lg shadow-red-900/30 group-hover:bg-red-500 transition-colors">
            <Dumbbell className="h-5 w-5" />
          </span>
          <span className="flex items-center gap-1.5 font-black tracking-wider">
            IRON <span className="text-red-500">BOXE</span>
          </span>
        </a>

        {/* Zone 2: 5 concise single-line nav links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-zinc-300">
          <a
            href="#maestro"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Chi Siamo
          </a>
          <a
            href="#corsi"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Corsi
          </a>
          <a
            href="#quiz"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Trova il Tuo Corso
          </a>
          <a
            href="#orari"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Orari
          </a>
          <a
            href="#struttura"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            La Palestra
          </a>
          <a
            href="#contatti"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Contatti
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden sm:flex items-center gap-4 shrink-0">
          <a
            href="tel:+393330000000"
            className="hidden xl:flex items-center gap-1.5 text-xs text-zinc-400 hover:text-zinc-200 transition-colors"
          >
            <PhoneCall className="h-3.5 w-3.5 text-red-500" />
            <span className="tabular-nums">Pomigliano d&apos;Arco</span>
          </a>
          <button
            onClick={onOpenBooking}
            className="rounded-md bg-red-600 px-5 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-md shadow-red-600/20 hover:bg-red-500 active:scale-95 transition-all whitespace-nowrap shrink-0 cursor-pointer"
          >
            Prova Gratuita
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 sm:hidden">
          <button
            onClick={onOpenBooking}
            className="rounded bg-red-600 px-3 py-1.5 text-xs font-bold uppercase text-white hover:bg-red-500 transition-colors"
          >
            Prova
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-400 hover:text-white transition-colors"
            aria-label="Apri menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-zinc-800 bg-[#0e0f12] px-6 py-5">
          <div className="flex flex-col gap-4 text-sm font-medium text-zinc-300">
            <a
              href="#maestro"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-red-400 transition-colors"
            >
              Chi Siamo & Maestro
            </a>
            <a
              href="#corsi"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-red-400 transition-colors"
            >
              Tutti i Corsi
            </a>
            <a
              href="#quiz"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-red-400 transition-colors"
            >
              Trova il Tuo Corso
            </a>
            <a
              href="#orari"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-red-400 transition-colors"
            >
              Orari Settimanali
            </a>
            <a
              href="#struttura"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-red-400 transition-colors"
            >
              La Palestra & Ring
            </a>
            <a
              href="#contatti"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-red-400 transition-colors"
            >
              Dove Siamo & Recapiti
            </a>
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full rounded bg-red-600 py-3 text-center text-xs font-bold uppercase tracking-wider text-white hover:bg-red-500 transition-colors"
              >
                Prenota la Tua Prova Gratuita
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
