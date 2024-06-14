import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendVerificationEmail = async (email: string, token: string) => {
  //
  const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`

  console.log('sending', confirmLink, 'to', email)
  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: email,
    subject: 'Confirmation email',
    html: `
      <p>Click <a href="${confirmLink}">here</a> to confirm your account.</p>
    `,
  })
}