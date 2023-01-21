import type { NextApiRequest, NextApiResponse } from "next"
import nodemailer from "nodemailer"
import * as dotenv from "dotenv"

dotenv.config()

const transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
})

const handler = (req: NextApiRequest, res: NextApiResponse): void => {
  transporter.sendMail({
    from: process.env.EMAIL,
    to: process.env.EMAIL_TO,
    subject: `Proposta da ${req.body.contact}`,
    html: req.body.content
  }, (err) => {
    err ? res.status(500).send("There was an error, while sending the email try again later, sorry for the inconvenience.") : res.status(200).send("I'll reply as soon as possibile!")
  })
}

export default handler
