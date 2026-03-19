// src/app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialisation de Resend avec ta clé API secrète
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    // 1. Extraction des données envoyées par ton ContactForm.tsx
    const body = await req.json();
    const { name, email, message } = body;

    // 2. Validation basique (Sécurité backend)
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Tous les champs sont obligatoires." },
        { status: 400 }
      );
    }

    // 3. Envoi du mail via l'API Resend
    const data = await resend.emails.send({
      from: 'Portfolio Overcome <onboarding@resend.dev>', // L'adresse d'envoi par défaut gratuite de Resend
      to: 'overcomeeha@gmail.com', // Ton VRAI email de réception (là où tu liras le message)
      subject: `🚨 Nouveau Lead B2B: ${name}`,
      replyTo: email, // Si tu fais "Répondre" dans Gmail, ça écrira directement au client !
      
      // Template HTML du mail que tu vas recevoir
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaeb; border-radius: 8px; background-color: #ffffff;">
          <h2 style="color: #10B981; margin-bottom: 24px;">Nouvelle demande de projet 🚀</h2>
          
          <div style="background-color: #f9fafb; padding: 16px; border-radius: 6px; margin-bottom: 24px;">
            <p style="margin: 0 0 8px 0;"><strong>👤 Nom / Entreprise :</strong> ${name}</p>
            <p style="margin: 0;"><strong>✉️ Email de contact :</strong> <a href="mailto:${email}">${email}</a></p>
          </div>
          
          <h3 style="color: #374151; margin-bottom: 12px;">Détails du besoin :</h3>
          <div style="background-color: #f9fafb; padding: 16px; border-radius: 6px; border-left: 4px solid #10B981;">
            <p style="margin: 0; white-space: pre-wrap; color: #4b5563; line-height: 1.6;">${message}</p>
          </div>
          
          <p style="color: #9ca3af; font-size: 12px; margin-top: 32px; text-align: center;">
            Ce message a été envoyé depuis le formulaire de contact de votre portfolio Vercel.
          </p>
        </div>
      `,
    });

    // 4. Succès : On renvoie un statut 200 à ton Frontend
    return NextResponse.json({ success: true, data }, { status: 200 });
    
  } catch (error) {
    // 5. Échec : On capture l'erreur pour ne pas faire crasher le site
    console.error("Erreur d'envoi d'email:", error);
    return NextResponse.json(
      { error: "Erreur serveur lors de l'envoi du message." },
      { status: 500 }
    );
  }
}