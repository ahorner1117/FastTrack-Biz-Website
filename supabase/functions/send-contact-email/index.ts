import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

function generateTicketNumber(): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = 'FT-';
  for (let i = 0; i < 6; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ success: false, error: 'Missing required fields' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const resendApiKey = Deno.env.get('RESEND_API_KEY');
    if (!resendApiKey) {
      throw new Error('RESEND_API_KEY is not configured');
    }

    const ticketNumber = generateTicketNumber();

    const emailHtml = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #00FF7F; border-bottom: 1px solid #333; padding-bottom: 12px;">
          New Support Request — ${ticketNumber}
        </h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; color: #888; width: 100px;">From</td>
            <td style="padding: 8px 0; color: #fff;">${name} &lt;${email}&gt;</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #888;">Subject</td>
            <td style="padding: 8px 0; color: #fff;">${subject || '(no subject)'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #888;">Ticket</td>
            <td style="padding: 8px 0; color: #00FF7F; font-weight: bold;">${ticketNumber}</td>
          </tr>
        </table>
        <h3 style="color: #ccc; margin-top: 24px;">Message</h3>
        <div style="background: #1a1a1a; border-left: 3px solid #00FF7F; padding: 16px; color: #eee; white-space: pre-wrap;">${message}</div>
        <p style="color: #555; font-size: 12px; margin-top: 24px;">
          Sent via FastTrack support form · fasttrackapp.biz
        </p>
      </div>
    `;

    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'FastTrack Support <support@fasttrackapp.biz>',
        to: ['support@fasttrackapp.biz', 'ahorner1117@gmail.com'],
        reply_to: email,
        subject: `[${ticketNumber}] ${subject || 'Support Request'} — ${name}`,
        html: emailHtml,
      }),
    });

    if (!resendRes.ok) {
      const errorBody = await resendRes.text();
      throw new Error(`Resend API error: ${resendRes.status} — ${errorBody}`);
    }

    return new Response(
      JSON.stringify({ success: true, ticketNumber }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (err) {
    console.error('send-contact-email error:', err);
    return new Response(
      JSON.stringify({ success: false, error: err.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
