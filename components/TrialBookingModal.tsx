"use client";

import { useState } from "react";
import { X, CheckCircle2, Sparkles } from "lucide-react";

interface TrialBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCourse?: string;
}

export default function TrialBookingModal({
  isOpen,
  onClose,
  initialCourse = "Boxe / Pugilato Amatoriale",
}: TrialBookingModalProps) {
  const [course, setCourse] = useState(initialCourse);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [day, setDay] = useState("Lunedì");
  const [slot, setSlot] = useState("Sera (19:30 - 21:00)");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName("");
    setPhone("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg rounded-2xl border border-zinc-800 bg-[#0f1115] p-6 sm:p-8 shadow-2xl text-left overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
          aria-label="Chiudi finestra"
        >
          <X className="h-5 w-5" />
        </button>

        {submitted ? (
          <div className="py-6 text-center space-y-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600/20 text-blue-400 mx-auto">
              <CheckCircle2 className="h-8 w-8" />
            </div>

            <h3 className="text-2xl font-black uppercase tracking-tight text-white">
              Richiesta Prova Inviata!
            </h3>

            <p className="text-zinc-300 text-sm max-w-sm mx-auto">
              Ottimo, <strong>{name}</strong>! Il tuo posto per la prova di{" "}
              <strong className="text-white">{course}</strong> è stato registrato per{" "}
              <strong>{day} ({slot})</strong>.
            </p>

            <div className="rounded-xl bg-zinc-950 p-4 border border-zinc-800 text-left text-xs space-y-2 mt-4">
              <p className="font-bold uppercase text-zinc-400 tracking-wider">Cosa portare alla prova:</p>
              <ul className="text-zinc-300 space-y-1 list-disc list-inside">
                <li>Tuta o pantaloncini e maglietta comoda</li>
                <li>Scarpe da ginnastica pulite da cambiare all&apos;ingresso</li>
                <li>Asciugamano e borraccia</li>
                <li><strong className="text-blue-400">Guantoni e fasce:</strong> te li prestiamo noi per la prima lezione!</li>
              </ul>
              <p className="pt-2 text-zinc-500 text-[11px] border-t border-zinc-900">
                📍 Iron Boxe · Via Tramonto, 3 – Pomigliano d&apos;Arco
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/393384800606?text=Ciao%20Maestro%20Claudio,%20ho%20prenotato%20la%20prova%20per%20${encodeURIComponent(
                  course
                )}%20per%20${encodeURIComponent(name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 rounded-md bg-emerald-600 py-3 px-4 text-xs font-bold uppercase tracking-wider text-white hover:bg-emerald-500 transition-colors"
              >
                <span>Conferma Rapida WhatsApp</span>
              </a>
              <button
                onClick={handleReset}
                className="flex-1 rounded-md bg-zinc-800 py-3 px-4 text-xs font-bold uppercase tracking-wider text-zinc-300 hover:text-white hover:bg-zinc-700 transition-colors"
              >
                Chiudi
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-400 mb-2">
              <Sparkles className="h-4 w-4" />
              <span>100% Gratuita &amp; Senza Impegno</span>
            </div>
            <h3 className="text-2xl font-black uppercase tracking-tight text-white">
              Prenota la Tua Lezione di Prova
            </h3>
            <p className="mt-1 text-xs text-zinc-400">
              Vieni a conoscere il Maestro Claudio Cricrì e l&apos;energia di Iron Boxe a Pomigliano d&apos;Arco.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4 text-xs">
              <div>
                <label className="block font-bold uppercase tracking-wider text-zinc-300 mb-1">
                  Corso di Interesse *
                </label>
                <select
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3.5 py-2.5 text-white focus:border-blue-500 focus:outline-none"
                >
                  <option value="Boxe / Pugilato Amatoriale">Boxe / Pugilato Amatoriale</option>
                  <option value="Pugilato Agonistico (AOB)">Pugilato Agonistico (AOB)</option>
                  <option value="Settore Giovanile (Kids & Junior)">Settore Giovanile (Kids & Junior 6-15 anni)</option>
                  <option value="Preparazione Atletica & Circuito">Preparazione Atletica & Circuito</option>
                  <option value="Lezioni Individuali (1-to-1)">Lezioni Individuali (1-to-1 con Maestro Cricrì)</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold uppercase tracking-wider text-zinc-300 mb-1">
                    Giorno Preferito *
                  </label>
                  <select
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                    className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2.5 text-white focus:border-blue-500 focus:outline-none"
                  >
                    <option value="Lunedì">Lunedì</option>
                    <option value="Martedì">Martedì</option>
                    <option value="Mercoledì">Mercoledì</option>
                    <option value="Giovedì">Giovedì</option>
                    <option value="Venerdì">Venerdì</option>
                    <option value="Sabato">Sabato</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold uppercase tracking-wider text-zinc-300 mb-1">
                    Fascia Oraria *
                  </label>
                  <select
                    value={slot}
                    onChange={(e) => setSlot(e.target.value)}
                    className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2.5 text-white focus:border-blue-500 focus:outline-none"
                  >
                    <option value="Mattina (10:30 - 12:30)">Mattina (10:30 - 12:30)</option>
                    <option value="Pomeriggio (16:30 - 18:30)">Pomeriggio (16:30 - 18:30)</option>
                    <option value="Sera (18:30 - 20:30)">Sera (18:30 - 20:30)</option>
                    <option value="Notturna (19:30 - 21:30)">Tardo Pomeriggio (19:30 - 21:30)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold uppercase tracking-wider text-zinc-300 mb-1">
                  Nome e Cognome *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Es. Marco Esposito"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3.5 py-2.5 text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-bold uppercase tracking-wider text-zinc-300 mb-1">
                  Recapito Telefonico / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Es. 333 1234567"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3.5 py-2.5 text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <p className="text-[11px] text-zinc-500">
                La lezione è gratuita e senza alcun obbligo d&apos;iscrizione. Ti contattiamo solo per confermarti orario e disponibilità armadietto/guantoni.
              </p>

              <button
                type="submit"
                className="w-full rounded-md bg-[#19488a] py-3.5 px-4 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-950/50 hover:bg-[#205bb0] transition-colors cursor-pointer"
              >
                Conferma Prenotazione Prova
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
