import { NextResponse } from "next/server";
import { Resend } from "resend";
import EmailTemplate from "@/components/emails/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email } = await req.json();

    const customerName = `${firstName} ${lastName}`;
    const lineItems = [
      {
        title: "Coming Soon Waitlist",
        productHandle: "coming-soon",
        image: null,
      },
    ];

    // 1. Send notification to internal team
    await resend.emails.send({
      from: "Blinkers <hello@blinkers.club>",
      to: "info@blinkers.club",
      subject: `New Waitlist Signup: ${customerName}`,
      react: EmailTemplate({
        customerName,
        lineItems,
      }),
    });

    // 2. Send thank-you to user
    await resend.emails.send({
      from: "Blinkers <hello@blinkers.club>",
      to: email,
      subject: "You're on the waitlist 🎉",
      react: EmailTemplate({
        customerName,
        lineItems,
      }),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("❌ Failed to send email:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

// import { NextResponse } from "next/server";
// import { Resend } from "resend";
// import EmailTemplate from "@/components/emails/EmailTemplate";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(req: Request) {
//   try {
//     const { firstName, lastName, email } = await req.json();

//     // Construct name and dummy line items
//     const customerName = `${firstName} ${lastName}`;
//     const lineItems = [
//       {
//         title: "Coming Soon Waitlist",
//         productHandle: "coming-soon",
//         image: null, // optional
//       },
//     ];

//     await resend.emails.send({
//       from: "Blinkers <hello@blinkers.club>", // must be a verified sender
//       to: "tommy@cultivatedagency.com", // or `email` if sending to user
//       subject: `New Waitlist Signup: ${customerName}`,
//       react: EmailTemplate({
//         customerName,
//         lineItems,
//       }),
//     });

//     return NextResponse.json({ success: true });
//   } catch (err) {
//     console.error("❌ Failed to send email:", err);
//     return NextResponse.json({ error: "Server error" }, { status: 500 });
//   }
// }
