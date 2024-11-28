const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: process.env.ALIVE_IMG || "Alive ඉමේජ් එකක url එකක් දාන්න ඕනා",
ALIVE_MSG: process.env.ALIVE_MSG || "I am THARUSHA-MD whatsapp bot i'm alive now🎈✅",
};
