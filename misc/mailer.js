require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "drrenimusic@gmail.com",
        pass: "@ccesscontrol00"
    }
});

let mailOptions = {
    from: "kwislawrencekwis@gmail.com",
    to: "drrenimusic@gmail.com",
    subject: "Hi!! Just testing",
    text: "If you get this message then it works",
}

transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
        console.log("An error occured", err);
    } else {
        console.log("Email Sent!!!!!")
    }
});