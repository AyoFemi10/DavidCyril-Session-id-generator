const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('0029VahusSh0QeaoFzHJCk2x')
const {makeid} = require('./id');
const QRCode = require('qrcode');
const express = require('express');
const path = require('path');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
	default: Ayomikun_Tech,
	useMultiFileAuthState,
	jidNormalizedUser,
	Browsers,
	delay,
	makeInMemoryStore,
} = require("@whiskeysockets/baileys");

function removeFile(FilePath) {
	if (!fs.existsSync(FilePath)) return false;
	fs.rmSync(FilePath, {
		recursive: true,
		force: true
	})
};
const {
	readFile
} = require("node:fs/promises")
router.get('/', async (req, res) => {
	const id = makeid();
	async function AYOMIKUN_MD_QR_CODE() {
		const {
			state,
			saveCreds
		} = await useMultiFileAuthState('./temp/' + id)
		try {
			let Qr_Code_By_Ayomikun = Ayomikun({
				auth: state,
				printQRInTerminal: false,
				logger: pino({
					level: "silent"
				}),
				browser: Browsers.macOS("Desktop"),
			});

			Qr_Code_By_Ayomikun_Tech.ev.on('creds.update', saveCreds)
			Qr_Code_By_Ayomikun_Tech.ev.on("connection.update", async (s) => {
				const {
					connection,
					lastDisconnect,
					qr
				} = s;
				if (qr) await res.end(await QRCode.toBuffer(qr));
				if (connection == "open") {
					await delay(5000);
					let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
					await delay(800);
				   let b64data = Buffer.from(data).toString('base64');
				   let session = await Qr_Code_By_Ayomikun.sendMessage(Qr_Code_By_Ayomikun.user.id, { text: '' + b64data });
	
				   let AYOMIKUN_MD_TEXT = `
*_Session Connected By AYOMIKUN*
*_Made With 🤍_*
______________________________________
╔════◇
║ *『 AMAZING YOU'VE CHOSEN AYOMIKUN V2 』*
║ _You Have Completed the First Step to Deploy a Whatsapp Bot._
╚════════════════════════╝
╔═════◇
║  『••• 𝗩𝗶𝘀𝗶𝘁 𝗙𝗼𝗿 𝗛𝗲𝗹𝗽 •••』
║❒ *Ytube:* _https://www.youtube.com/@
║❒ *Owner:* https://wa.me/2348174836550_
║❒ *Repo:* _https://github.com/AyoFemi10/AYOMIKUN-V2_
║❒ *WaGroup:* _https://chat.whatsapp.com/
║❒ *WaChannel:* _https://whatsapp.com/channel/
║❒ *Plugins:* _https://github.com/AyoFemi10
╚════════════════════════╝
_____________________________________
	
_Don't Forget To Give Star To My Repo_`
	 await Qr_Code_By_Ayomikun_Tech.sendMessage(Qr_Code_By_Wasi_Tech.user.id,{text:AYOMIKUN_MD_TEXT},{quoted:session})



					await delay(100);
					await Qr_Code_By_Ayomikun.ws.close();
					return await removeFile("temp/" + id);
				} else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
					await delay(10000);
					WASI_MD_QR_CODE();
				}
			});
		} catch (err) {
			if (!res.headersSent) {
				await res.json({
					code: "Service is Currently Unavailable"
				});
			}
			console.log(err);
			await removeFile("temp/" + id);
		}
	}
	return await AYOMIKUN_MD_QR_CODE()
});
module.exports = router
