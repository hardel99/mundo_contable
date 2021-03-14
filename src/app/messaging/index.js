var accountSid = "AC5fc356974d34970c6d64201cc0531a29"; // Your Account SID from www.twilio.com/console
var authToken = "bc29df4c46add674f3c351a573c49b15"; // Your Auth Token from www.twilio.com/console

var twilio = require("twilio");
var client = new twilio(accountSid, authToken);

/**Params:
 * text - the text message
 * number - the nummber what would recieve the message, mus have the format +???actualNumber,
 * where ??? is the country extension & and actual number is, well teh actual number
 */
/**
 * TODO:
 * ?Restrictions for sending a message(freemium plan)
 * ?Contact list for user
 * ?Register/Login
 */
function sendMessage(text, number) {
    client.messages
        .create({
            body: text,
            to: number,
            from: "+15053023912",
        })
        .then((message) => console.log(message.sid));
}
