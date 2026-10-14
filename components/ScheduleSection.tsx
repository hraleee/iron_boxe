"use client";

import { Clock, AlertCircle } from "lucide-react";

export default function ScheduleSection() {
  const days = [
    {
      name: "Lunedì",
      hours: "10:00 – 22:00",
      sessions: [
        { time: "10:00 - 13:00", title: "Open Gym & Individuali", tag: "Tutti" },
        { time: "16:30 - 18:00", title: "Settore Giovanile (Kids)", tag: "Junior" },
        { time: "18:30 - 20:30", title: "Pugilato Agonistico (AOB)", tag: "Agonisti" },
        { time: "19:30 - 22:00", title: "Boxe & Amatori Serale", tag: "Amatori" },
      ],
    },
    {
      name: "Martedì",
      hours: "10:00 – 22:00",
      sessions: [
        { time: "10:00 - 13:00", title: "Preparazione Atletica & Sacchi", tag: "Tutti" },
        { time: "17:00 - 19:00", title: "Boxe Pomeridiana", tag: "Amatori" },
        { time: "19:00 - 20:30", title: "Circuito Funzionale Potenziamento", tag: "Cardio" },
        { time: "20:30 - 22:00", title: "Tecnica Pugilistica Avanzata", tag: "Tecnica" },
      ],
    },
    {
      name: "Mercoledì",
      hours: "10:00 – 22:00",
      sessions: [
        { time: "10:00 - 13:00", title: "Open Gym & Individuali", tag: "Tutti" },
        { time: "16:30 - 18:00", title: "Settore Giovanile (Kids)", tag: "Junior" },
        { time: "18:30 - 20:30", title: "Pugilato Agonistico & Sparring", tag: "Agonisti" },
        { time: "19:30 - 22:00", title: "Boxe & Amatori Serale", tag: "Amatori" },
      ],
    },
    {
      name: "Giovedì",
      hours: "10:00 – 22:00",
      sessions: [
        { time: "10:00 - 13:00", title: "Preparazione Atletica & Sacchi", tag: "Tutti" },
        { time: "17:00 - 19:00", title: "Boxe Pomeridiana", tag: "Amatori" },
        { time: "19:00 - 20:30", title: "Circuito Funzionale & Core", tag: "Cardio" },
        { time: "20:30 - 22:00", title: "Focus Mitts & Pad Work", tag: "Tecnica" },
      ],
    },
    {
      name: "Venerdì",
      hours: "10:00 – 22:00",
      sessions: [
        { time: "10:00 - 13:00", title: "Open Gym & Individuali", tag: "Tutti" },
        { time: "16:30 - 18:00", title: "Settore Giovanile (Kids)", tag: "Junior" },
        { time: "18:30 - 20:30", title: "Pugilato Agonistico", tag: "Agonisti" },
        { time: "19:30 - 22:00", title: "Boxe & Sfogo Fine Settimana", tag: "Amatori" },
      ],
    },
    {
      name: "Sabato",
      hours: "10:00 – 17:00",
      sessions: [
        { time: "10:00 - 13:00", title: "Sparring Day & Rifinitura Match", tag: "Ring" },
        { time: "14:00 - 17:00", title: "Open Gym, Ripasso Tecnico & Sacchi", tag: "Tutti" },
      ],
    },
  ];

  return (
    <section id="orari" className="py-20 lg:py-28 bg-[#0b0c0e] border-b border-zinc-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
              <span>Orari di Apertura</span>
              <span aria-hidden="true" className="text-zinc-700">·</span>
              <span>Lunedì — Sabato</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
              Tabella Orari &amp; Sessioni
            </h2>
          </div>
          <div className="flex items-center gap-3 text-xs text-zinc-400 bg-zinc-900 px-4 py-2.5 rounded-lg border border-zinc-800">
            <Clock className="h-4 w-4 text-blue-400 shrink-0" />
            <span>Aperti con orario continuato 10:00 - 22:00 (Sabato fino alle 17:00)</span>
          </div>
        </div>

        {/* Weekly Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {days.map((day) => (
            <div
              key={day.name}
              className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-5 hover:border-zinc-700 transition-colors"
            >
              <div className="flex items-center justify-between pb-3 border-b border-zinc-800 mb-4">
                <span className="font-black uppercase text-base text-white tracking-wide">
                  {day.name}
                </span>
                <span className="text-xs font-semibold text-blue-400 tabular-nums">
                  {day.hours}
                </span>
              </div>

              <div className="space-y-3">
                {day.sessions.map((s, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-zinc-950/80 border border-zinc-800/80 flex items-start justify-between gap-2 text-xs"
                  >
                    <div>
                      <span className="text-zinc-400 font-mono text-[11px] block tabular-nums">
                        {s.time}
                      </span>
                      <span className="text-zinc-100 font-medium block mt-0.5">
                        {s.title}
                      </span>
                    </div>
                    <span className="text-[10px] uppercase font-bold text-zinc-500 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800 shrink-0">
                      {s.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-3 p-4 rounded-lg bg-zinc-900 border border-zinc-800 text-xs text-zinc-400">
          <AlertCircle className="h-4 w-4 text-amber-500 shrink-0" />
          <span>
            <strong>Domenica: Chiuso.</strong> Le lezioni individuali o speciali sessioni di rifinitura pre-gara con il Maestro Claudio Cricrì possono essere concordate su orari personalizzati.
          </span>
        </div>
      </div>
    </section>
  );
}
