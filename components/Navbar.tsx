"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, PhoneCall } from "lucide-react";

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-800/80 bg-[#0b0c0e]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8 h-20">
        {/* Zone 1: Brand wordmark (single line) with official logo in blue square */}
        <a
          href="#"
          className="flex items-center gap-3 text-xl sm:text-2xl font-black tracking-tight text-white uppercase whitespace-nowrap shrink-0 group"
        >
          <div className="relative h-12 w-12 sm:h-13 sm:w-13 rounded-xl overflow-hidden bg-[#19488a] shadow-lg shadow-blue-950/60 group-hover:scale-105 transition-transform shrink-0 border border-blue-400/40 p-1.5 flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src="/images/logo_iron_boxe2.png"
                alt="Logo A.S.D. Iron Boxe Pomigliano"
                fill
                sizes="56px"
                priority
                className="object-contain"
              />
            </div>
          </div>
          <span className="flex items-center gap-1.5 font-black tracking-wider">
            IRON <span className="text-[#3b82f6]">BOXE</span>
          </span>
        </a>

        {/* Zone 2: 5 concise single-line nav links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-zinc-300">
          <a
            href="#maestro"
            className="hover:text-blue-400 transition-colors whitespace-nowrap shrink-0"
          >
            Chi Siamo
          </a>
          <a
            href="#corsi"
            className="hover:text-blue-400 transition-colors whitespace-nowrap shrink-0"
          >
            Corsi
          </a>
          <a
            href="#quiz"
            className="hover:text-blue-400 transition-colors whitespace-nowrap shrink-0"
          >
            Trova il Tuo Corso
          </a>
          <a
            href="#orari"
            className="hover:text-blue-400 transition-colors whitespace-nowrap shrink-0"
          >
            Orari
          </a>
          <a
            href="#struttura"
            className="hover:text-blue-400 transition-colors whitespace-nowrap shrink-0"
          >
            La Palestra
          </a>
          <a
            href="#contatti"
            className="hover:text-blue-400 transition-colors whitespace-nowrap shrink-0"
          >
            Contatti
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden sm:flex items-center gap-4 shrink-0">
          <a
            href="tel:+393384800606"
            className="hidden xl:flex items-center gap-1.5 text-xs text-zinc-400 hover:text-zinc-200 transition-colors"
          >
            <PhoneCall className="h-3.5 w-3.5 text-blue-500" />
            <span className="tabular-nums font-semibold">+39 338 480 0606</span>
          </a>
          <button
            type="button"
            onClick={onOpenBooking}
            className="rounded-md bg-[#19488a] px-5 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-md shadow-blue-900/30 hover:bg-[#205bb0] active:scale-95 transition-all whitespace-nowrap shrink-0 cursor-pointer"
          >
            Info &amp; Iscrizioni
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 sm:hidden">
          <button
            type="button"
            onClick={onOpenBooking}
            className="rounded bg-[#19488a] px-3 py-1.5 text-xs font-bold uppercase text-white hover:bg-[#205bb0] transition-colors cursor-pointer"
          >
            Info
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
              className="py-1 hover:text-blue-400 transition-colors"
            >
              Chi Siamo &amp; Maestro
            </a>
            <a
              href="#corsi"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-blue-400 transition-colors"
            >
              Tutti i Corsi
            </a>
            <a
              href="#quiz"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-blue-400 transition-colors"
            >
              Trova il Tuo Corso
            </a>
            <a
              href="#orari"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-blue-400 transition-colors"
            >
              Orari Settimanali
            </a>
            <a
              href="#struttura"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-blue-400 transition-colors"
            >
              La Palestra &amp; Ring
            </a>
            <a
              href="#contatti"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-blue-400 transition-colors"
            >
              Dove Siamo &amp; Recapiti
            </a>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full rounded bg-[#19488a] py-3 text-center text-xs font-bold uppercase tracking-wider text-white hover:bg-[#205bb0] transition-colors cursor-pointer"
              >
                Richiedi Info &amp; Iscrizioni
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
