import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message, whatsappNumber } = body;

    if (!name || !email || !message) {
      return NextResponse.json({
        success: false,
        error: "Missing required fields: name, email, and message",
      });
    }

    const logoUrl = "https://www.nanhekissey.com/logo.png";

    const emailContent = `
      <div style="max-width:700px;margin:0 auto;padding:20px;font-family:-webkit-system-font, Helvetica Neue, Helvetica, sans-serif;font-size:14px;">
        <img src="${logoUrl}" alt="Portfolio Logo" width="200px"/>
        <p style="color:#777; line-height:24px; font-size:16px; margin:20px 0;">
          Hi <strong>${name}</strong>,
        </p>
        <p style="color:#777; line-height:24px; font-size:15px;">
          Thanks for reaching out! I've received your message and will get back to you as soon as possible. 🚀
        </p>
        <p style="line-height:24px; color:#666; font-size:16px; font-weight:bold;">📨 Your Message:</p>
        <p style="background-color:#fbfbfb;padding:10px;font-size:15px;line-height:20px;color:#666;margin-top:5px;border:1px solid #e1e1e1;border-left:3px solid #2196F3;">
          ${message.replace(/\n/g, "<br/>")}
        </p>
        <p style="color:#777; line-height:24px; font-size:15px; margin-top:15px;">
          <strong>Name:</strong> ${name}<br/>
          <strong>Email:</strong> ${email}<br/>
          ${whatsappNumber ? `<strong>WhatsApp:</strong> ${whatsappNumber}<br/>` : ""}
        </p>
        <p style="color:#777; line-height:24px; font-size:15px; margin-top:20px;">
          Best Regards,<br/>
          <strong>Akib Ali</strong><br/>
          <a href="https://yourportfolio.com" style="color:#2196F3;">https://yourportfolio.com</a>
        </p>
        <div style="margin-top:50px;padding:20px;border-top:1px solid #ddd;font-size:14px;color:#999;">
          Reply to this email if you have any questions.
        </div>
      </div>
    `;

    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: email,
      // cc:"codebyakib@gmail.com",
      subject: `New message from ${name}`,
      html: emailContent,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Resend Error:", error);
    return NextResponse.json({ success: false, error });
  }
}

