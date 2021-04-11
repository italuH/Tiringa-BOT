/*Olá usuário..
Este bot foi criado para o uso sem fins lucrativos
Não queira um processo🤗*/

//_API WHATSAPP WEB
const {
  WAConnection,
  MessageType,
  Presence,
  Mimetype,
  GroupSettingChange,
  MessageOptions,
  WALocationMessage,
  WA_MESSAGE_STUB_TYPES,
  ReconnectMode,
  ProxyAgent,
  waChatKey,
  mentionedJid,
  processTime,
  ChatModification,
} = require('@adiwajshing/baileys');

//_MÓDULOS NPM
const fs = require('fs');
const moment = require('moment-timezone');
const { exec, spawn } = require('child_process');
const kagApi = require('@kagchi/kag-api');
const fetc = require('node-fetch');
const tiktod = require('tiktok-scraper');
const ffmpeg = require('fluent-ffmpeg');
const {removeBackgroundFromImageFile} = require('remove.bg');
const imgbb = require('imgbb-uploader');
const lolis = require('lolis.life');
const loli = new lolis();
const speed = require('performance-now');
const cd = 4.32e+7 ;
const qrcode = require("qrcode-terminal");
const crypto = require('crypto');
const axios = require('axios').default;
const Nekos = require('nekos.life');
const neko = new Nekos();
const imageToBase64 = require('image-to-base64');
const util = require('util');

//_ARQUIVOS DA LIB
const {color, bgcolor} = require('./lib/color');
const {fetchJson} = require('./lib/fetcher');
const {recognize} = require('./lib/ocr');
const {wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, clos } = require('./lib/functions');
const dl = require("./lib/downloadImage.js");

//_JSON GRUPO/CONFIGURAÇÕES
const nsfw = JSON.parse(fs.readFileSync('./data/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./data/simi.json'))
const welkom = JSON.parse(fs.readFileSync('./data/welkom.json'));
//const { tx } = JSON.parse(fs.readFileSync('./data/settings.json'));

//_JSON INFORMAÇÕES DO USUÁRIO
const _leveling = JSON.parse(fs.readFileSync('./datauser/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./datauser/level.json'))
const _registered = JSON.parse(fs.readFileSync('./datauser/registered.json'));
const ban = JSON.parse(fs.readFileSync('./datauser/banned.json'))
const uang = JSON.parse(fs.readFileSync('./datauser/uang.json'))

//_ OUTROS ARQUIVOS DO BOT
const { slot } = require('./database/slot')

//_INFORMAÇÕES DO BOT(settings)
prefix = '='
const botName = "Tiringa-BOT"
const ownerNumber = "5574999510904"
const ownerName = "Italu"

//_LISTA DE CRS
const cr = "Tiringa-BOT v11.7"
const crfig = "Sticker criado com sucesso🔧"
const crlv = "NOVO LEVEL🥳"

//_VCARD DONO DO BOT
const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + 'FN:Italu🧙‍♂️\n' 
            + 'ORG:Dono do Tiringa;\n' 
            + 'TEL;type=CELL;type=VOICE;waid=557499510904:+55 74 9951 0904\n' 
            + 'END:VCARD'

//_FUCTION REGISTRO
const getLevelingXp = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }
        
        const getRegisterTime = (sender) => {
            let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _registered[position].time
            }
        }

      const getRegisterAge = (sender) => {
            let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _registered[position].age
            }
        }
       
        const getRegisterSerial = (sender) => {
            let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _registered[position].serial
            }
        }

        const getRegisterName = (sender) => {
            let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _registered[position].name
            }
        }

        const getRegisterNo = (sender) => {
            let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _registered[position].id
            }
        }

        const getLevelingLevel = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }

        const addLevelingXp = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./datauser/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./datauser/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (sender) => {
            const obj = {id: sender, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./datauser/level.json', JSON.stringify(_level))
        }
             
         const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }

        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./datauser/registered.json', JSON.stringify(_registered))
        }

        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
        
        const addATM = (sender) => {
        	const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./datauser/uang.json', JSON.stringify(uang))
        }
        
        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./datauser/uang.json', JSON.stringify(uang))
            }
        }
       
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }


//_FUCTION TEMPORIZADOR
function temporizador(segundos){
  function tempo(s){
    return (s < 10 ? '0' : '') + s;
  }
  var horas = Math.floor(segundos / (60*60));
  var minutos = Math.floor(segundos % (60*60) / 60);
  var segundos = Math.floor(segundos % 60);
  return `${tempo(horas)}:${tempo(minutos)}:${tempo(segundos)}`;
}

//_CONEXÃO WHATSAPP WEB 
async function starts() {
	const tiringa = new WAConnection()
	tiringa.logger.level = 'warn'
	console.log(banner.string)
	tiringa.on('qr', () => {
		console.log(color('👆'), color(' Escanear o código acima para iniciar o Tiringa-BOT!'))
	})

	fs.existsSync('./tiringa.json') && tiringa.loadAuthInfo('./tiringa.json')
	tiringa.on('connecting', () => {
		start('2', 'Conectando o Tiringa-BOT...')
	})
	tiringa.on('open', () => {
		success('2', 'Tiringa-BOT conectado!!!')
	})
	await tiringa.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./tiringa.json', JSON.stringify(tiringa.base64EncodedAuthInfo(), null, '\t'))

//_FUCTION DE BOAS-VINDAS
tiringa.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await tiringa.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await tiringa.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Olá @${num.split('@')[0]}\nSeja bem vindo(a) ao grupo: ${mdata.subject}`
				let buff = await getBuffer(ppimg)
				tiringa.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await tiringa.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `O integrante @${num.split('@')[0]} saiu do grupo... bye bye👋`
				let buff = await getBuffer(ppimg)
				tiringa.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})

      /*  tiringa.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})*/


      tiringa.on('chat-update', async (mek) => {
		try {
            if (!mek.hasNewMessage) return
            mek = mek.messages.all()[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('America/Sao_Paulo').format('DD/MM HH:mm:ss')
			const date = moment.tz('America/Sao_Paulo').format('DD/MM/YY')
            const hr = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
            const timi = moment.tz('America/Sao_Paulo').add(30, 'days').calendar();
            const timu = moment.tz('America/Sao_Paulo').add(20, 'days').calendar();
            body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
            const anun = budy.slice(0).trim().split(/ +/).shift().toLowerCase()

        const sotoy = [
        '🥑 : 🥑 : 🥑',
        '🍉 : 🍉 : 🍉',
        '🍓 : 🍓 : 🍓',
        '🍎 : 🍎 : 🍎',
        '🍍 : 🍍 : 🍍',
        '🥝 : 🥝 : 🥝',
        '🍑 : 🍑 : 🍑',
        '🥥 : 🥥 : 🥥',
        '🍇 : 🍇 : 🍇',
        '🍊 : 🍊 : 🍊',
        '🔔 : 🔔 : 🔔',
        '🍒 : 🍒 : 🍒',
        '🍌 : 🍌 : 🍌',
        '🍐 : 🍐 : 🍐',
        '🍋 : 🍋 : 🍋',
		'🍊 : 🍒 : 🍐',
		'🥝 : 🍉 : 🥑',
		'🍌 : 🍒 : 🔔',
		'🍐 : 🔔 : 🥝',
		'🍉 : 🍋 : 🍒',
		'🍋 : 🥑 : 🍌',
		'🔔 : 🥥 : 🍇',
		'🍓 : 🍐 : 🍇',
		'🍊 : 🍍 : 🍉',
		'🍒 : 🔔 : 🍊',
		'🍇 : 🥑 : 🍐',
		'🍊 : 🍋 : 🔔',
		'🔔 : 🍒 : 🍐',
		'🍉 : 🍓 : 🥑',
        '🍊 : 🍋 : 🔔',		
		'🍐 : 🍒 : 🍋',
		'🍍 : 🍐 : 🥝',
		'🥑 : 🍓 : 🍉',
		'🍑 : 🔔 : 🥑',
		'🍌 : 🍒 : 🔔',
		'🍉 : 🍍 : 🥥',
		'🍊 : 🍋 : 🍒',
		'🍋 : 🍍 : 🍌',
		'🥥 : 🍎 : 🍉',
		'🔔 : 🍑 : 🍓',
		'🍉 : 🥑 : 🍐',
		'🍒 : 🔔 : 🍊',
		'🍇 : 🍍 : 🍐',
		'🍓 : 🥑 : 🍍',
		'🔔 : 🍒 : 🍐',
		'🥥 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',		
		'🍐 : 🍉 : 🍋',
		'🍐 : 🍑 : 🍐',
		'🥑 : 🍒 : 🍓',
		'🔔 : 🍎 : 🍇',
		'🍌 : 🍒 : 🔔',
		'🍐 : 🥥 : 🍍',
		'🍊 : 🍋 : 🍒',
		'🍓 : 🍉 : 🍌',
		'🍍 : 🔔 : 🍇',
		'🔔 : 🍐 : 🍎',
		'🍊 : 🍒 : 🍐',
		'🍉 : 🔔 : 🥑',
		'🍇 : 🥥 : 🍎',
		'🍊 : 🍋 : 🔔',
		'🔔 : 🍓 : 🍐',
		'🔔 : 🍒 : 🍊',
        '🥑 : 🍉 : 🔔',		
		'🍐 : 🍒 : 🍋',
		'🍑 : 🍎 : 🍐',
		'🍊 : 🍍 : 🍒',
		'🔔 : 🔔 : 🥑',
		'🍌 : 🍒 : 🍉',
		'🍐 : 🍓 : 🍎',
		'🍊 : 🍋 : 🍒',
		'🍋 : 🥑 : 🍌',
		'🔔 : 🍎 : 🍇',
		'🍉 : 🍐 : 🥥',
		'🔔 : 🍑 : 🥑',
		'🍒 : 🔔 : 🍊',
		'🍇 : 🍓 : 🍐',
		'🍊 : 🍋 : 🔔',
		'🥑 : 🍍 : 🍐',
		'🔔 : 🍒 : 🍉',
        '🍊 : 🥑 : 🔔',		
		'🍎 : 🍒 : 🍎',
		'🍐 : 🍉 : 🍐',
		'🍊 : 🥑 : 🍓',
		'🍋 : 🔔 : 🍇',
		'🍌 : 🍒 : 🍉',
		'🍐 : 🔔 : 🥑',
		'🍓 : 🍋 : 🍒',
		'🍋 : 🥑 : 🍌',
		'🔔 : 🍎 : 🥥',
		'🍉 : 🍐 : 🍇',
		'🍊 : 🍒 : 🍐',
		'🥑 : 🍓 : 🍉',
		'🍇 : 🍒 : 🍍',
		'🍊 : 🥑 : 🍑',
		'🍑 : 🍎 : 🍐',
		'🔔 : 🍒 : 🍊',
        '🍉 : 🥝 : 🍎',		
		'🍐 : 🍉 : 🍋',
		'🍐 : 🥑 : 🍐',
		'🍊 : 🍒 : 🍓',
		'🍑 : 🔔 : 🍉',
		'🍌 : 🥑 : 🥝',
		'🍐 : 🍉 : 🔔',
		'🍊 : 🍓 : 🍒',
		'🍋 : 🍋 : 🍉',
		'🥑 : 🍎 : 🍇',
		'🔔 : 🍑 : 🥑',
		'🍊 : 🥥 : 🍐',
		'🍍 : 🍓 : 🍊',
		'🍉 : 🍒 : 🍐',
		'🍊 : 🍋 : 🍉',
		'🔔 : 🍎 : 🍐',
		'🍓 : 🥑 : 🍊',
        '🍊 : 🍋 : 🔔',		
		'🍐 : 🍒 : 🍑',
		'🥝 : 🍉 : 🍐',
		'🍓 : 🍍 : 🍒',
		'🔔 : 🔔 : 🍇',
		'🍌 : 🍒 : 🍉',
		'🍐 : 🍉 : 🍓',
		'🍊 : 🍐 : 🍒',
        '🍊 : 🍒 : 🍐',
		'🥝 : 🍉 : 🥑',
		'🥑 : 🍒 : 🍐',
		'🍊 : 🍋 : 🔔',
		'🔔 : 🍍 : 🍐',
		'🍓 : 🍉 : 🍊',
        '🍊 : 🍋 : 🍓',		
		'🍐 : 🍒 : 🍋',
		'🥑 : 🍐 : 🥥',
		'🍊 : 🍒 : 🍍',
		'🍎 : 🔔 : 🍇',
		'🍌 : 🍒 : 🍓',
		'🍓 : 🔔 : 🍎',
		'🍊 : 🍉 : 🍍',
		'🍋 : 🍋 : 🍌',
		'🍎 : 🔔 : 🍉',
		'🔔 : 🍐 : 🍇',
		'🍊 : 🍒 : 🍐',
		'🍍 : 🔔 : 🥑',
		'🍇 : 🥝 : 🍎',
		'🍊 : 🍉 : 🔔',
		'🔔 : 🍓 : 🍐',
		'🔔 : 🍒 : 🍊',
        '🥑 : 🍋 : 🔔',		
		'🍐 : 🍒 : 🍋',
		'🍉 : 🍐 : 🍉',
		'🍊 : 🥥 : 🥑',
		'🔔 : 🍍 : 🍇',
		'🍌 : 🍎 : 🔔',
		'🍐 : 🔔 : 🍎',
		'🍊 : 🥥 : 🍒',
		'🍉 : 🍋 : 🍌',
		'🍑 : 🔔 : 🍇',
		'🔔 : 🍐 : 🍉',
		'🍊 : 🥝 : 🍐',
		'🍍 : 🔔 : 🍊',
		'🍇 : 🍒 : 🍐',
		'🍊 : 🍋 : 🔔',
		'🍉 : 🍒 : 🍐',
		'🔔 : 🥝 : 🍊',
        '🍊 : 🍋 : 🔔',		
		'🍐 : 🍍 : 🍋',
		'🥝 : 🍐 : 🍉',
		'🍊 : 🍑 : 🍍',
		'🔔 : 🔔 : 🍓',
		'🍌 : 🍒 : 🔔',
		'🍐 : 🔔 : 🥝',
		'🍉 : 🍋 : 🍒',
		'🍋 : 🥑 : 🍌',
		'🔔 : 🥥 : 🍇',
		'🍓 : 🍐 : 🍇',
		'🍊 : 🍍 : 🍉',
		'🍒 : 🔔 : 🍊',
		'🍇 : 🥑 : 🍐',
		'🍊 : 🍋 : 🔔',
		'🔔 : 🍒 : 🍐',
		'🍉 : 🍓 : 🥑',
        '🍊 : 🍋 : 🔔',		
		'🍐 : 🍒 : 🍋',
		'🍍 : 🍐 : 🥝',
		'🥑 : 🍓 : 🍉',
		'🍑 : 🔔 : 🥑',
		'🍌 : 🍒 : 🔔',
		'🍉 : 🍍 : 🥥',
		'🍊 : 🍋 : 🍒',
		'🍋 : 🍍 : 🍌',
		'🥥 : 🍎 : 🍉',
		'🔔 : 🍑 : 🍓',
		'🍉 : 🥑 : 🍐',
		'🍒 : 🔔 : 🍊',
		'🍇 : 🍍 : 🍐',
		'🍓 : 🥑 : 🍍',
		'🔔 : 🍒 : 🍐',
		'🥥 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',		
		'🍐 : 🍉 : 🍋',
		'🍐 : 🍑 : 🍐',
		'🥑 : 🍒 : 🍓',
		'🔔 : 🍎 : 🍇',
		'🍌 : 🍒 : 🔔',
		'🍐 : 🥥 : 🍍',
		'🍊 : 🍋 : 🍒',
		'🍓 : 🍉 : 🍌',
		'🍍 : 🔔 : 🍇',
		'🔔 : 🍐 : 🍎',
		'🍊 : 🍒 : 🍐',
		'🍉 : 🔔 : 🥑',
		'🍇 : 🥥 : 🍎',
		'🍊 : 🍋 : 🔔',
		'🔔 : 🍓 : 🍐',
		'🔔 : 🍒 : 🍊',
        '🥑 : 🍉 : 🔔',		
		'🍐 : 🍒 : 🍋',
		'🍑 : 🍎 : 🍐',
		'🍊 : 🍍 : 🍒',
		'🔔 : 🔔 : 🥑',
		'🍌 : 🍒 : 🍉',
		'🍐 : 🍓 : 🍎',
		'🍊 : 🍋 : 🍒',
		'🍋 : 🥑 : 🍌',
		'🔔 : 🍎 : 🍇',
		'🍉 : 🍐 : 🥥',
		'🔔 : 🍑 : 🥑',
		'🍒 : 🔔 : 🍊',
		'🍇 : 🍓 : 🍐',
		'🍊 : 🍋 : 🔔',
		'🥑 : 🍍 : 🍐',
		'🔔 : 🍒 : 🍉',
        '🍊 : 🥑 : 🔔',		
		'🍎 : 🍒 : 🍎',
		'🍐 : 🍉 : 🍐',
		'🍊 : 🥑 : 🍓',
		'🍋 : 🔔 : 🍇',
		'🍌 : 🍒 : 🍉',
		'🍐 : 🔔 : 🥑',
		'🍓 : 🍋 : 🍒',
		'🍋 : ?? : 🍌',
		'🔔 : 🍎 : 🥥',
		'🍉 : 🍐 : 🍇',
		'🍊 : 🍒 : 🍐',
		'🥑 : 🍓 : 🍉',
		'🍇 : 🍒 : 🍍',
		'🍊 : 🥑 : 🍑',
		'🍑 : 🍎 : 🍐',
		'🔔 : 🍒 : 🍊',
        '🍉 : 🥝 : 🍎',		
		'🍐 : 🍉 : 🍋',
		'🍐 : 🥑 : 🍐',
		'🍊 : 🍒 : 🍓',
		'🍑 : 🔔 : 🍉',
		'🍌 : 🥑 : 🥝',
		'🍐 : 🍉 : 🔔',
		'🍊 : 🍓 : 🍒',
		'🍋 : 🍋 : 🍉',
		'🥑 : 🍎 : 🍇',
		'🔔 : 🍑 : 🥑',
		'🍊 : 🥥 : 🍐',
		'🍍 : 🍓 : 🍊',
		'🍉 : 🍒 : 🍐',
		'🍊 : 🍋 : 🍉',
		'🔔 : 🍎 : 🍐',
		'🍓 : 🥑 : 🍊',
        '🍊 : 🍋 : 🔔',		
		'🍐 : 🍒 : 🍑',
		'🥝 : 🍉 : 🍐',
		'🍓 : 🍍 : 🍒',
		'🔔 : 🔔 : 🍇',
		'🍌 : 🍒 : 🍉',
		'🍐 : 🍉 : 🍓',
		'🍊 : 🍐 : 🍒',
        '🍊 : 🍒 : 🍐',
		'🥝 : 🍉 : 🥑',
		'🥑 : 🍒 : 🍐',
		'🍊 : 🍋 : 🔔',
		'🔔 : 🍍 : 🍐',
		'🍓 : 🍉 : 🍊',
        '🍊 : 🍋 : 🍓',		
		'🍐 : 🍒 : 🍋',
		'🥑 : 🍐 : 🥥',
		'🍊 : 🍒 : 🍍',
		'🍎 : 🔔 : 🍇',
		'🍌 : 🍒 : 🍓',
		'🍓 : 🔔 : 🍎',
		'🍊 : 🍉 : 🍍',
		'🍋 : 🍋 : 🍌',
		'🍎 : 🔔 : 🍉',
		'🔔 : 🍐 : 🍇',
		'🍊 : 🍒 : 🍐',
		'🍍 : 🔔 : 🥑',
		'🍇 : 🥝 : 🍎',
		'🍊 : 🍉 : 🔔',
		'🔔 : 🍓 : 🍐',
		'🔔 : 🍒 : 🍊',
        '🥑 : 🍋 : 🔔',		
		'🍐 : 🍒 : 🍋',
		'🍉 : 🍐 : 🍉',
		'🍊 : 🥥 : 🥑',
		'🔔 : 🍍 : 🍇',
		'🍌 : 🍎 : 🔔',
		'🍐 : 🔔 : 🍎',
		'🍊 : 🥥 : 🍒',
		'🍉 : 🍋 : 🍌',
		'🍑 : 🔔 : 🍇',
		'🔔 : 🍐 : 🍉',
		'🍊 : 🥝 : 🍐',
		'🍍 : 🔔 : 🍊',
		'🍇 : 🍒 : 🍐',
		'🍊 : 🍋 : 🔔',
		'🍉 : 🍒 : 🍐',
		'🔔 : 🥝 : 🍊',
        '🍊 : 🍋 : 🔔',		
		'🍐 : 🍍 : 🍋',
		'🥝 : 🍐 : 🍉',
		'🍊 : 🍑 : 🍍',
		'🔔 : 🔔 : 🍓',
		'🍌 : 🍒 : 🔔',
		'🍐 : 🔔 : 🥝',
		'🍉 : 🍋 : 🍒',
		'🍋 : 🥑 : 🍌',
		'🔔 : 🥥 : 🍇',
		'🍓 : 🍐 : 🍇',
		'🍊 : 🍍 : 🍉',
		'🍒 : 🔔 : 🍊',
		'🍇 : 🥑 : 🍐',
		'🍊 : 🍋 : 🔔',
		'🔔 : 🍒 : 🍐',
		'🍉 : 🍓 : 🥑',
        '🍊 : 🍋 : 🔔',		
		'🍐 : 🍒 : 🍋',
		'🍍 : 🍐 : 🥝',
		'🥑 : 🍓 : 🍉',
		'🍑 : 🔔 : 🥑',
		'🍌 : 🍒 : 🔔',
		'🍉 : 🍍 : 🥥',
		'🍊 : 🍋 : 🍒',
		'🍋 : 🍍 : 🍌',
		'🥥 : 🍎 : 🍉',
		'🔔 : 🍑 : 🍓',
		'🍉 : 🥑 : 🍐',
		'🍒 : 🔔 : 🍊',
		'🍇 : 🍍 : 🍐',
		'🍓 : 🥑 : 🍍',
		'🔔 : 🍒 : 🍐',
		'🥥 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',		
		'🍐 : 🍉 : 🍋',
		'🍐 : 🍑 : 🍐',
		'🥑 : 🍒 : 🍓',
		'🔔 : 🍎 : 🍇',
		'🍌 : 🍒 : 🔔',
		'🍐 : 🥥 : 🍍',
		'🍊 : 🍋 : 🍒',
		'🍓 : 🍉 : 🍌',
		'🍍 : 🔔 : 🍇',
		'🔔 : 🍐 : 🍎',
		'🍊 : 🍒 : 🍐',
		'🍉 : 🔔 : 🥑',
		'🍇 : 🥥 : 🍎',
		'🍊 : 🍋 : 🔔',
		'🔔 : 🍓 : 🍐',
		'🔔 : 🍒 : 🍊',
        '🥑 : 🍉 : 🔔',		
		'🍐 : 🍒 : 🍋',
		'🍑 : 🍎 : 🍐',
		'🍊 : 🍍 : 🍒',
		'🔔 : 🔔 : 🥑',
		'🍌 : 🍒 : 🍉',
		'🍐 : 🍓 : 🍎',
		'🍊 : 🍋 : 🍒',
		'🍋 : 🥑 : 🍌',
		'🔔 : 🍎 : 🍇',
		'🍉 : 🍐 : 🥥',
		'🔔 : 🍑 : 🥑',
		'🍒 : 🔔 : 🍊',
		'🍇 : 🍓 : 🍐',
		'🍊 : 🍋 : 🔔',
		'🥑 : 🍍 : 🍐',
		'🔔 : 🍒 : 🍉',
        '🍊 : 🥑 : 🔔',		
		'🍎 : 🍒 : 🍎',
		'🍐 : 🍉 : 🍐',
		'🍊 : 🥑 : 🍓',
		'🍋 : 🔔 : 🍇',
		'🍌 : 🍒 : 🍉',
		'🍐 : 🔔 : 🥑',
		'🍓 : 🍋 : 🍒',
		'🍋 : 🥑 : 🍌',
		'🔔 : 🍎 : 🥥',
		'🍉 : 🍐 : 🍇',
		'🍊 : 🍒 : 🍐',
		'🥑 : 🍓 : 🍉',
		'🍇 : 🍒 : 🍍',
		'🍊 : 🥑 : 🍑',
		'🍑 : 🍎 : 🍐',
		'🔔 : 🍒 : 🍊',
        '🍉 : 🥝 : 🍎',		
		'🍐 : 🍉 : 🍋',
		'🍐 : 🥑 : 🍐',
		'🍊 : 🍒 : 🍓',
		'🍑 : 🔔 : 🍉',
		'🍌 : 🥑 : 🥝',
		'🍐 : 🍉 : 🔔',
		'🍊 : 🍓 : 🍒',
		'🍋 : 🍋 : 🍉',
		'🥑 : 🍎 : 🍇',
		'🔔 : 🍑 : 🥑',
		'🍊 : 🥥 : 🍐',
		'🍍 : 🍓 : 🍊',
		'🍉 : 🍒 : 🍐',
		'🍊 : 🍋 : 🍉',
		'🔔 : 🍎 : 🍐',
		'🍓 : 🥑 : 🍊',
        '🍊 : 🍋 : 🔔',		
		'🍐 : 🍒 : 🍑',
		'🥝 : 🍉 : 🍐',
		'🍓 : 🍍 : 🍒',
		'🔔 : 🔔 : 🍇',
		'🍌 : 🍒 : 🍉',
		'🍐 : 🍉 : 🍓',
		'🍊 : 🍐 : 🍒',
        '🍊 : 🍒 : 🍐',
		'🥝 : 🍉 : 🥑',
		'🥑 : 🍒 : 🍐',
		'🍊 : 🍋 : 🔔',
		'🔔 : 🍍 : 🍐',
		'🍓 : 🍉 : 🍊',
        '🍊 : 🍋 : 🍓',		
		'🍐 : 🍒 : 🍋',
		'🥑 : 🍐 : 🥥',
		'🍊 : 🍒 : 🍍',
		'🍎 : 🔔 : 🍇',
		'🍌 : 🍒 : 🍓',
		'🍓 : 🔔 : 🍎',
		'🍊 : 🍉 : 🍍',
		'🍋 : 🍋 : 🍌',
		'🍎 : 🔔 : 🍉',
		'🔔 : 🍐 : 🍇',
		'🍊 : 🍒 : 🍐',
		'🍍 : 🔔 : 🥑',
		'🍇 : 🥝 : 🍎',
		'🍊 : 🍉 : 🔔',
		'🔔 : 🍓 : 🍐',
		'🔔 : 🍒 : 🍊',
        '🥑 : 🍋 : 🔔',		
		'🍐 : 🍒 : 🍋',
		'🍉 : 🍐 : 🍉',
		'🍊 : 🥥 : 🥑',
		'🔔 : 🍍 : 🍇',
		'🍌 : 🍎 : 🔔',
		'🍐 : 🔔 : 🍎',
		'🍊 : 🥥 : 🍒',
		'🍉 : 🍋 : 🍌',
		'🍑 : 🔔 : 🍇',
		'🔔 : 🍐 : 🍉',
		'🍊 : 🥝 : 🍐',
		'🍍 : 🔔 : 🍊',
		'🍇 : 🍒 : 🍐',
		'🍊 : 🍋 : 🔔',
		'🍉 : 🍒 : 🍐',
		'🔔 : 🥝 : 🍊',
        '🍊 : 🍋 : 🔔',		
		'🍐 : 🍍 : 🍋',
		'🥝 : 🍐 : 🍉',
		'🍊 : 🍑 : 🍍',
		'🔔 : 🔔 : 🍓',
		'🍌 : 🍒 : 🔔',
		'🍐 : 🔔 : 🥝',
		'🍉 : 🍋 : 🍒',
		'🍋 : 🥑 : 🍌',
		'🔔 : 🥥 : 🍇',
		'🍓 : 🍐 : 🍇',
		'🍊 : 🍍 : 🍉',
		'🍒 : 🔔 : 🍊',
		'🍇 : 🥑 : 🍐',
		'🍊 : 🍋 : 🔔',
		'🔔 : 🍒 : 🍐',
		'🍉 : 🍓 : 🥑',
        '🍊 : 🍋 : 🔔',		
		'🍐 : 🍒 : 🍋',
		'🍍 : 🍐 : 🥝',
		'🥑 : 🍓 : 🍉',
		'🍑 : 🔔 : 🥑',
		'🍌 : 🍒 : 🔔',
		'🍉 : 🍍 : 🥥',
		'🍊 : 🍋 : 🍒',
		'🍋 : 🍍 : 🍌',
		'🥥 : 🍎 : 🍉',
		'🔔 : 🍑 : 🍓',
		'🍉 : 🥑 : 🍐',
		'🍒 : 🔔 : 🍊',
		'🍇 : 🍍 : 🍐',
		'🍓 : 🥑 : 🍍',
		'🔔 : 🍒 : 🍐',
		'🥥 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',		
		'🍐 : 🍉 : 🍋',
		'🍐 : 🍑 : 🍐',
		'🥑 : 🍒 : 🍓',
		'🔔 : 🍎 : 🍇',
		'🍌 : 🍒 : 🔔',
		'🍐 : 🥥 : 🍍',
		'🍊 : 🍋 : 🍒',
		'🍓 : 🍉 : 🍌',
		'🍍 : 🔔 : 🍇',
		'🔔 : 🍐 : 🍎',
		'🍊 : 🍒 : 🍐',
		'🍉 : 🔔 : 🥑',
		'🍇 : 🥥 : 🍎',
		'🍊 : 🍋 : 🔔',
		'🔔 : 🍓 : 🍐',
		'🔔 : 🍒 : 🍊',
        '🥑 : 🥑 : 🥑',
        '🍉 : 🍉 : 🍉',
        '🍓 : 🍓 : 🍓',
        '🍎 : 🍎 : 🍎',
        '🍍 : 🍍 : 🍍',
        '🥝 : 🥝 : 🥝',
        '🍑 : 🍑 : 🍑',
        '🥥 : 🥥 : 🥥',
        '🍇 : 🍇 : 🍇',
        '🍊 : 🍊 : 🍊',
        '🔔 : 🔔 : 🔔',
        '🍒 : 🍒 : 🍒',
        '🍌 : 🍌 : 🍌',
        '🍐 : 🍐 : 🍐',
        '🍋 : 🍋 : 🍋',
        '🥑 : 🍉 : 🔔',		
		'🍐 : 🍒 : 🍋',
		'🍑 : 🍎 : 🍐',
		'🍊 : 🍍 : 🍒',
		'🔔 : 🔔 : 🥑',
		'🍌 : 🍒 : 🍉',
		'🍐 : 🍓 : 🍎',
		'🍊 : 🍋 : 🍒',
		'🍋 : 🥑 : 🍌',
		'🔔 : 🍎 : 🍇',
		'🍉 : 🍐 : 🥥',
		'🔔 : 🍑 : 🥑',
		'🍒 : 🔔 : 🍊',
		'🍇 : 🍓 : 🍐',
		'🍊 : 🍋 : 🔔',
		'🥑 : 🍍 : 🍐',
		'🔔 : 🍒 : 🍉',
        '🍊 : 🥑 : 🔔',		
		'🍎 : 🍒 : 🍎',
		'🍐 : 🍉 : 🍐',
		'🍊 : 🥑 : 🍓',
		'🍋 : 🔔 : 🍇',
		'🍌 : 🍒 : 🍉',
		'🍐 : 🔔 : 🥑',
		'🍓 : 🍋 : 🍒',
		'🍋 : 🥑 : 🍌',
		'🔔 : 🍎 : 🥥',
		'🍉 : 🍐 : 🍇',
		'🍊 : 🍒 : 🍐',
		'🥑 : 🍓 : 🍉',
		'🍇 : 🍒 : 🍍',
		'🍊 : 🥑 : 🍑',
		'🍑 : 🍎 : 🍐',
		'🔔 : 🍒 : 🍊',
        '🍉 : 🥝 : 🍎',		
		'🍐 : 🍉 : 🍋',
		'🍐 : 🥑 : 🍐',
		'🍊 : 🍒 : 🍓',
		'🍑 : 🔔 : 🍉',
		'🍌 : 🥑 : 🥝',
		'🍐 : 🍉 : 🔔',
		'🍊 : 🍓 : 🍒',
		'🍋 : 🍋 : 🍉',
		'🥑 : 🍎 : 🍇',
		'🔔 : 🍑 : 🥑',
		'🍊 : 🥥 : 🍐',
		'🍍 : 🍓 : 🍊',
		'🍉 : 🍒 : 🍐',
		'🍊 : 🍋 : 🍉',
		'🔔 : 🍎 : 🍐',
		'🍓 : 🥑 : 🍊',
        '🍊 : 🍋 : 🔔',		
		'🍐 : 🍒 : 🍑',
		'🥝 : 🍉 : 🍐',
		'🍓 : 🍍 : 🍒',
		'🔔 : 🔔 : 🍇',
		'🍌 : 🍒 : 🍉',
		'🍐 : 🍉 : 🍓',
		'🍊 : 🍐 : 🍒',
        '🥑 : 🥑 : 🥑',
        '🍉 : 🍉 : 🍉',
        '🍓 : 🍓 : 🍓',
        '🍎 : 🍎 : 🍎',
        '🍍 : 🍍 : 🍍',
        '🥝 : 🥝 : 🥝',
        '🍑 : 🍑 : 🍑',
        '🥥 : 🥥 : 🥥',
        '🍇 : 🍇 : 🍇',
        '🍊 : 🍊 : 🍊',
        '🔔 : 🔔 : 🔔',
        '🍒 : 🍒 : 🍒',
        '🍌 : 🍌 : 🍌',
        '🍐 : 🍐 : 🍐',
        '🍋 : 🍋 : 🍋',
		]
        

            const totalchat = await tiringa.chats.all()
			const botNumber = tiringa.user.jid
			const ownerNumber = [`557499510904@s.whatsapp.net`]
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await tiringa.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
            const isBanned = ban.includes(sender)
			const isWelkom = isGroup ? welkom.includes(from) : true
            const isNsfw = isGroup ? nsfw.includes(from) : true
			const isOwner = ownerNumber.includes(sender)
            const isUser = checkRegisteredUser(sender)
            const isSimi = isGroup ? samih.includes(from) : false
            const isLevelingOn = isGroup ? _leveling.includes(from) : true
            tiringa.chatRead(from)
            const q = args.join(' ')
            const id = botNumber
            const tescuk = ["0@s.whatsapp.net"]
			let pushname = tiringa.contacts[sender] != undefined ? tiringa.contacts[sender].vname || tiringa.contacts[sender].notify: undefined
          


           mess = {
                zen: 'Vtnc Zen',
				tterro: `Você deve digitar ${prefix}ppt pedra, ${prefix}ppt papel ou ${prefix}ppt tesoura`,
				wait: `⏳Aguarde alguns instantes...⏳\n\nCaso não funcione, use o comando novamente.`,
				waitmusic: `⏳Aguarde alguns instantes...⏳\n\nA sua música será enviada em até 2 minutos\nCaso não envie, tente especificar o nome da música.`,
			    waitfig: `⏳Aguarde alguns instantes...⏳\n\nA criação de stickers demora alguns segundos.`,
			    waitgif: `⏳Aguarde alguns instantes...⏳\n\nA criação de stickers demora alguns segundos\nA criação de stickergif leva de 10 segundos á 1 minuto dependendo do tamanho do gif\nLimite de 10 segundos por gif.`,
			    waitsfw: `⏳Aguarde alguns instantes...⏳\n\nO bot irá enviar o hentai em até 2 minutos\nTente novamente caso não envie.`,
			    waitpor: `⏳Aguarde alguns instantes...⏳\n\nO bot irá enviar a img\nTente novamente caso não envie.`,
                waitimg: `⏳Aguarde alguns instantes...⏳\n\nO bot irá enviar criar e enviar a imagem\nO processo dura no mínimo 10 segundos\nTente novamente caso não envie.`,
				success: '✅Sucesso✅',
                levelon: '✅função leveis foi ativada✅',
				leveloff: '❌função leveis foi desativada❌',
				levelnoton: '🚫A função leveis está desativada🚫',
				levelnol: 'Você está level 0... \njá se registrou para começar ganhar XP?',
				erro: {
                    baned: '🛂Você está banido🛂',
					stick: '❌Ocorreu um erro na criação de sticker❌',
					Iv: '❌Link inválido❌'
				},
				only: {
                    zen: 'vtnc Zen',
					group: '❌O comando só pode ser usado em grupos❌',
					ownerG: `O comando só pode ser usado pelo ${ownerName}🕴`,
					lia: 'Só a Lia pode usar😳👌',
					ownerB: `O comando só pode ser usado pelo ${ownerName}🕴`,
					admin: '❌O comando só pode ser usado por administradores do grupo❌' ,
					Badmin: '❌O comando só pode ser usado quando o bot é um administrador do grupo❌' ,
					registrarB: `Olá ${pushname}\n\nVocê ainda não se registrou...\n\nPara se registrar e poder usar todos os comandos do bot, por favor use:\n\nComando: ${prefix}registrar seu nome|sua idade\nPor exemplo: ${prefix}registrar Italu|17`,
					
					}
			}

            const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (tej) => {
				tiringa.sendMessage(from, tej, text, {quoted:mek})
			}
			const sendMess = (teks) => {
				tiringa.sendMessage(from, teks, text)
			}
            const sendImage = (teks) => {
		        tiringa.sendMessage(from, teks, image, {quoted:mek})
            }
			const mentions = (teks, memberr, sender, id) => {
				(id == null || id == undefined || id == false) ? tiringa.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : tiringa.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			const costum = (pesan, tipe, target, target2) => {
                 tiringa.sendMessage(from, pesan, tipe, {quoted: {key: {fromMe: false, participant: `${target}`, ...(from ? {remoteJid: from}: {})}, message: {conversation: `${target2}` }}})
            }
             const sendPtt = (teks) => {
                 tiringa.sendMessage(from, audio, mp3, {quoted: mek })
            }
      

//_FUCTION PATENTE
            const levelRole = getLevelingLevel(sender)
        var role = 'Bronze I🥉'
        if (levelRole === 1) {
            role = 'Bronze  I🥉'
        } else if (levelRole === 2) {
            role = 'Bronze II🥉'
        } else if (levelRole === 3) {
            role = 'Bronze  III🥉'
        } else if (levelRole === 4) {
            role = 'Bronze  IV🥉'
        } else if (levelRole === 5) {
            role = 'Bronze  V🥉'
        } else if (levelRole === 6) {
            role = 'Prata I🥈'
        } else if (levelRole === 7) {
            role = 'Prata II🥈'
        } else if (levelRole === 8) {
            role = 'Prata III🥈'
        } else if (levelRole === 9) {
            role = 'Prata IV🥈'
        } else if (levelRole === 10) {
            role = 'Prata V🥈'
        } else if (levelRole === 11) {
            role = 'Ouro I🥇'
        } else if (levelRole === 12) {
            role = 'Ouro II🥇'
        } else if (levelRole === 13) {
            role = 'Ouro III🥇'
        } else if (levelRole === 14) {
            role = 'Ouro IV🥇'
        } else if (levelRole === 15) {
            role = 'Ouro V🥇'
        } else if (levelRole === 16) {
            role = 'Campeão I🏆'
        } else if (levelRole === 17) {
            role = 'Campeão II🏆'
        } else if (levelRole === 18) {
            role = 'Campeão III🏆'
        } else if (levelRole === 19) {
            role = 'Campeão IV🏆'
        } else if (levelRole === 20) {
            role = 'Campeão V🏆'
        } else if (levelRole === 21) {
            role = 'Diamante I 💎'
        } else if (levelRole === 22) {
            role = 'Diamante II 💎'
        } else if (levelRole === 23) {
            role = 'Diamante III 💎'
        } else if (levelRole === 24) {
            role = 'Diamante IV 💎'
        } else if (levelRole === 25) {
            role = 'Diamante V 💎'
        } else if (levelRole === 26) {
            role = 'Mestre I 🐂'
        } else if (levelRole === 27) {
            role = 'Mestre II 🐂'
        } else if (levelRole === 28) {
            role = 'Mestre III 🐂'
        } else if (levelRole === 29) {
            role = 'Mestre IV 🐂'
        } else if (levelRole === 30) {
            role = 'Mestre V 🐂'
        } else if (levelRole === 31) {
            role = 'Mítico I 🔮'
        } else if (levelRole === 32) {
            role = 'Mítico II 🔮'
        } else if (levelRole === 33) {
            role = 'Mítico III 🔮'
        } else if (levelRole === 34) {
            role = 'Mítico IV 🔮'
        } else if (levelRole === 35) {
            role = 'Mítico V 🔮'
        } else if (levelRole === 36) {
            role = 'God I🕴'
        } else if (levelRole === 37) {
            role = 'God II🕴'
        } else if (levelRole === 38) {
            role = 'God III🕴'
        } else if (levelRole === 39) {
            role = 'God IV🕴'
        } else if (levelRole === 40) {
            role = 'God V🕴'
        } else if (levelRole > 41) {
            role = '🛐Grande Mestre🛐'
        }
 //_XP SEM LEVELING ATIVO 
if (isUser && isGroup) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
                try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 800
                const requiredXp = 500 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                  }
            } catch (err) {
                console.error(err)
            }
        }   
//_XP LEVELING ATIVO
if (isGroup && isUser && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 800
                const requiredXp = 500 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                  const lvup =
`  ┏━━━♡ LEVEL UP ♡━━━┓
  ┃╭────────────
  ┃│‣ Nome: ${pushname}
  ┃│
  ┃│‣ XP: ${getLevelingXp(sender)}
  ┃│        
  ┃│‣ Level: ${getLevel} -> ${getLevelingLevel(sender)}
  ┃│
  ┃│‣ Patente: ${role}
  ┃╰────────────
  ┗━━━━━━━━━━━━━┛`
contextInfo: {mentionedJid: [sender]}
costum(lvup, text, tescuk, crlv)
//tiringa.sendMessage(from, lvup, text, {quoted: mek, contextInfo: {mentionedJid: [sender]}}
                }
            } catch (err) {
                console.error(err)
            }
        } 

//_DINHEIRO 
if (isUser) {
            const checkATM = checkATMuser(sender)
            try {
                if (checkATM === undefined) addATM(sender)
                const uangsaku = Math.floor(Math.random() * 10) + 90
                addKoinUser(sender, uangsaku)
            } catch (err) {
                console.error(err)
            }
        }
            
//_TIPO DE MENSAGENS
const isMedia = (type === 'imageMessage' || type === 'videoMessage')
const isQuotedText = type === 'extendedTextMessage' && content.includes('textMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

//_CORES(cores das letras no terminal)
colors = ['red','white','black','blue','yellow','green','aqua','magenta','orange']

//_COMANDOS
if (!isGroup && isCmd) console.log(color('COMANDO RECEBIDO', 'magenta'), color('HORA:', 'orange'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color('COMANDO:'), color(`${command}`),'DE:', color(pushname))
if (isCmd && isGroup) console.log(color('COMANDO RECEBIDO', 'magenta'), color('HORA:', 'orange'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color('COMANDO:'), color(`${command}`),'DE:', color(pushname),'EM:', color(groupName))
			
//_MENSAGENS
if (!isCmd && isGroup) console.log(color('MENSAGEM RECEBIDA', 'aqua'), color('HORA:', 'orange'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), 'DE:', color(pushname),'EM:', color(groupName))
if (!isGroup && !isCmd) console.log(color('MENSAGEM RECEBIDA', 'aqua'), color('HORA:', 'orange'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), 'DE:', color(pushname))

//_NOME DO CRIADOR DOS STICKERS
authorname = tiringa.contacts[from] != undefined ? tiringa.contacts[from].vname || tiringa.contacts[from].notify : undefined	
if (authorname != undefined) { } else { authorname = groupName }	

//_FUCTION NOME DOS STICKERS
                function addMetadata(packname, author) {	
				if (!packname) packname = 'Tiringa-BOT'; if (!author) author = 'Bot';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./src/stickers/${name}.exif`)) return `./src/stickers/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	

				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

				fs.writeFile(`./src/stickers/${name}.exif`, buffer, (err) => {	
					return `./src/stickers/${name}.exif`	
				})	

			}

//_RESPONDER AUTOMATICAMENTE
if(budy.match('tiringa')){
result = fs.readFileSync(`./temp/stick/emm.webp`)
  tiringa.sendMessage(from, result, sticker, {
quoted: mek
  })
}

switch(anun) {
case 'bot':
case 'BOT':
case 'Bot':
buf = fs.readFileSync(`./temp/audio/onichan.mp3`)
tiringa.sendMessage(from, buf, audio, {
  mimetype: 'audio/mp4', quoted: mek, ptt: true
})
break

case 'dança':
buf = fs.readFileSync(`./teste/tiringa.webp`)
tiringa.sendMessage(from, buf, sticker, {quoted: mek})
break

case '.menu':
case '*menu':
case '#menu':
case '#help':
case '!help':
case '!menu':
case '/menu':
case '/help':
case 'help':
case 'menu':
textmenu = `        ────────────────
oi ${pushname} use ${prefix}menu caso queira usar meus comandos🧙‍♂️
        ────────────────`
reply(textmenu)
        break
}

switch(command) {
case 'help':
case 'menu':
case '?':
case 'ajuda':
if (!isUser) return reply(mess.only.registrarB)
const useLevel = getLevelingLevel(sender)
const useXp = getLevelingXp(sender)
const useTime = getRegisterTime(sender) 
const requireXp = 500 * (Math.pow(2, useLevel) - 1)
uptime = process.uptime()
myMonths = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Desembro"];
myDays = ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta' ,'Sábado'];
var tglk = new Date();
var day = tglk.getDate()
bulan = tglk.getMonth()
var thisDay = tglk.getDay(),
thisDay = myDays[thisDay];
var yy = tglk.getYear()
var year = (yy < 1000) ? yy + 1900 : yy;
const tanggal = `${thisDay}, ${day} de ${myMonths[bulan]} de ${year}`
const serial = getRegisterSerial(sender)
const idade = getRegisterAge(sender)
const nreg = getRegisterName(sender)
const Menu = {
text:
 `      ☆━✪🕴  ∴₰Ⱦꪋℓo፝֯֟ ߷  🕴✪━☆
     ༻━━━━━━ ★ ━━━━━━༺
         Olá @${sender.split("@")[0]} 🧙‍♂️
     ༻━━━━━━ ★ ━━━━━━༺
     ༻━━━━━━ ★ ━━━━━━༺

🧙‍♂️ BOT 🧙‍♂️
❁➸ Prefix:「 ${prefix} 」
❁➸ Nome: Tiringa-BOT
❁➸ Versão 11.7
❁➸ Tempo online: ${temporizador(uptime)}
❁➸ Status: ON✅
❁➸ Horário: ${hr}
❁➸ Data: ${tanggal}
❁➸ Grupo:  ${groupName}
❁➸ Total de usuários: ${_registered.length} usuários
❁➸ Total de chats: ${totalchat.length} chats
❁➸ Total de comandos: 118
▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀

👨‍💻USUÁRIO👨‍💻
❁➸ Nome: @${sender.split("@")[0]}
❁➸ Registrado: ✅
❁➸ Nome de registro: ${nreg}
❁➸ Idade: ${idade}
❁➸ Level: ${useLevel}
❁➸ XP: ${useXp}/${requireXp}
❁➸ Patente: ${role}
❁➸ Data de registro: ${useTime}
❁➸ Serial: ${serial}
 ▀▄▀▄▀▄♻️NOVIDADES♻️▄▀▄▀▄▀
      ❧ comando slot repaginado

    ✅  COMANDOS NOVOS:
      ❧ roleta
      ❧ contar
       earrape
｡☆✼━━━━━━ ★ ━━━━━━✼☆｡
      ✔ REMOVIDOS:     
       ❧ o comando DDD foi removido
｡☆✼━━━━━━ ★ ━━━━━━✼☆｡
      ⚠️AVISO:
      ❧ versão 10.0 no github
       use ${prefix}git para obter o link
      ❧ comandos hentai em breve...
      ❧ alguns novos comandos possuem
      limite de uso então não *ABUSE*
      ❧ há um erro com a api onde 
      os comandos de imagem nem sempre
      iram enviar a imagem
｡☆✼━━━━━━ ★ ━━━━━━✼☆｡

▀▄▀▄🧙‍♂️ INFORMAÇÕES 🧙‍♂️▄▀▄▀
┏━━━━━━ ★ ━━━━━━༺
┠⊱ ${prefix}info
┃ _Informações do bot_
┠⊱ ${prefix}criador
┃ _Número do meu criador_
┠⊱ ${prefix}ping
┃ _Mostra meu tempo de resposta_
┠⊱ ${prefix}infome
┃_Mostra algumas informações suas_
┠⊱ ${prefix}infogp
┃_Mostra algumas informações do grupo_
┗━━━━━━ ★ ━━━━━━༺

▀▄▀▄▀▄🔞 +18 🔞▄▀▄▀▄▀▄
┏━━━━━━ ★ ━━━━━━༺
┠⊱ Em breve...
┗━━━━━━ ★ ━━━━━━༺

▀▄▀▄▀▄👥 GRUPO 👥▄▀▄▀▄▀
┏━━━━━━ ★ ━━━━━━༺
┠⊱ ${prefix}listadmin
┃ _Lista todos os administradores do grupo_
┠⊱ ${prefix}online
┃ _Lista todos os membros online_
┠⊱ ${prefix}fecharg
┃ _Fecha o grupo_
┠⊱ ${prefix}abrirg
┃ _Abre o grupo_
┠⊱ ${prefix}promover
┃ _Promove o alvo ao cargo de administrador_
┠⊱ ${prefix}rebaixar
┃ _Rabaixa o alvo a membro comum_
┠⊱ ${prefix}setname
┃ _Altera o nome do grupo_
┠⊱ ${prefix}setdesk
┃ _Altera a descrição do grupo_
┠⊱ ${prefix}tagall
┃ _Tag All members_
┠⊱ ${prefix}linkgc
┃ _link do grupo_
┠⊱ ${prefix}Leave
┃ _O bot sai do grupo_
┠⊱ ${prefix}notif
┃ _Notifica todos os membros_
┠⊱ ${prefix}qelcome
┃ _On/off welcome_
┠⊱ ${prefix}delete (marque a mensagem)
┃ _Apaga uma mensagem enviada pelo bot_
┗━━━━━━ ★ ━━━━━━༺

▀▄▀▄▀▄🎥  MÍDIA 🎥▄▀▄▀▄▀
┏━━━━━━ ★ ━━━━━━༺
┠⊱ ${prefix}listvn
┃ _Lista todos os áudios salvos_
┠⊱ ${prefix}listimg
┃ _Lista todas as imagens salvas_
┠⊱ ${prefix}liststik
┃ _Lista todos os stickers salvos_
┠⊱ ${prefix}listvid
┃ _Lista todos os vídeos salvos_
┠⊱ ${prefix}esquilo (marque um áudio)
┃ _Efeito de áudio esquilo_
┠⊱ ${prefix}slow (marque um áudio)
┃ _Efeito de áudio lento_
┠⊱ ${prefix}gemuk (marque um áudio)
┃ _Efeito de áudio gigante_
┠⊱ ${prefix}bass (marque um áudio)
┃ _Aumenta o bass de uma música_
┠⊱ ${prefix}earrape
┃_Deixa o áudio estourado_
┗━━━━━━ ★ ━━━━━━༺

▀▄▀▄▀▄🏖 IMAGEM 🏖▄▀▄▀▄▀
┏━━━━━━ ★ ━━━━━━༺
┠⊱ ${prefix}gtav (Foto)
┃ _Cria um banner do GTA V_
┠⊱ ${prefix}wanted (Foto)
┃ _Cria um banner estilo "WANTED"_
┠⊱ ${prefix}drawing (Foto)
┃ _Cria uma imagem estilo desenho_
┠⊱ ${prefix}Img (Texto)
┃ _Busca uma imagem relacionada_
┠⊱ ${prefix}8bit (Texto)
┃ _Cria uma imagem no estilo 8bit_
┠⊱ ${prefix}lovepaper (Texto)
┃ _Cria uma imagem no estilo lovepaper_
┠⊱ ${prefix}narutobanner (Texto)
┃ _Cria um banner de Naruto_
┠⊱ ${prefix}romancetext (Texto)
┃ _Cria uma imagem no estilo romancetext_
┠⊱ ${prefix}shadowtext (Texto)
┃ _Cria uma imagem no estilo shadowtext_
┠⊱ ${prefix}tiktokeffect (Texto)
┃ _Cria uma imagem no estilo Tik Tok_
┠⊱ ${prefix}neon (Texto)
┃ _Cria uma imagem no estilo neon_
┠⊱ ${prefix}hpotter
┃ _Cria uma imagem no estilo Harry Potter_
┠⊱ ${prefix}gaming
┃ _Cria uma imagem no estilo gaming_
┠⊱ ${prefix}bneon
┃ _Cria uma imagem no estilo neon_
┠⊱ ${prefix}matrix
┃ _Cria uma imagem no estilo Matrix_
┠⊱ ${prefix}breakwall
┃ _Cria uma imagem no estilo breakwall_
┠⊱ ${prefix}dropwater
┃ _Cria uma imagem no estilo dropwater_
┠⊱ ${prefix}wolflogo
┃ _Cria uma imagem no estilo wolflogo_
┠⊱ ${prefix}tfire
┃ _Cria uma imagem no estilo tfire_
┠⊱ ${prefix}sandw
┃ _Cria uma imagem no estilo sandw_
┠⊱ ${prefix}firofiro
┃ _Cria uma imagem no estilo free fire_
┠⊱ ${prefix}text3d
┃ _Cria uma imagem no estilo text3d_
┠⊱ ${prefix}text3d2
┃ _Cria uma imagem no estilo text3d2_
┠⊱ ${prefix}phlogo
┃ _Cria uma imagem no estilo PornHub_
┠⊱ ${prefix}bpmek
┃ _Cria uma imagem no estilo BlackPmek_
┠⊱ ${prefix}folhas
┃ _Cria uma imagem com texto entre folhas_
┠⊱ ${prefix}tlight
┃ _Cria uma imagem no estilo tlight_
┠⊱ ${prefix}sparkling
┃_Cria uma imagem no estilo sparkling_
┠⊱ ${prefix}neve
┃_Cria uma imagem com texto na neve_
┠⊱ ${prefix}crismes
┃_Cria uma imagem no estilo crismes_
┠⊱ ${prefix}retro
┃_Cria uma imagem no estilo retro_
┠⊱ ${prefix}watercolor
┃_Cria uma imagem no estilo watercolor_
┠⊱ ${prefix}pubglogo
┃_Cria uma imagem no estilo pubg_
┠⊱ ${prefix}bf4
┃_Cria uma imagem no estilo bf4_
┠⊱ ${prefix}cslogo
┃_Cria uma imagem no estilo CS_
┠⊱ ${prefix}lithgtext
┃_Cria uma imagem no estilo lithgtext_
┠⊱ ${prefix}silktext
┃_Cria uma imagem no estilo silktext_
┠⊱ ${prefix}flametext
┃_Cria uma imagem no estilo flametext_
┠⊱ ${prefix}crosslogo
┃_Cria uma imagem no estilo crosslogo_
┠⊱ ${prefix}glowtext
┃_Cria uma imagem no estilo glowtext_
┠⊱ ${prefix}marvellogo
┃_Cria uma imagem no estilo marvellogo_
┠⊱ ${prefix}vingador
┃_Cria uma imagem no estilo vingador_
┠⊱ ${prefix}halloween
┃_Cria uma imagem no estilo halloween_
┠⊱ ${prefix}lol
┃_Cria uma imagem no estilo LOL_
┠⊱ ${prefix}hacker
┃_Cria uma imagem no estilo hacker_
┗━━━━━━ ★ ━━━━━━༺

▀▄▀▄▀▄🎲 DIVERSÃO 🎲▄▀▄▀▄▀
┏━━━━━━ ★ ━━━━━━༺
┠⊱ ${prefix}shitpost
┃ _Imagem aleatória shitpost br_
┠⊱ ${prefix}nomeninja (texto)
┃ _Cria um nome ninja_
┠⊱ ${prefix}tagme
┃ _Te menciona_
┠⊱ ${prefix}conta
┃_Cria uma conta matemática simples_
┠⊱ ${prefix}dado
┃_Sticker de dado aleatório_
┠⊱ ${prefix}ppt (✊pedra, 🤚papel ou ✌tesoura)
┃_Jogue pedra, papel e tesoura com o bot_
┠⊱ ${prefix}sn
┃_Lhe diz sim ou não para uma pergunta_
┠⊱ ${prefix}gado
┃_Lhe diz seu nível de gado_
┠⊱ ${prefix}chance
┃_Lhe diz a chance de algo_
┠⊱ ${prefix}pau
┃_Lhe diz o tamanho do seu brinquedinho_
┠⊱ ${prefix}gay
┃_Lhe diz o quanto gay você é_
┠⊱ ${prefix}slot
┃_Caça níqueis sem premiação algumakkk_
┠⊱ ${prefix}caracoroa
┃_Caracoroa_
┠⊱ ${prefix}level
┃_Mostra seu level atual_
┠⊱ ${prefix}roleta
┃_Roleta russa_
┗━━━━━━ ★ ━━━━━━༺

▀▄▀▄▀▄💮 ANIME 💮🎲▄▀▄▀▄▀
┏━━━━━━ ★ ━━━━━━༺
┠⊱ ${prefix}anime
┃ _Imagem de anime aleatória_
┠⊱ ${prefix}loli
┃ _Imagem de loli aleatória_
┠⊱ ${prefix}neko
┃ _Imagem de neko aleatória_
┠⊱ ${prefix}nekonime
┃_Imagem de nekos_
┠⊱ ${prefix}randomloli
┃_Loli aleatória_
┠⊱ ${prefix}nezuko
┃_Imagem aleatória da Nezuko_
┠⊱ ${prefix}shinobu
┃_Imagem aleatória da Shinobu_
┠⊱ ${prefix}kanna
┃_Imagem aleatória da Kanna_
┗━━━━━━ ★ ━━━━━━༺

▀▄▀▄🔧 FERRAMENTAS 🔧🎲▄▀▄▀
┏━━━━━━ ★ ━━━━━━༺
┠⊱ ${prefix}st
┃ _Cria um sticker em 512x512_
┠⊱ ${prefix}sticker
┃ _Cria um sticker_
┠⊱ ${prefix}triggered
┃ _Cria um sticker no estilo triggered_
┠⊱ ${prefix}wasted
┃ _Cria um sticker no estilo wasted_
┠⊱ ${prefix}toimg
┃ _Converte sticker em imagem_
┠⊱ ${prefix}tomp3
┃ _Converte vídeo em áudio_
┠⊱ ${prefix}play (texto)
┃ _Baixa o áudio de um vídeo no YouTube_
┠⊱ ${prefix}tts (língua) (texto)
┃ _Texto para áudio(voz do google)_
┠⊱ ${prefix}timer (tempo)
┃ _Um timer_
┠⊱ ${prefix}wame
┃ _Mostra seu link wa.me_
┠⊱ ${prefix}ocr
┃ _Captura o texto de uma imagem_
┠⊱ ${prefix}cep (cep)
┃ _Lista algumas informações do cep_
┠⊱ ${prefix}cartão 
┃ _Gera uma cartão de crédito fake_
┠⊱ ${prefix}contar
┃_Conta a quantidade de letras_
┗━━━━━━ ★ ━━━━━━༺

▀▄▀▄📲 DOWNLOADER 📲🎲▄▀▄▀
┏━━━━━━ ★ ━━━━━━༺
┠⊱ ${prefix}ytmp3 (link)
┃ _Baixa audio do youtube_
┠⊱ ${prefix}ytmp4 (link)
┃ _Baixa video do youtube_
┗━━━━━━ ★ ━━━━━━༺

▀▄▀▄▀▄🕴 CRIADOR 🕴🎲▄▀▄▀▄
┏━━━━━━ ★ ━━━━━━༺
┠⊱ ${prefix}clone
┃ _Copia a foto de perfil do alvo_
┠⊱ ${prefix}block
┃ _Bloqueia o alvo_
┠⊱ ${prefix}unblock
┃ _Remove o block do alvo_
┠⊱ ${prefix}blocklist
┃ _Lista dos usuários bloqueados_
┗━━━━━━ ★ ━━━━━━༺`,
contextInfo: {mentionedJid: [sender]}}
costum(Menu, text, tescuk, cr)
  break
/*
┏────────────⊱
┃  ── 🔰 MENUS 🔰 ──
┃
┣━━━━━ ★ ━━━━━༺
┃──🎲 DIVERSÃO 🎲──
┠⊱ ${prefix}mrate
┣━━━━━ ★ ━━━━━༺
┃  ── 🎥  MÍDIA 🎥──
┠⊱ ${prefix}midia
┣━━━━━ ★ ━━━━━༺
┃ ── 🏖 IMAGEM 🏖  ──
┠⊱ ${prefix}mimage
┣━━━━━ ★ ━━━━━༺
┃ ──   👥 GRUPO 👥   ──
┠⊱ ${prefix}menugrupo
┗━━━━━ ★ ━━━━━༺*/

case 'git':
tiringa.sendMessage(from, `https://github.com/italuH/Tiringa-BOT` , text, {quoted: mek})
break

case 'level':
if (isBanned) return reply(mess.erro.baned)   
if (!isGroup) return reply(mess.only.group)
if (!isLevelingOn) return reply(mess.levelnoton)
const userLevel = getLevelingLevel(sender)
const userXp = getLevelingXp(sender)
const userTime = getRegisterTime(sender) 
if (userLevel === undefined && userXp === undefined) return reply(levelnol)
const requiredXp = 500 * (Math.pow(2, userLevel) - 1)
levela =
`┏━━━♡ *LEVEL* ♡━━━┓
┃╭───────────
┃│‣ Nome: @${sender.split("@")[0]}
┃│
┃│‣ XP: ${userXp}/${requiredXp}
┃│
┃│‣ Level: ${userLevel}
┃│
┃│‣ Patente: ${role}
┃╰───────────
┗━━━━━━━━━━━━┛`     
					tiringa.sendMessage(from, levela, text, {quoted: mek, contextInfo: {mentionedJid: [sender]}})
					break

case 'italu':
const sentMsg  = await tiringa.sendMessage(from, {displayname: "Italu🧙‍♂️", vcard: vcard}, MessageType.contact)
break
                    case 'leaderboard':
				case 'lb':
				_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
				uang.sort((a, b) => (a.uang < b.uang) ? 1 : -1)
                let leaderboardlvl = '-----[ *LEADERBOARD LEVEL* ]----\n\n'
                let leaderboarduang = '-----[ *LEADERBOARD UANG* ]----\n\n'
                let nom = 0
                try {
                    for (let i = 0; i < 10; i++) {
                        nom++
                        leaderboardlvl += `*[${nom}]* wa.me/${_level[i].id.replace('@s.whatsapp.net', '')}\n┗⊱ *XP*: ${_level[i].xp} *Level*: ${_level[i].level}\n`
                        leaderboarduang += `*[${nom}]* wa.me/${uang[i].id.replace('@s.whatsapp.net', '')}\n┣⊱ *Uang*: _Rp${uang[i].uang}_\n┗⊱ *Limit*: ${limitawal - _limit[i].limit}\n`
                    }
                    await reply(leaderboardlvl)
                    await reply(leaderboarduang)
                } catch (err) {
                    console.error(err)
                    await reply(`minimal 10 user untuk bisa mengakses database`)
                }
				break
//const gy =['0','5','10','15','20','25','30','35','40','45','50','55','60','65','70','75','80','85','90','95','100']
//tiringa.groupRemove(from, mentioned)
//tiringa.groupAdd(from, [num])
						

case 'abraço':
if (!isUser) return reply(mess.only.registrarB)				
if (!isGroup) return reply(mess.only.group)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Você precisa mencionar alguém')
var mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
var nomor = mek.participant
yhb = {
text: `Que fofo... @${nomor.split("@s.whatsapp.net")[0]} deu um abraço apertado em @${mentioned[0].split('@')[0]}`,
contextInfo: {mentionedJid: [mentioned]},
contextInfo: {mentionedJid: [nomor]}}
tiringa.sendMessage(from, yhb, text, {quoted: mek})
break

//if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
//var group = await tiringa.groupMetadata(from)
case 'testime':
					setTimeout( () => {
					tiringa.sendMessage(from, 'Waktu habis:v', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					tiringa.sendMessage(from, '5 Detik lagi', text) // ur cods
					}, 5000) // 1000 = 1s,
					setTimeout( () => {
					tiringa.sendMessage(from, '10 Detik lagi', text) // ur cods
					}, 0) // 1000 = 1s,
					break

case 'exe':
	              tiringa.updatePresence(from, Presence.composing) 
	              if (!isOwner) return reply(mess.only.ownerB)
	               const cmd = body.slice(5)
	               exec(cmd, (err, stdout) => {
		           if(err) return tiringa.sendMessage(from, "Comando inexistente", text, { quoted: mek })
		           if (stdout) {
			       tiringa.sendMessage(from, stdout, text, { quoted: mek })
		           }
	           })
                  break

case 'getses':
            	if (!isOwner) return reply(mess.only.ownerB)
            const sesPic = await tiringa.getSnapshot()
            tiringa.sendFile(from, sesPic, 'session.png', '^_^...', id)
            break

case 'contar':
            if (args.length == 0) return reply( '0 letras, não há texto😀')
			const count = body.slice(8).length
            if (count === 1) {
            reply(`O texto possui ${count} letra.`)
            } else if (count > 1) {
			reply(`O texto possui ${count} letras.`)
            }
			break

case 'nuli':
      console.log("writing...")
      const teks = text.replace(/nulis/, "")
      split = teks.replace(/(\S+\s*){1,10}/g, "$&\n")
      const fixedHeight = split.split("\n").slice(0, 25).join("\\n")
      console.log(split)
      spawn("convert", [
            "./assets/paper.jpg",
            "-font",
            "Indie-Flower",
            "-size",
            "700x960",
            "-pointsize",
            "18",
            "-interline-spacing",
            "3",
            "-annotate",
            "+170+222",
            fixedHeight,
            "./assets/result.jpg"
         ])
         .on("error", () => console.log("error"))
         .on("exit", () =>
         {
            const buffer = fs.readFileSync("assets/result.jpg") // can send mp3, mp4, & ogg -- but for mp3 files the mimetype must be set to ogg
            tiringa.sendMessage(from, buffer, MessageType.image)
            console.log("done")
         })
/*

cmd.on('distord', ['distord', 'distorsi', 'earrape'], async function (client = new Client(), { from, id, isQuotedAudio, isQuotedVideo, quotedMsg, message }) {
    if (isQuotedAudio || isQuotedVideo) {
        const encryptMedia = isQuotedAudio || isQuotedVideo ? quotedMsg : message
        const _mimetype = encryptMedia.mimetype
        tiringa.reply(from, config.msg.waitConvert(_mimetype.replace(/.+\//, ''), 'mp3', '⚠ WARNING ⚠\n🔇 Tau lah :v'), id)
        console.log(color('[WAPI]', 'green'), 'Downloading and decrypt media...')
        const mediaData = await decryptMedia(encryptMedia)
        const distord = await stream2Buffer(write => {
            ffmpeg(buffer2Stream(mediaData))
                .audioFilter('aeval=sgn(val(ch))')
                .format('mp3')
                .on('start', commandLine => console.log(color('[FFmpeg]'), commandLine))
                .on('progress', progress => console.log(color('[FFmpeg]'), progress))
                .on('end', () => console.log(color('[FFmpeg]'), 'Processing finished!'))
                .stream(write)
        })
        tiringa.sendFile(from, baseURI(distord, 'audio/mp3'), 'distorted.mp3', '', id)
    } else if (isQuotedVideo) {
        // // Bantuin ffmpeg nya :')
        // // biar bisa video filter sama audio filter
        tiringa.reply(from, config.msg.waitConvert('mp4', 'mp4', '⚠ WARNING ⚠\n🔇 Tau lah :v'), id)
        const encryptMedia = isQuotedVideo ? quotedMsg : message
        console.log(color('[WAPI]', 'green'), 'Downloading and decrypt media...')
        const mediaData = await decryptMedia(encryptMedia)
        const distord = await stream2Buffer(write => {
            ffmpeg(buffer2Stream(mediaData))
                .complexFilter('scale=iw/2:ih/2,eq=saturation=100:contrast=10:brightness=0.3:gamma=10,noise=alls=100:allf=t,unsharp=5:5:1.25:5:5:1,eq=gamma_r=100:gamma=50,scale=iw/5:ih/5,scale=iw*4:ih*4,eq=brightness=-.1,unsharp=5:5:1.25:5:5:1')
                .audioFilter('aeval=sgn(val(ch))')
                .outputOptions(
                    '-codec:v', 'libx264',
                    '-crf', '32',
                    '-preset', 'veryfast'
                )
                .format('mp4')
                .on('start', commandLine => console.log(color('[FFmpeg]'), commandLine))
                .on('progress', progress => console.log(color('[FFmpeg]'), progress))
                .on('end', () => console.log(color('[FFmpeg]'), 'Processing finished!'))
                .stream(write)
        })
        tiringa.sendFile(from, baseURI(distord, 'video/mp4'), 'distorted.mp4', '', id)
    }
})


cmd.on('deepfry', ['deepfry', 'goreng'], async function (client = new Client(), { from, id, isImage, isQuotedImage, isQuotedSticker, quotedMsg, message }) {
    if (isImage || isQuotedImage || isQuotedSticker) {
        if (isQuotedSticker) tiringa.reply(from, config.msg.waitConvert('webp (jpg 3x)', 'webp (jpg 3x)', 'Sedang menggoreng stiker:v (4 kali)'), id)
        else tiringa.reply(from, config.msg.waitConvert('jpg', 'jpg', 'Sedang menggoreng:v (4 kali)'), id)
        const encryptMedia = !isImage && (isQuotedImage || isQuotedSticker) ? quotedMsg : message
        console.log(color('[WAPI]', 'green'), 'Downloading and decrypt media...')
        const mediaData = await decryptMedia(encryptMedia)
        // .complexFilter('eq=saturation=100:contrast=10:brightness=0.1:gamma=10,noise=alls=60:allf=t,unsharp=5:5:1.25:5:5:1,eq=gamma_r=100')
        const filter = 'eq=saturation=100,unsharp=5:5:1.25:5:5:1.0,noise=alls=40:allf=t'
        const quality = '20'
        let fry = await stream2Buffer(write => {
            ffmpeg(buffer2Stream(mediaData))
                .complexFilter(filter + ',scale=iw/2:ih/2')
                .outputOptions('-q:v', quality)
                .format('mjpeg')
                .on('start', commandLine => console.log(color('[FFmpeg]'), commandLine))
                .on('progress', progress => console.log(color('[FFmpeg]'), progress))
                .on('end', () => console.log(color('[FFmpeg]'), 'Processing finished!'))
                .stream(write)
        })
        fry = await stream2Buffer(write => {
            ffmpeg(buffer2Stream(fry))
                .complexFilter(filter + ',scale=iw/2:ih/2')
                .outputOptions('-q:v', quality)
                .format('mjpeg')
                .on('start', commandLine => console.log(color('[FFmpeg]'), commandLine))
                .on('progress', progress => console.log(color('[FFmpeg]'), progress))
                .on('end', () => console.log(color('[FFmpeg]'), 'Processing finished!'))
                .stream(write)
        })
        fry = await stream2Buffer(write => {
            ffmpeg(buffer2Stream(fry))
                .complexFilter(filter)
                .outputOptions('-q:v', quality)
                .format('mjpeg')
                .on('start', commandLine => console.log(color('[FFmpeg]'), commandLine))
                .on('progress', progress => console.log(color('[FFmpeg]'), progress))
                .on('end', () => console.log(color('[FFmpeg]'), 'Processing finished!'))
                .stream(write)
        })
        fry = await stream2Buffer(write => {
            ffmpeg(buffer2Stream(fry))
                .complexFilter(filter)
                .outputOptions('-q:v', quality)
                .format('mjpeg')
                .on('start', commandLine => console.log(color('[FFmpeg]'), commandLine))
                .on('progress', progress => console.log(color('[FFmpeg]'), progress))
                .on('end', () => console.log(color('[FFmpeg]'), 'Processing finished!'))
                .stream(write)
        })
        if (isQuotedSticker) {
            fry = await processSticker(fry, 'contain')
            tiringa.sendRawWebpAsSticker(from, fry.toString('base64'))
        }
        else tiringa.sendFile(from, baseURI(fry, 'image/jpg'), 'deepfry.jpg', 'Nih gorengannya (deepfry)', id)
    } else tiringa.reply(from, config.msg.noMedia, id)
})
*/
break
case 'nulis':
				const textnulis = body.slice(7)
				let inputPath ='./MFarelS/Farelll/magernulis1.jpg'
 			   let outputPath = './hasil.jpg'
			    let d = new Date
			    let tgl = d.toLocaleDateString('id-Id')
			    let hari = d.toLocaleDateString('id-Id', { weekday: 'long' })
 			   reply('p\n' + util.format({fontPath, inputPath, outputPath, tgl, hari, textnulis}))
				  spawn('convert', [
				    inputPath,
				    '-font',
				    fontPath,
				    '-size',
				    '1024x784',
				    '-pointsize',
				    '20',
 				   '-interline-spacing',
				    '1',
				    '-annotate',
 				   '+806+78',
				    hari,
  				  '-font',
  				  fontPath,
  				  '-size',
  				  '1024x784',
  				  '-pointsize',
  				  '18',
  				  '-interline-spacing',
  				  '1',
  				  '-annotate',
   				 '+806+102',
 				   tgl,
 				   '-font',
  				  fontPath,
   				 '-size',
				    '1024x784',
 				   '-pointsize',
 				   '20',
  				  '-interline-spacing',
  				  '-7.5',
  				  '-annotate',
 				   '+344+142',
 				   textnulis,
    				outputPath
				  ])
 				 .on('error', e => reply(util.format(e))
 				 .on('exit', () => {
  			  tiringa.sendMessage(from, outputPath, image, {quoted: mek, caption : ' nih sayang, jangan mager ya sayang'})
  			}))
  			  break

case 'bokep':
				tiringa.updatePresence(from, Presence.composing) 
                  if (isBanned) return reply(mess.erro.baned)
				if (!isUser) return reply(mess.only.registrarB)
				 data = fs.readFileSync('./src/18.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 randBokep = await getBuffer(randKey.image)
                 reply('JANGAN COMLY MULU BRO')
                 randTeks = randKey.teks
                 tiringa.sendMessage(from, randBokep, image, {quoted: mek, caption: randTeks})
				break

case 'infome':
case 'perfil':
  if (!isUser) return reply(mess.only.registrarB)
const usLevel = getLevelingLevel(sender)
const usXp = getLevelingXp(sender)
const usTime = getRegisterTime(sender) 
const serh = getRegisterSerial(sender)
const idad = getRegisterAge(sender)
const regin = getRegisterName(sender)
const requirXp = 500 * (Math.pow(2, usLevel) - 1)
  try {
ppimg = await tiringa.getProfilePicture(`${sender.split('@')[0]}@c.us`)
  } catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
  }
 const pf = 
`
  ‣ Nome: @${sender.split("@")[0]}
  ‣ Registrado: ✅
  ‣ Idade: ${idad}
  ‣ Nome de registro: ${regin}
  ‣ Registrado desde: ${usTime}
  ‣ Level: ${usLevel}
  ‣ XP: ${usXp}/${requirXp}
  ‣ Patente: ${role}
  ‣ link: wa.me/${sender.split("@")[0]}
  ‣ Código: ${serh}
`
  its = await getBuffer (ppimg)
  tiringa.sendMessage(from, its, image, {quoted: mek, caption: pf, contextInfo: {mentionedJid: [sender]}})
  break

case 'criador':
case 'owner':
italuft = fs.readFileSync('./teste/gojo.jpg')
tiringa.sendMessage(from, italuft, image, {quoted: mek, caption: `☆━✪🕴  ∴₰Ⱦꪋℓo፝֯֟ ߷  🕴✪━☆\n\nChat do baiano: wa.me/+5574999510904`})
break

                     case 'slow':
					low = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					slo = await tiringa.downloadAndSaveMediaMessage(low)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${slo} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(slo)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						tiringa.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'esquilo':
					pai = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

					tup = await tiringa.downloadAndSaveMediaMessage(pai)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${tup} -filter:a "atempo=0.7,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(tup)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						tiringa.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'gemuk':
					muk = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

					gem = await tiringa.downloadAndSaveMediaMessage(muk)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(gem)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						tiringa.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'bass':                 
					ass = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

					bas = await tiringa.downloadAndSaveMediaMessage(ass)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${bas} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(bas)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						tiringa.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
					break

              case 'earrape':                 
					ass = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					bas = await tiringa.downloadAndSaveMediaMessage(ass)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${bas} -af equalizer=f=90:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(bas)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						tiringa.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
					break

case 'info':
  me = tiringa.user
  uptime = process.uptime()
  inf =
 `‣ Nome do bot: ${me.name}
  ‣ Número do bot: @${me.jid.split('@')[0]}
  ‣ Dono: Italu
  ‣ Prefix: ${prefix}
  ‣ O bot está ativo há: ${temporizador(uptime)}
  ‣ Total de usuários: ${_registered.length} usuários
  ‣ Total chats: ${totalchat.length}`
  buffer = await getBuffer(me.imgUrl)
  tiringa.sendMessage(from, buffer, image, {caption: inf, contextInfo: {mentionedJid: [me.jid]}})
  break

case 'infogp':
case 'infogc':
				case 'groupinfo':
				case 'infogrup':
				case 'grupinfo':
                if (!isUser) return reply(mess.only.userB)
                tiringa.updatePresence(from, Presence.composing)
                if (!isGroup) return reply(mess.only.group)
                let { owner, creation, participants, desc } = groupMetadata;
                const creationTime = moment.unix(creation);
                try {
					ppUrl = await tiringa.getProfilePicture(from)
					} catch {
					ppUrl = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
			    buffer = await getBuffer(ppUrl)
                infogp = 
` 
  ‣Nome: ${groupName}
  ‣Quantidade de membros: ${groupMembers.length}
  ‣Total de administradores: ${groupAdmins.length}
  ‣Criador : @${owner.split('@')[0]}
  ‣Total de membros: ${participants.length} membros
  ‣Descrição:
  ${desc ? desc : ''}`
		        tiringa.sendMessage(from, buffer, image, {quoted: mek, caption: infogp})
                break

case 'ping':
  case 'speed':
if (!isUser) return reply(mess.only.userB)
const timestamp = speed();
const latensi = speed() - timestamp
tiringa.updatePresence(from, Presence.composing)
uptime = process.uptime()
tiringa.sendMessage(from, `Pong!\nTempo de resposta: ${latensi.toFixed(4)} segundos\n`, text, {
  quoted: mek
})
break

case 'img':
case 'image':
case 'imagem':
if (!isUser) return reply(mess.only.registrarB)
if (args.length < 1) return reply('digite o que você desejabuscar')
tiringa.updatePresence(from, Presence.composing)
reply(mess.wait)
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${args}`, {
  method: 'get'
})
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
tiringa.sendMessage(from, pok, image, {
  quoted: mek, caption: `Achei isso sobre: ${args}`
})

} catch {
  reply(`Não econtrei nada sobre ${agrs}...`)
}
break

case 'online':
        		let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
			    let online = [...Object.keys(tiringa.chats.get(ido).presences), tiringa.user.jid]
			    tiringa.sendMessage(from, 'Lista de usuários online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, text, { quoted: mek,
  			  contextInfo: { mentionedJid: online }
			    })
				break



//--pinterest anime neko
case 'neko':
if (!isUser) return reply(mess.only.registrarB)
tiringa.updatePresence(from, Presence.composing)
uk = ["anime neko"]
nk = uk[Math.floor(Math.random() * uk.length)]
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
  method: 'get'
})
reply(mess.wait)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
tiringa.sendMessage(from, pok, image, {
  quoted: mek, caption: `nyan`
})

} catch {
  reply(mess.ferr)
}
break

//--Pinteres anime loli
  case 'loli':
if (!isUser) return reply(mess.only.registrarB)
tiringa.updatePresence(from, Presence.composing)
uk = ["anime loli"]
nk = uk[Math.floor(Math.random() * uk.length)]
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
  method: 'get'
})
reply(mess.wait)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
tiringa.sendMessage(from, pok, image, {
  quoted: mek, caption: `nii?`
})

} catch {
  reply(mess.ferr)
}
break

case 'shitpost':
case 'shit':
if (!isUser) return reply(mess.only.registrarB)
tiringa.updatePresence(from, Presence.composing)
uk = ["shitpost br"]
nk = uk[Math.floor(Math.random() * uk.length)]
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
  method: 'get'
})
reply(mess.wait)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
tiringa.sendMessage(from, pok, image, {
  quoted: mek, caption: `إذا قمت بترجمة هذا فأنت سارق🤣👆`
})

} catch {
  reply(mess.ferr)
}
break

  case 'anime':
if (!isUser) return reply(mess.only.registrarB)
tiringa.updatePresence(from, Presence.composing)
am = ["anime tumblr",
  "wallpaper anime hd",
  "anime aestethic",
  "anime hd"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
  method: 'get'
})
reply(mess.wait)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
tiringa.sendMessage(from, pok, image, {
  quoted: mek, caption: `💮`
})
break

//--Pinterest wallpaper
  case 'wp':
case 'wallpaper':
  if (!isUser) return reply(mess.only.registrarB)
  tiringa.updatePresence(from, Presence.composing)
  pw = ["wallpaper aestethic",
"wallpaper tumblr",
"wallpaper lucu",
"wallpaper"]
  nk = pw[Math.floor(Math.random() * pw.length)]
  try {
  data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
  })
  reply(mess.wait)
  n = JSON.parse(JSON.stringify(data));
  nimek = n[Math.floor(Math.random() * n.length)];
  pok = await getBuffer(nimek)
  tiringa.sendMessage(from, pok, image, {
quoted: mek, caption: `Gostou do que escolhi?`
  })
  
  } catch {
    reply(mess.ferr)
  }
  break

case 'nomeninja':
  if (args.length < 1) return reply('escreva seu nome')
tiringa.updatePresence(from, Presence.composing)
if (!isUser) return reply(mess.only.registrarB)
nome = body.slice(10)
try {
data = await fetchJson(`https://api.terhambar.com/ninja?nama=${nome}`)
hasil = `Seu nome de ninja:\n\n${data.result.ninja}`
reply(hasil)

} catch {
  reply(mess.ferr)
}
break

case 'nsfw':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					//if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply(`Digite ${prefix}nsfw 1 para ativar`)
					if (Number(args[0]) === 1) {
						if (isNsfw) return reply('O NSFW já está ativo no grupo')
						nsfw.push(from)
						fs.writeFileSync('./data/nsfw.json', JSON.stringify(nsfw))
						reply('Função NSFW ativada no grupo')
					} else if (Number(args[0]) === 0) {
						nsfw.splice(from, 1)
						fs.writeFileSync('./data/nsfw.json', JSON.stringify(nsfw))
						reply('Função NSFW desativada no grupo')
					} else {
						reply(`Digite ${prefix}nsfw 1 para ativar, 0 para desativar o recurso`)
					}
					break
                   
                   case 'leveis':
                if (!isGroup) return reply(mess.only.group)
                if (!isGroupAdmins) return reply(mess.only.admin)
                if (args.length < 1) return reply(`Digite da forma correta:\nComando: ${prefix}leveis 1, para ativar e 0 para desativar`)
                if (Number(args[0]) === 1) {
                if (isLevelingOn) return reply('Função leveis já está ativada no grupo')
                 	   _leveling.push(from)
                 	   fs.writeFileSync('./datauser/leveling.json', JSON.stringify(_leveling))
                  	   reply('Função leveis foi ativada')
              	  } else if (Number(args[0]) === 0) {
                  	  _leveling.splice(from, 1)
                 	   fs.writeFileSync('./datauser/leveling.json', JSON.stringify(_leveling))
                 	    reply('Função leveis foi desativada')
             	   } else {
                 	   reply(`Digite da forma correta:\nComando: ${prefix}leveis 1, para ativar e 0 para desativar`)
                	}
				break

case 'setppgc':
if (!isGroup) return reply(mess.only.group)
if (!isUser) return reply(mess.only.registrarB)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
const ftgp = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
reply(mess.wait)
const medipp = await tiringa.downloadAndSaveMediaMessage(ftgp)
await tiringa.updateProfilePicture (from, medipp)
reply('foto do grupo alterada')
break

case 'triggered':
case 'ger':
 if (!isUser) return reply(mess.only.userB)
            var imgbb = require('imgbb-uploader')
           if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
           ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
           reply(mess.waitimg)
         owgi = await tiringa.downloadAndSaveMediaMessage(ger)
           anu = await imgbb("0c419be2e8bfc27eff00147b0c763418", owgi)
        imgtrg = `${anu.display_url}`
         ranp = getRandom('.gif')
        rano = getRandom('.webp')
        anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${imgtrg}`
       exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                                                fs.unlinkSync(ranp)
                                                if (err) return reply(mess.error.stick)
                                                nobg = fs.readFileSync(rano)
                                                tiringa.sendMessage(from, nobg, sticker, {quoted: mek})
                                                fs.unlinkSync(rano)
                                        })
                                    
                                             } else {
                                                 reply('Você precisa marcar ou enviar uma imagem para isso')
                                          }
                                             break


case 'tourl':
 if (!isUser) return reply(mess.only.userB)
            var imgbb = require('imgbb-uploader')
           if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
           ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
           reply(mess.wait)
         owgi = await tiringa.downloadAndSaveMediaMessage(ger)
           anu = await imgbb("0c419be2e8bfc27eff00147b0c763418", owgi)
        imurl = `${anu.display_url}`
reply(imurl)
}
break

case 'wasted':
if (!isUser) return reply(mess.only.userB)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(mess.waitimg)
  owgi = await tiringa.downloadAndSaveMediaMessage(ger)
  anu = await imgbb("0c419be2e8bfc27eff00147b0c763418", owgi)
  imgwas = `${anu.display_url}`
  hehe = await getBuffer(`https://some-random-api.ml/canvas/wasted?avatar=${imgwas}`)
 tiringa.sendMessage(from, hehe, image, {quoted:mek})
} else {
  reply('Você precisa marcar ou enviar uma imagem')
}
break

case 'drawing':
if (!isUser) return reply(mess.only.userB)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(mess.waitimg)
  owgi = await tiringa.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("0c419be2e8bfc27eff00147b0c763418", owgi)
  hehe = await getBuffer(`https://videfikri.com/api/textmaker/pencil/?urlgbr=${anu.display_url}`)
 tiringa.sendMessage(from, hehe, image, {quoted:mek})
} else {
  reply('Você precisa marcar ou enviar uma imagem')
}
break


case 'wanted':
if (!isUser) return reply(mess.only.userB)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage)) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
if (args.length < 1) return reply(`Digite algum texto para isso`)
  wtext = body.slice(7)
  reply(mess.waitimg)
  owgi = await tiringa.downloadAndSaveMediaMessage(ted)
  anu = await imgbb("0c419be2e8bfc27eff00147b0c763418", owgi)
  hehe = await getBuffer(`https://videfikri.com/api/textmaker/wanted/?urlgbr=${anu.display_url}&text1=${wtext}&text2=10000`)
 tiringa.sendMessage(from, hehe, image, {quoted:mek})
} else {
  reply('Você precisa marcar ou enviar uma imagem')
}
break

case '8bit':
if (!isUser) return reply(mess.only.userB)
if (!q.includes('|')) return reply(`Digite da forma correta:\nComando: ${prefix}8bit texto1|texto2`)
reply(mess.waitimg)
pc = body.slice(5)
  tx1 = pc.split("|")[0];
  tx2 = pc.split("|")[1];
hehe = await getBuffer(`https://videfikri.com/api/textmaker/8bit/?text1=${tx1}&text2=${tx2}`)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
break

case 'bneon':
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply('digite algum texto para isso')
pc = body.slice(6)
reply(mess.waitimg)
hehe = await getBuffer(`https://api.zeks.xyz/api/bneon?apikey=apivinz&text=${pc}`)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
break
//ttk
case 'luzneon':
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply('digite algum texto para isso')
pc = body.slice(8)
reply(mess.waitimg)
hehe = await getBuffer(`https://docs-jojo.herokuapp.com/api/neon_light?text=${pc}`)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
break

case 'matrix':
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply('digite algum texto para isso')
pc = body.slice(7)
reply(mess.waitimg)
hehe = await getBuffer(`https://api.zeks.xyz/api/matrix?apikey=apivinz&text=${pc}`)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
break

case 'breakwall':
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply('digite algum texto para isso')
pc = body.slice(10)
reply(mess.waitimg)
hehe = await getBuffer(`https://api.zeks.xyz/api/breakwall?apikey=apivinz&text=${pc}`)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
break

case 'dropwater':
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply('digite algum texto para isso')
pc = body.slice(10)
reply(mess.waitimg)
hehe = await getBuffer(`https://api.zeks.xyz/api/dropwater?apikey=apivinz&text=${pc}`)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
break

case 'wolflogo':
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Digite da forma correta:\nComando: ${prefix}wolflogo texto1|texto2`)
if (!q.includes('|')) return reply(`Digite da forma correta:\nComando: ${prefix}wolflogo texto1|texto2\nNão esqueça do: | `)
pc = body.slice(9)
  tx1 = pc.split("|")[0];
  tx2 = pc.split("|")[1];
reply(mess.waitimg)
hehe = await getBuffer(`https://api.zeks.xyz/api/wolflogo?apikey=apivinz&text1=${tx1}&text2=${tx2}`)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
break
///--photoOXY
case 'flowertext':
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply('digite algum texto para isso')
pc = body.slice(11)
reply(mess.waitimg)
hehe = fetchJson(`https://api.zeks.xyz/api/flowertext?text=${pc}&apikey=apivinz`)
heh = await getBuffer(hehe.result)
tiringa.sendMessage(from, heh, image, {quoted:mek})
break
///--photoOXY

case 'lovepaper':
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply('digite algum texto para isso')
pc = body.slice(10)
reply(mess.waitimg)
hehe = await getBuffer(`https://videfikri.com/api/textmaker/lovemsg/?text=${pc}`)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
break

case 'tfire':
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply('digite algum texto para isso')
pc = body.slice(6)
reply(mess.waitimg)
hehe = await getBuffer(`https://api.zeks.xyz/api/tfire?text=${pc}&apikey=apivinz`)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
break

case 'sandw':
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply('digite algum texto para isso')
pc = body.slice(6)
reply(mess.waitimg)
hehe = await getBuffer(`https://api.zeks.xyz/api/sandw?apikey=apivinz&text=${pc}`)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
break

case 'firofiro':
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply('digite algum texto para isso')
pc = body.slice(9)
reply(mess.waitimg)
hehe = await getBuffer(`https://api.zeks.xyz/api/epep?text=${pc}&apikey=apivinz`)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
break

case 'text3d2':
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply('digite algum texto para isso')
pc = body.slice(8)
reply(mess.waitimg)
hehe = await getBuffer(`https://api.zeks.xyz/api/text3dbox?apikey=apivinz&text=${pc}`)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
break

case 'text3d':
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply('digite algum texto para isso')
pc = body.slice(7)
reply(mess.waitimg)
hehe = await getBuffer(`https://api.zeks.xyz/api/text3d?text=${pc}&apikey=apivinz`)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
break

case 'phlogo':
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply('digite algum texto para isso')
if (!q.includes('|')) return reply(`Digite da forma correta:\nComando: ${prefix}phlogo texto1|texto2\nNão esqueça do: | `)
pc = body.slice(7)
  tx1 = pc.split("|")[0];
  tx2 = pc.split("|")[1];
reply(mess.waitimg)
hehe = await getBuffer(`https://api.zeks.xyz/api/phlogo?text1=${tx1}&text2=${tx2}&apikey=apivinz`)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
break

case 'bpmek':
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply('digite algum texto para isso')
pc = body.slice(6)
reply(mess.waitimg)
hehe = await getBuffer(`https://api.zeks.xyz/api/logobp?text=${pc}&apikey=apivinz`)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
break

case 'folhas':
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply('digite algum texto para isso')
pc = body.slice(7)
reply(mess.waitimg)
hehe = await getBuffer(`https://api.zeks.xyz/api/leavest?text=${pc}&apikey=apivinz`)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
break

case 'tlight':
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply('digite algum texto para isso')
pc = body.slice(7)
reply(mess.waitimg)
hehe = await getBuffer(`https://api.zeks.xyz/api/tlight?text=${pc}&apikey=apivinz`)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
break


case 'narutobanner':
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply('digite algum texto para isso')
pc = body.slice(14)
reply(mess.waitimg)
hehe = await getBuffer(`https://videfikri.com/api/textmaker/narutobanner/?text=${pc}`)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
break

case 'romancetext':
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply('digite algum texto para isso')
pc = body.slice(12)
reply(mess.waitimg)
hehe = await getBuffer(`https://videfikri.com/api/textmaker/romancetext/?text=${pc}`)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
break

case 'shadowtext':
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply('digite algum texto para isso')
pc = body.slice(11)
reply(mess.waitimg)
hehe = await getBuffer(`https://videfikri.com/api/textmaker/shadowtext/?text=${pc}`)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
break

case 'tiktokeffect':
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Digite da forma correta:\nComando: ${prefix}tiktokeffect texto1|texto2`)
if (!q.includes('|')) return reply(`Digite da forma correta:\nComando: ${prefix}tiktokeffect texto1|texto2`)
pc = body.slice(13)
nomor = pc.split("|")[0];
pesan = pc.split("|")[1];
if (nomor.length >= 9 ) return reply(`Texto 1 máximo 9 carateres`)
if (pesan.length >= 35 ) return reply(`Texto 2 máximo 35 carateres`)
reply(mess.waitimg)
hehe = await getBuffer(`https://videfikri.com/api/textmaker/tiktokeffect/?text1=${nomor}&text2=${pesan}`)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
break

case 'neon':
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply('digite algum texto para isso')
pc = body.slice(5)
if (pc.length >= 80 ) return reply(`Máximo 80 carateres`)
reply(mess.waitimg)
hehe = await getBuffer(`https://videfikri.com/api/textmaker/glowingneon/?text=${pc}`)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
break

case 'hpotter':
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply('digite algum texto para isso')
pc = body.slice(8)
reply(mess.waitimg)
hehe = await getBuffer(`https://videfikri.com/api/textmaker/hpotter/?text=${pc}`)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
break

case 'gaming':
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply('digite algum texto para isso')
pc = body.slice(7)
reply(mess.waitimg)
hehe = await getBuffer(`https://docs-jojo.herokuapp.com/api/gaming?text=${pc}`)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
break

case 'yuri':
if (!isUser) return reply(mess.only.userB)
hehe = await getBuffer(`https://docs-jojo.herokuapp.com/api/random_yuri`)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
break

case 'cep':
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply('digite o cep que deseja buscar')
cep = body.slice(4)
hehe = await fetchJson(`https://brasilapi.com.br/api/cep/v1/${cep}`)
if (hehe.error) return reply(hehe.error)
ccg =
` INFORMAÇÕES DO CEP
  ‣ Cep: ${hehe.cep}
  ‣ Estado: ${hehe.state}
  ‣ Cidade: ${hehe.city}`
tiringa.sendMessage(from, ccg, text, {quoted:mek})
break

case 'ddd':
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply('digite o ddd que deseja buscar')
ddd = body.slice(4)
hehe = await fetchJson(`https://brasilapi.com.br/api/ddd/v1/${ddd}`)
if (hehe.error) return reply(hehe.error)
ccg =
` INFORMAÇÕES DO DDD
  ‣ Estado: ${hehe.state}
  ‣ Cidades: 
    ${hehe.cities}\n`
tiringa.sendMessage(from, ccg, text, {quoted:mek})
break

case 'cartão':
case 'cartao':
if (!isUser) return reply(mess.only.userB)
hehe = await fetchJson(`https://videfikri.com/api/ccgenerator/`)
if (hehe.error) return reply(hehe.error)
ccg =
` Cartão gerado com sucesso
   ‣ Bandeira: ${hehe.result.card.network}
   ‣ Número: ${hehe.result.card.number}
   ‣ Cvv: ${hehe.result.card.cvv}
   ‣ Pin: ${hehe.result.card.pin}
   ‣ Balanço: ${hehe.result.card.balance}
   ‣ Validade: ${hehe.result.card.expiration_month}/${hehe.result.card.expiration_year}`
tiringa.sendMessage(from, ccg, text, {quoted:mek})
break

case 'nekonime':
try {
if (!isUser) return reply(mess.only.userB)
hehe = await fetchJson(`https://docs-jojo.herokuapp.com/api/nekonime`)
buffer = await getBuffer(hehe.result)
tiringa.sendMessage(from, buffer, image, {quoted: mek, caption: 'nyan!'})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌ocorreu um erro❌')
}
break

case 'waifu':
try {
if (!isUser) return reply(mess.only.userB)
hehe = await fetchJson(`https://docs-jojo.herokuapp.com/api/waifu`)
buffer = await getBuffer(hehe.image)
tiringa.sendMessage(from, buffer, image, {quoted: mek, caption: `${hehe.name}`})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌ocorreu um erro❌')
}
break

case 'randomloli':
try {
if (!isUser) return reply(mess.only.userB)
buffer = await getBuffer(`https://docs-jojo.herokuapp.com/api/randomloli`)
tiringa.sendMessage(from, buffer, image, {quoted: mek})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌ocorreu um erro❌')
}
break

case 'sparkling':
try {
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Digite da forma correta:\nComando: ${prefix}sparkling texto1|texto2`)
if (!q.includes('|')) return reply(`Digite da forma correta:\nComando: ${prefix}sparkling texto1|texto2`)
pc = body.slice(10)
  tx1 = pc.split("|")[0];
  tx2 = pc.split("|")[1];
reply(mess.waitimg)
setTimeout( () => {
}, 5000)
hehe = await getBuffer(`https://docs-jojo.herokuapp.com/api/sparkling?text1=${tx1}&text2=${tx2}`)
setTimeout( () => {
tiringa.sendMessage(from, hehe, image, {quoted:mek})
}, 10000)
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌ocorreu um erro❌')
}
break

case 'neve':
try {
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Digite da forma correta:\nComando: ${prefix}neve texto1|texto2`)
if (!q.includes('|')) return reply(`Digite da forma correta:\nComando: ${prefix}neve texto1|texto2`)
pc = body.slice(5)
  tx1 = pc.split("|")[0];
  tx2 = pc.split("|")[1];
reply(mess.waitimg)
haha = await fetchJson(`https://api.zeks.xyz/api/snowwrite?text1=${tx1}&text2=${tx2}&apikey=apivinz`)
hehe = await getBuffer(haha.result)
setTimeout( () => {
tiringa.sendMessage(from, hehe, image, {quoted:mek})
}, 10000)
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌ocorreu um erro❌')
}
break

case 'crismes':
try {
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Digite da forma correta:\nComando: ${prefix}crismes texto`)
pc = body.slice(8)
reply(mess.waitimg)
haha = await fetchJson(`https://api.zeks.xyz/api/crismes?text=${pc}&apikey=apivinz`)
hehe = await getBuffer(haha.result)
setTimeout( () => {
tiringa.sendMessage(from, hehe, image, {quoted:mek})
}, 10000)
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌ocorreu um erro❌')
}
break

case 'watercolor':
try {
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Digite da forma correta:\nComando: ${prefix}watercolor texto`)
pc = body.slice(11)
reply(mess.waitimg)
hehe = await getBuffer(`https://docs-jojo.herokuapp.com/api/watercolor?text=${pc}`)
setTimeout( () => {
tiringa.sendMessage(from, hehe, image, {quoted:mek})
}, 10000)
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌ocorreu um erro❌')
}
break

case 'retro':
try {
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Digite da forma correta:\nComando: ${prefix}retro texto1|texto2&texto3`)
pc = body.slice(6)
tx1 = pc.split("|")[0];
tx2 = pc.split("|")[1];
tx3 = pc.split("&")[1];
reply(mess.waitimg)
haha = await fetchJson(`https://api.zeks.xyz/api/retro?text1=${tx1}&text2=${tx2}&text3=${tx3}&apikey=apivinz`)
hehe = await getBuffer(haha.result)
setTimeout( () => {
tiringa.sendMessage(from, hehe, image, {quoted:mek})
}, 10000)
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌ocorreu um erro❌')
}
break

case 'pubglogo':
try {
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Digite da forma correta:\nComando: ${prefix}retro texto1|texto2|texto3`)
pc = body.slice(9)
tx1 = pc.split("|")[0];
tx2 = pc.split("|")[1];
reply(mess.waitimg)
haha = await fetchJson(`https://api.zeks.xyz/api/pubglogo?text1=${tx1}&text2=${tx2}&apikey=apivinz`)
hehe = await getBuffer(haha.result)
setTimeout( () => {
tiringa.sendMessage(from, hehe, image, {quoted:mek})
}, 10000)
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌ocorreu um erro❌')
}
break

case 'bf4':
try {
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Digite da forma correta:\nComando: ${prefix}retro texto1|texto2|texto3`)
pc = body.slice(4)
tx1 = pc.split("|")[0];
tx2 = pc.split("|")[1];
reply(mess.waitimg)
haha = await getBuffer(`https://videfikri.com/api/textmaker/bf4/?text1=${tx1}&text2=${tx2}`)
setTimeout( () => {
tiringa.sendMessage(from, hehe, image, {quoted:mek})
}, 10000)
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌ocorreu um erro❌')
}
break

case 'random':
try {
if (!isUser) return reply(mess.only.userB)
if (!isNsfw) return reply('🚫funções NSFW desativadas nesse grupo🚫')
hah = await fetchJson(`https://freerestapi.herokuapp.com/api/v1/randomp`)
hehe = await getBuffer(hah.url)
setTimeout( () => {
tiringa.sendMessage(from, hehe, image, {quoted:mek})
}, 10000)
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌ocorreu um erro❌')
}
break

case 'testeg':
hah =  await axios.get(`https://meme-api.herokuapp.com/gimme/animepussy`)
tiringa.sendMessage(from, hah.url, image, {quoted:mek})
break

case 'nezuko':
try {
if (!isUser) return reply(mess.only.userB)
hah = await fetchJson(`https://kagchi-api.glitch.me//waifu/nezuko`)
hehe = await getBuffer(hah.url)
setTimeout( () => {
tiringa.sendMessage(from, hehe, image, {quoted:mek})
}, 10000)
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌ocorreu um erro❌')
}
break

case 'cslogo':
try {
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Digite da forma correta:\nComando: ${prefix}cslogo texto`)
pc = body.slice(6)
reply(mess.waitimg)
haha = await fetchJson(`https://api.zeks.xyz/api/cslogo?text=${pc}&apikey=apivinz`)
hehe = await getBuffer(haha.result)
setTimeout( () => {
tiringa.sendMessage(from, hehe, image, {quoted:mek})
}, 10000)
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌ocorreu um erro❌')
}
break

case 'lithgtext':
try {
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Digite da forma correta:\nComando: ${prefix}lithgtext texto`)
pc = body.slice(10)
reply(mess.waitimg)
haha = await fetchJson(`https://api.zeks.xyz/api/lithgtext?text=${pc}&apikey=apivinz`)
hehe = await getBuffer(haha.result)
setTimeout( () => {
tiringa.sendMessage(from, hehe, image, {quoted:mek})
}, 10000)
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌ocorreu um erro❌')
}
break

case 'silktext':
try {
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Digite da forma correta:\nComando: ${prefix}silktext texto`)
pc = body.slice(9)
reply(mess.waitimg)
haha = await fetchJson(`https://api.zeks.xyz/api/silktext?text=${pc}&apikey=apivinz`)
hehe = await getBuffer(haha.result)
setTimeout( () => {
tiringa.sendMessage(from, hehe, image, {quoted:mek})
}, 10000)
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌ocorreu um erro❌')
}
break

case 'flametext':
try {
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Digite da forma correta:\nComando: ${prefix}flametext texto`)
pc = body.slice(10)
reply(mess.waitimg)
haha = await fetchJson(`https://api.zeks.xyz/api/flametext?text=${pc}&apikey=apivinz`)
hehe = await getBuffer(haha.result)
setTimeout( () => {
tiringa.sendMessage(from, hehe, image, {quoted:mek})
}, 10000)
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌ocorreu um erro❌')
}
break

case 'glowtext':
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Digite da forma correta:\nComando: ${prefix}glowtext texto`)
pc = body.slice(9)
reply(mess.waitimg)
haha = await fetchJson(`https://api.zeks.xyz/api/glowtext?text=${pc}&apikey=apivinz`)
hehe = await getBuffer(haha.result)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
break

case 'crosslogo':
try {
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Digite da forma correta:\nComando: ${prefix}crosslogo texto`)
pc = body.slice(10)
reply(mess.waitimg)
haha = await fetchJson(`https://api.zeks.xyz/api/crosslogo?text=${pc}&apikey=apivinz`)
hehe = await getBuffer(haha.result)
setTimeout( () => {
tiringa.sendMessage(from, hehe, image, {quoted:mek})
}, 10000)
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌ocorreu um erro❌')
}
break

case 'marvellogo':
try {
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Digite da forma correta:\nComando: ${prefix}marvellogo texto1|texto2|texto3`)
pc = body.slice(11)
tx1 = pc.split("|")[0];
tx2 = pc.split("|")[1];
reply(mess.waitimg)
haha = await getBuffer(`http://api.lolhuman.xyz/api/textprome2/marvelstudio?apikey=847de7716f17a51eeba4235c&text1=${tx1}&text2=${tx2}`)
setTimeout( () => {
tiringa.sendMessage(from, hehe, image, {quoted:mek})
}, 10000)
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌ocorreu um erro❌')
}
break

case 'vingador':
try {
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Digite da forma correta:\nComando: ${prefix}vingador texto1|texto2|texto3`)
pc = body.slice(9)
tx1 = pc.split("|")[0];
tx2 = pc.split("|")[1];
reply(mess.waitimg)
haha = await getBuffer(`http://api.lolhuman.xyz/api/textprome2/avenger?apikey=847de7716f17a51eeba4235c&text1=${tx1}&text2=${tx2}`)
setTimeout( () => {
tiringa.sendMessage(from, hehe, image, {quoted:mek})
}, 10000)
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌ocorreu um erro❌')
}
break

case 'halloween':
try {
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Digite da forma correta:\nComando: ${prefix}halloween texto`)
pc = body.slice(10)
reply(mess.waitimg)
hehe = await getBuffer(`http://api.lolhuman.xyz/api/textprome/halloween?apikey=847de7716f17a51eeba4235c&text=${pc}`)
setTimeout( () => {
tiringa.sendMessage(from, hehe, image, {quoted:mek})
}, 10000)
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌ocorreu um erro❌')
}
break

case 'lol':
try {
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Digite da forma correta:\nComando: ${prefix}lol texto`)
pc = body.slice(4)
reply(mess.waitimg)
hehe = await getBuffer(`http://api.lolhuman.xyz/api/photooxy3/bannerlol?apikey=847de7716f17a51eeba4235c&text=${pc}`)
setTimeout( () => {
tiringa.sendMessage(from, hehe, image, {quoted:mek})
}, 10000)
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌ocorreu um erro❌')
}
break

case 'hacker':
try {
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Digite da forma correta:\nComando: ${prefix}hacker texto`)
pc = body.slice(7)
reply(mess.waitimg)
hehe = await getBuffer(`http://api.lolhuman.xyz/api/ephoto1/anonymhacker?apikey=847de7716f17a51eeba4235c&text=${pc}`)
setTimeout( () => {
tiringa.sendMessage(from, hehe, image, {quoted:mek})
}, 10000)
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌ocorreu um erro❌')
}
break

case 'kanna':
if (!isUser) return reply(mess.only.userB)
reply(mess.wait)
hehe = await getBuffer(`http://api.lolhuman.xyz/api/random/kanna?apikey=847de7716f17a51eeba4235c`)
tiringa.sendMessage(from, hehe, image, {quoted: mek})
break

case 'ecchi':
if (!isUser) return reply(mess.only.userB)
if (!isNsfw) return reply('??funções NSFW desativadas nesse grupo🚫')
reply(mess.waitsfw)
hehe = await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/ecchi?apikey=847de7716f17a51eeba4235c`)
tiringa.sendMessage(from, hehe, image, {quoted: mek})
break

case 'shinobu':
if (!isUser) return reply(mess.only.userB)
reply(mess.wait)
hehe = await getBuffer(`http://api.lolhuman.xyz/api/random/shinobu?apikey=847de7716f17a51eeba4235c`)
tiringa.sendMessage(from, hehe, image, {quoted: mek})
break

case 'yaoi':
if (!isUser) return reply(mess.only.userB)
if (!isNsfw) return reply('🚫funções NSFW desativadas nesse grupo🚫')
reply(mess.waitsfw)
hehe = await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/yaoi?apikey=847de7716f17a51eeba4235c`)
tiringa.sendMessage(from, hehe, image, {quoted: mek})
break

case 'bj':
if (!isUser) return reply(mess.only.userB)
if (!isNsfw) return reply('🚫funções NSFW desativadas nesse grupo🚫')
reply(mess.waitsfw)
hehe = await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/blowjob?apikey=847de7716f17a51eeba4235c`)
tiringa.sendMessage(from, hehe, image, {quoted: mek})
break

case 'trap':
if (!isUser) return reply(mess.only.userB)
if (!isNsfw) return reply('🚫funções NSFW desativadas nesse grupo🚫')
reply(mess.waitsfw)
hehe = await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/trap?apikey=847de7716f17a51eeba4235c`)
tiringa.sendMessage(from, hehe, image, {quoted: mek})
break

case 'oppai':
if (!isUser) return reply(mess.only.userB)
if (!isNsfw) return reply('🚫funções NSFW desativadas nesse grupo🚫')
reply(mess.waitsfw)
hehe = await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/sideoppai?apikey=847de7716f17a51eeba4235c`)
tiringa.sendMessage(from, hehe, image, {quoted: mek})
break

case 'animebooty':
if (!isUser) return reply(mess.only.userB)
if (!isNsfw) return reply('🚫funções NSFW desativadas nesse grupo🚫')
reply(mess.waitsfw)
hehe = await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/animebooty?apikey=847de7716f17a51eeba4235c`)
tiringa.sendMessage(from, hehe, image, {quoted: mek})
break
//847de7716f17a51eeba4235c
case 'nekogif':
await tiringa.sendMessage(from, { url: `http://api.lolhuman.xyz/api/random2/nsfw_neko_gif?apikey=847de7716f17a51eeba4235c`}, MessageType.video, { mimetype: Mimetype.gif, caption: "teste!" })
break

case 'gtav':
if (!isUser) return reply(mess.only.userB)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(mess.wait)
  owgi = await tiringa.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("0c419be2e8bfc27eff00147b0c763418", owgi)
  hehe = await getBuffer(`https://videfikri.com/api/textmaker/gtavposter/?urlgbr=${anu.display_url}`)
 tiringa.sendMessage(from, hehe, image, {quoted:mek})
} else {
  reply('Você precisa marcar ou enviar uma imagem')
}
break

case 'chuva':
if (!isUser) return reply(mess.only.userB)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(mess.wait)
  owgi = await tiringa.downloadAndSaveMediaMessage(ted)
  anu = await imgbb("0c419be2e8bfc27eff00147b0c763418", owgi)
  hehe = await getBuffer(`https://docs-jojo.herokuapp.com/api/rain_gif?image_url=${anu.display_url}`)
 tiringa.sendMessage(from, hehe, image, {quoted:mek})
} else {
  reply('Você precisa marcar ou enviar uma imagem')
}
break

case 'meme':
if (!isUser) return reply(mess.only.userB)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(mess.wait)
  owgi = await tiringa.downloadAndSaveMediaMessage(ted)
  pc = body.slice(5)
  tx1 = pc.split("|")[0];
  tx2 = pc.split("|")[1];
  anu = await imgbb("0c419be2e8bfc27eff00147b0c763418", owgi)
  hehe = await getBuffer(`https://docs-jojo.herokuapp.com/api/meme-gen?top=${tx1}&bottom=${tx2}&img=${anu.display_url}`)
 tiringa.sendMessage(from, hehe, image, {quoted:mek})
} else {
  reply('Você precisa marcar ou enviar uma imagem')
}
break

case 'ts':
tiringa.sendMessage(from, bahasa(prefix, sender), text, {
  quoted: mek
})
break

case 'wa.me':
case 'wame':
  tiringa.updatePresence(from, Presence.composing)
  options = {
text: `Seu link wa.me: wa.me/${sender.split("@s.whatsapp.net")[0]}\nOu: \napi.whatsapp.com/send?phone=${sender.split("@")[0]}`,
contextInfo: {
  mentionedJid: [sender]
}
  }
  tiringa.sendMessage(from, options, text, {
quoted: mek
  })
  break

case 'tl':
    if (!isUser) return reply(mess.only.registrarB)
  
if (args.length < 1) return tiringa.sendMessage(from, `digite da forma correta: ${prefix}tl texto/língua`, text, {
  quoted: mek
})
var pc = body.slice(3)
nomor = pc.split("/")[0];
pesan = pc.split("/")[1];
try {
data = await fetchJson(`https://api-translate.azharimm.tk/translate?engine=google&text=${nomor}&to=${pesan}`)
if (!isUser) return reply(mess.only.registrarB)
hasil = `Traduzir:\n${data.data.result}`
reply(hasil)

} catch {
  reply(mess.ferr)
}
break

case 'notif':
if (!isGroupAdmins) return reply(mess.only.admin)
tiringa.updatePresence(from, Presence.composing)
if (!isUser) return reply(mess.only.registrarB)
if (!isGroup) return reply(mess.only.group)
if(args.length < 1) return tiringa.reply('escreva algo como aviso')
aviso  = `Aviso de: @${sender.split("@")[0]}\n\nAviso: ${body.slice(7)}`
group = await tiringa.groupMetadata(from);
member = group['participants']
jids = [];
member.map(async adm => {
  jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
})
options = {
  text: aviso,
  contextInfo: {
mentionedJid: jids
  },
  quoted: mek
}
await tiringa.sendMessage(from, options, text)
break

//---Ganti nama grup
  case 'setname':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
let idgrup = `${from.split("@s.whatsapp.net")[0]}`;
tiringa.groupUpdateSubject(idgrup, `${body.slice(9)}`)
tiringa.sendMessage(from, 'o nome do grupo foi alterado', text, {
  quoted: mek
})
break

//--ganti desk
  case 'setdesk':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
tiringa.groupUpdateDescription(from, `${body.slice(9)}`)
tiringa.sendMessage(from, 'a descrição do grupo atualizada', text, {
  quoted: mek
})
break


//--tagme
case 'tagme':
if (!isUser) return reply(mess.only.registrarB)
const tagme = {
  text: `@${sender.split("@")[0]} 🧙‍♂️`,
  contextInfo: {mentionedJid: [sender]
  }
}
tiringa.sendMessage(from, tagme, text)
break

case 'play':
  if (!isUser) return reply(mess.only.registrarB)
  if (args.length < 1) return reply('Digite o nome da música')
  play = body.slice(6)
reply('Procurando sua música...⏳')
  anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${play}&apikey=apivinz`)
  if (anu.message) return reply('Música não encontrada...\nTente específicar o nome dela.')
  infomp3 = 
`    MÚSICA ENCONTRADA
   ‣ Título: ${anu.result.title}
   ‣ Fonte: ${anu.result.source}
   ‣ link: ${anu.result.url_audio} `
  buffer = await getBuffer(anu.result.thumbnail)
  lagu = await getBuffer(anu.result.url_audio)
  setTimeout( () => {
  tiringa.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
  }, 1500)
  reply('Baixando e enviando sua música...')
  tiringa.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: mek})
  break

case 'ytsearch':
  if (!isUser) return reply(mess.only.registrarB)
  if (args.length < 1) return reply('Digite o que deseja procurar')
  reply('Procurando...')
  play = body.slice(9)
  try {
  anu = await fetchJson(`https://videfikri.com/api/ytplay/?query=${play}`)
  if (anu.error) return reply(anu.error)
  infomp3 = 
`    MÚSICA ENCONTRADA
   ‣ Título: ${anu.result.title}
   ‣ Fonte: ${anu.result.source}
   ‣ Canal: ${anu.result.channel}
   ‣ link: ${anu.result.url} 
   ‣ Duração: ${anu.result.duration}
   ‣ Tamanho: ${anu.result.size}
`
  buffer = await getBuffer(anu.result.thumbnail)
  lagu = await getBuffer(anu.result.url)
  tiringa.sendMessage(from, buffer, image, {
quoted: mek, caption: infomp3
  })
  } catch {
    reply(mess.ferr)
  }
  break

case 'dadosfake':
if (!isUser) return reply(mess.only.registrarB)
anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/fake_identity`)
dadosf = 
`    DADOS GERADOS
   ‣ Nome: ${anu.nome}
   ‣ Sexo: ${anu.gender}
   ‣ Idade: ${anu.age}
   ‣ Telefone: ${anu.phone}
   ‣ Tipo sanguíneo: ${anu.blood_type}
   ‣ E-mail: ${anu.email}
   ‣ Senha: ${anu.password}
   ‣ CEP: ${anu.zip_code}`
tiringa.sendMessage(from, dadosf, text, {quoted: mek})
break

case 'ytmp3':
  if (!isUser) return reply(mess.only.registrarB)
  reply(mess.wait)
  play = body.slice(7)
  if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('Esse link não é do YouTube')
  try {
  anu = await fetchJson(`https://api.zeks.xyz/api/ytmp3/2?url=${play}&apikey=apivinz`)
  infomp3 = `INFORMAÇÕES DO ÁUDIO\n‣ Título: ${anu.result.title}\n‣ Fonte: ${anu.result.source}\n‣ Tamanho: ${anu.result.size}\nlink: ${anu.result.link}`
  buffer = await getBuffer(anu.result.thumb)
  lagu = await getBuffer(anu.result.link)
  tiringa.sendMessage(from, buffer, image, {
quoted: mek, caption: infomp3
  })
  tiringa.sendMessage(from, lagu, audio, {
mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: mek
  })
  
  } catch {
    reply(mess.ferr)
  }
  break

case 'ytmp4':

  if (!isUser) return reply(mess.only.registrarB)
  
  reply(mess.wait)
  play = body.slice(7)
  try {
  anu = await fetchJson(`https://api.zeks.xyz/api/ytmp4?url=${play}&apikey=apivinz`)
  if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('Esse link não é do YouTube')
  if (anu.error) return reply(anu.error)
  infomp3 = `INFORMAÇÕES DO VÍDEO\n‣ Título: ${anu.result.title}\n‣ Fonte: ${anu.result.source}\n‣ Tamanho: ${anu.result.size}\nlink: ${anu.result.url_video}`
  buffer = await getBuffer(anu.result.thumbnail)
  lagu = await getBuffer(anu.result.url_video)
  tiringa.sendMessage(from, buffer, image, {
quoted: mek, caption: infomp3
  })
  tiringa.sendMessage(from, lagu, video, {
mimetype: 'video/mp4', filename: `${anu.result.title}.mp4`, quoted: mek
  })
  
  } catch {
    reply(mess.ferr)
  }
  break

//--read text on image
				case 'ocr':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const ocrt = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const com = await tiringa.downloadAndSaveMediaMessage(ocrt)
						reply(mess.wait)
						await recognize(com, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(oc => {
								reply(oc.trim())
								fs.unlinkSync(com)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(com)
							})
					} else {
						reply(`Marque ou envie uma imagem com ${prefix}ocr para capturar o texto da imagem`)
					}
					break
//--pacote de sticker especial

                case 'fign':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage)) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await tiringa.downloadAndSaveMediaMessage(encmedia)
                     if (!q.includes('|')) return reply(`Você deve digitar o nome do pacote e criador dessa forma:\nComando: ${prefix}fign nome do pack|nome do autor\nExemplo: ${prefix}fign Pack nagatoro1|Italu`)
                        nomes = body.slice(5)
                        pack = nomes.split("|")[0];
                        autor = nomes.split("|")[1];
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata(pack, autor)} ${ran} -o ${ran}`, async (error) => {
									if (error) return reply(mess.error.stick)
									tiringa.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)	
									fs.unlinkSync(ran)	
                                     })
                                    })
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(180,iw)':min'(180,ih)':force_original_aspect_ratio=decrease,fps=20, pad=180:180:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11)) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await tiringa.downloadAndSaveMediaMessage(encmedia)
                      if (!q.includes('|')) return reply(`Você deve digitar o nome do pacote e criador dessa forma:\nComando: ${prefix}fign nome do pack|nome do autor\nExemplo: ${prefix}fign Pack nagatoro1|Italu`)
                        nomes = body.slice(5)
                        pack = nomes.split("|")[0];
                        autor = nomes.split("|")[1];
						ran = getRandom('.webp')
						reply(mess.wait)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`A conversão de ${tipe} para o sticker falhou`)
							})
							.on('end', function () {
								console.log('Finish')
                                metada = 
								exec(`webpmux -set exif ${addMetadata(pack, autor)} ${ran} -o ${ran}`, async (error) => {
									if (error) return reply(mess.error.stick)
									tiringa.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)
									fs.unlinkSync(ran)
								})
                                    })
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(180,iw)':min'(180,ih)':force_original_aspect_ratio=decrease,fps=20, pad=180:180:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await tiringa.downloadAndSaveMediaMessage(encmedia)
						ranw = getRandom('.webp')
						ranp = getRandom('.png')
						reply(mess.wait)
						keyrmbg = 'sfFSzxRz7y6jYDwfxx47rCgz'
						await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp}).then(res => {
							fs.unlinkSync(media)
							let buffer = Buffer.from(res.base64img, 'base64')
							fs.writeFileSync(ranp, buffer, (err) => {
								if (err) return reply('ocorreu um erro')
							})
							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
								fs.unlinkSync(ranp)
								if (err) return reply(mess.error.stick)
								exec(`webpmux -set exif ${addMetadata('Tiringa-BOT', authorname)} ${ranw} -o ${ranw}`, async (error) => {
									if (error) return reply(mess.error.stick)
									tiringa.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: mek})
									fs.unlinkSync(ranw)
								})
							})
						})
					} else {
						reply(`Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos`)
					}
					break

//--pacote de sticker especial

//--stiker maker
				case 's':
				case 'stiker':
				case 'sticker':
				case 'stickergif':
				case 'stikergif':
                case 'fig':
                case 'gif':
                case 'figura':
                case 'figu':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await tiringa.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata('Tiringa-BOT', authorname)} ${ran} -o ${ran}`, async (error) => {
									if (error) return reply(mess.erro.stick)
									tiringa.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)	
									fs.unlinkSync(ran)	
                                     })
                                    })
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,"crop=690:690", "-lossless 1", "-qscale 1", "-preset default", "-loop 0", "-an", "-vsync 0"])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await tiringa.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(mess.wait)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`A conversão de ${tipe} para o sticker falhou`)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata('Tiringa-BOT', authorname)} ${ran} -o ${ran}`, async (error) => {
									if (error) return reply(mess.erro.stick)
									tiringa.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)
									fs.unlinkSync(ran)
								})
                                    })
                             //.addOutputOptions(["-y", "-vcodec libwebp", "-lossless 1", "-qscale 1", "-preset default", "-loop 0", "-an", "-vsync 0", "-s 512x512"])
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`, `scale='min(180,iw)':min'(180,ih)':force_original_aspect_ratio=decrease,fps=20, pad=180:180:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await tiringa.downloadAndSaveMediaMessage(encmedia)
						ranw = getRandom('.webp')
						ranp = getRandom('.png')
						reply(mess.wait)
						keyrmbg = 'sfFSzxRz7y6jYDwfxx47rCgz'
						await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp}).then(res => {
							fs.unlinkSync(media)
							let buffer = Buffer.from(res.base64img, 'base64')
							fs.writeFileSync(ranp, buffer, (err) => {
								if (err) return reply('ocorreu um erro')
							})
							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
								fs.unlinkSync(ranp)
								if (err) return reply(mess.error.stick)
								exec(`webpmux -set exif ${addMetadata('Tiringa-BOT', authorname)} ${ranw} -o ${ranw}`, async (error) => {
									if (error) return reply(mess.error.stick)
									tiringa.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: mek})
									fs.unlinkSync(ranw)
								})
							})
						})
					} else {
						reply(`Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos`)
					}
					break

                    case 'st':
if (!isUser) return reply(mess.only.registrarB)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await tiringa.downloadAndSaveMediaMessage(encmedia)                                     
						rano = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
                                exec(`webpmux -set exif ${addMetadata('Tiringa-BOT', authorname)} ${rano} -o ${rano}`, async (error) => {
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
                      })
							exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
							fs.unlinkSync(media)
						buffer = fs.readFileSync(rano)
						tiringa.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
                        })
						} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await tiringa.downloadAndSaveMediaMessage(encmedia)
						rano = getRandom('.webp')
						reply(mess.waitgif)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
                                exec(`webpmux -set exif ${addMetadata('Tiringa-BOT', authorname)} ${rano} -o ${rano}`, async (error) => {
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`Falha na conversão de ${tipe} para sticker`)
							})
                      })
							exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
							fs.unlinkSync(media)
						buffer = fs.readFileSync(rano)
						tiringa.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					    })
						} else {
						reply(`Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos`)
					}
					break
                      

//-- temp
			case 'gets':
			  
				var itsme = `0@s.whatsapp.net`
				var split = `${cr}`
				var selepbot = {
					contextInfo: {
						participant: itsme,
						quotedMessage: {
							extendedTextMessage: {
								text: split,
							}
						}
					}
				}
				namastc = body.slice(6)
				try {
				result = fs.readFileSync(`./temp/stick/${namastc}.webp`)
				tiringa.sendMessage(from, result, sticker, selepbot)
				} catch {
				  reply('Arquivo não está registrado')
				}
				break
			
			
			  case 'getstik':
				var itsme = `0@s.whatsapp.net`
				var split = `${cr}`
				var selepbot = {
					contextInfo: {
						participant: itsme,
						quotedMessage: {
							extendedTextMessage: {
								text: split,
							}
						}
					}
				}
				namastc = body.slice(9)
				try {
				result = fs.readFileSync(`./temp/stick/${namastc}.webp`)
				tiringa.sendMessage(from, result, sticker, selepbot)
				} catch {
				  reply('Arquivo não está registrado')
				}
				break
			
			
			
			case 'liststik':
				lt = 'Lista de stickers:\n\n'
				for (let awokwkwk of setiker) {
					lt += `- ${awokwkwk}\n`
				}
				lt += `\n*Total : ${setiker.length}*\nGunakan perintah\n${prefix}getstik (nama pack)*\nuntuk mengambil stiker`
				tiringa.sendMessage(from, lt.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
				break
			
			case 'totaluser':
				ts = 'Total de usuários:\n\n'
				for (let i of _registered) {
					ts += `[${id.toString()}]\`\`\` @${i.split('@')[0]}`
				}
				ts += `\nTotal: ${_registered.length}`
				tiringa.sendMessage(from, ts.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": _registered} })
				break

			case 'addstik':
				if (!isQuotedSticker) return reply('marque um sticker')
				if (!isOwner) return reply(mess.only.ownerB)
				svst = body.slice(9)
				if (!svst) return reply('Qual é o nome do sticker?')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await tiringa.downloadMediaMessage(boij)
				setiker.push(`${svst}`)
				fs.writeFileSync(`./temp/stick/${svst}.webp`, delb)
				fs.writeFileSync('./temp/stik.json', JSON.stringify(setiker))
				tiringa.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststik`, MessageType.text, { quoted: mek })
				break

			case 'addvn':
				if (!isQuotedAudio) return reply('marque um áudio')
				if (!isOwner) return reply(mess.only.ownerB)
				svst = body.slice(7)
				if (!svst) return reply('Qual é o nome do áudio?')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await tiringa.downloadMediaMessage(boij)
				audionye.push(`${svst}`)
				fs.writeFileSync(`./temp/audio/${svst}.mp3`, delb)
				fs.writeFileSync('./temp/vn.json', JSON.stringify(audionye))
				tiringa.sendMessage(from, `Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`, MessageType.text, { quoted: mek })
				break

			case 'getvn':
				namastc = body.slice(7)
				try {
				buffer = fs.readFileSync(`./temp/audio/${namastc}.mp3`)
				tiringa.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: true })
				} catch {
				  reply('Arquivo não está registrado')
				}
				break

			case 'listvn':
			case 'vnlist':
				la = 'Lista de áudios:\n\n'
				for (let awokwkwk of audionye) {
					la += `- ${awokwkwk}\n`
				}
				la += `\nTotal: ${audionye.length}*\nGunakan perintah\n${prefix}getvn (nama pack)*\nuntuk mengambil vn`
				tiringa.sendMessage(from, la.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": audionye } })
				break

			case 'addimg':
				if (!isQuotedImage) return reply('marque uma imagem')
				if (!isOwner) return reply(mess.only.ownerB)
				svst = body.slice(8)
				if (!svst) return reply('Qual é o nome da imagem?')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await tiringa.downloadMediaMessage(boij)
				imagenye.push(`${svst}`)
				fs.writeFileSync(`./temp/foto/${svst}.jpeg`, delb)
				fs.writeFileSync('./temp/image.json', JSON.stringify(imagenye))
				tiringa.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listimage`, MessageType.text, { quoted: mek })
				break

			case 'getimg':
				namastc = body.slice(8)
				try {
				buffer = fs.readFileSync(`./temp/foto/${namastc}.jpeg`)
				tiringa.sendMessage(from, buffer, image, { quoted: mek, caption: `Result From Database : ${namastc}.jpeg` })
				} catch {
				  reply('Arquivo não está registrado')
				}
				break
				
			case 'listimg':
				li = 'Lista de imagens:\n\n'
				for (let awokwkwk of imagenye) {
					li += `- ${awokwkwk}\n`
				}
				li += `\n*Total : ${imagenye.length}*\nGunakan perintah\n${prefix}getimg (nama pack)*\nuntuk mengambil gambar`
				tiringa.sendMessage(from, li.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagenye } })
				break

			case 'addvid':
			  if (!isOwner) return reply(mess.only.ownerB)
				if (!isQuotedVideo) return reply('marque um vídeo')
				svst = body.slice(8)
				if (!svst) return reply('Qual o nome do video?')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await tiringa.downloadMediaMessage(boij)
				videonye.push(`${svst}`)
				fs.writeFileSync(`./temp/video/${svst}.mp4`, delb)
				fs.writeFileSync('./temp/vid.json', JSON.stringify(videonye))
				tiringa.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvid`, MessageType.text, { quoted: mek })
				break

			case 'getvid':
				namastc = body.slice(8)
				try {
				buffer = fs.readFileSync(`./temp/video/${namastc}.mp4`)
				tiringa.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: mek })
				} catch {
				  reply('Arquivo não está registrado')
				}
				break

			case 'listvid':
				lv = 'Lista de vídeos:\n\n'
				for (let awokwkwk of videonye) {
					lv += `- ${awokwkwk}\n`
				}
				lv += `\nTotal: ${videonye.length}\nUse o comando\n${prefix}getvid (nome do pack)\npara fazer um video`
				tiringa.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": videonye } })
				break



//--stiker to video
  case 'togif':
tiringa.updatePresence(from,Presence.composing)
if (!isUser) return reply(mess.only.registrarB)
if (!isQuotedSticker) return reply('Você precisa marcar um sticker não animado para isso')
reply(mess.wait)
anumedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
anum = await tiringa.downloadAndSaveMediaMessage(anumedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${anum} -vf scale=500:-1 -t 10 -r 10 -f ${ran}`, (err) => {
  fs.unlinkSync(anum)
  if (err) return reply('❌falha ao converter sticker para gif❌')
  buffer = fs.readFileSync(ran)
  tiringa.sendMessage(from, buffer, video, {
quoted: mek, caption: 'conversão sucedida'
  })
  fs.unlinkSync(ran)
})
break

case 'vidgif':
tiringa.updatePresence(from,Presence.composing)
if (!isUser) return reply(mess.only.registrarB)
if (!isQuotedVideo) return reply('Você precisa marcar um vídeo para isso')
reply(mess.wait)
anumedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
anum = await tiringa.downloadAndSaveMediaMessage(anumedia)
ran = getRandom('.gif')
exec(`ffmpeg -i ${anum} -vf scale=500:-1 -t 10 -r 10 ${ran}`, (err) => {
  fs.unlinkSync(anum)
  if (err) return reply('❌falha ao converter sticker para gif❌')
  buffer = fs.readFileSync(ran)
  tiringa.sendMessage(from, buffer, MessageType.video, { mimetype: Mimetype.gif, caption: "teste!" })
  fs.unlinkSync(ran)
})
break

//--mp4 to mp3
  case 'tomp3':
tiringa.updatePresence(from,
  Presence.composing)
if (!isUser) return reply(mess.only.registrarB)
if (!isQuotedVideo) return reply(`Marque um vídeo com ${prefix}tomp3`)
reply(mess.wait)
mitri = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
duh = await tiringa.downloadAndSaveMediaMessage(mitri)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${duh} ${ran}`, (err) => {
  fs.unlinkSync(duh)
  if (err) return reply('❌falha ao converter video para mp3❌')
  buffer = fs.readFileSync(ran)
  tiringa.sendMessage(from, buffer, audio, {
mimetype: 'audio/mp4', quoted: mek
  })
  fs.unlinkSync(ran)
})
break

//--google voice
				case 'tts':
					if (args.length < 1) return tiringa.sendMessage(from, `Você deve usar o comando da forma correta:\n${prefix}tts (língua) (texto)\nExemplo: ${prefix}tts pt bom dia\n\nUse: ${prefix}ts para listar todas as línguas`, text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return tiringa.sendMessage(from, 'Cadê o texto?', text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					dtt.length > 800
					? reply('Texto muito grande')
					: gtts.save(ranm, dtt, function() {
						tiringa.sendMessage(from, fs.readFileSync(ranm), audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
						fs.unlinkSync(ranm)
					})
					break

//-- Setting prefix
				case 'setprefix':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
				  prefix = args[0]
					up.prefix = prefix
					fs.writeFileSync('./data/settings.json', JSON.stringify(up, null, '\t'))
					reply(`O prefix foi alterado para: ${prefix}`)
					break


case 'block':
  tiringa.updatePresence(from, Presence.composing)
  if (!isGroup) return reply(mess.only.group)
  if (!isOwner) return reply(mess.only.ownerB)
  tiringa.blockUser (`${body.slice(8)}@c.us`, "add")
  tiringa.sendMessage(from, `Memblokir nomor, Perintah Diterima`, text, {
quoted: mek
  })
  break

//membuka blokir
case 'unblock':
  if (!isGroup) return reply(mess.only.group)
  if (!isOwner) return reply(mess.only.ownerB)
  tiringa.blockUser (`${body.slice(9)}@c.us`, "remove")
  tiringa.sendMessage(from, `Membuka blokir, Perintah diterima`, text)
  break

//---Tagall member
				case 'tagall':
tiringa.updatePresence(from, Presence.composing)
//reply('comando desativado para evitar flood')
if (!isGroup) return reply(mess.only.group)
if (!isUser) return reply(mess.only.registrarB)
if (!isGroupAdmins) return reply(mess.only.admin)
members_id = []
todos = (args.length > 1) ? body.slice(8).trim(): ''
todos += `Total: ${groupMembers.length} membros\n`
for (let mem of groupMembers) {
  todos += `┃➸@${mem.jid.split('@')[0]}\n`
  members_id.push(mem.jid)
}
mentions('╭╾╼◐⚋ ༒ᴍᴇɴᴄɪᴏɴᴀʀ ᴛᴏᴅᴏs ༒⚋◑╾╼╮\n┃➸'+todos+'╰╾╼◐⚋⚋ ༒ ∴₰Ⱦꪋℓo፝֯֟ ߷ ༒ ⚋⚋◑╾╼╯', members_id, true)
break

//clear all chat
				case 'clearall':
					if (!isOwner) return reply('Só o Italu pode fazer isso')
					anu = await tiringa.chats.all()
					tiringa.setMaxListeners(25)
					for (let _ of anu) {
						tiringa.deleteChat(_.jid)
					}
					reply('todos os chats foram deletados :)')
					break

//--menaikan jabatan
      case 'promover':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						pro = 'Berhasil Promote\n'
						for (let _ of mentioned) {
							pro += `@${_.split('@')[0]}\n`
						}
						mentions(from, mentioned, true)
						tiringa.groupRemove(from, mentioned)
					} else {
						mentions(`O usuário: @${mentioned[0].split('@')[0]} foi promovido para o cargo de administrador do grupo`, mentioned, true)
						tiringa.groupMakeAdmin(from, mentioned)
					}
					break

  //ganti nama grup
  case 'setname':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
idgrup = `${from.split("@s.whatsapp.net")[0]}`;
tiringa.groupUpdateSubject(idgrup, `${body.slice(9)}`)
tiringa.sendMessage(from, 'nome do grupo alterado', text, {
  quoted: mek
})
break

  //ganti desk
  case 'setdesk':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
tiringa.groupUpdateDescription(from, `${body.slice(9)}`)
tiringa.sendMessage(from, 'descrição do grupo alterada', text, {
  quoted: mek
})
break

//--menurunkan jabatan
				case 'rebaixar':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						reb = 'Berhasil Demote\n'
						for (let _ of mentioned) {
							reb += `@${_.split('@')[0]}\n`
						}
						mentions(reb, mentioned, true)
						tiringa.groupRemove(from, mentioned)
					} else {
						mentions(`O usuário @${mentioned[0].split('@')[0]} foi rebaixado para membro comum`, mentioned, true)
						tiringa.groupDemoteAdmin(from, mentioned)
					}
					break

//--list admin grup
				case 'listadmins':
				  case 'listadmin':
				    case 'adminlist':
					if (!isGroup) return reply(mess.only.group)
					adl = `Lista de administradores do grupo: ${groupMetadata.subject}\nTotal: ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						adl += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(adl, groupAdmins, true)
					break

//--ganti pp bot
case 'setppbot':
  tiringa.updatePresence(from, Presence.composing)
  if (!isOwner) return reply(mess.only.ownerB)
  const botpp = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contxtInfo: mek
  const cuk = await tiringa.downloadAndSaveMediaMessage(botpp)
  await tiringa.updateProfilePicture(botNumber, cuk)
  reply('Obrigado pela nova foto de perfil')
  break

//--Mengambil link grup
    case 'linkgroup':
    case 'linkgc':
        if (!isGroup) return reply(mess.only.group)
        if (!isGroupAdmins) return reply(mess.only.admin)
        if (!isBotGroupAdmins) return reply(mess.only.Badmin)
        linkgc = await tiringa.groupInviteCode(from)
        reply('Link do grupo: https://chat.whatsapp.com/'+linkgc)
                    break

//--Mengeluarkan bot
      case 'leave':
      if (!isGroup) return reply(mess.only.group)
      if (isGroupAdmins || isOwner) {
      tiringa.groupLeave(from)
                    } else {
      reply(mess.only.admin)
                    }
                    break
case 'hidetag':
                tiringa.updatePresence(from, Presence.composing) 
                if (!isOwner) return reply(mess.only.ownerB)
                if (!isGroup) return reply(mess.only.group)
                htg = body.slice(9)
                group = await tiringa.groupMetadata(from);
                member = group['participants']
                jids = [];
                member.map( async adm => {
                jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
                 })
                 options = {
                 text: htg,
                contextInfo: {mentionedJid: jids},
                quoted: mek
                }
              await tiringa.sendMessage(from, options, text)
               break
             case 'total':
                 total = `Total: ${_registered.length}`
                 reply(total)
                 break 
    case 'xac':
                 total = `Total: ${uang.length}`
                 reply(total)
                 break
//--Convert stiker to image
				case 'toimg':
				    tiringa.updatePresence(from, Presence.composing)
                                    if (!isUser) return reply(mess.only.registrarB)
					if (!isQuotedSticker) return reply('Você precisa marcar um sticker não animado para isso')
					reply(mess.wait)
					tomg = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					medtmg = await tiringa.downloadAndSaveMediaMessage(tomg)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${medtmg} ${ran}`, (err) => {
						fs.unlinkSync(medtmg)
						if (err) return reply('❌falha ao converter sticker em imagem❌')
						buffer = fs.readFileSync(ran)
						tiringa.sendMessage(from, buffer, image, {quoted: mek, caption: 'conversão sucedida'})
						fs.unlinkSync(ran)
					})
					break

case 'registrar':
case 'registrar':
case 'register':
case 'registra':
case 'registrar':
                                        if (isUser) return  reply('você já está registrado')
                                        if (!q.includes('|')) return reply(`Digite da forma correta:\nComando: ${prefix}registrar nome|idade\nExemplo: ${prefix}registrar Italu|18`)
                                       // if (args.length < 1) return reply(`Como se registrar:\nComando: ${prefix}registrar nome|idade\nExemplo: ${prefix}registrar Italu|18`)
                                        const namaUser = q.substring(0, q.indexOf('|') - 0)
                                        const umurUser = q.substring(q.lastIndexOf('|') + 1)
                                        const serialUser = createSerial(20)
                                        if(isNaN(umurUser)) return reply(`Digite da forma correta:\nComando: ${prefix}registrar nome|idade\nExemplo: ${prefix}registrar Italu|18`)
                                        if (namaUser.length >= 60) return reply(`Seu nome é muito longo`)
                                        if (umurUser > 40) return reply(`Idade máxima é 40 anos`)
                                        if (umurUser < 12) return reply(`Idade mínima é 12 anos`)
                                        veri = sender
                                        try {
					                    ppimg = await tiringa.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
					                    } catch {
					                    ppimg = 'https://i.ibb.co/rxPtZS8/foto.jpg'
					                    }
                                        captionnya = 
`    〘 Registrado(a) com sucesso 〙
  Código: ${serialUser}
╔══════════════════
╠≽️ Dia: ${date}
╠≽️ Hora: ${hr}
╠≽️ Nome de usuário: @${sender.split("@")[0]}
╠≽️ Nome de registro: ${namaUser}
╠≽️ Idade: ${umurUser}
╠≽️ Seu link wame: wa.me/${sender.split("@")[0]}
╠≽️ Número: ${sender.split("@")[0]}
╚══════════════════
você se registrou, digite ${prefix}menu para listar meus comandos`
                                       daftarimg = await getBuffer(ppimg)
                                       addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                                       tiringa.sendMessage(from, daftarimg, image, {quoted: mek, caption: captionnya, contextInfo: {mentionedJid: [sender]}})                    
                                         break

case 'fecharg':
  tiringa.updatePresence(from, Presence.composing)
  if (!isGroup) return reply(mess.only.group)
  if (!isGroupAdmins) return reply(mess.only.admin)
  if (!isBotGroupAdmins) return reply(mess.only.Badmin)
  var nomor = mek.participant
  const close = {
text: `Grupo fechado por: @${nomor.split("@s.whatsapp.net")[0]}`,
contextInfo: {
  mentionedJid: [nomor]
}
  }
  tiringa.groupSettingChange (from, GroupSettingChange.messageSend, true);
  reply(close)
  break

//--grup hanya admin
case 'openg':
  case 'abrirg':
tiringa.updatePresence(from, Presence.composing)
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
open = {
  text: `Grupo aberto por: @${sender.split("@")[0]}`,
  contextInfo: {
mentionedJid: [sender]
  }
}
tiringa.groupSettingChange (from, GroupSettingChange.messageSend, false)
tiringa.sendMessage(from, open, text, {
  quoted: mek
})
break

//---mengahapus pesan bot
case 'delete':
  case 'del':
case 'apagar':
if (!isGroup)return reply(mess.only.group)
if (!isUser) return reply(mess.only.registrarB)
if (!isGroupAdmins)return reply(mess.only.admin)
try {
tiringa.deleteMessage(from, {
  id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true
})
} catch {
  reply('Só é possível deletar mensagens minhas')
}
break

case 'welcome':
					if (!isGroup) return reply(mess.only.group)
                    if (!isUser) return reply(mess.only.registrarB)
					if (!isGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('use =welcome 1 para ativar')
					if (Number(args[0]) === 1) {
				    if (isWelkom) return reply('já está ativado')
						welkom.push(from)
						fs.writeFileSync('./data/welkom.json', JSON.stringify(welkom))
						reply('O recurso bem-vindo foi ativado')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, disable)
						fs.writeFileSync('./data/welkom.json', JSON.stringify(welkom))
						reply('O recurso bem-vindo foi desativado')
					} else {
						reply(`digite ${prefix}welcome 1 para ativar, e 0 para desativar o recurso`)
					}
                         break
				case 'clone':
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('Mencione quem devo roubar a foto de perfil')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await tiringa.getProfilePicture(id)
						buffer = await getBuffer(pp)
						tiringa.updateProfilePicture(botNumber, buffer)
						mentions(`Roubei a foto de perfil de: @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply('ocorreu um erro')
					}
					break
			
//mini games, rate, random

case 'conta':
if (!isUser) return reply(mess.only.registrarB)
con = ["+","×","÷","-"]
ty = con[Math.floor(Math.random() * con.length)]
number1 = `${Math.floor(Math.random() * 100)}`
number2 = `${Math.floor(Math.random() * 100)}`
conta = `Quanto é ${number1} ${ty} ${number2}?`
reply(conta)
break

case 'dado':
if (!isUser) return reply(mess.only.registrarB)
const dadus = ["⚀","⚁","⚂","⚃","⚄","⚅"]
dadu = dadus[Math.floor(Math.random() * dadus.length)]
dador = fs.readFileSync('./database/dados/'+dadu+'.webp')
tiringa.sendMessage(from, dador, sticker, {quoted: mek})
break

case 'caracoroa':
if (!isUser) return reply(mess.only.registrarB)
			const cara = fs.readFileSync('./database/cara/cara.webp');
			const coroa = fs.readFileSync('./database/cara/coroa.webp');
			cararo = ["cara", "coroa"]
			fej = cararo[Math.floor(Math.random() * cararo.length)]
			gg = fej
reply(`você conseguiu: ${fej}`)
			cararoa = fs.readFileSync('./database/cara/'+fej+'.webp')
            tiringa.sendMessage(from, cararoa, sticker, {quoted: mek})
break

case 'dad':
cararoa = fs.readFileSync('./database/teste.webp')
tiringa.sendMessage(from, cararoa, sticker, {quoted: mek})
break

                
        case 'morte':
		case 'death':
if (!isUser) return reply(mess.only.registrarB)
		    idde = ["30","76","90","72","83","73","83","74","92","100","94","48","37","53","63"]
            idade = idde[Math.floor(Math.random() * (idde.length))]
			morte = `Pessoas com este nome: ${pushname} \nTendem a morrer aos ${idade} anos de idade.`
			reply(morte)
			break
			
case 'sn':
if (!isUser) return reply(mess.only.registrarB)
            const sn = ['sim', 'não']
                     gosto = body.slice(3)
                     if (args.length < 1) return tiringa.sendMessage(from, `Você deve fazer uma pergunta...\nExemplo: ${prefix}sn O Italu é um baiano preguiçoso?`, text, {quoted: mek})
                     const jawab = sn[Math.floor(Math.random() * (sn.length))]
                     hasil = `${gosto}\n\nSegundo meus cálculos, eu acredito que... ${jawab}`
                     reply(hasil)
                     break
                     
case 'gadometro':
		case 'gado':
if (!isUser) return reply(mess.only.registrarB)
			var chifre = ["ultra extreme gado", "Gado-Master", "Gado-Rei", "Gado", "Escravo-ceta", "Escravo-ceta Maximo", "Gacorno?", "Jogador De Forno Livre<3", "Mestre Do Frifai<3<3", "Gado-Manso", "Gado-Conformado", "Gado-Incubado", "Gado Deus", "Mestre dos Gados", "Topa tudo por buceta", "Gado Comum", "Mini Gadinho", "Gado Iniciante", "Gado Basico", "Gado Intermediario", "Gado Avançado", "Gado Profisional", "Gado Mestre", "Gado Chifrudo", "Corno Conformado", "Corno HiperChifrudo", "Chifrudo Deus", "Mestre dos Chifrudos"]
			var gado = chifre[Math.floor(Math.random() * chifre.length)]
			gadop = `${Math.floor(Math.random() * 100)}`
			hisil = `Você é:\n\n${gado}`
			reply(hisil)
			break
			
case 'oculto':
            if (!isGroup) return reply(mess.only.group)
            
            const mem = eur[Math.floor(Math.random() * eur.length)]
    	    var xvid = ["Negoes branquelos e feministas", `${pushname} se depilando na banheira`, `${pushname} comendo meu cuzinho`, `${pushname} quer me comer o que fazer?`, "lolis nuas e safadas", "Ursinhos Mansos Peludos e excitados", "mae do adm cozida na pressao", "Buceta de 500 cm inflavel da boneca chinesa lolita company", "corno manso batendo uma pra mim com meu rosto na webcam", "tigresa vip da buceta de mel", "belle delphine dando o cuzinho no barzinho da esquina", "fazendo anal no negao", "africanos nus e chupando pau", "anal africano", "comendo a minha tia", "lgbts fazendo ahegao", "adm gostoso tirando a roupa", "gays puxando o intestino pra fora", "Gore de porno de cachorro", "anoes baixinhos do pau grandao", "AnÃµes Gays Dotados Peludos", "anÃµes gays dotados penetradores de botas", "Ursinhos Mansos Peludos", "Jailson Mendes", "Vendo meu Amigo Comer a Esposa", "Golden Shower"]
            const surpresa2 = xvid[Math.floor(Math.random() * xvid.length)]
            xvidd = `EQUIPE ❌VIDEOS\n\nCaro usuário @${mem.jid.split('@')[0]}...\n\nSou da administração do Xvideos e nós percebemos que você não entrou em sua conta por mais de 2 semanas e decidimos checar pra saber se está tudo OK com o(a) nosso(a) usuário(a) mais ativo(a).\n\nDesde a última vez que você visitou nosso site, você procurou mais de centenas de vezes por ${surpresa2} (acreditamos ser sua favorita), viemos dizer que elas foram adicionadas e temos certeza que você irá gostar bastante.\nEsperamos você lá!\n\nPara o nosso usuário(a) favorito(a), com carinho, Equipe Xvideos.`
            reply(xvidd)
            break
            
case "ppt":
if (args.length < 1) return reply(mess.tterro)
ppt = ["pedra","papel","tesoura"]
ppy = ppt[Math.floor(Math.random() * ppt.length)]
ppg = Math.floor(Math.random() * 13) + 349
pptb = ppy
pph = `Você ganhou ${ppg} em xp`
if ((pptb == "pedra" && args == "papel") || 
(pptb == "papel" && args == "tesoura") || 
(pptb == "tesoura" && args == "pedra")) {
var vit = "vitoria"
} else if ((pptb == "pedra" && args == "tesoura") || 
(pptb == "papel" && args == "pedra") || 
(pptb == "tesoura" && args == "papel")) {
var vit = "derrota"
} else if ((pptb == "pedra" && args == "pedra") ||
(pptb == "papel" && args == "papel") ||
(pptb == "tesoura" && args == "tesoura")) {
var vit = "empate"
} else if (vit = "undefined") {
return reply(mess.tterro)
}
if (vit == "vitoria") {
var tes = "Vitória do jogador"
}
if (vit == "derrota" ) {
var tes = "A vitória é do Tiringa-BOT"
}
if (vit == "empate" ) {
var tes = "O jogo terminou em empate"
}
reply(`Tiringa-BOT jogou: ${pptb}\nO jogador jogou: ${args}\n\n${tes}`)
if (tes == "Vitória do jogador") {
reply(pph)
}
break

case 'ship':
if (!isGroup) return reply(mess.only.group)
if (!isUser) return reply(mess.only.registrarB)
const groupMetadata = await tiringa.groupMetadata(from)
ag = groupMetadata.participants(from)
const mem2 = ag[Math.floor(Math.random() * (ag.length))]
const mem1 = ag[Math.floor(Math.random() * (ag.length))]
casal = `@${mem1.jid.split('@')[0]}  teste @${mem2.jid.split('@')[0]}`
tiringa.sendMessage(from, casal, text, {quoted: mek, contextInfo: {"mentionedJid": [ag]}})
break
			
case 'slot':
if (!isUser) return reply(mess.only.registrarB)
const somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
ppg = Math.floor(Math.random() * 13) + 349
if ((somtoy == '🥑 : 🥑 : 🥑') ||
(somtoy == '🍉 : 🍉 : 🍉') ||
(somtoy == '🍓 : 🍓 : 🍓') ||
(somtoy == '🍎 : 🍎 : 🍎') ||
(somtoy == '🍍 : 🍍 : 🍍') ||
(somtoy == '🥝 : 🥝 : 🥝') ||
(somtoy == '🍑 : 🍑 : 🍑') ||
(somtoy == '🥥 : 🥥 : 🥥') ||
(somtoy == '🍋 : 🍋 : 🍋') ||
(somtoy == '🍐 : 🍐 : 🍐') ||
(somtoy == '🍌 : 🍌 : 🍌') ||
(somtoy == '🍒 : 🍒 : 🍒') ||
(somtoy == '🔔 : 🔔 : 🔔') ||
(somtoy == '🍊 : 🍊 : 🍊') ||
(somtoy == '🍇 : 🍇 : 🍇')) {
var vitr = "Você ganhou!!!"
} else {
var vitr = "Você perdeu..."
}
const slott = 
`╭╼╾╼╾╼╾╼╾╼╾╼╾╼╾╮ 
╽           [💰SLOT💰 | 777 ]        
┃                                             
┃                                             
┃            ${somtoy}  ◄━━┛
┃            
┃                                           
╿           [💰SLOT💰 | 777 ]        
╰╼╾╼╾╼╾╼╾╼╾╼╾╼╾╯
                         @ɪᴛᴀʟᴜ

${vitr}`
if (vitr == "Você ganhou!!!") {
setTimeout( () => {
reply(`Você ganhou ${ppg} em xp!!!`)
}, 1100)
}
tiringa.sendMessage(from, slott, text, {quoted: mek})
					break

case 'chance':
if (!isUser) return reply(mess.only.registrarB)
              tiringa.updatePresence(from, Presence.composing) 
                var avb = body.slice(7)
                if (args.length < 1) return tiringa.sendMessage(from, `Você precisa digitar da forma correta\nExemplo: ${prefix}chance do Italu ser um trouxa`, text, {quoted: mek})
                random = `${Math.floor(Math.random() * 100)}`
               hasil = `A chance ${body.slice(7)}\n\né de... ${random}%`
             tiringa.sendMessage(from, hasil, text, {quoted: mek, contextInfo: {mentionedJid: [sender]}})
                break
     
case 'dadog':
if (!isUser) return reply(mess.only.daftarB)
tiringa.updatePresence(from, Presence.composing)
reply(mess.wait)
const dadusg = ["https://i.ibb.co/njdfrHT/jogodedados-128px-1.gif","https://i.ibb.co/Bw42zpY/jogodedados-128px-2.gif","https://i.ibb.co/BBcyPp2/jogodedados-128px-3.gif","https://i.ibb.co/YhhDbX5/jogodedados-128px-4.gif","https://i.ibb.co/9g8ns1b/jogodedados-128px-5.gif","https://i.ibb.co/qFTd1K1/jogodedados-128px-6.gif"]
try {
const dadugg = dadusg[Math.floor(Math.random() * (dadusg.length))]	
pok = await getBuffer(dadugg)
tiringa.sendMessage(from, pok, image, {quoted: mek})
} catch {
  reply(mess.ferr)
}
break
      
case 'rola':
case 'pau':
if (!isUser) return reply(mess.only.registrarB)
random = `${Math.floor(Math.random() * 35)}`
const tamanho = random
//var (isNaN(tamanho))
if (tamanho < 13 ) {
pp = 'só a fimose'
} else if (tamanho == 13 ) {
pp = 'passou da média😳'
} else if (tamanho == 14 ) {
pp = 'passou da média😳'
} else if (tamanho == 15 ) {
pp = 'eita, vai pegar manga?'
} else if (tamanho == 16 ) {
pp = 'eita, vai pegar manga?'
} else if (tamanho == 17 ) {
pp = 'calma man, a mina não é um poço😳'
} else if (tamanho == 18 ) {
pp = 'calma man, a mina não é um poço😳'
} else if (tamanho == 19 ) {
pp = 'calma man, a mina não é um poço😳'
} else if (tamanho == 20 ) {
pp = 'você tem um poste no meio das pernas'
} else if (tamanho == 21 ) {
pp = 'você tem um poste no meio das pernas'
} else if (tamanho == 22 ) {
pp = 'você tem um poste no meio das pernas'
} else if (tamanho == 23 ) {
pp = 'você tem um poste no meio das pernas'
} else if (tamanho == 24 ) {
pp = 'você tem um poste no meio das pernas'
} else if (tamanho > 25 ) {
pp = 'vai procurar petróleo com isso?'
}
hasil = `Seu pau tem ${random}cm\n\n${pp}`
reply(hasil)
break
   
                case 'gay':
if (!isUser) return reply(mess.only.registrarB)
tiringa.updatePresence(from, Presence.composing) 
random = `${Math.floor(Math.random() * 100)}`
boiola = random
if (boiola < 20 ) {
bo = 'hmm... você é hetero😔'
} else if (boiola == 21 ) {
bo = '+/- boiola'
} else if (boiola == 23 ) {
bo = '+/- boiola'
} else if (boiola == 24 ) {
bo = '+/- boiola'
} else if (boiola == 25 ) {
bo = '+/- boiola'
} else if (boiola == 26 ) {
bo = '+/- boiola'
} else if (boiola == 27 ) {
bo = '+/- boiola'
} else if (boiola == 28  ) {
bo = '+/- boiola'
} else if (boiola == 29 ) {
bo = '+/- boiola'
} else if (boiola == 30 ) {
bo = '+/- boiola'
} else if (boiola == 31 ) {
bo = 'tenho minha desconfiança...😑'
} else if (boiola == 32 ) {
bo = 'tenho minha desconfiança...😑'
} else if (boiola == 33 ) {
bo = 'tenho minha desconfiança...😑'
} else if (boiola == 34 ) {
bo = 'tenho minha desconfiança...😑'
} else if (boiola == 35 ) {
bo = 'tenho minha desconfiança...😑'
} else if (boiola == 36 ) {
bo = 'tenho minha desconfiança...😑'
} else if (boiola == 37 ) {
bo = 'tenho minha desconfiança...😑'
} else if (boiola == 38 ) {
bo = 'tenho minha desconfiança...😑'
} else if (boiola == 39 ) {
bo = 'tenho minha desconfiança...😑'
} else if (boiola == 40 ) {
bo = 'tenho minha desconfiança...😑'
} else if (boiola == 41 ) {
bo = 'você é né?😏'
} else if (boiola == 42 ) {
bo = 'você é né?😏'
} else if (boiola == 43 ) {
bo = 'você é né?😏'
} else if (boiola == 44 ) {
bo = 'você é né?😏'
} else if (boiola == 45 ) {
bo = 'você é né?😏'
} else if (boiola == 46 ) {
bo = 'você é né?😏'
} else if (boiola == 47 ) {
bo = 'você é né?😏'
} else if (boiola == 48 ) {
bo = 'você é né?😏'
} else if (boiola == 49 ) {
bo = 'você é né?😏'
} else if (boiola == 50 ) {
bo = 'você é ou não?🧐'
} else if (boiola > 51) {
bo = 'você é gay🙈'
}
hasil = `Você é ${random}% gay\n\n${bo}`
reply(hasil)
break

case 'roleta':
const tiro = ["vazio","vazio","vazio","vazio","vazio","vazio","vazio","vazio","pow","pow"]
const figr = ["roleta1","roleta2","roleta3"]
tpa = tiro[Math.floor(Math.random() * (tiro.length))]	
tpb = figr[Math.floor(Math.random() * (figr.length))]
figb = fs.readFileSync('./teste/'+tpb+'.webp')
figa = fs.readFileSync('./teste/tambor.webp')
reply('Girando tambor...')
tiringa.sendMessage(from, figa, sticker, {quoted: mek})
setTimeout( () => {
reply('Apontando...')
}, 2000)
if (tpa == "vazio") {
var morte = "Você teve sorte dessa vez, o tambor estava vazio."
} else if (tpa == "pow") {
var morte = "Tinha uma bala no tambor, POW!"
}
if (morte == "Tinha uma bala no tambor, POW!") {
setTimeout( () => {
tiringa.sendMessage(from, figb, sticker, {quoted: mek})
}, 2100)
}
setTimeout( () => {
tiringa.sendMessage(from, morte, text, {quoted: mek})
}, 2300)
break

//mini games, rate, random

//COMANDOS NSFW
case'boobs':
if (!isNsfw) return reply('🚫funções NSFW desativadas nesse grupo🚫')
reply(mess.waitsfw)
res = axios.get(`https://nekos.life/api/v2/img/pussy_jpg`, {method: 'get'})
tiringa.sendMessage(from, ggf, image, {quoted: mek})
break

case 'nsfwaifu':
if (!isNsfw) return reply('🚫funções NSFW desativadas nesse grupo🚫')
reply(mess.waitsfw)
res = await fetchJson(`https://waifu.pics/api/nsfw/waifu`)
ggf = await getBuffer(res.url)
tiringa.sendMessage(from, ggf, image, {quoted: mek})
break

case 'teta':
              tits = axios(`https://meme-api.herokuapp.com/gimme/tits`, {method: 'get'})
				tiringa.sendMessage(from, tits.url, '', {quoted: mek})
               break
case 'attp':
ppt = body.slice(5)
await tiringa.sendMessage(from, { url: `https://xteam.xyz/attp?file&text=${ppt}` }, MessageType.video, { mimetype: Mimetype.gif, caption: "hello!" })
break
case 'ttp':
					if (args.length < 1) return reply('Cadê o texto?')
					ranp = getRandom('.png')
					rano = getRandom('.webp')
					ppt = body.slice(4)
					anu =  fetchJson(`https://xteam.xyz/attp?file&text=${ppt}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						//if (err) return reply(mess.error.stick)
						tiringa.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break

case 'cpf1':
cp1 = `${Math.floor(Math.random() * 300) +600}`
cp2 = `${Math.floor(Math.random() * 300) +600}`
cp3 = `${Math.floor(Math.random() * 300) +600}`
cp4 = `${Math.floor(Math.random() * 30) +60}`
cpf = `${cp1}.${cp2}.${cp3}-${cp4}`
tiringa.sendMessage(from, `CPF gerado: ${cpf}`, text, {quoted: mek})
break

case 'nsfwloli':
					loli.getNSFWLoli(async (err, res) => {
						if (err) return reply('❌ *ERROR* ❌')
						buffer = await getBuffer(res.url)
						tiringa.sendMessage(from, buffer, image, {quoted: mek, caption: 'Ingat! Citai Lolimu'})
					})
					break

				default:
				if (body.startsWith(`${prefix}${command}`)) {
                hsl = `        ────────────────\nOi @${sender.split("@")[0]}!!\nO comando: ${prefix}${command} não existe\n\nTem certeza que digitou corretamente?🧙‍♂️\nUse ${prefix}Menu para listar meus comandos\n        ────────────────`
  tiringa.sendMessage(from, hsl, text, {quoted: mek, contextInfo: {mentionedJid: [sender]}})
				}
                           if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						return //console.log(color('[WARN]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
                           }
		} catch (e) {
			console.log('Error : %s', color(e, 'green'))
		}
	})
}
starts()
