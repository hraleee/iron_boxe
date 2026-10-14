export interface InquiryData {
  name: string;
  phone: string;
  email?: string;
  course?: string;
  day?: string;
  slot?: string;
  message?: string;
  source: string;
}

export interface InquiryResult {
  success: boolean;
  message?: string;
  error?: string;
  method?: "api" | "direct_formsubmit" | "none";
}

/**
 * Invia la richiesta di contatto/iscrizione con duplice strategia:
 * 1. Prova tramite la route API di Next.js (/api/contact) - ideale se sono configurate variabili SMTP o Resend su Vercel.
 * 2. Se l'API server fallisce (es. blocco IP datacenter Vercel o rate limit FormSubmit),
 *    esegue il fallback automatico direttamente dal browser dell'utente (IP residenziale, nessun blocco Cloudflare).
 */
export async function submitInquiry(data: InquiryData): Promise<InquiryResult> {
  const targetEmail = "alessandrohrebinskyy@gmail.com";
  const subject = `🥊 Richiesta Iron Boxe: ${data.name}${data.course ? ` - ${data.course}` : ""}`;

  // Tentativo 1: API Route Server Next.js
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const resData = await res.json().catch(() => ({}));

    if (res.ok && resData.success) {
      return {
        success: true,
        message: resData.message || "Richiesta inviata con successo!",
        method: "api",
      };
    }

    console.warn("API /api/contact ha restituito errore o non-ok:", res.status, resData);
  } catch (err) {
    console.warn("Chiamata a /api/contact fallita, procedo con invio diretto dal browser:", err);
  }

  // Tentativo 2: Fallback diretto dal browser a FormSubmit
  // Essendo eseguito dal browser dell'utente con CORS abilitato, bypassa i blocchi IP dei server Vercel
  try {
    const formSubmitPayload: Record<string, string> = {
      _subject: subject,
      _template: "table",
      _captcha: "false",
      "Origine Richiesta": data.source,
      "Nome e Cognome": data.name,
      "Recapito Telefonico": data.phone,
    };

    if (data.email) formSubmitPayload["Email"] = data.email;
    if (data.course) formSubmitPayload["Corso di Interesse"] = data.course;
    if (data.day) formSubmitPayload["Giorno Preferito"] = data.day;
    if (data.slot) formSubmitPayload["Fascia Oraria"] = data.slot;
    if (data.message) formSubmitPayload["Messaggio"] = data.message;

    const fsRes = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(targetEmail)}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formSubmitPayload),
    });

    const fsData = await fsRes.json().catch(() => ({}));

    if (fsRes.ok && fsData?.success !== "false") {
      return {
        success: true,
        message: "Richiesta inviata con successo alla segreteria!",
        method: "direct_formsubmit",
      };
    }

    if (fsData?.message && fsData.message.includes("Activation")) {
      return {
        success: true,
        message:
          "FormSubmit richiede l'attivazione iniziale. Controlla la posta su " +
          targetEmail +
          " e clicca 'Activate Form'.",
        method: "direct_formsubmit",
      };
    }
  } catch (fsErr) {
    console.error("Invio diretto a FormSubmit fallito:", fsErr);
  }

  return {
    success: false,
    error:
      "Impossibile inviare l'email in questo momento. Puoi comunque inoltrare la richiesta istantaneamente su WhatsApp con il pulsante qui sotto!",
    method: "none",
  };
}

/**
 * Genera il link per aprire WhatsApp con il messaggio pre-compilato con i dati dell'utente
 */
export function buildWhatsAppInquiryLink(data: {
  name?: string;
  phone?: string;
  email?: string;
  course?: string;
  day?: string;
  slot?: string;
  message?: string;
}): string {
  const phone = "393384800606";
  const lines: string[] = ["🥊 Ciao Iron Boxe! Vorrei informazioni:"];

  if (data.name) lines.push(`👤 Nome: ${data.name}`);
  if (data.phone) lines.push(`📞 Telefono: ${data.phone}`);
  if (data.email) lines.push(`✉️ Email: ${data.email}`);
  if (data.course) lines.push(`🥊 Corso: ${data.course}`);
  if (data.day) lines.push(`📅 Giorno: ${data.day}`);
  if (data.slot) lines.push(`⏰ Orario: ${data.slot}`);
  if (data.message) lines.push(`💬 Messaggio: ${data.message}`);

  const fullText = lines.join("\n");
  return `https://wa.me/${phone}?text=${encodeURIComponent(fullText)}`;
}
