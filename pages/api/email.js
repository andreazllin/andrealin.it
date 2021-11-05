const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

var transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
    },
});

export default async (req, res) => {
    var mailOptions = {
        from: process.env.EMAIL,
        to: process.env.EMAIL_TO,
        subject: `Proposta da ${req.body.contactEmail}`,
        html: req.body.emailText,
    };
    // console.log(req.body);
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err);
            return res.status(500).send('Errore 505 // Server, riprova dopo.');
        } else {
            return res.status(200).json({ msg: 'Risponderò il prima possibile!' });
        }
    });
};
