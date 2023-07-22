import Twilio from 'twilio';
const accountSid = "AC63354e1bf217c5e9e208509de3386e07";
const authToken = '4a26320a2720e10fae46426d86e4d26f';
const twilioClient = Twilio(accountSid, authToken);
async function sendWhatsAppMessage(phoneNumber, message) {
    try {
        await twilioClient.messages.create({
            body: message,
            from: 'whatsapp:+14155238886',
            to: `whatsapp:${phoneNumber}`,
        });
        console.log('WhatsApp message sent');
    }
    catch (error) {
        console.error('Error sending WhatsApp message:', error);
    }
}
export default sendWhatsAppMessage;
//# sourceMappingURL=whatsapp.js.map