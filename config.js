//Arthur 
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUVLYXpzeGp2N1ZnSHpDVzFMbklscFJxY1JJOGgvUC9EbytTU1BrMERFZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUNvNklMVVVCbHA2bVEyVWl4UU01enFBd25HdUNLazZBV3pibFdEU3lXcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlRDBwbnZyNnJkSzVIejhGd2J1SVkrMGJFSFJjcmwwcjNWTmdOT25iQmxjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwNWlpQ0VTSWlrSFFkT3dXMHNwYzdlaFF5b09Ia0pQdG1RTnFwZDJoK0FvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNMYmFVenBnSEkwTnBIZTg4aitBdWhYaE52b2pSQ2JCbEJqMUJJYVZQRnM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZ0V1hWMG5vamozVDRzQjlPZDUvTkNtanprcXJiRmsvK1ppMjBWNXIvd3c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0h6YndIRTUrVzQ0YXBoNDVBSUMrQkFsZm1sTDJtbWJNSGx6OFk0dUtWVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTzdaU2N6L0RlUmtnN3ZUTThOZHNXOGtuVHpFVWd1Ris0OUZ4V0wyRWtHRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNwYTlQZ1Ayc0JwQkdDVWc2NXhsQ05qRFNiQVlDdW9xcjU0Yk1YQ3JZNzJndzhuS1ExZ3VaWDlWYWtlR2dkK0FHNC9MSTVuNWJCZWpZb3hjZzd3cmd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA2LCJhZHZTZWNyZXRLZXkiOiJQRVpPQVg4eW1Db2ZFWW45REVZSE8vR2lSeHBHbEcvZ0kvY24wbDUwdzN3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkxMjM3MjEwMjZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQzY1MDdFNUZFMjJDNjc4MkQ0OTgzQkIwNEQwM0QxRUMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxOTk1NDc2M30seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0OTEyMzcyMTAyNkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJEQUU0MjY3RTA0NTQ1NTUxMUU3NjRGNjJGNjU5NjdERSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzE5OTU0NzYzfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ5MTIzNzIxMDI2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6Ijk5QTU3N0Q5QjNFNzQ5NDg5MEZBMzA2NjY2REU3RERCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTk5NTQ3NjR9LHsia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkxMjM3MjEwMjZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRDgxMzEwMjdFODNDQTA1Rjc4RTE4OUVDMDcwN0I1RTYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxOTk1NDc2NH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiU1dJTnI3WENRRUdudXp4YTAxUDJ6dyIsInBob25lSWQiOiJiNWY1YzdiZS02ZTM2LTRkOTctYTdjZi03OGVkZjY3OTQ2MTYiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoickRWN0wzTU5xOTBjM1NVRTR5ZmxPaUFiUXNFPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5qTkFEZENaSlVSSjJPSHFwbjVteTU2ZFRITT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJCTjdSRUdRNSIsIm1lIjp7ImlkIjoiMjM0OTEyMzcyMTAyNjozMkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJLaW5nIPCfkZEifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0wvc3U1OEdFTHJha2JRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InNzV3BsVlRnc1VsRE9HVHdVSU5jSlE5VVBEZCt3YzArRFhjWDJYWStnMXM9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjVOUHNZeVRuWUd5M1VueFpBTmxlcnkvSEJySmVKeEMzTVdJeUpZejlWb3pGR3d4WXgvb2RDOHJUSEZiblhPN1k5WW5ENmU4cGJ0UkMvWndSUjZUTkRnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIxcUVrRTdCOXlpNTNwcmFyOHdiY1BzbE9xSG14bVljUmthVjdZZUxUbXErK0JaV2IxYVlSdzR2REhJRmxxeXQyNGZ4U3FlU0VMQ2xvczJwY1BxM0poUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkxMjM3MjEwMjY6MzJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYkxGcVpWVTRMRkpRemhrOEZDRFhDVVBWRHczZnNITlBnMTNGOWwyUG9OYiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxOTk1NDc2MCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFLbDgifQ==";
global.MONGODB = process.env.MONGODB_URI || "";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.sudo = process.env.SUDO
  ? process.env.SUDO.replace(/[\s+]/g, "")
  : "null";
global.owner = process.env.OWNER_NUMBER
  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, "")
  : "2348100835767";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://i.imgur.com/63V05M3.jpeg,https://i.imgur.com/63V05M3.jpeg";
global.userImages =
  process.env.USER_IMAGES ||
  "https://i.imgur.com/63V05M3.jpeg,https://i.imgur.com/63V05M3.jpeg,https://i.imgur.com/63V05M3.jpeg";
///===========[global iMPORTS]====================//

module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`𝔸ℝ𝕋ℍ𝕌ℝ-𝕄𝔻`",
  author: process.env.PACK_AUTHER || "𝔸ℝ𝕋ℍ𝕌ℝ-𝕄𝔻",
  packname: process.env.PACK_NAME || "𝔸ℝ𝕋ℍ𝕌ℝ-𝕄𝔻",
  botname: process.env.BOT_NAME || "𝔸ℝ𝕋ℍ𝕌ℝ-𝕄𝔻",
  ownername: process.env.OWNER_NAME || "𝔸ℝ𝕋ℍ𝕌ℝ-𝕄𝔻",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WhatsApp").toUpperCase(),
};
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Sanji-king/Arthur-Md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.website = process.env.GURL || "https://chat.whatsapp.com/DC38hUUVVaa1vp573QBYBF";
global.devs = "2348100835767";
global.msg_style = process.env.STYLE || "4";
global.session_reset = process.env.SS_RESET || "false";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.waPresence = process.env.WAPRESENCE || "null";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "null";
global.read_status_from = process.env.READ_STATUS_FROM || "null";
global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://mainv2-f66485a0f702.herokuapp.com/";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
