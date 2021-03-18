const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "kwislawrencekwis@gmail.com",
        pass: "##Xavier24##"
    }
});

let mailOptions = {
    
}