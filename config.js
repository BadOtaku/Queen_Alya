//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kingdavid23565@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/STAR-KING0/Queen_Alya";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/b065f0f673cae5452c358.jpg";
global.devs = "2348100835767";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2347043759577";
global.style = process.env.STYLE || "3";
global.cronSecret = process.env.CRON_SECRET || "fallback_secret_key";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/b065f0f673cae5452c358.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTVA3Z2pRMGJEbndrNEZiOVRrUnBOUDMzaW81M3o2QmRlYzFlSFlOTHNYaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTDcwNitRTFZTSnl5ZkttWHpWUzJyaW1YRVZzZGNyTnNMMkc3c1BFMEVnaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLSVFrZmZzMG5GNlV3endEZTdZc3JYVUVCRGFUbDVSalB1aVp0MmlJczE0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnSW1uWGsyMHFsYmg0NkZjUVFrdStTR0dDbjlKWVdtbnpHL1FhaTVjaURzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklIbEJtd0dEdS9HaG9xWlp2MEtXZm1xcnBLSmlkZmczR1VQck5OWVBPWDg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhxbmQ2Mmt3U1JnYURFcmhWd1ZWWTRwelVYcWljdHVVVkFCT3lEUGJrdzg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRURDeTBnVlErQmxNLzA3czByWVEzSWoxUllEL3dKVlltRGpqSm1WTFZIMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0h4azdVSGRldC9NU09XSm5NQkh1OHhpZE1XSmFTWUdDejhIRlQ5T3Z3Yz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhnSTNuanpCMWhZbHRpbGdJNEwzVnlYb2h3ejhDcGpyN1R2UEJKU3NQTU5ydFU5dVhDL2hFOFIwcHVBYVRsRGFrMSt2SXRlWHRrMm5NSU1DWHp1ZUJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTE5LCJhZHZTZWNyZXRLZXkiOiJSNndtQU1ZQ0xDOXZNY2N2QUJlNWtZZ2RlaS9YS3RFR3A1TDlKbGtWNzFrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI0aXlpQ1FpblRvZUxQVzRsLU1mYjJRIiwicGhvbmVJZCI6ImNjYzI4MTVhLTMyM2QtNGVlOC1hMTI1LTE0YmU2ZGI3YTJjYiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJEWXBKZlpXWGNRakFOK2dQMnR4Vkw3WFRmQmM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVDhiL2tCUGxnL2J2SGc2QlEweXBlVExZWGZRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjgyTFJHQ0xaIiwibWUiOnsiaWQiOiIyMzQ5MDM4MTg0MDE2OjI3QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPS1F1YXdHRUxuTDhyVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIzMkJPc3pBK0w4ekRsT0UyNUpuMmttTEZEbzR2RWJzYUNFd3lMVmtyMW1NPSIsImFjY291bnRTaWduYXR1cmUiOiJGcGdqTERiemoxVnhSWEx6cDNuZDU2MjFRSDVuZXZTNU1VTG9YOXBPUUJJb2tyY0l2WmtWeTFWVU82a0dUdWw0WnhmNERvTjRLZS9tWHNnNzBZMENCQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiY0VzRnU2M1pGeVM4THNNckpWbWNSVVl4bHlBdTM4VUlPNFZFbGh0WWg3MllXdnczREFVWWd1bVVzRiszdm9NVExqTi9FdUJ5MHpzTzZJSngvMCt4Q2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MDM4MTg0MDE2OjI3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmQ5Z1RyTXdQaS9NdzVUaE51U1o5cEppeFE2T0x4RzdHZ2hNTWkxWks5WmoifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjM2MzkyMzh9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ALYA™`",
  author: process.env.PACK_AUTHER || "QUEEN_ALYA",
  packname: process.env.PACK_NAME || "A L Y A",
  botname: process.env.BOT_NAME || "QUEEN_ALYA",
  ownername: process.env.OWNER_NAME || "STAR KING",
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A L Y A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
