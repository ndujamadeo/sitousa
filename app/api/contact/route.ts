import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, product, quantity, message } = body;

    // Validate required fields
    if (!name || !email || !product) {
      return NextResponse.json(
        { error: 'Nome, email e prodotto sono obbligatori' },
        { status: 400 }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'NdujaLovers <onboarding@resend.dev>', // You'll need to update this with your verified domain
      to: ['info@filieramadeo.it'],
      replyTo: email,
      subject: `Nuova richiesta prodotto: ${product}`,
      html: `
        <h2>Nuova richiesta di prenotazione prodotto</h2>
        <p><strong>Prodotto:</strong> ${product}</p>
        <p><strong>Quantità:</strong> ${quantity || 'Non specificata'}</p>
        <hr />
        <h3>Informazioni cliente</h3>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefono:</strong> ${phone || 'Non fornito'}</p>
        ${message ? `<hr /><h3>Messaggio</h3><p>${message}</p>` : ''}
        <hr />
        <p style="color: #666; font-size: 12px;">Inviato da NdujaLovers.com</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Errore nell\'invio dell\'email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Email inviata con successo', data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Errore nel processare la richiesta' },
      { status: 500 }
    );
  }
}
