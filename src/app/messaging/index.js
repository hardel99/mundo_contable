var accountSid = "AC5fc356974d34970c6d64201cc0531a29"; // Your Account SID from www.twilio.com/console
var authToken = "bc29df4c46add674f3c351a573c49b15"; // Your Auth Token from www.twilio.com/console

var twilio = require("twilio");
var client = new twilio(accountSid, authToken);

client.messages
    .create({
        body: "hello there ewe",
        to: "+50378133409", // Text this number
        from: "+15053023912", // From a valid Twilio number
    })
    .then((message) => console.log(message.sid));
