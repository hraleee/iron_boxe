"use client";

import { useState } from "react";
import { Dumbbell, Shield, Zap, UserCheck, ArrowRight, CheckCircle2 } from "lucide-react";

interface CourseFinderProps {
  onSelectCourseForBooking: (courseName: string) => void;
}

export default function CourseFinder({ onSelectCourseForBooking }: CourseFinderProps) {
  const [goal, setGoal] = useState<string>("fitness");
  const [level, setLevel] = useState<string>("beginner");
  const [availability, setAvailability] = useState<string>("evening");

  const getRecommendation = () => {
    if (goal === "kids") {
      return {
        title: "Settore Giovanile (Kids & Junior)",
        reason:
          "Il percorso perfetto per imparare coordinazione, rispetto delle regole, autostima e disciplina sportiva in totale sicurezza.",
        times: "Pomeriggio: 16:30 – 18:00 (Lunedì, Mercoledì, Venerdì)",
        icon: Shield,
        accent: "text-amber-500",
      };
    }
    if (goal === "fight" || level === "advanced") {
      return {
        title: "Pugilato Agonistico (AOB)",
        reason:
          "Perfezionamento tecnico su ring regolamentare, sparring con protezioni complete e preparazione fisica avanzata per i match.",
        times: "Pomeriggio/Sera: 18:30 – 21:00 + Rifinitura Sabato 10:00 – 13:00",
        icon: Zap,
        accent: "text-blue-400",
      };
    }
    if (goal === "personal") {
      return {
        title: "Lezioni Individuali One-to-One",
        reason:
          "Attenzione totale del Maestro Claudio Cricrì per correggere postura e colpi o per chi ha orari lavorativi particolari.",
        times: "Orari concordati su misura dal Lunedì al Sabato",
        icon: UserCheck,
        accent: "text-sky-400",
      };
    }
    // Default fitness/stress
    return {
      title: "Gym Boxe / Pugilato Amatoriale",
      reason:
        "Lavoro completo al sacco, combinazioni ai colpitori, corda e condizionamento metabolico senza colpi duri sul viso. Brucia calorie e scarica le tensioni.",
      times:
        availability === "morning"
          ? "Mattina: 10:30 – 12:30"
          : availability === "afternoon"
          ? "Pomeriggio: 16:00 – 18:00"
          : "Sera: 19:00 – 21:30",
      icon: Dumbbell,
      accent: "text-blue-400",
    };
  };

  const rec = getRecommendation();
  const Icon = rec.icon;

  return (
    <section id="quiz" className="py-20 bg-[#0e1013] border-b border-zinc-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
            <span>Guida Personalizzata</span>
            <span aria-hidden="true" className="text-zinc-700">·</span>
            <span>Trova la Tua Disciplina</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
            Non sai quale corso scegliere?
          </h2>
          <p className="mt-3 text-zinc-400 text-sm">
            Rispondi a 3 domande rapide: ti indichiamo subito il programma più adatto al tuo obiettivo e alla tua disponibilità.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Questions Container */}
          <div className="lg:col-span-7 bg-zinc-900/80 rounded-xl border border-zinc-800 p-6 sm:p-8 space-y-6">
            {/* Question 1: Obiettivo */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-300 block mb-3">
                1. Qual è il tuo obiettivo principale?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  { id: "fitness", label: "Forma fisica & dimagrimento" },
                  { id: "stress", label: "Scaricare stress & imparare la boxe" },
                  { id: "fight", label: "Combattere sul ring (Agonismo)" },
                  { id: "kids", label: "Corso per mio figlio (6-15 anni)" },
                  { id: "personal", label: "Lezioni private su misura" },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setGoal(opt.id)}
                    className={`text-left p-3 rounded-lg border text-xs font-semibold transition-all cursor-pointer ${
                      goal === opt.id
                        ? "border-blue-500 bg-blue-950/40 text-white shadow-sm"
                        : "border-zinc-800 bg-zinc-950/60 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Question 2: Livello */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-300 block mb-3">
                2. Hai già esperienza nel pugilato?
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { id: "beginner", label: "Principiante (da zero)" },
                  { id: "intermediate", label: "Ho fatto altri sport" },
                  { id: "advanced", label: "Esperto / Pugile" },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setLevel(opt.id)}
                    className={`text-center p-3 rounded-lg border text-xs font-semibold transition-all cursor-pointer ${
                      level === opt.id
                        ? "border-blue-500 bg-blue-950/40 text-white shadow-sm"
                        : "border-zinc-800 bg-zinc-950/60 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Question 3: Fascia Oraria */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-300 block mb-3">
                3. Quale fascia oraria preferisci?
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { id: "morning", label: "Mattina (10:00 - 13:00)" },
                  { id: "afternoon", label: "Pomeriggio (16:00 - 18:30)" },
                  { id: "evening", label: "Sera (18:30 - 22:00)" },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setAvailability(opt.id)}
                    className={`text-center p-3 rounded-lg border text-xs font-semibold transition-all cursor-pointer ${
                      availability === opt.id
                        ? "border-blue-500 bg-blue-950/40 text-white shadow-sm"
                        : "border-zinc-800 bg-zinc-950/60 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Result Card */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-zinc-950 rounded-xl border border-blue-900/40 p-6 sm:p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-400 mb-4">
                <CheckCircle2 className="h-4 w-4" />
                <span>Corso Consigliato per Te</span>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800">
                  <Icon className={`h-6 w-6 ${rec.accent}`} />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                    {rec.title}
                  </h3>
                  <span className="text-xs text-zinc-400">Palestra Iron Boxe Pomigliano</span>
                </div>
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                {rec.reason}
              </p>

              <div className="p-4 rounded-lg bg-zinc-900/90 border border-zinc-800 text-xs mb-6">
                <span className="text-zinc-500 block uppercase tracking-wider font-semibold">Orari consigliati</span>
                <span className="text-white font-bold text-sm mt-1 block">{rec.times}</span>
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-800">
              <button
                onClick={() => onSelectCourseForBooking(rec.title)}
                className="w-full flex items-center justify-center gap-2 rounded-md bg-[#19488a] py-3.5 px-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-950/60 hover:bg-[#205bb0] transition-colors cursor-pointer"
              >
                <span>Prenota Prova Gratuita</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <p className="text-center text-[11px] text-zinc-500 mt-2">
                Nessun vincolo · Ti basta una maglietta e scarpe da ginnastica
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
