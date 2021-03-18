require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "kwislawrencekwis@gmail.com",
        pass: "##Xavier24##"
    }
});

let mailOptions = {
    from: "choji@gmail.com",
    to: "kwislawrencekwis@gmail.com",
    subject: "Hi!! Just testing",
    test: "If you get this message then it works",
}

transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
        console.log("An error occured");
    } else {
        console.log("Email Sent!!!!!")
    }
});