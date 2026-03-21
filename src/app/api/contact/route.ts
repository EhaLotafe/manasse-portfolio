// src/app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: Request) {
  try {
    // ⚠️ LA CORRECTION EST ICI : On déplace l'initialisation à l'intérieur !
    // Comme ça, ça ne crash pas pendant le build local.
    const resend = new Resend(process.env.RESEND_API_KEY);

    // 1. Extraction des données
    const body = await req.json();
    const { name, email, message } = body;

    // 2. Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Tous les champs sont obligatoires." },
        { status: 400 }
      );
    }

    // 3. Envoi du mail
    const data = await resend.emails.send({
      from: 'Portfolio Overcome <onboarding@resend.dev>',
      to: 'overcomeeha@gmail.com',
      subject: `🚨 Nouveau Lead B2B: ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaeb; border-radius: 8px; background-color: #ffffff;">
          <h2 style="color: #10B981; margin-bottom: 24px;">Nouvelle demande de projet 🚀</h2>
          
          <div style="background-color: #f9fafb; padding: 16px; border-radius: 6px; margin-bottom: 24px;">
            <p style="margin: 0 0 8px 0;"><strong>👤 Nom / Entreprise :</strong> ${name}</p>
            <p style="margin: 0;"><strong>✉️ Email :</strong> <a href="mailto:${email}">${email}</a></p>
          </div>
          
          <h3 style="color: #374151; margin-bottom: 12px;">Détails du besoin :</h3>
          <div style="background-color: #f9fafb; padding: 16px; border-radius: 6px; border-left: 4px solid #10B981;">
            <p style="margin: 0; white-space: pre-wrap; color: #4b5563; line-height: 1.6;">${message}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data }, { status: 200 });
    
  } catch (error) {
    console.error("Erreur d'envoi d'email:", error);
    return NextResponse.json(
      { error: "Erreur serveur lors de l'envoi." },
      { status: 500 }
    );
  }
}