import type { APIRoute } from "astro"
import nodemailer from "nodemailer"

export const post: APIRoute = async ({ request }) => {
  const data = await request.formData()
  const name = data.get("name")
  const email = data.get("email")
  const mobile = data.get("mobile")
  const purpose = data.get("purpose")
  const comment = data.get("comment")
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: import.meta.env.SENDER,
        pass: import.meta.env.SENDER_PASSWORD,
      },
    })
    const sendToMainGmail = transporter.sendMail({
      from: import.meta.env.SENDER,
      to: import.meta.env.RECEIVER,
      subject: "Contact Us",
      text: `
                    Name: ${name}
                    Email: ${email}
                    Mobile: ${mobile}
                    Purpose: ${purpose}
                    Comment: ${comment}
                `,
    })
    const sendToPersonMail = transporter.sendMail({
      from: import.meta.env.SENDER,
      to: email as string,
      subject: "Buy1Gram Help",
      text: `We have received your query regarding purpose ${purpose} ${comment} we will shortly reach out to you with answer`,
    })
    await Promise.all([sendToMainGmail, sendToPersonMail])
    return new Response(
      JSON.stringify({
        message: "Email sent successfully",
      }),
      { status: 200 }
    )
  } catch (error) {
    console.error(error)
    return new Response(
      JSON.stringify({
        message: "Server error",
      }),
      { status: 500 }
    )
  }
}
