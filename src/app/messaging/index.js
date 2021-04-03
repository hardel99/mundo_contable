require("dotenv").config({ path: ".env.local" });

var client = require("twilio")(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_TOKEN
);

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
        .then((message) => console.log(message.sid))
        .catch((err) => console.log(err));
}

sendMessage("prueba con .env.local", "+50372735902");
