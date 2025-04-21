import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { fullname, email, service, message } = await req.json();

  const formToken = process.env.MAILPREX_FORM_TOKEN;
  if (!formToken) {
    return NextResponse.json(
      { error: "Mailprex form token not configured" },
      { status: 500 },
    );
  }

  const res = await fetch("https://api.mailprex.top/email/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      webName: "Excelso Landing Page",
      emailDestiny: "agustin2051@gmail.com",
      formToken,
      fullname,
      email,
      service,
      message,
    }),
  });

  const data = await res.json();
  if (!res.ok) {
    return NextResponse.json({ error: data }, { status: res.status });
  }
  return NextResponse.json({ message: data.message });
}
