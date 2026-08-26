import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type Body = {
  name: string;
  email: string;
  phone?: string;
  quantity?: string;
  country?: string;
  /** Honeypot — must arrive empty. */
  website?: string;
};

function escapeHtml(v: string) {
  return v
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function row(label: string, value?: string) {
  if (!value) return "";
  return `<tr>
      <td style="padding:8px 12px 8px 0;border-bottom:1px solid #eee;color:#5B7088;white-space:nowrap">${label}</td>
      <td style="padding:8px 0;border-bottom:1px solid #eee;color:#043460">${escapeHtml(value)}</td>
    </tr>`;
}

function emailHtml(b: Body, ref: string) {
  return `
  <div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;margin:0 auto;color:#043460">
    <h2 style="color:#043460">Vora Labs — Wholesale Inquiry</h2>
    <p style="color:#5B7088">Reference <strong style="color:#043460">${ref}</strong></p>
    <table style="width:100%;border-collapse:collapse;margin:16px 0">
      ${row("Full name", b.name)}
      ${row("Email", b.email)}
      ${row("Contact number", b.phone)}
      ${row("Quantity", b.quantity)}
      ${row("Country", b.country)}
    </table>
    <p style="font-size:12px;color:#9aa7b4;line-height:1.5">For laboratory R&amp;D use only. Not for human or veterinary consumption.</p>
  </div>`;
}

export async function POST(req: Request) {
  let body: Body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid body" }, { status: 400 });
  }

  // Honeypot — silently accept so bots don't learn they were filtered.
  if (body.website) return NextResponse.json({ ok: true, ref: null });

  if (!body.name?.trim() || !body.email?.trim() || !body.phone?.trim()) {
    return NextResponse.json(
      { ok: false, error: "Full name, email and contact number are required" },
      { status: 400 }
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email.trim())) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email address" },
      { status: 400 }
    );
  }

  const ref = "VRW-" + Math.floor(100000 + Math.random() * 899999);

  // Mirrors /api/order: send only when SMTP is configured so the flow still
  // works in development without credentials.
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (SMTP_HOST && SMTP_USER && SMTP_PASS) {
    try {
      const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: Number(SMTP_PORT) || 587,
        secure: Number(SMTP_PORT) === 465,
        auth: { user: SMTP_USER, pass: SMTP_PASS },
      });

      const from = process.env.SMTP_FROM || `Vora Labs <${SMTP_USER}>`;
      const html = emailHtml(body, ref);

      await transporter.sendMail({
        from,
        to: process.env.WHOLESALE_EMAIL_TO || process.env.ORDER_EMAIL_TO || SMTP_USER,
        replyTo: body.email.trim(),
        subject: `Wholesale inquiry ${ref} — ${body.name.trim()}`,
        html,
      });

      await transporter.sendMail({
        from,
        to: body.email.trim(),
        subject: `Vora Labs — we've received your wholesale inquiry (${ref})`,
        html: `
          <div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;margin:0 auto;color:#043460">
            <h2 style="color:#043460">Thanks for getting in touch</h2>
            <p>Hi ${escapeHtml(body.name.trim())},</p>
            <p>We've received your wholesale inquiry. Your reference is <strong>${ref}</strong>. Our research supply team will reply within two business days.</p>
            <p style="font-size:12px;color:#9aa7b4;line-height:1.5">For laboratory R&amp;D use only. Not for human or veterinary consumption.</p>
          </div>`,
      });
    } catch (err) {
      console.error("[wholesale] email send failed:", err);
      return NextResponse.json({ ok: true, ref, emailed: false });
    }
    return NextResponse.json({ ok: true, ref, emailed: true });
  }

  console.warn("[wholesale] SMTP not configured — inquiry recorded without email:", ref);
  return NextResponse.json({ ok: true, ref, emailed: false });
}
