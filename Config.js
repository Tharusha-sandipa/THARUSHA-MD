const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/tZ1YYLs/33ec0611ef73c3c7.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "I am THARUSHA-MD whatsapp bot i'm alive now🎈✅",
};
