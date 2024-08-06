import type { APIRoute } from 'astro';
import { getSecret } from 'astro:env/server';

export const POST: APIRoute = async ({ request }) => {
  try {
    const { message } = await request.json();

    const body = {
      service_id: getSecret("ID_PRD_SEVICE"),
      template_id: getSecret("ID_PRD_TEPLATE"),
      user_id: getSecret("ID_PRD_KEY"),
      template_params: {
        from_name: `Q.B Formulario de Contacto - Mensajeria`,
        message: message
      },
    };

    console.log(body);

    await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });

    return new Response(JSON.stringify("OK"), { status: 200 });
  } catch (error: any) {
    console.error(error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
};
