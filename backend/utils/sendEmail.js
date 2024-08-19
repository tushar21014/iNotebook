// node mailer allows you to send email
const nodemailer = require('nodemailer');

require('dotenv').config()
if(process.env.REACT_APP_NODE_ENV == "LOCAL"){
    require('dotenv').config({path: "backend/.env"})
}


const sendEmail = (options) => {
    const transporter = nodemailer.createTransport({
        service: process.env.EMAIL_SERVICE,
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD,
        }
    })

    const mailOptions = {
        from: process.env.EMAIL_FROM,
        to:  options.to,
        subject: options.subject,
        html: options.text,
    }

    transporter.sendMail(mailOptions, (err,info) => {
        if (err) {
            console.error(err)
        } else {
            console.error(info)
        }
    })
}

module.exports = sendEmail
