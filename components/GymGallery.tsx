"use client";

import Image from "next/image";
import { Shield, Sparkles, Trophy, Flame } from "lucide-react";

export default function GymGallery() {
  const highlights = [
    {
      title: "Il Ring Regolamentare",
      subtitle: "Dimensioni olimpioniche per sparring, simulazioni match e combattimenti ufficiali",
      image: "/images/iron_boxe_hero_1791833588280.jpg",
      icon: Trophy,
      span: "lg:col-span-8",
    },
    {
      title: "Area Sacchi in Cuoio",
      subtitle: "Heavy bags sospesi, speed ball e stazioni per lavoro di potenza e combinazioni",
      image: "/images/iron_boxe_heavy_bags_1791833608611.jpg",
      icon: Flame,
      span: "lg:col-span-4",
    },
    {
      title: "Sparring & Pad Work Guidato",
      subtitle: "Lavoro con i colpitori per affinare tempismo, reattività e schivate",
      image: "/images/iron_boxe_ring_action_1791833599391.jpg",
      icon: Sparkles,
      span: "lg:col-span-6",
    },
    {
      title: "Insegnamento Diretto del Maestro",
      subtitle: "Attenzione costante all'impostazione tecnica e alla sicurezza di ogni atleta",
      image: "/images/iron_boxe_coach_technique_1791833619956.jpg",
      icon: Shield,
      span: "lg:col-span-6",
    },
  ];

  return (
    <section id="struttura" className="py-20 lg:py-28 bg-[#0e1013] border-b border-zinc-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-red-500 mb-2">
              <span>La Struttura</span>
              <span aria-hidden="true" className="text-zinc-700">·</span>
              <span>Via Tramonto, Pomigliano d&apos;Arco</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
              Spazio Autentico per Veri Boxer
            </h2>
          </div>
          <p className="text-zinc-400 text-sm max-w-md">
            Un ambiente dove si respira la vera polvere e la passione del ring. Niente distrazioni: solo attrezzi di qualità, compagni di squadra leali e tecnica pura.
          </p>
        </div>

        {/* Gallery Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`${item.span} relative group overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:min-h-[340px]`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 contrast-105 brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-400 mb-1.5">
                    <Icon className="h-4 w-4" />
                    <span>Iron Boxe Gym</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-zinc-300 max-w-xl">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
