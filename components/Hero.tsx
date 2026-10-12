"use client";

import Image from "next/image";
import { ArrowRight, Flame, Shield, Trophy, Clock } from "lucide-react";

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#0b0c0e]">
      {/* Background Hero Image with Measured Scrim */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/iron_boxe_hero_1791833588280.jpg"
          alt="Palestra di Pugilato Iron Boxe Pomigliano d'Arco"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-75 contrast-110"
        />
        {/* Scrim: deep obsidian bottom & sides */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c0e] via-[#0b0c0e]/80 to-[#0b0c0e]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0c0e] via-[#0b0c0e]/60 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-24 md:pt-32 md:pb-36">
        <div className="max-w-3xl">
          {/* Natural kicker metadata (no pills, anti-slop) */}
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-blue-400 mb-4">
            <span>A.S.D. Iron Boxe</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span>Pomigliano d&apos;Arco</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span>Maestro Claudio Cricrì</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight sm:leading-none text-balance">
            La Nobile Arte nel cuore di <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">Pomigliano</span>.
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-zinc-300 font-normal leading-relaxed max-w-2xl">
            Disciplina, tecnica, sudore e rispetto. Che tu voglia salire sul ring per combattere, scaricare le tensioni quotidiane con la Gym Boxe o far crescere tuo figlio attraverso i valori dello sport, qui trovi la vera boxe.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center gap-2.5 rounded-md bg-[#19488a] px-7 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-xl shadow-blue-950/50 hover:bg-[#205bb0] active:scale-98 transition-all cursor-pointer whitespace-nowrap"
            >
              <span>Prenota una Lezione di Prova</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href="#corsi"
              className="inline-flex items-center justify-center rounded-md border border-zinc-700 bg-zinc-900/80 px-6 py-4 text-sm font-semibold uppercase tracking-wider text-zinc-200 hover:bg-zinc-800 hover:border-blue-500 transition-colors whitespace-nowrap"
            >
              Scopri Tutti i Corsi
            </a>
          </div>
        </div>
      </div>

      {/* Trust & Facility Strip */}
      <div className="relative z-10 border-t border-zinc-800/80 bg-zinc-950/90 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded bg-blue-600/10 text-blue-400 shrink-0">
                <Trophy className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-bold uppercase text-white">Ring Regolamentare</p>
                <p className="text-xs text-zinc-400 mt-0.5">Spazio olimpionico per sparring &amp; preparazione</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded bg-blue-600/10 text-blue-400 shrink-0">
                <Flame className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-bold uppercase text-white">Agonisti &amp; Amatori</p>
                <p className="text-xs text-zinc-400 mt-0.5">Percorsi mirati per ogni livello ed età</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded bg-blue-600/10 text-blue-400 shrink-0">
                <Shield className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-bold uppercase text-white">Settore Giovanile</p>
                <p className="text-xs text-zinc-400 mt-0.5">Educazione sportiva e disciplina dai 6 anni</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded bg-blue-600/10 text-blue-400 shrink-0">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-bold uppercase text-white">Lunedì — Sabato</p>
                <p className="text-xs text-zinc-400 mt-0.5">Fasce mattutine, pomeridiane e serali</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
