import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Indirizzo email destinatario predefinito per test o modificabile via variabile d'ambiente
const DEFAULT_RECIPIENT = "alessandrohrebinskyy@gmail.com";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name,
      phone,
      email,
      course,
      day,
      slot,
      message,
      source = "Modulo Sito Web",
    } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Nome e telefono sono campi obbligatori." },
        { status: 400 }
      );
    }

    const recipient = process.env.CONTACT_EMAIL || DEFAULT_RECIPIENT;
    const subject = `🥊 Nuova Richiesta Iron Boxe: ${name}${course ? ` - ${course}` : ""}`;

    const textContent = `
Nuova richiesta ricevuta dal sito Iron Boxe:
----------------------------------------
Origine: ${source}
Nome: ${name}
Telefono: ${phone}
${email ? `Email: ${email}\n` : ""}${course ? `Corso d'interesse: ${course}\n` : ""}${day ? `Giorno preferito: ${day}\n` : ""}${slot ? `Fascia oraria: ${slot}\n` : ""}${message ? `Messaggio: ${message}\n` : ""}
Data: ${new Date().toLocaleString("it-IT", { timeZone: "Europe/Rome" })}
----------------------------------------
`;

    // Metodo 1: Se sono configurate le credenziali SMTP (es. Gmail App Password, Brevo, Sendgrid, ecc.)
    if (
      process.env.SMTP_HOST &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASS
    ) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_SECURE === "true",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: `"Iron Boxe Website" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
        to: recipient,
        replyTo: email || undefined,
        subject: subject,
        text: textContent,
        html: `
          <div style="font-family: Arial, sans-serif; background-color: #0b0c0e; color: #ffffff; padding: 24px; border-radius: 8px; max-width: 600px;">
            <h2 style="color: #3b82f6; text-transform: uppercase; margin-top: 0;">🥊 Nuova Richiesta Iron Boxe</h2>
            <p style="color: #a1a1aa; font-size: 14px;">Ricevuta da: <strong>${source}</strong></p>
            <div style="background-color: #18181b; padding: 16px; border-radius: 6px; border: 1px solid #27272a; margin: 16px 0;">
              <p><strong>Nome:</strong> ${name}</p>
              <p><strong>Telefono:</strong> <a href="tel:${phone}" style="color: #38bdf8;">${phone}</a></p>
              ${email ? `<p><strong>Email:</strong> ${email}</p>` : ""}
              ${course ? `<p><strong>Corso di Interesse:</strong> ${course}</p>` : ""}
              ${day ? `<p><strong>Giorno:</strong> ${day}</p>` : ""}
              ${slot ? `<p><strong>Fascia Oraria:</strong> ${slot}</p>` : ""}
              ${message ? `<p><strong>Messaggio:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>` : ""}
            </div>
            <p style="font-size: 12px; color: #71717a;">Email generata automaticamente dal modulo online di Iron Boxe (Pomigliano d'Arco).</p>
          </div>
        `,
      });

      return NextResponse.json({
        success: true,
        message: "Email inviata con successo via SMTP!",
        recipient,
      });
    }

    // Metodo 2: Inoltro automatico diretto via FormSubmit (nessuna chiave o server mail richiesto)
    const formSubmitPayload: Record<string, string> = {
      _subject: subject,
      _template: "table",
      "Origine Richiesta": source,
      "Nome e Cognome": name,
      "Recapito Telefonico": phone,
    };

    if (email) formSubmitPayload["Email"] = email;
    if (course) formSubmitPayload["Corso di Interesse"] = course;
    if (day) formSubmitPayload["Giorno Preferito"] = day;
    if (slot) formSubmitPayload["Fascia Oraria"] = slot;
    if (message) formSubmitPayload["Messaggio"] = message;

    const formSubmitRes = await fetch(
      `https://formsubmit.co/ajax/${encodeURIComponent(recipient)}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Origin: "https://ironboxe.it",
          Referer: "https://ironboxe.it/",
        },
        body: JSON.stringify(formSubmitPayload),
      }
    );

    const formSubmitData = await formSubmitRes.json().catch(() => ({}));

    return NextResponse.json({
      success: true,
      message: "Richiesta inviata con successo!",
      recipient,
      details: formSubmitData?.message || undefined,
    });
  } catch (error: unknown) {
    console.error("Errore durante l'invio dell'email:", error);
    return NextResponse.json(
      {
        error:
          "Si è verificato un errore durante l'invio. Puoi comunque contattare direttamente la palestra su WhatsApp o telefono.",
      },
      { status: 500 }
    );
  }
}
