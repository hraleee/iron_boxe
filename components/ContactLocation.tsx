"use client";

import { useState } from "react";
import { MapPin, Phone, Clock, ExternalLink, Send, CheckCircle2, MessageSquare, Camera } from "lucide-react";

interface ContactLocationProps {
  onOpenBooking: () => void;
}

export default function ContactLocation({ onOpenBooking }: ContactLocationProps) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contatti" className="py-20 lg:py-28 bg-[#0b0c0e] border-b border-zinc-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left column: Info & Location */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
                <span>Vieni a Trovarci</span>
                <span aria-hidden="true" className="text-zinc-700">·</span>
                <span>Pomigliano d&apos;Arco</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
                Vieni in Palestra. <br />
                I Guantoni Ti Aspettano.
              </h2>
              <p className="mt-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
                Ci trovi nel centro sportivo di Pomigliano d&apos;Arco. Puoi passare direttamente negli orari di apertura per vedere la palestra, parlare con il Maestro Claudio Cricrì o prenotare la tua prima lezione.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-zinc-900/90 border border-zinc-800">
                <div className="p-3 rounded-lg bg-blue-600/10 text-blue-400 shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase">Sede &amp; Indirizzo</h4>
                  <p className="text-xs text-zinc-300 mt-1">Via Tramonto, 3 – 80038 Pomigliano d&apos;Arco (NA)</p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Iron+Boxe+Via+Tramonto+3+Pomigliano+d'Arco"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <span>Apri su Google Maps</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-zinc-900/90 border border-zinc-800">
                <div className="p-3 rounded-lg bg-blue-600/10 text-blue-400 shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase">Orari di Apertura</h4>
                  <div className="text-xs text-zinc-300 mt-1 space-y-0.5">
                    <p>Lunedì – Venerdì: <strong className="text-white">10:00 – 22:00</strong> (Orario Continuato)</p>
                    <p>Sabato: <strong className="text-white">10:00 – 17:00</strong></p>
                    <p className="text-zinc-500">Domenica: Chiuso</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-zinc-900/90 border border-zinc-800">
                <div className="p-3 rounded-lg bg-blue-600/10 text-blue-400 shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase">Telefono &amp; WhatsApp</h4>
                  <p className="text-xs text-zinc-300 mt-1">
                    Scrivi o chiama direttamente il Maestro Claudio Cricrì:
                  </p>
                  <a
                    href="tel:+393384800606"
                    className="mt-1.5 inline-block text-sm font-black text-white hover:text-blue-400 transition-colors tabular-nums"
                  >
                    +39 338 480 0606
                  </a>
                  <div className="mt-2.5 flex flex-wrap gap-2.5">
                    <a
                      href="https://wa.me/393384800606?text=Ciao%20Maestro%20Claudio,%20vorrei%20informazioni%20sui%20corsi%20di%20Iron%20Boxe"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded bg-emerald-600 px-3.5 py-1.5 text-xs font-bold uppercase text-white hover:bg-emerald-500 transition-colors shadow-sm"
                    >
                      <MessageSquare className="h-3.5 w-3.5" />
                      <span>WhatsApp</span>
                    </a>
                    <a
                      href="https://www.instagram.com/iron_boxe/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded bg-gradient-to-r from-pink-600 via-rose-600 to-amber-600 px-3.5 py-1.5 text-xs font-bold uppercase text-white hover:opacity-95 transition-opacity shadow-sm"
                    >
                      <Camera className="h-3.5 w-3.5" />
                      <span>Instagram</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                    <a
                      href="https://www.facebook.com/iron.boxe/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded bg-[#19488a] px-3.5 py-1.5 text-xs font-bold uppercase text-white hover:bg-[#205bb0] transition-colors shadow-sm"
                    >
                      <span>Facebook</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column: Quick message card */}
          <div className="lg:col-span-6">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/90 p-6 sm:p-8 shadow-xl">
              <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white">
                Invia un Messaggio alla Palestra
              </h3>
              <p className="mt-1 text-xs text-zinc-400">
                Riceverai risposta diretta dal team di Iron Boxe per chiarire qualunque dubbio.
              </p>

              {formSubmitted ? (
                <div className="mt-8 p-6 rounded-lg bg-blue-950/20 border border-blue-900/40 text-center space-y-3">
                  <CheckCircle2 className="h-10 w-10 text-blue-400 mx-auto" />
                  <h4 className="text-base font-bold text-white uppercase">
                    Messaggio Ricevuto!
                  </h4>
                  <p className="text-xs text-zinc-300">
                    Grazie per averci contattato. Ti risponderemo a breve per darti tutti i dettagli sui corsi di Iron Boxe.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: "", phone: "", message: "" });
                    }}
                    className="mt-3 text-xs text-blue-400 hover:text-blue-300 underline"
                  >
                    Invia un altro messaggio
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                      Nome e Cognome *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Mario Rossi"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-xs text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                      Numero di Telefono o WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+39 333 1234567"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-xs text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                      Messaggio o Richiesta Info
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Vorrei sapere quali sono le quote e se posso venire questo pomeriggio..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-xs text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 rounded-md bg-[#19488a] py-3.5 px-4 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-950/50 hover:bg-[#205bb0] transition-colors cursor-pointer"
                  >
                    <Send className="h-4 w-4" />
                    <span>Invia Richiesta</span>
                  </button>

                  <div className="pt-2 text-center">
                    <button
                      type="button"
                      onClick={onOpenBooking}
                      className="text-xs text-zinc-400 hover:text-white transition-colors"
                    >
                      Vuoi maggiori informazioni su corsi e costi?{" "}
                      <span className="text-blue-400 font-bold underline">
                        Invia una richiesta direttamente al Maestro
                      </span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
