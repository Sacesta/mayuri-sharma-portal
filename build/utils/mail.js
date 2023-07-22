import { SMTPClient } from 'emailjs';
const client = new SMTPClient({
    user: 'yagneshjp1406@gmail.com',
    password: 'Yogi@1406',
    host: 'smtp.gmail.com',
    ssl: true,
});
// send the message and get a callback with an error or details of the message that was sent
async function sendEmailTest(email) {
    try {
        const message = await client.sendAsync({
            text: 'i hope this works',
            from: 'yagneshjp1406@gmail.com',
            to: 'mailcheck801@gmail.com',
            subject: 'testing emailjs',
        });
        console.log(message);
        client.send(message, function (err, message) {
            console.log(err || message);
        });
    }
    catch (error) {
        console.log(error);
    }
}
export default sendEmailTest;
//# sourceMappingURL=mail.js.map