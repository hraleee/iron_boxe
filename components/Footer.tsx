import { Dumbbell, MapPin, Phone, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-[#07080a] text-zinc-400 text-xs py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand & Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white font-black text-xl tracking-wider uppercase">
              <span className="flex h-7 w-7 items-center justify-center rounded bg-red-600 text-white text-xs">
                <Dumbbell className="h-4 w-4" />
              </span>
              <span>IRON <span className="text-red-500">BOXE</span></span>
            </div>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Associazione Sportiva Dilettantistica di pugilato a Pomigliano d&apos;Arco. Centro dedicato alla vera nobile arte, dall&apos;avviamento giovanile alla competizione agonistica federale.
            </p>
            <p className="text-zinc-500 text-[11px]">
              Maestro e Proprietario: <strong className="text-zinc-300">Claudio Cricrì</strong>
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <p className="font-bold uppercase tracking-wider text-white text-xs">Navigazione</p>
            <ul className="space-y-2">
              <li>
                <a href="#maestro" className="hover:text-white transition-colors">Il Maestro Claudio Cricrì</a>
              </li>
              <li>
                <a href="#corsi" className="hover:text-white transition-colors">I Corsi di Boxe</a>
              </li>
              <li>
                <a href="#quiz" className="hover:text-white transition-colors">Trova il Tuo Corso Ideale</a>
              </li>
              <li>
                <a href="#orari" className="hover:text-white transition-colors">Orari Settimanali</a>
              </li>
              <li>
                <a href="#struttura" className="hover:text-white transition-colors">La Struttura &amp; Il Ring</a>
              </li>
              <li>
                <a href="#contatti" className="hover:text-white transition-colors">Dove Siamo &amp; Contatti</a>
              </li>
            </ul>
          </div>

          {/* Sede & Recapiti */}
          <div className="space-y-3">
            <p className="font-bold uppercase tracking-wider text-white text-xs">Sede &amp; Orari</p>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                <span>Via Tramonto, 3 – 80038 Pomigliano d&apos;Arco (NA)</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                <span>Lun – Ven: 10:00 - 22:00 | Sab: 10:00 - 17:00</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                <span>Pomigliano d&apos;Arco, Napoli</span>
              </div>
            </div>
          </div>

          {/* Canali Social */}
          <div className="space-y-3">
            <p className="font-bold uppercase tracking-wider text-white text-xs">Social & Community</p>
            <p className="text-zinc-400 text-xs">
              Segui i risultati dei nostri atleti, gli eventi e i match sulla nostra pagina ufficiale Facebook.
            </p>
            <div className="pt-1">
              <a
                href="https://www.facebook.com/iron.boxe/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded bg-zinc-900 border border-zinc-800 px-3 py-2 text-xs text-white hover:border-red-600 transition-colors"
              >
                <span>Facebook /iron.boxe</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <p>© 2026 A.S.D. Iron Boxe Pomigliano. Tutti i diritti riservati.</p>
          <p>Noble Art · Respect · Discipline · Heart</p>
        </div>
      </div>
    </footer>
  );
}
