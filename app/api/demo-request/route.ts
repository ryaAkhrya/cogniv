import { NextResponse } from "next/server";
import { Resend } from "resend";
import { supabaseServer } from "@/utils/supabase/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const company_name = typeof body.company_name === "string" ? body.company_name.trim() : "";
    const work_email = typeof body.work_email === "string" ? body.work_email.trim() : "";
    const use_case = typeof body.use_case === "string" ? body.use_case.trim() : "";
    const additional_context = typeof body.additional_context === "string" ? body.additional_context.trim() : "";

    // Basic Validation
    if (!company_name || company_name.length > 120) {
      return NextResponse.json({ error: "Invalid company name." }, { status: 400 });
    }
    if (!work_email || work_email.length > 254 || !work_email.includes("@")) {
      return NextResponse.json({ error: "Invalid work email." }, { status: 400 });
    }
    if (!use_case || use_case.length > 100) {
      return NextResponse.json({ error: "Invalid use case." }, { status: 400 });
    }
    if (additional_context.length > 2000) {
      return NextResponse.json({ error: "Additional context is too long." }, { status: 400 });
    }

    const payload = {
      company_name,
      work_email,
      use_case,
      additional_context: additional_context || null,
    };

    // 1. Insert into Supabase
    const { error: dbError } = await supabaseServer.from("leads").insert([payload]);

    if (dbError) {
      console.error("Supabase insert error:", dbError);
      return NextResponse.json({ error: "Internal server error saving lead." }, { status: 500 });
    }

    // 2. Send confirmation email via Resend
    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      console.error("RESEND_API_KEY is not configured.");
      return NextResponse.json({ success: true, emailSent: false });
    }

    const resend = new Resend(resendApiKey);

    // Escape user input for HTML
    const escapeHtml = (unsafe: string) => {
      return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
    };

    const safeCompany = escapeHtml(company_name);
    const safeUseCase = escapeHtml(use_case);

    const { error: emailError } = await resend.emails.send({
      from: "Cogniv <noreply@cogniv.yudisworks.my.id>",
      to: work_email,
      subject: "Cogniv demo request received",
      html: `
        <p>Hi,</p>
        <p>We've received the demo request for ${safeCompany}.</p>
        <p>Your request has been recorded successfully. We'll use this email address for any follow-up regarding the request.</p>
        <p><strong>Request details:</strong><br/>
        Company: ${safeCompany}<br/>
        Use case: ${safeUseCase}</p>
        <p>— Cogniv</p>
      `,
    });

    if (emailError) {
      console.error("Resend email error:", emailError);
      return NextResponse.json({ success: true, emailSent: false });
    }

    return NextResponse.json({ success: true, emailSent: true });

  } catch (error) {
    console.error("Demo request API error:", error);
    return NextResponse.json({ error: "Invalid request payload." }, { status: 400 });
  }
}
