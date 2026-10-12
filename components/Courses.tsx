"use client";

import { useState } from "react";
import { Dumbbell, Shield, Zap, Sparkles, UserCheck, Check, ArrowRight } from "lucide-react";

interface CoursesProps {
  onSelectCourseForBooking: (courseName: string) => void;
}

export const COURSES_DATA = [
  {
    id: "amatoriale",
    name: "Gym Boxe / Pugilato Amatoriale",
    tagline: "Forma fisica, riflessi e sfogo quotidiano senza colpi duri",
    icon: Dumbbell,
    target: "Uomini e donne dai 16 ai 65+ anni",
    intensity: "Alta (Cardio & Forza)",
    gear: "Fasce, guantoni (12-14oz), abbigliamento sportivo comodo",
    description:
      "L'allenamento ideale per chi cerca i massimi benefici del pugilato senza il timore di prendere pugni sul viso. Sessioni ritmate con lavoro ai sacchi, combinazioni ai pad, corda, addominali e mobilità. Brucia fino a 800 kcal a sessione e sviluppa coordinazione e autostima.",
    bullets: [
      "Nessun contatto duro sul viso: solo tecnica e fitness",
      "Tonificazione totale (spalle, gambe, core)",
      "Scarica lo stress mentale dopo studio o lavoro",
      "Adatto anche a chi parte da zero senza preparazione precedente",
    ],
  },
  {
    id: "agonistico",
    name: "Pugilato Agonistico (AOB)",
    tagline: "Preparazione al match ufficiale su ring federale",
    icon: Zap,
    target: "Pugili tesserati e atleti selezionati dal Maestro",
    intensity: "Massima (Gara & Sparring)",
    gear: "Guantoni da sparring, casco, paradenti su misura, conchiglia, fasce",
    description:
      "Il percorso dedicato a chi vuole salire sul ring e competere nei circuiti agonistici. Preparazione fisica meticolosa, sparring guidato, studio strategico delle traiettorie e condizionamento mentale per affrontare il match con determinazione e sicurezza.",
    bullets: [
      "Sparring a contatto regolamentato con protezioni complete",
      "Piani di condizionamento aerobico e lattico avanzato",
      "Studio tattico dell'avversario e gestione del ring",
      "Seguiti direttamente all'angolo dal Maestro Claudio Cricrì",
    ],
  },
  {
    id: "giovanile",
    name: "Settore Giovanile (Kids & Junior)",
    tagline: "Educazione motoria, disciplina e rispetto per i più giovani",
    icon: Shield,
    target: "Bambini e ragazzi dai 6 ai 15 anni",
    intensity: "Formativa & Motoria",
    gear: "Tuta ginnica, scarpe da ginnastica pulite, fasce junior",
    description:
      "Un ambiente sano e controllato dove i ragazzi imparano le basi della boxe attraverso il gioco, gli schemi motori e il rispetto reciproco. Il pugilato educa alla gestione delle emozioni, al superamento delle paure e al rispetto assoluto per i compagni.",
    bullets: [
      "Sviluppo armonico di coordinazione, postura e riflessi",
      "Regole ferree di rispetto, lealtà e correttezza",
      "Antidoto naturale al bullismo e alla timidezza",
      "Nessun contatto pericoloso: priorità assoluta alla sicurezza",
    ],
  },
  {
    id: "funzionale",
    name: "Preparazione Atletica & Circuito",
    tagline: "Potenza esplosiva, fiato e condizionamento muscolare",
    icon: Sparkles,
    target: "Tutti gli atleti della palestra",
    intensity: "Molto Alta",
    gear: "Scarpe stabili, asciugamano, borraccia",
    description:
      "Sedute specifiche per sviluppare la cilindrata aerobica e la forza esplosiva necessaria per gli sport da combattimento. Circuiti a stazioni con kettlebell, battle ropes, balzi, corpo libero e potenziamento della catena cinetica.",
    bullets: [
      "Miglioramento esponenziale del fiato e del recupero cardiaco",
      "Rafforzamento di spalle, dorsali, glutei e addome profondo",
      "Prevenzione infortuni articolari attraverso la mobilità",
      "Perfetto da abbinare alle sessioni di tecnica al sacco",
    ],
  },
  {
    id: "personal",
    name: "Lezioni Individuali (1-to-1)",
    tagline: "Sessioni private con il Maestro Claudio Cricrì",
    icon: UserCheck,
    target: "Chi cerca massima flessibilità o perfezionamento rapido",
    intensity: "Personalizzata",
    gear: "Concordato in base all'obiettivo dell'atleta",
    description:
      "Allenamenti one-to-one pensati per chi ha esigenze di orario particolari o desidera una progressione tecnica accelerata. Il Maestro cura ogni dettaglio: impostazione della guardia, spostamenti millimetrici, timing dei contrattacchi e programmi fisici su misura.",
    bullets: [
      "Attenzione 100% dedicata per l'intera durata della sessione",
      "Correzione immediata dei difetti posturali e di colpo",
      "Orari personalizzati concordati direttamente con la palestra",
      "Ideale sia per principianti assoluti che per agonisti esperti",
    ],
  },
];

export default function Courses({ onSelectCourseForBooking }: CoursesProps) {
  const [activeCourseId, setActiveCourseId] = useState("amatoriale");

  const activeCourse =
    COURSES_DATA.find((c) => c.id === activeCourseId) || COURSES_DATA[0];

  return (
    <section id="corsi" className="py-20 lg:py-28 bg-[#0b0c0e] border-b border-zinc-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
              <span>Discipline &amp; Programmi</span>
              <span aria-hidden="true" className="text-zinc-700">·</span>
              <span>Pomigliano d&apos;Arco</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
              I Corsi di <span className="text-[#3b82f6]">Iron Boxe</span>
            </h2>
          </div>
          <p className="text-zinc-400 text-sm max-w-md">
            Dalla prima volta che infili i guantoni fino ai tornei sul ring federale: scegli il percorso più adatto alle tue esigenze e ai tuoi obiettivi.
          </p>
        </div>

        {/* Course Filter / Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 p-1.5 bg-zinc-900/90 rounded-xl border border-zinc-800 mb-8">
          {COURSES_DATA.map((course) => {
            const Icon = course.icon;
            const isSelected = course.id === activeCourseId;
            return (
              <button
                key={course.id}
                onClick={() => setActiveCourseId(course.id)}
                className={`flex flex-col sm:flex-row items-center justify-center gap-2 py-3 px-3 rounded-lg text-xs font-bold transition-all text-center cursor-pointer ${
                  isSelected
                    ? "bg-[#19488a] text-white shadow-md shadow-blue-950/60"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-800/60"
                }`}
              >
                <Icon className="h-4 w-4 shrink-0" />
                <span className="truncate">{course.name.split("/")[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Featured Course Detail Card */}
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-6 sm:p-8 lg:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-400 mb-2">
                <span>{activeCourse.intensity}</span>
                <span aria-hidden="true" className="text-zinc-600">·</span>
                <span>{activeCourse.target}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                {activeCourse.name}
              </h3>
              <p className="mt-2 text-sm text-sky-400/90 font-medium">
                {activeCourse.tagline}
              </p>

              <p className="mt-5 text-zinc-300 text-sm sm:text-base leading-relaxed">
                {activeCourse.description}
              </p>

              <div className="mt-6 space-y-2.5">
                {activeCourse.bullets.map((b, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                    <Check className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4 pt-4 border-t border-zinc-800">
                <button
                  onClick={() => onSelectCourseForBooking(activeCourse.name)}
                  className="inline-flex items-center gap-2 rounded-md bg-[#19488a] px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-950/50 hover:bg-[#205bb0] transition-colors cursor-pointer"
                >
                  <span>Prenota Prova per {activeCourse.name.split("/")[0]}</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Quick Fact Box for the Course */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="rounded-lg bg-zinc-950 p-6 border border-zinc-800">
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-4">
                  Dettagli &amp; Equipaggiamento
                </h4>
                <div className="space-y-4 text-xs">
                  <div>
                    <span className="text-zinc-500 block">A chi è rivolto</span>
                    <span className="text-zinc-200 font-semibold">{activeCourse.target}</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 block">Intensità stimata</span>
                    <span className="text-zinc-200 font-semibold">{activeCourse.intensity}</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 block">Attrezzatura consigliata</span>
                    <span className="text-zinc-200">{activeCourse.gear}</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 block">Per la prima lezione di prova</span>
                    <span className="text-emerald-400 font-medium">
                      Ti bastano scarpe pulite, maglietta e pantaloncini. I guantoni per la prova te li prestiamo noi!
                    </span>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-blue-950/20 p-5 border border-blue-900/30">
                <p className="text-xs text-blue-300 font-medium leading-relaxed">
                  💡 <strong>Hai dubbi sul corso adatto a te?</strong> Prova il nostro calcolatore interattivo qui sotto o parlane direttamente con il Maestro Claudio Cricrì in palestra.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
