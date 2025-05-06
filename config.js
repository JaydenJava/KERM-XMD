//#ENJOY BRO😍
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Kermd237@gmail.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://Rayan:<Emmanuel237>@cluster0.8twd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Kgtech-cmr/KERM-XMD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/gqcoxn.jpeg";
global.devs = "https://wa.me/237650564445 , https://wa.me/237656520674";
global.sudo = process.env.SUDO || "4915562378343";
global.owner = process.env.OWNER_NUMBER || "4915563151347";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/gqcoxn.jpeg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kgtech-v2-session.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOE9aYTROZTlkd0locjd4eU5hMENJTXNyS0dKbGoybzJSaUltKzNaU0FHaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid25paERxRDl0TmlwSnZGQWZ1OW1kZ0liK2tRbmc0YlQzNU1palRkM3NERT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrTjJ2anNWdFo5U2U3R29SSHR0MlRPWmVBbjNINUNIdTFHM0FpNG0zVldjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxSlBTUmNIT3YvZmFST3VxYS9MbitLbnN2QUlsMjJxWVI4aG9CZ1I4ZDNvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlNeWZMSFYrd1NqcXRYT2FaUUk0L1Q2dTFEK3RSNDFxRkNPN2V6MXB3RTg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRiQjhtUjdjdE9UK0pELzYrVW5jcEsrQU1OckNXdnVHTmRiQ1BNbHJuRGM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUltVERNTGtwSEVCclpHejFLR3h3MXdtT0poU2w0aE05ajl6bFVWTGkyND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVTdSY0MyT3FweFp4dzJXMEJaZlZsbnp6cFFzL0IrWW1YSGUraENaclMyMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii85SHUxSThoNTZGT2NNZkJ3Sm9IU0srbzVuZVJoUEdnOTJPblo1bmxZbzJLOERobnVFR2VTbFZoYm1aS0ZmUTRVWE9kQzl5czVyUE8wTi9tRjBydmdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY2LCJhZHZTZWNyZXRLZXkiOiJJVGs2U3p6Z1Y2Wk9MU1VZay9TVjlwd2tzRC9TZTM5aU5mbzZsSU52MlNNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI4bWJ0a0tVMlRaNmM0V2FRR2ZTUURRIiwicGhvbmVJZCI6IjM4OTU3MjU1LTA1NTItNDM4OC1iZWU5LWYzZWU4MzQ4MmVjYiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzMVNkMGl1VDR4aVFuRXozTzhKYmt0Y2hSN2M9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTGxKSHgya1ludzErZlVHbHg4cnJqK1dSdDNRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlZWVk1XRFdTIiwibWUiOnsiaWQiOiIyNTY3NDU5NDQxNzg6NjBAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01PeHY3OEdFT0RNNk1BR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IldRUXh2QndNU3lNVy9ZT3B5YnRVWVllalNSRm9QdldRZ3dqYi84ZXpvRnM9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjVtcHl4dFNoL0FXQ0xRYjNMZy96dzNhK2s5czJPcy9SZEcyUFh0V3RZOWx6VzhGekYyN2J6bmhIazNWVFBCbyt6OHA0Tm5YZXBMYWVSMGdyb2NVZ0J3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJMRjBicFU0MzQ5bUJjSXJBQU5oTms0UzJ6NU1hQjgrTDJYZ1AwcXkyMk52cm56SSswRnlCaTNpN2w5L2REaFpSeTRiRkwzbytpMmdEeWdlSWxpcXBpZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1Njc0NTk0NDE3ODo2MEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWa0VNYndjREVzakZ2MkRxY203VkdHSG8wa1JhRDcxa0lNSTIvL0hzNkJiIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQ2NTQ0MjM4LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUEyOSJ9="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "2.1.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜ KG TECH⌝☜`",
  author: process.env.PACK_AUTHER || "KG TECH",
  packname: process.env.PACK_NAME || "𝔹𝕃𝔸ℂ𝕂𝕊𝕂𝕐-𝕄𝔻",
  botname: process.env.BOT_NAME || "𝔹𝕃𝔸ℂ𝕂𝕊𝕂𝕐-𝕄𝔻",
  ownername: process.env.OWNER_NAME || "☞⌜Martin⌝☜",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "KERM").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
