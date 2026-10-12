"use client";

import Image from "next/image";
import { CheckCircle2, Award, HeartHandshake, Target } from "lucide-react";

export default function AboutMaestro() {
  return (
    <section id="maestro" className="py-20 lg:py-28 bg-[#0e1013] border-b border-zinc-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Photo column */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-zinc-700/80 shadow-2xl">
              <Image
                src="/images/iron_boxe_main_maestro_claudio.jpg"
                alt="Maestro Claudio Cricrì durante un match sul ring di Iron Boxe"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-bold text-lg">Maestro Claudio Cricrì</p>
                <p className="text-zinc-300 text-xs">Maestro Tecnico A.S.D. Iron Boxe</p>
              </div>
            </div>

            {/* Accent badge under the image */}
            <div className="mt-4 flex items-center justify-between p-4 rounded-lg bg-zinc-900 border border-zinc-800 text-xs">
              <div className="flex items-center gap-2 text-zinc-300">
                <Award className="h-4 w-4 text-amber-500 shrink-0" />
                <span>Pugilato Federale &amp; Preparazione Tecnica</span>
              </div>
              <span className="font-bold text-red-500 uppercase tracking-wider">Pomigliano d&apos;Arco</span>
            </div>
          </div>

          {/* Text column */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-red-500 mb-3">
              <span>Identità &amp; Valori</span>
              <span aria-hidden="true" className="text-zinc-700">·</span>
              <span>La Vera Nobile Arte</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white leading-tight">
              Una palestra autentica. <br className="hidden sm:inline" />
              La guida del Maestro <span className="text-red-500">Claudio Cricrì</span>.
            </h2>

            <p className="mt-6 text-zinc-300 text-base sm:text-lg leading-relaxed">
              Fondata con il sogno di portare il pugilato di alto livello a Pomigliano d&apos;Arco, <strong className="text-white">A.S.D. Iron Boxe</strong> è la casa di chi cerca il vero sport da combattimento: niente finzioni commerciali, ma tecnica pura, preparazione fisica rigorosa e spirito di gruppo.
            </p>

            <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
              Il Maestro e proprietario <strong className="text-zinc-200">Claudio Cricrì</strong> trasmette ogni giorno i valori cardinali della disciplina: guardia solida, footwork essenziale, gestione del fiato, lealtà e rispetto. Ogni atleta — dal ragazzo che indossa i primi guantoni al pugile che si prepara al match — riceve attenzione costante, consigli precisi e correzioni continue sul ring e ai sacchi.
            </p>

            {/* Key Pillars */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-zinc-900/90 border border-zinc-800">
                <div className="flex items-center gap-2 text-red-500 font-bold text-sm">
                  <Target className="h-4 w-4" />
                  <span>Tecnica Prima di Tutto</span>
                </div>
                <p className="mt-2 text-xs text-zinc-400 leading-normal">
                  Imparare a muoversi, schivare e colpire in modo pulito e sicuro, prevenendo infortuni e massimizzando l&apos;efficacia.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-zinc-900/90 border border-zinc-800">
                <div className="flex items-center gap-2 text-amber-500 font-bold text-sm">
                  <HeartHandshake className="h-4 w-4" />
                  <span>Ambiente Sano e Rispettoso</span>
                </div>
                <p className="mt-2 text-xs text-zinc-400 leading-normal">
                  In palestra siamo una squadra. Non c&apos;è spazio per l&apos;aggressività fine a se stessa, ma per il supporto reciproco e la lealtà.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-zinc-900/90 border border-zinc-800">
                <div className="flex items-center gap-2 text-zinc-200 font-bold text-sm">
                  <Award className="h-4 w-4" />
                  <span>Attrezzatura Professionale</span>
                </div>
                <p className="mt-2 text-xs text-zinc-400 leading-normal">
                  Ring da combattimento, fila di sacchi pesanti in cuoio, speed bag, corda da salto e zona functional training.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-zinc-900/90 border border-zinc-800">
                <div className="flex items-center gap-2 text-red-500 font-bold text-sm">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Per Ogni Livello ed Età</span>
                </div>
                <p className="mt-2 text-xs text-zinc-400 leading-normal">
                  Adatto a principianti assoluti, amatori, agonisti, donne e settore giovanile dai 6 anni in su.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
