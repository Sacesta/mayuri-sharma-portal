import Twilio from 'twilio';
const accountSid = "AC63354e1bf217c5e9e208509de3386e07";
const authToken = '4a26320a2720e10fae46426d86e4d26f';
const twilioClient = Twilio(accountSid, authToken);
async function sendSMS(phoneNumber, message) {
    try {
        await twilioClient.messages.create({
            body: message,
            from: '+18145264803',
            to: phoneNumber,
        });
        console.log('SMS sent');
    }
    catch (error) {
        console.error('Error sending SMS:', error);
    }
}
export default sendSMS;
//# sourceMappingURL=sms.js.map