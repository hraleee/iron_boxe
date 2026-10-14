"use client";

import { useState, useEffect, useCallback, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { X, CheckCircle2, Info, MessageCircle, MapPin, Loader2 } from "lucide-react";
import { submitInquiry, buildWhatsAppInquiryLink } from "@/lib/sendInquiry";

interface InfoBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCourse?: string;
}

const emptySubscribe = () => () => {};

export default function InfoBookingModal({
  isOpen,
  onClose,
  initialCourse = "Boxe / Pugilato Amatoriale",
}: InfoBookingModalProps) {
  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const [course, setCourse] = useState(initialCourse);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [day, setDay] = useState("Lunedì");
  const [slot, setSlot] = useState("Sera (19:30 - 21:00)");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleReset = useCallback(() => {
    setSubmitted(false);
    setIsSubmitting(false);
    setSubmitError(null);
    setName("");
    setPhone("");
    setEmail("");
    onClose();
  }, [onClose]);

  // Lock body scroll and handle Escape key
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleReset();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleReset]);

  if (!isOpen || !isClient) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const result = await submitInquiry({
        name,
        phone,
        email,
        course,
        day,
        slot,
        source: "Modale Info & Iscrizioni",
      });

      if (result.success) {
        setSubmitted(true);
      } else {
        setSubmitError(
          result.error ||
            "Impossibile inviare l'email in questo momento. Clicca sul pulsante WhatsApp qui sotto per inviare i tuoi dati direttamente al Maestro Claudio!"
        );
      }
    } catch (err: unknown) {
      console.error("Errore durante l'invio form:", err);
      setSubmitError(
        "Errore durante l'invio. Clicca qui sotto per inviare la richiesta subito su WhatsApp al 338 480 0606."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const modalContent = (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-sm overflow-y-auto"
      onClick={handleReset}
    >
      <div
        className="relative w-full max-w-lg my-auto rounded-2xl border border-zinc-700 bg-[#0f1115] p-5 sm:p-7 shadow-2xl text-left max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={handleReset}
          className="absolute top-4 right-4 p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
          aria-label="Chiudi finestra"
        >
          <X className="h-5 w-5" />
        </button>

        {submitted ? (
          <div className="py-4 text-center space-y-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600/20 text-blue-400 mx-auto">
              <CheckCircle2 className="h-8 w-8" />
            </div>

            <h3 id="modal-title" className="text-2xl font-black uppercase tracking-tight text-white">
              Richiesta Inviata!
            </h3>

            <p className="text-zinc-300 text-sm max-w-sm mx-auto">
              Ottimo, <strong>{name}</strong>! La tua richiesta per{" "}
              <strong className="text-white">{course}</strong> è stata recapitata via email alla segreteria per{" "}
              <strong>{day} ({slot})</strong>. Ti ricontatteremo a breve al recapito <strong>{phone}</strong>.
            </p>

            <div className="rounded-xl bg-zinc-950 p-4 border border-zinc-800 text-left text-xs space-y-2 mt-4">
              <p className="font-bold uppercase text-zinc-400 tracking-wider">Cosa occorre per l&apos;iscrizione:</p>
              <ul className="text-zinc-300 space-y-1 list-disc list-inside">
                <li>Certificato medico di idoneità sportiva</li>
                <li>Tuta o pantaloncini e maglietta comoda</li>
                <li>Scarpe da ginnastica pulite per la sala</li>
                <li>Documento di riconoscimento e codice fiscale</li>
              </ul>
              <p className="pt-2 text-zinc-500 text-[11px] border-t border-zinc-900 flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-zinc-400" />
                <span>Iron Boxe · Via Tramonto, 3 – Pomigliano d&apos;Arco</span>
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/393384800606?text=Ciao%20Maestro%20Claudio,%20vorrei%20informazioni%20sui%20corsi%20e%20iscrizioni%20per%20${encodeURIComponent(
                  course
                )}%20a%20nome%20${encodeURIComponent(name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 rounded-md bg-emerald-600 py-3 px-4 text-xs font-bold uppercase tracking-wider text-white hover:bg-emerald-500 transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Scrivi su WhatsApp al Maestro</span>
              </a>
              <button
                type="button"
                onClick={handleReset}
                className="flex-1 rounded-md bg-zinc-800 py-3 px-4 text-xs font-bold uppercase tracking-wider text-zinc-300 hover:text-white hover:bg-zinc-700 transition-colors cursor-pointer"
              >
                Chiudi
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-400 mb-2">
              <Info className="h-4 w-4" />
              <span>Informazioni &amp; Iscrizioni</span>
            </div>
            <h3 id="modal-title" className="text-2xl font-black uppercase tracking-tight text-white">
              Richiedi Info o Iscriviti
            </h3>
            <p className="mt-1 text-xs text-zinc-400">
              Contatta la palestra o il Maestro Claudio Cricrì per orari, quote e modalità d&apos;iscrizione a Pomigliano d&apos;Arco.
            </p>

            {/* Quick WhatsApp Contact Banner */}
            <div className="mt-4 p-3 rounded-lg bg-zinc-900/80 border border-zinc-800 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded bg-emerald-600/20 text-emerald-400 shrink-0">
                  <MessageCircle className="h-4 w-4" />
                </div>
                <div className="text-xs">
                  <p className="font-semibold text-white">Preferisci parlare subito?</p>
                  <p className="text-zinc-400 text-[11px]">Scrivi direttamente al Maestro su WhatsApp</p>
                </div>
              </div>
              <a
                href="https://wa.me/393384800606?text=Ciao%20Maestro%20Claudio,%20vorrei%20informazioni%20sui%20corsi%20di%20Iron%20Boxe"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 rounded bg-emerald-600 hover:bg-emerald-500 px-3 py-1.5 text-xs font-bold text-white transition-colors flex items-center gap-1.5"
              >
                <span>WhatsApp</span>
              </a>
            </div>

            <form onSubmit={handleSubmit} className="mt-5 space-y-4 text-xs">
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

              <div>
                <label className="block font-bold uppercase tracking-wider text-zinc-300 mb-1">
                  Email (Opzionale)
                </label>
                <input
                  type="email"
                  placeholder="Es. m.esposito@email.it"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3.5 py-2.5 text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <p className="text-[11px] text-zinc-500">
                La tua richiesta verrà inviata direttamente via email alla segreteria della palestra. Ti ricontatteremo a breve per orari, quote e iscrizione.
              </p>

              {submitError && (
                <div className="p-3.5 rounded-lg bg-red-950/50 border border-red-800/70 text-red-200 text-xs space-y-2.5">
                  <p>{submitError}</p>
                  <a
                    href={buildWhatsAppInquiryLink({ name, phone, email, course, day, slot })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2.5 px-3 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md shadow-emerald-950/40"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>Invia subito su WhatsApp (Maestro Claudio)</span>
                  </a>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 rounded-md bg-[#19488a] py-3.5 px-4 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-950/50 hover:bg-[#205bb0] disabled:opacity-60 active:scale-98 transition-all cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Invio richiesta in corso...</span>
                  </>
                ) : (
                  <span>Invia Richiesta Informazioni / Iscrizione</span>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
