import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  const { firstName, lastName, email, company, service, message } = await req.json()

  if (!firstName || !lastName || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  await transporter.sendMail({
    from: `"Limesoft Website" <${process.env.SMTP_USER}>`,
    to: process.env.SMTP_TO ?? 'info@limesoftsystem.com',
    replyTo: email,
    subject: `New enquiry from ${firstName} ${lastName}${service ? ` — ${service}` : ''}`,
    text: [
      `Name:         ${firstName} ${lastName}`,
      `Email:        ${email}`,
      `Organisation: ${company || '—'}`,
      `Service:      ${service || '—'}`,
      '',
      message,
    ].join('\n'),
    html: `
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Organisation:</strong> ${company || '—'}</p>
      <p><strong>Service:</strong> ${service || '—'}</p>
      <hr/>
      <p>${message.replace(/\n/g, '<br/>')}</p>
    `,
  })

  return NextResponse.json({ ok: true })
}
