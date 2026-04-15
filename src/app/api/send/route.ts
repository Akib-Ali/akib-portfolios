import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message, whatsappNumber } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json({
        success: false,
        error: "Missing required fields: name, email, and message",
      });
    }

    const logoUrl = "https://www.codebyakib.com/akib-final-logo.jpg";

    // Polished Email Template
    const emailContent = `
      <div style="max-width:700px;margin:0 auto;padding:25px;
                  font-family:'Segoe UI',Helvetica,Arial,sans-serif;
                  font-size:15px;color:#333;border-radius:10px;
                  background:#ffffff;box-shadow:0 2px 8px rgba(0,0,0,0.05);">

        <!-- Header / Logo -->
        <div style="text-align:center;">
          <img src="${logoUrl}" alt="Portfolio Logo" width="180"
               style="border-radius:10px;margin-bottom:15px;" />
          <h2 style="color:#2D4E9D;margin:0;">Thanks for reaching out 🚀</h2>
        </div>

        <p style="margin-top:25px;color:#555;line-height:1.7;">
          Hi <strong>${name}</strong>,<br/>
          I truly appreciate you taking the time to contact me! Your message has been received,
          and I’ll get back to you shortly with more details.
        </p>

        <!-- Message Section -->
        <div style="margin:20px 0;padding:15px 20px;background:#f8f9fb;
                    border-left:4px solid #4F6FB3;border-radius:6px;">
          <p style="margin:0;font-size:15px;color:#444;line-height:1.6;">
            <strong>📨 Your Message:</strong><br/>
            ${message.replace(/\n/g, "<br/>")}
          </p>
        </div>

        <!-- Contact Details -->
        <p style="margin-top:20px;line-height:1.8;color:#555;">
          <strong>👤 Name:</strong> ${name}<br/>
          <strong>📧 Email:</strong> ${email}<br/>
          ${whatsappNumber ? `<strong>💬 WhatsApp:</strong> ${whatsappNumber}<br/>` : ""}
        </p>

        <!-- Footer -->
       <!-- Footer -->
<div style="margin-top:35px;border-top:1px solid #eee;padding-top:20px;">
  <p style="color:#555;margin-bottom:10px;">Best Regards,</p>
  <p style="font-weight:bold;font-size:16px;margin:0;">Akib Ali</p>
  <p style="margin:4px 0 12px;color:#777;">Full Stack Developer</p>

  <!-- Contact Info -->
  <p style="color:#555;line-height:1.8;margin:8px 0;">
    📞 <a href="tel:+919318384168" style="color:#2D4E9D;text-decoration:none;">+91 9318384168</a><br/>
    📧 <a href="mailto:codebyakib@gmail.com" style="color:#2D4E9D;text-decoration:none;">codebyakib@gmail.com</a>
  </p>

  <!-- Social Links -->
  <div style="margin-top:10px;">
    <a href="https://www.codebyakib.com/" style="color:#2D4E9D;text-decoration:none;margin-right:10px;">🌐 Portfolio</a> |
    <a href="https://www.linkedin.com/in/akib-ali-1695081b8/" style="color:#0A66C2;text-decoration:none;margin:0 10px;">💼 LinkedIn</a> 
  </div>
</div>

<!-- Bottom Info -->
<div style="margin-top:40px;padding:10px;text-align:center;font-size:13px;color:#888;border-top:1px solid #eee;">
  You’re receiving this email because you reached out via 
  <a href="https://www.codebyakib.com/contact" style="color:#4F6FB3;">codebyakib.com/contact</a>.<br/>
  Feel free to reply directly to continue our chat!
</div>

    `;

    // Send Email
    const data = await resend.emails.send({
      from: "codebyakib <contact@codebyakib.com>",
      to: email, // client
      cc: ["codebyakib@gmail.com", "akib7599@gmail.com"], // your copies
      subject: `New message from ${name}`,
      html: emailContent,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Resend Error:", error);
    return NextResponse.json({ success: false, error });
  }
}


