import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import EmailTemplate from "../../components/EmailTemple";
import { ContactForm } from "@/app/utils/types";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { fullname, email, message }: ContactForm = await req.json();
  try {
    const data = await resend.emails.send({
      from: "parfait.app.dev",
      to: `${email}`,
      subject: `${fullname} has message`,
      react: EmailTemplate({ fullname, email, message }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
