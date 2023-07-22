/* eslint-disable linebreak-style */
/* eslint-disable @typescript-eslint/comma-dangle */
import nodemailer from 'nodemailer';
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    }
});
async function sendEmail(email, message) {
    try {
        const info = await transporter.sendMail({
            from: process.env.SMTP_USER,
            to: email,
            subject: 'Hello',
            text: message,
        });
        console.log('Email sent:', info.messageId);
    }
    catch (error) {
        console.error('Error sending email:', error);
    }
}
export default sendEmail;
// Example usage
// const email = 'recipient@example.com';
// const smsRecipient = 'recipient-phone-number';
// const whatsappRecipient = 'whatsapp-recipient-phone-number';
// const message = 'This is a test message.';
// sendEmail(email, message);
// sendSMS(smsRecipient, message);
// sendWhatsAppMessage(whatsappRecipient, message);
//# sourceMappingURL=mailer.js.map