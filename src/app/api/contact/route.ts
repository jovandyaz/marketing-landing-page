import { NextResponse } from 'next/server';
import { ContactFormData } from '@/components/ContactForm/contact-form.types';
import { ContactEmail } from '@/components/emails';
import { sendEmail } from '@/services/emailSvc';

export async function POST(request: Request) {
  try {
    const body: ContactFormData = await request.json();

    const result = await sendEmail({
      from: process.env.NEXT_PUBLIC_EMAIL_FROM!,
      to: process.env.NEXT_PUBLIC_CONTACT_EMAIL!,
      subject: 'Nuevo mensaje - Sinergia Studio Website',
      react: ContactEmail(body),
      replyTo: body.email
    });

    if (!result.success) {
      return NextResponse.json(result, { status: 500 });
    }

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: {
          message: 'Error interno del servidor',
          details: error instanceof Error ? error.message : 'Error desconocido'
        }
      },
      { status: 500 }
    );
  }
}
