/*Olá usuário..
Este bot foi criado para o uso sem fins lucrativos
Criador: Italu
Colaboradores: Resen e Toin
*/

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
const {dl} = require("./lib/downloadImage.js");

//_JSON GRUPO/CONFIGURAÇÕES
const nsfw = JSON.parse(fs.readFileSync('./data/nsfw.json'));
const samih = JSON.parse(fs.readFileSync('./data/simi.json'));
const welkom = JSON.parse(fs.readFileSync('./data/welkom.json'));

//_JSON INFORMAÇÕES DO USUÁRIO
const _leveling = JSON.parse(fs.readFileSync('./datauser/leveling.json'));
const _level = JSON.parse(fs.readFileSync('./datauser/level.json'));
const _registered = JSON.parse(fs.readFileSync('./datauser/registered.json'));
const uang = JSON.parse(fs.readFileSync('./datauser/uang.json'));
const ban = JSON.parse(fs.readFileSync('./datauser/banned.json'));
const prem = JSON.parse(fs.readFileSync('./datauser/premium.json'));

//_ OUTROS ARQUIVOS DO BOT
const { slot } = require('./database/slot');
const tictactoe = JSON.parse(fs.readFileSync('./database/ttt/tictactoe.json'));
const daily = JSON.parse(fs.readFileSync('./data/diario.json'))
const { msgFilter } = require('./utils')

//_INFORMAÇÕES DO BOT(settings)
const prefix = '='
const botName = "Tiringa-BOT"
const ownerNumber = "5574999510904"
const ownerName = "Italu"
const cdd = 480000 // 8 minutos
const ammOff = "off"
const blocked = []

//_LISTA DE CRS
const cr = "Tiringa-BOT v12.4"
const crfig = "Sticker criado com sucesso🔧"
const crlv = "NOVO LEVEL🥳"
const crtt = "Jogo da velha By: Resen"

//_VCARD DONO DO BOT
const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + 'FN:Italu🧙‍♂️\n' 
            + 'ORG:Dono do Tiringa;\n' 
            + 'TEL;type=CELL;type=VOICE;waid=557499510904:+55 (74) 9951-0904\n' 
            + 'END:VCARD'

//_TIC-TAC-TOE By: Resen
const { ttthelp } = require('./database/ttt/TTTconfig/ttthelp');
const { tttme } = require('./database/ttt/TTTconfig/tttme');
var tttset = require('./database/ttt/TTTconfig/tttset.json');
var esp = require('./database/ttt/TTTconfig/tttframe.json');

//_TESTE INTERVALO ENTRE COMANDOS
const addInter = (sender, _dir) => {
    const obj = { id: userId, time: Date.now() }
    _dir.push(obj)
    fs.writeFileSync('./data/Inter.json', JSON.stringify(_dir))
}

//_TESTE BANIR USUÁRIO 
const addBan = (sender, ban) => {
const banm = { id: body.slice(4) }
ban.push(sende)
    fs.writeFileSync('./datauser/banned.json', JSON.stringify(ban))
}

const getBan = (sender, ban) => {
    let position = false
    Object.keys(ban).forEach((i) => {
        if (ban[i].id === userId) {
            position = i
        }
    })
    if (position !== false) {
        return ban[position].id
    }
}

// LIMITADOR, AGRADECIMENTOS: IRIS(kill), Resen
// Adiciona limite ao usuário
const addLimit = (userId, _dir) => {
    const obj = { id: userId, time: Date.now() }
    _dir.push(obj)
    fs.writeFileSync('./data/diario.json', JSON.stringify(_dir))
}

// Adquire o limite do usuario
const getLimit = (userId, _dir) => {
    let position = false
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== false) {
        return _dir[position].time
    }
}

//_TESTE PARA VITÓRIA DE ❌
const WinnerX = () => {
	if (
		(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="❌") || (esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="❌") || (esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="❌") || 
		(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="❌") || (esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="❌") || (esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="❌") || (esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="❌")
	) {
		return true
	} else {
		return false
	}
}

//TESTE PARA VITÓRIA DE ⭕
const WinnerO = () => {
	if (
		(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="⭕") || (esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="⭕") || (esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="⭕") || 
		(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="⭕") || (esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="⭕") || (esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="⭕") || (esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="⭕")
	) {
		return true
	} else {
		return false
	}
}

//TESTE PARA EMPATE
const Tie = () => {
	if (esp.a1!="🔲"&&esp.a2!="🔲"&&esp.a3!="🔲"&&esp.b1!="🔲"&&esp.b2!="🔲"&&esp.b3!="🔲"&&esp.c1!="🔲"&&esp.c2!="🔲"&&esp.c3!="🔲") {
		return true
	} else {
		return false
	}
}

const IA = () => {
    if (WinnerX() || WinnerO() || Tie()) {
		tttset.reActivate1 = "off"
//INICIO DO MODO IMPOSSIVEL
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" && ( 
		//TESTE PARA TENTATIVA DE VITÓRIA
		(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
		(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
		(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
		(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
		(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
		(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
		//TESTE PARA TENTATIVA DE BLOQUEIO
		(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
		(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
		(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
		(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
		(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
		(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
	)){
		tttset.reActivate1 = "off"
		IAmove1()
	//JOGADAS PROGRAMADAS ABAIXO
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
     	  tttset.reActivate1 = "off"
          esp.a1 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
          tttset.reActivate1 = "off"
          esp.a2 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
          tttset.reActivate1 = "off"
          esp.a3 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
          tttset.reActivate1 = "off"
          esp.b1 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
          tttset.reActivate1 = "off"
          esp.b2 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
          tttset.reActivate1 = "off"
          esp.b3 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
          tttset.reActivate1 = "off"
          esp.c1 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕"))) {
          tttset.reActivate1 = "off"
          esp.c2 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
		    ((esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
          tttset.reActivate1 = "off"
          esp.c3 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" && (esp.a1 ==  "🔲" || esp.a3 ==  "🔲" || esp.b2 ==  "🔲" || esp.c1 ==  "🔲" || esp.c3 ==  "🔲")) {
		//PRIORIZAR CANTOS E CENTRO
		tttset.reActivate1 = "off"
		while (tttset.reActivate3 == "on") {
			priorityC()
		}
		tttset.reActivate3 = "on"
//FIM DO MODO IMPOSSIVEL
	} else if (tttset.tttdifficulty == "HARD" && ( 
		//TESTE PARA TENTATIVA DE VITÓRIA
		(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
		(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
		(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
		(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
		(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
		(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
		//TESTE PARA TENTATIVA DE BLOQUEIO
		(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
		(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
		(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
		(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
		(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
		(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
	)){
		//HARD
		tttset.reActivate1 = "off"
		IAmove1()
	} else if (tttset.tttdifficulty == "NORMAL" && ( 
		//TESTE PARA TENTATIVA DE VITÓRIA
		(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
		(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
		(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
		(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
		(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
		(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
		//TESTE PARA TENTATIVA DE BLOQUEIO
		(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
		(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
		(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
		(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
		(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
		(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
	)){
		//NORMAL
		tttset.reActivate1 = "off"
		let randomNORMAL = Math.floor(Math.random() * 3)
		if (randomNORMAL == 0 || randomNORMAL == 1) {
			IAmove1()
		} else {
			while (tttset.reActivate2 == "on") {
				IAalter()
			}
		}
		tttset.reActivate2 = "on"
	} else {
		//EASY / RANDOM
		let randomALL = Math.floor(Math.random() * 9)
		switch (randomALL) {
			case 0:
				if (esp.a1 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.a1 = "⭕"
    	        }
    	    break
			case 1:
				if (esp.a2 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.a2 = "⭕"
    	        }
    	    break
			case 2:
				if (esp.a3 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.a3 = "⭕"
    	        }
    	    break
			case 3:
				if (esp.b1 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.b1 = "⭕"
    	        }
    	    break
			case 4:
				if (esp.b2 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.b2 = "⭕"
    	        }
    	    break
			case 5:
				if (esp.b3 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.b3 = "⭕"
    	        }
    	    break
			case 6:
				if (esp.c1 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.c1 = "⭕"
    	        }
    	    break
			case 7:
				if (esp.c2 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.c2 = "⭕"
    	        }
    	    break
			case 8:
				if (esp.c3 == "🔲") {
        	        tttset.reActivate1 = "off"
        	        esp.c3 = "⭕"
        	    }
        	break
		}
	}
}

const IAmove1 = () => {
	//JOGADA PARA VITÓRIA
	if (esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") {
		esp.a3 = "⭕"
	} else if (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") {
		esp.a2 = "⭕"
	} else if (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") {
		esp.a1 = "⭕"
	} else if (esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") {
		esp.b3 = "⭕"
	} else if (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") {
		esp.b2 = "⭕"
	} else if (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") {
		esp.b1 = "⭕"
	} else if (esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") {
		esp.c2 = "⭕"
	} else if (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") {
		esp.c1 = "⭕"
	} else if (esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") {
		esp.c1 = "⭕"
	} else if (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") {
		esp.b1 = "⭕"
	} else if (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") {
		esp.a1 = "⭕"
	} else if (esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") {
		esp.c2 = "⭕"
	} else if (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") {
		esp.b2 = "⭕"
	} else if (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") {
		esp.a2 = "⭕"
	} else if (esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") {
		esp.b3 = "⭕"
	} else if (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") {
		esp.a3 = "⭕"
	} else if (esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") {
		esp.b2 = "⭕"
	} else if (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") {
		esp.a1 = "⭕"
	} else if (esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") {
		esp.c1 = "⭕"
	} else if (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") {
		esp.b2 = "⭕"
	} else if (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") {
		esp.a3 = "⭕"
	//JOGADA PARA BLOQUEIO
	} else if (esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") {
		esp.a3 = "⭕"
	} else if (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") {
		esp.a2 = "⭕"
	} else if (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") {
		esp.a1 = "⭕"
	} else if (esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") {
		esp.b3 = "⭕"
	} else if (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") {
		esp.b2 = "⭕"
	} else if (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") {
		esp.b1 = "⭕"
	} else if (esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") {
		esp.c2 = "⭕"
	} else if (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") {
		esp.c1 = "⭕"
	} else if (esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") {
		esp.c1 = "⭕"
	} else if (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") {
		esp.b1 = "⭕"
	} else if (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") {
		esp.a1 = "⭕"
	} else if (esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") {
		esp.c2 = "⭕"
	} else if (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") {
		esp.b2 = "⭕"
	} else if (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") {
		esp.a2 = "⭕"
	} else if (esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") {
		esp.b3 = "⭕"
	} else if (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") {
		esp.a3 = "⭕"
	} else if (esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") {
		esp.b2 = "⭕"
	} else if (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") {
		esp.a1 = "⭕"
	} else if (esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") {
		esp.c1 = "⭕"
	} else if (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") {
		esp.b2 = "⭕"
	} else if (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌") {
		esp.a3 = "⭕"
	}
}

//MOVIMENTO ALTERNATIVO
const IAalter = () => {
	let randomALTER = Math.floor(Math.random() * 9)
	switch (randomALTER) {
		case 0:
			if (esp.a1 == "🔲") {
                tttset.reActivate2 = "off"
                esp.a1 = "⭕"
            }
        break
		case 1:
			if (esp.a2 == "🔲") {
                tttset.reActivate2 = "off"
                esp.a2 = "⭕"
            }
        break
		case 2:
			if (esp.a3 == "🔲") {
                tttset.reActivate2 = "off"
                esp.a3 = "⭕"
            }
        break
		case 3:
			if (esp.b1 == "🔲") {
                tttset.reActivate2 = "off"
                esp.b1 = "⭕"
            }
        break
		case 4:
			if (esp.b2 == "🔲") {
                tttset.reActivate2 = "off"
                esp.b2 = "⭕"
            }
        break
		case 5:
			if (esp.b3 == "🔲") {
                tttset.reActivate2 = "off"
                esp.b3 = "⭕"
            }
        break
		case 6:
			if (esp.c1 == "🔲") {
                tttset.reActivate2 = "off"
                esp.c1 = "⭕"
            }
        break
		case 7:
			if (esp.c2 == "🔲") {
                tttset.reActivate2 = "off"
                esp.c2 = "⭕"
            }
        break
		case 8:
			if (esp.c3 == "🔲") {
                tttset.reActivate2 = "off"
                esp.c3 = "⭕"
            }
        break
	}
}

//JOGAR NOS CANTOS E CENTRO - IMPOSSIVEL
const priorityC = () => {
	let randomPriC = Math.floor(Math.random() * 5)
	switch (randomPriC) {
		case 0 :
			if (esp.a1 == "🔲") {
				tttset.reActivate3 = "off"
				esp.a1 = "⭕"
			}
		break
		case 1 :
			if (esp.a3 == "🔲") {
				tttset.reActivate3 = "off"
				esp.a3 = "⭕"
			}
		break
		case 2 :
			if (esp.b2 == "🔲") {
				tttset.reActivate3 = "off"
				esp.b2 = "⭕"
			}
		break
		case 3 :
			if (esp.c1 == "🔲") {
				tttset.reActivate3 = "off"
				esp.c1 = "⭕"
			}
		break
		case 4 :
			if (esp.c3 == "🔲") {
				tttset.reActivate3 = "off"
				esp.c3 = "⭕"
			}
		break
	}
}

const addTTTId = (userId) => {
	const obj = {jid: userId, wins: 0, defeats: 0, ties: 0, points: 0}
    tictactoe.push(obj)
	fs.writeFileSync('./database/ttt/tictactoe.json', JSON.stringify(tictactoe))
}

const addTTTwin = (userId, amount) => {
	let position = false
	Object.keys(tictactoe).forEach((i) => {
		if (tictactoe[i].jid === userId) {
			position = i
		}
	})
	if (position !== false) {
		tictactoe[position].wins += amount
		fs.writeFileSync('./database/ttt/tictactoe.json', JSON.stringify(tictactoe))
	}
}

const addTTTdefeat = (userId, amount) => {
	let position = false
	Object.keys(tictactoe).forEach((i) => {
		if (tictactoe[i].jid === userId) {
			position = i
		}
	})
	if (position !== false) {
		tictactoe[position].defeats += amount
		fs.writeFileSync('./database/ttt/tictactoe.json', JSON.stringify(tictactoe))
	}
}

const addTTTtie = (userId, amount) => {
	let position = false
	Object.keys(tictactoe).forEach((i) => {
		if (tictactoe[i].jid === userId) {
			position = i
		}
	})
	if (position !== false) {
		tictactoe[position].ties += amount
		fs.writeFileSync('./database/ttt/tictactoe.json', JSON.stringify(tictactoe))
	}
}

const addTTTpoints = (userId, amount) => {
	let position = false
	Object.keys(tictactoe).forEach((i) => {
		if (tictactoe[i].jid === userId) {
			position = i
		}
	})
	if (position !== false) {
		tictactoe[position].points += amount
		fs.writeFileSync('./database/ttt/tictactoe.json', JSON.stringify(tictactoe))
	}
}

const getTTTId = (userId) => {
	let position = false
	Object.keys(tictactoe).forEach((i) => {
		if (tictactoe[i].jid === userId) {
			position = i
		}
	})
	if (position !== false) {
		return tictactoe[position].jid
	}
}

const getTTTwins = (userId) => {
	let position = false
	Object.keys(tictactoe).forEach((i) => {
		if (tictactoe[i].jid === userId) {
			position = i
		}
	})
	if (position !== false) {
		return tictactoe[position].wins
	}
}

const getTTTdefeats = (userId) => {
	let position = false
	Object.keys(tictactoe).forEach((i) => {
		if (tictactoe[i].jid === userId) {
			position = i
		}
	})
	if (position !== false) {
		return tictactoe[position].defeats
	}
}

const getTTTties = (userId) => {
	let position = false
	Object.keys(tictactoe).forEach((i) => {
		if (tictactoe[i].jid === userId) {
			position = i
		}
	})
	if (position !== false) {
		return tictactoe[position].ties
	}
}

const getTTTpoints = (userId) => {
	let position = false
	Object.keys(tictactoe).forEach((i) => {
		if (tictactoe[i].jid === userId) {
			position = i
		}
	})
	if (position !== false) {
		return tictactoe[position].points
	}
}

///_ END TIC-TAC-TOE CONFIG


//_FUCTION REGISTRO/DINHEIRO
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
      tiringa.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})


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

            sotoy =  ['🥑 : 🥑 : 🥑','🍉 : 🍉 : 🍉','🍓 : 🍓 : 🍓','🍎 : 🍎 : 🍎','🍍 : 🍍 : 🍍','🥝 : 🥝 : 🥝','🍑 : 🍑 : 🍑','🥥 : 🥥 : 🥥','🍇 : 🍇 : 🍇','🍊 : 🍊 : 🍊','🔔 : 🔔 : 🔔','🍒 : 🍒 : 🍒','🍌 : 🍌 : 🍌','🍐 : 🍐 : 🍐','🍋 : 🍋 : 🍋','🍊 : 🍒 : 🍐','🥝 : 🍉 : 🥑','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🥝','🍉 : 🍋 : 🍒','🍋 : 🥑 : 🍌','🔔 : 🥥 : 🍇','🍓 : 🍐 : 🍇','🍊 : 🍍 : 🍉','🍒 : 🔔 : 🍊','🍇 : 🥑 : 🍐','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🍉 : 🍓 : 🥑','🍊 : 🍋 : 🔔','🍐 : 🍒 : 🍋','🍍 : 🍐 : 🥝','🥑 : 🍓 : 🍉','🍑 : 🔔 : 🥑','🍌 : 🍒 : 🔔','🍉 : 🍍 : 🥥','🍊 : 🍋 : 🍒','🍋 : 🍍 : 🍌','🥥 : 🍎 : 🍉','🔔 : 🍑 : 🍓','🍉 : 🥑 : 🍐','🍒 : 🔔 : 🍊','🍇 : 🍍 : 🍐','🍓 : 🥑 : 🍍','🔔 : 🍒 : 🍐','🥥 : 🍒 : 🍊','🍊 : 🍋 : 🔔','🍐 : 🍉 : 🍋','🍐 : 🍑 : 🍐','🥑 : 🍒 : 🍓','🔔 : 🍎 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🥥 : 🍍','🍊 : 🍋 : 🍒','🍓 : 🍉 : 🍌','🍍 : 🔔 : 🍇','🔔 : 🍐 : 🍎','🍊 : 🍒 : 🍐','🍉 : 🔔 : 🥑','🍇 : 🥥 : 🍎','🍊 : 🍋 : 🔔','🔔 : 🍓 : 🍐','🔔 : 🍒 : 🍊','🥑 : 🍉 : 🔔','🍐 : 🍒 : 🍋','🍑 : 🍎 : 🍐','🍊 : 🍍 : 🍒','🔔 : 🔔 : 🥑','🍌 : 🍒 : 🍉','🍐 : 🍓 : 🍎','🍊 : 🍋 : 🍒','🍋 : 🥑 : 🍌','🔔 : 🍎 : 🍇','🍉 : 🍐 : 🥥','🔔 : 🍑 : 🥑','🍒 : 🔔 : 🍊','🍇 : 🍓 : 🍐','🍊 : 🍋 : 🔔','🥑 : 🍍 : 🍐','🔔 : 🍒 : 🍉','🍊 : 🥑 : 🔔','🍎 : 🍒 : 🍎','🍐 : 🍉 : 🍐','🍊 : 🥑 : 🍓','🍋 : 🔔 : 🍇','🍌 : 🍒 : 🍉','🍐 : 🔔 : 🥑','🍓 : 🍋 : 🍒','🍋 : 🥑 : 🍌','🔔 : 🍎 : 🥥','🍉 : 🍐 : 🍇','🍊 : 🍒 : 🍐','🥑 : 🍓 : 🍉','🍇 : 🍒 : 🍍','🍊 : 🥑 : 🍑','🍑 : 🍎 : 🍐','🔔 : 🍒 : 🍊','🍉 : 🥝 : 🍎','🍐 : 🍉 : 🍋','🍐 : 🥑 : 🍐','🍊 : 🍒 : 🍓','🍑 : 🔔 : 🍉','🍌 : 🥑 : 🥝','🍐 : 🍉 : 🔔','🍊 : 🍓 : 🍒','🍋 : 🍋 : 🍉','🥑 : 🍎 : 🍇','🔔 : 🍑 : 🥑','🍊 : 🥥 : 🍐','🍍 : 🍓 : 🍊','🍉 : 🍒 : 🍐','🍊 : 🍋 : 🍉','🔔 : 🍎 : 🍐','🍓 : 🥑 : 🍊','🍊 : 🍋 : 🔔','🍐 : 🍒 : 🍑','🥝 : 🍉 : 🍐','🍓 : 🍍 : 🍒','🔔 : 🔔 : 🍇','🍌 : 🍒 : 🍉','🍐 : 🍉 : 🍓','🍊 : 🍐 : 🍒','🍊 : 🍒 : 🍐','🥝 : 🍉 : 🥑','🥑 : 🍒 : 🍐','🍊 : 🍋 : 🔔','🔔 : 🍍 : 🍐','🍓 : 🍉 : 🍊','🍊 : 🍋 : 🍓','🍐 : 🍒 : 🍋','🥑 : 🍐 : 🥥','🍊 : 🍒 : 🍍','🍎 : 🔔 : 🍇','🍌 : 🍒 : 🍓','🍓 : 🔔 : 🍎','🍊 : 🍉 : 🍍','🍋 : 🍋 : 🍌','🍎 : 🔔 : 🍉','🔔 : 🍐 : 🍇','🍊 : 🍒 : 🍐','🍍 : 🔔 : 🥑','🍇 : 🥝 : 🍎','🍊 : 🍉 : 🔔','🔔 : 🍓 : 🍐','🔔 : 🍒 : 🍊','🥑 : 🍋 : 🔔','🍐 : 🍒 : 🍋','🍉 : 🍐 : 🍉','🍊 : 🥥 : 🥑','🔔 : 🍍 : 🍇','🍌 : 🍎 : 🔔','🍐 : 🔔 : 🍎','🍊 : 🥥 : 🍒','🍉 : 🍋 : 🍌','🍑 : 🔔 : 🍇','🔔 : 🍐 : 🍉','🍊 : 🥝 : 🍐','🍍 : 🔔 : 🍊','🍇 : 🍒 : 🍐','🍊 : 🍋 : 🔔','🍉 : 🍒 : 🍐','🔔 : 🥝 : 🍊','🍊 : 🍋 : 🔔','🍐 : 🍍 : 🍋','🥝 : 🍐 : 🍉','🍊 : 🍑 : 🍍','🔔 : 🔔 : 🍓','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🥝','🍉 : 🍋 : 🍒','🍋 : 🥑 : 🍌','🔔 : 🥥 : 🍇','🍓 : 🍐 : 🍇','🍊 : 🍍 : 🍉','🍒 : 🔔 : 🍊','🍇 : 🥑 : 🍐','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🍉 : ?? : 🥑','🍊 : 🍋 : 🔔','🍐 : 🍒 : 🍋','🍍 : 🍐 : 🥝','🥑 : 🍓 : 🍉','🍑 : 🔔 : 🥑','🍌 : 🍒 : 🔔','🍉 : 🍍 : 🥥','🍊 : 🍋 : 🍒','🍋 : 🍍 : 🍌','🥥 : 🍎 : 🍉','🔔 : 🍑 : 🍓','🍉 : 🥑 : 🍐','🍒 : 🔔 : 🍊','🍇 : 🍍 : 🍐','🍓 : 🥑 : 🍍','🔔 : 🍒 : 🍐','🥥 : 🍒 : 🍊','🍊 : 🍋 : 🔔','🍐 : 🍉 : 🍋','🍐 : 🍑 : 🍐','🥑 : 🍒 : 🍓','🔔 : 🍎 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🥥 : 🍍','🍊 : 🍋 : 🍒','🍓 : 🍉 : 🍌','🍍 : 🔔 : 🍇','🔔 : 🍐 : 🍎','🍊 : 🍒 : 🍐','🍉 : 🔔 : 🥑','🍇 : 🥥 : 🍎','🍊 : 🍋 : 🔔','🔔 : 🍓 : 🍐','🔔 : 🍒 : 🍊','🥑 : 🍉 : 🔔','🍐 : 🍒 : 🍋','🍑 : 🍎 : 🍐','🍊 : 🍍 : 🍒','🔔 : 🔔 : 🥑','🍌 : 🍒 : 🍉','🍐 : 🍓 : 🍎','🍊 : 🍋 : 🍒','🍋 : 🥑 : 🍌','🔔 : 🍎 : 🍇','🍉 : 🍐 : 🥥','🔔 : 🍑 : 🥑','🍒 : 🔔 : 🍊','🍇 : 🍓 : 🍐','🍊 : 🍋 : 🔔','🥑 : 🍍 : 🍐','🔔 : 🍒 : 🍉','🍊 : 🥑 : 🔔','🍎 : 🍒 : 🍎','🍐 : 🍉 : 🍐','🍊 : 🥑 : 🍓','🍋 : 🔔 : 🍇','🍌 : 🍒 : 🍉','🍐 : 🔔 : 🥑','🍓 : 🍋 : 🍒','🍋 : ?? : 🍌','🔔 : 🍎 : 🥥','🍉 : 🍐 : 🍇','🍊 : 🍒 : 🍐','🥑 : 🍓 : 🍉','🍇 : 🍒 : 🍍','🍊 : 🥑 : 🍑','🍑 : 🍎 : 🍐','🔔 : 🍒 : 🍊','🍉 : 🥝 : 🍎','🍐 : 🍉 : 🍋','🍐 : 🥑 : 🍐','🍊 : 🍒 : 🍓','🍑 : 🔔 : 🍉','🍌 : 🥑 : 🥝','🍐 : 🍉 : 🔔','🍊 : 🍓 : 🍒','🍋 : 🍋 : 🍉','🥑 : 🍎 : 🍇','🔔 : 🍑 : 🥑','🍊 : 🥥 : 🍐','🍍 : 🍓 : 🍊','🍉 : 🍒 : 🍐','🍊 : 🍋 : 🍉','🔔 : 🍎 : 🍐','🍓 : 🥑 : 🍊','🍊 : 🍋 : 🔔','🍐 : 🍒 : 🍑','🥝 : 🍉 : 🍐','🍓 : 🍍 : 🍒','🔔 : 🔔 : 🍇','🍌 : 🍒 : 🍉','🍐 : 🍉 : 🍓','🍊 : 🍐 : 🍒','🍊 : 🍒 : 🍐','🥝 : 🍉 : 🥑','🥑 : 🍒 : 🍐','🍊 : 🍋 : 🔔','🔔 : 🍍 : 🍐','🍓 : 🍉 : 🍊','🍊 : 🍋 : 🍓','🍐 : 🍒 : 🍋','🥑 : 🍐 : 🥥','🍊 : 🍒 : 🍍','🍎 : 🔔 : 🍇','🍌 : 🍒 : 🍓','🍓 : 🔔 : 🍎','🍊 : 🍉 : 🍍','🍋 : 🍋 : 🍌','🍎 : 🔔 : 🍉','🔔 : 🍐 : 🍇','🍊 : 🍒 : 🍐','🍍 : 🔔 : 🥑','🍇 : 🥝 : 🍎','🍊 : 🍉 : 🔔','🔔 : 🍓 : 🍐','🔔 : 🍒 : 🍊','🥑 : 🍋 : 🔔','🍐 : 🍒 : 🍋','🍉 : 🍐 : 🍉','🍊 : 🥥 : 🥑','🔔 : 🍍 : 🍇','🍌 : 🍎 : 🔔','🍐 : 🔔 : 🍎','🍊 : 🥥 : 🍒','🍉 : 🍋 : 🍌','🍑 : 🔔 : 🍇','🔔 : 🍐 : 🍉','🍊 : 🥝 : 🍐','🍍 : 🔔 : 🍊','🍇 : 🍒 : 🍐','🍊 : 🍋 : 🔔','🍉 : 🍒 : 🍐','🔔 : 🥝 : 🍊','🍊 : 🍋 : 🔔','🍐 : 🍍 : 🍋','🥝 : 🍐 : 🍉','🍊 : 🍑 : 🍍','🔔 : 🔔 : 🍓','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🥝','🍉 : 🍋 : 🍒','🍋 : 🥑 : 🍌','🔔 : 🥥 : 🍇','🍓 : 🍐 : 🍇','🍊 : 🍍 : 🍉','🍒 : 🔔 : 🍊','🍇 : 🥑 : 🍐','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🍉 : 🍓 : 🥑','🍊 : 🍋 : 🔔','🍐 : 🍒 : 🍋','🍍 : 🍐 : 🥝','🥑 : 🍓 : 🍉','🍑 : 🔔 : 🥑','🍌 : 🍒 : 🔔','🍉 : 🍍 : 🥥','🍊 : 🍋 : 🍒','🍋 : 🍍 : 🍌','🥥 : 🍎 : 🍉','🔔 : 🍑 : 🍓','🍉 : 🥑 : 🍐','🍒 : 🔔 : 🍊','🍇 : 🍍 : 🍐','🍓 : 🥑 : 🍍','🔔 : 🍒 : 🍐','🥥 : 🍒 : 🍊','🍊 : 🍋 : 🔔','🍐 : 🍉 : 🍋','🍐 : 🍑 : 🍐','🥑 : 🍒 : 🍓','🔔 : 🍎 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🥥 : 🍍','🍊 : 🍋 : 🍒','🍓 : 🍉 : 🍌','🍍 : 🔔 : 🍇','🔔 : 🍐 : 🍎','🍊 : 🍒 : 🍐','🍉 : 🔔 : 🥑','🍇 : 🥥 : 🍎','🍊 : 🍋 : 🔔','🔔 : 🍓 : 🍐','🔔 : 🍒 : 🍊','🥑 : 🍉 : 🔔','🍐 : 🍒 : 🍋','🍑 : 🍎 : 🍐','🍊 : 🍍 : 🍒','🔔 : 🔔 : 🥑','🍌 : 🍒 : 🍉','🍐 : 🍓 : 🍎','🍊 : 🍋 : 🍒','🍋 : 🥑 : 🍌','🔔 : 🍎 : 🍇','🍉 : 🍐 : 🥥','🔔 : 🍑 : 🥑','🍒 : 🔔 : 🍊','🍇 : 🍓 : 🍐','🍊 : 🍋 : 🔔','🥑 : 🍍 : 🍐','🔔 : 🍒 : 🍉','🍊 : 🥑 : 🔔','🍎 : 🍒 : 🍎','🍐 : 🍉 : 🍐','🍊 : 🥑 : 🍓','🍋 : 🔔 : 🍇','🍌 : 🍒 : 🍉','🍐 : 🔔 : 🥑','🍓 : 🍋 : 🍒','🍋 : 🥑 : 🍌','🔔 : 🍎 : 🥥','🍉 : 🍐 : 🍇','🍊 : 🍒 : 🍐','🥑 : 🍓 : 🍉','🍇 : 🍒 : 🍍','🍊 : 🥑 : 🍑','🍑 : 🍎 : 🍐','🔔 : 🍒 : 🍊','🍉 : 🥝 : 🍎','🍐 : 🍉 : 🍋','🍐 : 🥑 : 🍐','🍊 : 🍒 : 🍓','🍑 : 🔔 : 🍉','🍌 : 🥑 : 🥝','🍐 : 🍉 : 🔔','🍊 : 🍓 : 🍒','🍋 : 🍋 : 🍉','🥑 : 🍎 : 🍇','🔔 : 🍑 : 🥑','🍊 : 🥥 : 🍐','🍍 : 🍓 : 🍊','🍉 : 🍒 : 🍐','🍊 : 🍋 : 🍉','🔔 : 🍎 : 🍐','🍓 : 🥑 : 🍊','🍊 : 🍋 : 🔔','🍐 : 🍒 : 🍑','🥝 : 🍉 : 🍐','🍓 : 🍍 : 🍒','🔔 : 🔔 : 🍇','🍌 : 🍒 : 🍉','🍐 : 🍉 : 🍓','🍊 : 🍐 : 🍒','🍊 : 🍒 : 🍐','🥝 : 🍉 : 🥑','🥑 : 🍒 : 🍐','🍊 : 🍋 : 🔔','🔔 : 🍍 : 🍐','🍓 : 🍉 : 🍊','🍊 : 🍋 : 🍓','🍐 : 🍒 : 🍋','🥑 : 🍐 : 🥥','🍊 : 🍒 : 🍍','🍎 : 🔔 : 🍇','🍌 : ?? : 🍓','🍓 : 🔔 : 🍎','🍊 : 🍉 : 🍍','🍋 : 🍋 : 🍌','🍎 : 🔔 : 🍉','🔔 : 🍐 : 🍇','🍊 : 🍒 : 🍐','🍍 : 🔔 : 🥑','🍇 : 🥝 : 🍎','🍊 : 🍉 : 🔔','🔔 : 🍓 : 🍐','🔔 : 🍒 : 🍊','🥑 : 🍋 : 🔔','🍐 : 🍒 : 🍋','🍉 : 🍐 : 🍉','🍊 : 🥥 : 🥑','🔔 : 🍍 : 🍇','🍌 : 🍎 : 🔔','🍐 : 🔔 : 🍎','🍊 : 🥥 : 🍒','🍉 : 🍋 : 🍌','🍑 : 🔔 : 🍇','🔔 : 🍐 : 🍉','🍊 : 🥝 : 🍐','🍍 : 🔔 : 🍊','🍇 : 🍒 : 🍐','🍊 : 🍋 : 🔔','🍉 : 🍒 : 🍐','🔔 : 🥝 : 🍊','🍊 : 🍋 : 🔔','🍐 : 🍍 : 🍋','🥝 : 🍐 : 🍉','🍊 : 🍑 : 🍍','🔔 : 🔔 : 🍓','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🥝','🍉 : 🍋 : 🍒','🍋 : 🥑 : 🍌','🔔 : 🥥 : ??','🍓 : 🍐 : 🍇','🍊 : 🍍 : 🍉','🍒 : 🔔 : 🍊','🍇 : 🥑 : 🍐','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🍉 : 🍓 : 🥑','🍊 : 🍋 : 🔔','🍐 : 🍒 : 🍋','🍍 : 🍐 : 🥝','🥑 : 🍓 : 🍉','🍑 : 🔔 : 🥑','🍌 : 🍒 : 🔔','🍉 : 🍍 : 🥥','🍊 : 🍋 : 🍒','🍋 : 🍍 : 🍌','🥥 : 🍎 : 🍉','🔔 : 🍑 : 🍓','🍉 : 🥑 : 🍐','🍒 : 🔔 : 🍊','🍇 : 🍍 : 🍐','🍓 : 🥑 : 🍍','🔔 : 🍒 : 🍐','🥥 : 🍒 : 🍊','🍊 : 🍋 : 🔔','🍐 : 🍉 : 🍋','🍐 : 🍑 : 🍐','🥑 : 🍒 : 🍓','🔔 : 🍎 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🥥 : 🍍','🍊 : 🍋 : 🍒','🍓 : 🍉 : 🍌','🍍 : 🔔 : 🍇','🔔 : 🍐 : 🍎','🍊 : 🍒 : 🍐','🍉 : 🔔 : 🥑','🍇 : 🥥 : 🍎','🍊 : 🍋 : 🔔','🔔 : 🍓 : 🍐','🔔 : 🍒 : 🍊','🥑 : 🥑 : 🥑','🍉 : 🍉 : 🍉','🍓 : 🍓 : 🍓','🍎 : 🍎 : 🍎','🍍 : 🍍 : 🍍','🥝 : 🥝 : 🥝','🍑 : 🍑 : 🍑','🥥 : 🥥 : 🥥','🍇 : 🍇 : 🍇','🍊 : 🍊 : 🍊','🔔 : 🔔 : 🔔','🍒 : 🍒 : 🍒','🍌 : 🍌 : 🍌','🍐 : 🍐 : 🍐','🍋 : 🍋 : 🍋','🥑 : 🍉 : 🔔','🍐 : 🍒 : 🍋','🍑 : 🍎 : 🍐','🍊 : 🍍 : 🍒','🔔 : 🔔 : 🥑','🍌 : 🍒 : 🍉','🍐 : 🍓 : 🍎','🍊 : 🍋 : 🍒','🍋 : 🥑 : 🍌','🔔 : 🍎 : 🍇','🍉 : 🍐 : 🥥','🔔 : 🍑 : 🥑','🍒 : 🔔 : 🍊','🍇 : 🍓 : 🍐','🍊 : 🍋 : 🔔','🥑 : 🍍 : 🍐','🔔 : 🍒 : 🍉','🍊 : 🥑 : 🔔','🍎 : 🍒 : 🍎','🍐 : 🍉 : 🍐','🍊 : 🥑 : 🍓','🍋 : 🔔 : 🍇','🍌 : 🍒 : 🍉','🍐 : 🔔 : 🥑','🍓 : 🍋 : 🍒','🍋 : 🥑 : 🍌','🔔 : 🍎 : 🥥','🍉 : 🍐 : 🍇','🍊 : 🍒 : 🍐','🥑 : 🍓 : 🍉','🍇 : 🍒 : 🍍','🍊 : 🥑 : 🍑','🍑 : 🍎 : 🍐','🔔 : 🍒 : 🍊','🍉 : 🥝 : 🍎','🍐 : 🍉 : 🍋','🍐 : 🥑 : 🍐','🍊 : 🍒 : 🍓','🍑 : 🔔 : 🍉','🍌 : 🥑 : 🥝','🍐 : 🍉 : 🔔','🍊 : 🍓 : 🍒','🍋 : 🍋 : 🍉','🥑 : 🍎 : 🍇','🔔 : 🍑 : 🥑','🍊 : 🥥 : 🍐','🍍 : 🍓 : 🍊','🍉 : 🍒 : 🍐','🍊 : 🍋 : 🍉','🔔 : 🍎 : 🍐','🍓 : 🥑 : 🍊','🍊 : 🍋 : 🔔','🍐 : 🍒 : 🍑','🥝 : 🍉 : 🍐','🍓 : 🍍 : 🍒','🔔 : 🔔 : 🍇','🍌 : 🍒 : 🍉','🍐 : 🍉 : 🍓','🍊 : 🍐 : 🍒','🥑 : 🥑 : 🥑','🍉 : 🍉 : 🍉','🍓 : 🍓 : 🍓','🍎 : 🍎 : 🍎','🍍 : 🍍 : 🍍','🥝 : 🥝 : 🥝','🍑 : 🍑 : 🍑','🥥 : 🥥 : 🥥','🍇 : 🍇 : 🍇','🍊 : 🍊 : 🍊','🔔 : 🔔 : 🔔','🍒 : 🍒 : 🍒','🍌 : 🍌 : 🍌','🍐 : 🍐 : 🍐','🍋 : 🍋 : 🍋']

            const totalchat = await tiringa.chats.all()
			const botNumber = tiringa.user.jid
			const ownerNumber = [`557499510904@s.whatsapp.net`]
			const ownerNumberB = []
			//const ban = [`557499510904@s.whatsapp.net`]
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
			const isPremium= prem.includes(sender)
			const isOwnerB = ownerNumberB.includes(sender)
            const isLevelingOn = isGroup ? _leveling.includes(from) : true
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
                    ban: '🛂Você está banido🛂',
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
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)😀/ ,'gi'))
			}
			const reply = (tej) => {
				tiringa.sendMessage(from, tej, text, {quoted:mek})
			}
			const sendMess = (teks) => {
				tiringa.sendMessage(from, teks, text)
			}
            const sendImage = (tis) => {
		        tiringa.sendMessage(from, tis, image, {quoted:mek})
            }
			const mentions = (ops, memberr, sender, id) => {
				(id == null || id == undefined || id == false) ? tiringa.sendMessage(from, ops.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : tiringa.sendMessage(from, ops.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			const costum = (pesan, tipe, target, target2) => {
                 tiringa.sendMessage(from, pesan, tipe, {quoted: {key: {fromMe: false, participant: `${target}`, ...(from ? {remoteJid: from}: {})}, message: {conversation: `${target2}` }}})
            }
             const sendPtt = (teks) => {
                 tiringa.sendMessage(from, audio, mp3, {quoted: mek })
            }
             const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `𝗦𝗲𝗹𝗳𝗕𝗼𝘁 𝗪𝗵𝗮𝘁𝘀𝗮𝗽𝗽` }
            }
            const sendFileFromStorage = (path, type, options) => {
client.sendMessage(from, fs.readFileSync(path), type, options).catch(e => {
reply('_[ ! ] Error Gagal Dalam Mengirim Media_')
console.log(e)
})
}

const sendFile = async (medya, namefile, capti, tag, vn) => {
  baper = await getBuffer(medya)
  mimi = ''
  if (namefile.includes('m4a')){
  client.sendMessage(from, baper, audio,{mimetype: 'audio/mp4',quoted: tag, filename: namefile, ptt: vn})
  }
  if (namefile.includes('mp4')){
  client.sendMessage(from, baper, video, {mimetype: 'video/mp4', quoted: tag, caption: capti, filename: namefile})
  }
  if (namefile.includes('gif')){
  client.sendMessage(from, baper, video, {mimetype: Mimetype.gif, caption: capti, quoted: tag, filename: namefile})
  } 
  if (namefile.includes('png')){
  client.sendMessage(from, baper, image, {quoted: tag, caption: capti, filename: namefile})
  }
  
  if (namefile.includes('webp')){
  client.sendMessage(from, baper, sticker, {quoted: tag})
  } else {
  kobe = namefile.split(`.`)[1]
  client.sendMessage(from, baper, document, {mimetype: kobe, quoted: tag, filename: namefile})
  }
}

const sendFileFromUrl = async(link, type, options) => {
  hasil = await getBuffer(link)
	client.sendMessage(from, hasil, type, options).catch(e => {
	fetch(link).then((hasil) => {
	client.sendMessage(from, hasil, type, options).catch(e => {
	client.sendMessage(from, { url : link }, type, options).catch(e => {
	  reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
	  console.log(e)
	})
	})
	})
	})
	}
const downloadM = async(save) => {
encmedia = isTagedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
encmedia = isTagedVideo ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
if (save) return await client.downloadAndSaveMediaMessage(encmedia)
return await client.downloadMediaMessage(encmedia)
  }
			
//_FUCTION PATENTE
         const nivelAtual = getLevelingLevel(sender)
        var patt = 'Bronze I🥉'
        if (nivelAtual === 1) {
            patt = 'Bronze  I🥉'
        } else if (nivelAtual === 2) {
            patt = 'Bronze II🥉'
        } else if (nivelAtual === 3) {
            patt = 'Bronze  III🥉'
        } else if (nivelAtual === 4) {
            patt = 'Bronze  IV🥉'
        } else if (nivelAtual === 5) {
            patt = 'Bronze  V🥉'
        } else if (nivelAtual === 6) {
            patt = 'Prata I🥈'
        } else if (nivelAtual === 7) {
            patt = 'Prata II🥈'
        } else if (nivelAtual === 8) {
            patt = 'Prata III🥈'
        } else if (nivelAtual === 9) {
            patt = 'Prata IV🥈'
        } else if (nivelAtual === 10) {
            patt = 'Prata V🥈'
        } else if (nivelAtual === 11) {
            patt = 'Ouro I🥇'
        } else if (nivelAtual === 12) {
            patt = 'Ouro II🥇'
        } else if (nivelAtual === 13) {
            patt = 'Ouro III🥇'
        } else if (nivelAtual === 14) {
            patt = 'Ouro IV🥇'
        } else if (nivelAtual === 15) {
            patt = 'Ouro V🥇'
        } else if (nivelAtual === 16) {
            patt = 'Campeão I🏆'
        } else if (nivelAtual === 17) {
            patt = 'Campeão II🏆'
        } else if (nivelAtual === 18) {
            patt = 'Campeão III🏆'
        } else if (nivelAtual === 19) {
            patt = 'Campeão IV🏆'
        } else if (nivelAtual === 20) {
            patt = 'Campeão V🏆'
        } else if (nivelAtual === 21) {
            patt = 'Diamante I 💎'
        } else if (nivelAtual === 22) {
            patt = 'Diamante II 💎'
        } else if (nivelAtual === 23) {
            patt = 'Diamante III 💎'
        } else if (nivelAtual === 24) {
            patt = 'Diamante IV 💎'
        } else if (nivelAtual === 25) {
            patt = 'Diamante V 💎'
        } else if (nivelAtual === 26) {
            patt = 'Mestre I 🐂'
        } else if (nivelAtual === 27) {
            patt = 'Mestre II 🐂'
        } else if (nivelAtual === 28) {
            patt = 'Mestre III 🐂'
        } else if (nivelAtual === 29) {
            patt = 'Mestre IV 🐂'
        } else if (nivelAtual === 30) {
            patt = 'Mestre V 🐂'
        } else if (nivelAtual === 31) {
            patt = 'Mítico I 🔮'
        } else if (nivelAtual === 32) {
            patt = 'Mítico II 🔮'
        } else if (nivelAtual === 33) {
            patt = 'Mítico III 🔮'
        } else if (nivelAtual === 34) {
            patt = 'Mítico IV 🔮'
        } else if (nivelAtual === 35) {
            patt = 'Mítico V 🔮'
        } else if (nivelAtual === 36) {
            patt = 'God I🕴'
        } else if (nivelAtual === 37) {
            patt = 'God II🕴'
        } else if (nivelAtual === 38) {
            patt = 'God III🕴'
        } else if (nivelAtual === 39) {
            patt = 'God IV🕴'
        } else if (nivelAtual === 40) {
            patt = 'God V🕴'
        } else if (nivelAtual > 41) {
            patt = '🛐Grande Mestre🛐'
        }
                        
 //_XP SEM LEVELING ATIVO 
/*if (isGroup) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * (15 - 25 + 1) + 15)
                const requiredXp = 5 * Math.pow(currentLevel, 2) + 50 * currentLevel + 100
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                  }
            } catch (err) {
                console.error(err)
            }
        } */
          
//_XP COM LEVELING ATIVO
if (isGroup && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * (15 - 25 + 1) + 15)
                const requiredXp = 5 * Math.pow(currentLevel, 2) + 50 * currentLevel + 100
                const getLevel = getLevelingLevel(sender)
                const namelv = checkId
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                  const lvup = {
text:

` ╔═══❖LEVEL UP❖═══╗
  ║╭────────────
  ║│‣ Nome: @${namelv.split('@')[0]}
  ║│
  ║│‣ XP: ${getLevelingXp(sender)}
  ║│        
  ║│‣ Level: ${getLevel} -> ${getLevelingLevel(sender)}
  ║│
  ║│‣ Patente: ${patt}
  ║╰────────────
  ╚══❖•ೋ°•❈•°ೋ•❖══╝`,
  contextInfo: {mentionedJid: [namelv]}}
tiringa.sendMessage(from, lvup, text, {quoted: mek})
//tiringa.sendMessage(from, lvup, text, {quoted: mek, contextInfo: {mentionedJid: [sender]}}
                }
            } catch (err) {
                console.error(err)
            }
        } 

//_DINHEIRO 
if (isGroup) {
            const checkATM = checkATMuser(sender)
            try {
                if (checkATM === undefined) addATM(sender)
                const uangsaku = Math.floor(Math.random() * 10) + 90
                addKoinUser(sender, uangsaku)
            } catch (err) {
                console.error(err)
            }
        }
            
if (budy.includes("://chat.whatsapp.com/")){
		if (!isGroup) return
		if (!isAntilink) return
		if (isGroupAdmins) return reply('Admin Grup Mah Bebass!!')
		ara.updatePresence(from, Presence.composing)
		if (budy.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`Link Group Terdeteksi! ${sender.split("@")[0]} yahahaha ngemis member awkwkwwk`)
		setTimeout( () => {
			ara.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 1000)
		setTimeout( () => {
			ara.updatePresence(from, Presence.composing)
			reply("Bissmilah headshot!!")
		}, 0)
	}

          
			if (groupAdmins) {
				prema = 'Ademir🤓'
			}
			if (isPremium) {
				prema = 'Premium😎'
			} 
			if (isOwner) {
				prema = 'El Italu🕴🏽'
			} else {
		    var prema = 'Membro comum🗿'
		    }

////FINALIZAR TTT AUTOMATICAMENTE By: Resen
			if (tttset.tttstatus == "off" && tttset.autoEndTime == "on") {
				tttset.autoEndTime = "off"
			} else if (tttset.tttstatus == "on" && tttset.autoEndTime == "on") {
				if (isLevelingOn) {
					const randomEndTTTXP = 0 - (Math.floor(Math.random() * 75) + 75)
					addLevelingXp(tttset.player, randomEndTTTXP)
            		const checkTTTIdEnd = getTTTId(tttset.player)
					if (checkTTTIdEnd === undefined) addTTTId(tttset.player)
					addTTTpoints(tttset.player, randomEndTTTXP)
					tiringa.sendMessage(tttset.local,`❌ O TEMPO DE JOGO EXPIROU ❌\n\n➣  PUNIÇÃO: ${randomEndTTTXP} XP 🔮`, text, {quoted: tttset.mentionPlayer})
				} else {
					tiringa.sendMessage(tttset.local,`❌ O TEMPO DE JOGO EXPIROU ❌`, text, {quoted: tttset.mentionPlayer})
				}
				esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
				esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
				esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
				tttset.tttstatus = "off"
				tttset.autoEndTime = "off"
			}
			
			
//_"Es hora de mimir" By: Resen
			//const dataAtual = new Date()
			//const horaAtual = dataAtual.getHours()
			const horatt = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
			const horaAtual = `${horatt}`
			if (horaAtual == "10:10:00" && ammOff == "off" && isGroup) {
				sonica = fs.readFileSync('./teste/acorda.mp3')
				sonico = fs.readFileSync('./teste/sonic.webp')
				tiringa.sendMessage(from, sonica, MessageType.audio, {mimetype: 'audio/mp4', ptt:true})
				tiringa.sendMessage(from, sonico, sticker)
				ammOff = "on"
			} else if (horaAtual != "10:10:10" && ammOff == "on") {
				ammOff = "off"
			}
            if (horaAtual == "10:15:00" && ammOff == "off" && isGroup) {
                sonica = fs.readFileSync('./teste/acorda.mp3')
				sonico = fs.readFileSync('./teste/sonic.webp')
				tiringa.sendMessage(from, sonica, MessageType.audio, {mimetype: 'audio/mp4', ptt:true})
				tiringa.sendMessage(from, sonico, sticker)
				ammOff = "on"
			} else if (horaAtual != "10:15:10" && ammOff == "on") {
				ammOff = "off"
			}
            if (horaAtual == "10:20:00" && ammOff == "off" && isGroup) {
                sonica = fs.readFileSync('./teste/acorda.mp3')
				sonico = fs.readFileSync('./teste/sonic.webp')
				tiringa.sendMessage(from, sonica, MessageType.audio, {mimetype: 'audio/mp4', ptt:true})
				tiringa.sendMessage(from, sonico, sticker)
				ammOff = "on"
			} else if (horaAtual != "10:20:10" && ammOff == "on") {
				ammOff = "off"
			}
				
				

htyt = moment.tz('America/Sao_Paulo').format('HH');
hoAtual = `${htyt}`
if(hoAtual > 00 && hoAtual < 05) {
esh = "es hora de dormir😐"
} else if(hoAtual => 05 && hoAtual < 12) {
esh = `Bom dia ${pushname}`
} else if(hoAtual => 12 && hoAtual < 18) {
esh = `Boa tarde ${pushname}`
} else if(hoAtual => 18 && hoAtual < 23) {
esh = `Boa noite ${pushname}`
}

var day = new Date();
        var hor = day.getHours();
        if (hor >= 0 && hor < 12) {
           const ucapanSalam = "siang";
        } else if (hor == 12) {
            const ucapanSalam = "Good Noon!";
        } else if (hor >= 12 && hr <= 17) {
            const ucapanSalam = "Good Afternoon!";
        } else {
            const ucapanSalam = "Good Evening!";
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

tiringa.chatRead(from)

//ANTI-SPAM BY ITALU
if (isCmd && msgFilter.isFiltered(from)) {
tiringa.sendMessage(from, `Sem flood @${sender.split('@')[0]}...\n\nAguarde 5 segundos antes de usar outro comando✅`, text, {quoted: mek, contextInfo: {mentionedJid: [sender]}})
return console.log(color('SPAM', 'red'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color(`${command}`),'DE:', color(pushname))}
		
//_USUÁRIO BANIDO
if (isCmd && isBanned) {

return console.log(color('[BAN]', 'blue'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color(`${command}`),'DE:', color(pushname))}
            
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
if ((budy === 'bot') ||
(budy === 'BOT') ||
(budy === 'Bot')) {
buf = fs.readFileSync(`./teste/onichan.mp3`)
tiringa.sendMessage(from, buf, audio, {mimetype: 'audio/mp4', quoted: mek, ptt: true})
}
if ((budy === "fdp") ||
(budy === "Fdp") ||
(budy === "FDP")) {
tiringa.updatePresence(from, Presence.composing)
reply("teu pai")
}
if ((budy === "oi bot") ||
(budy === "Oi bot")) {
tiringa.updatePresence(from, Presence.composing)
reply("oi")
}
if ((budy === "vtnc") ||
(budy === "Vtnc")) {
tiringa.updatePresence(from, Presence.composing)
reply("vai você pnc")
}
if ((budy.match("sexo")) ||
(budy.match("Sexo"))) {
tiringa.updatePresence(from, Presence.composing)
reply(`você falou em coito?KKKKKKKKKKKKKKKKKKKKKKKKK`)
}
if (budy === "pnc") {
tiringa.updatePresence(from, Presence.composing)
reply(`vsfd ${pushname}`)
}
if ((budy === "cleito") ||
(budy === "Cleito")) {
cleitu = fs.readFileSync(`./teste/edmi.webp`)
tiringa.sendMessage(from, cleitu, sticker, {quoted: mek})
}
if ((budy === "Edmilson") ||
(budy === "edmilson")) {
cleitu = fs.readFileSync(`./teste/cleito.webp`)
tiringa.sendMessage(from, cleitu, sticker, {quoted: mek})
}


/*if (budy.includes("testens")){
const aris = budy.replace(/!testens/, "")
await axios.get(`https://nekos.life/api/v2/img/pussy_jpg`).then((res) => {
	tiringa.sendMessage(from, '[🦧] ESPERE ESTA PROCESSANDO...', MessageType.text)
   // let cpf = ${res.data.url}
    tiringa.sendMessage(from, res.data.url,MessageType.image);
})
}*/

if (budy.includes("geradorcpf")){
const aris = budy.replace(/!geradorcpf/, "")
axios.get(`http://geradorapp.com/api/v1/cpf/generate?token=40849779ec68f8351995def08ff1e2fa`).then((res) => {
	tiringa.sendMessage(from, '[🦧] ESPERE ESTA PROCESSANDO...', MessageType.text)
         let cpf = `*🔍CPF GERADOS🔍* \n\n ➸ *CPF:* ${res.data.data.number}  \n\n *📌BY:May Bot*`;
    tiringa.sendMessage(from, cpf,MessageType.text);
})
}

if (budy.match('tiringa')) {
result = fs.readFileSync(`./teste/mask.webp`)
tiringa.sendMessage(from, result, sticker, {quoted: mek })
} else if (budy.match('Tiringa')) {
result = fs.readFileSync(`./teste/mask.webp`)
tiringa.sendMessage(from, result, sticker, {quoted: mek })
} else if (budy.match('TIRINGA')) {
result = fs.readFileSync(`./teste/mask.webp`)
tiringa.sendMessage(from, result, sticker, {quoted: mek })
}

switch(anun) {
case 'dança':
buf = fs.readFileSync(`./teste/tiringa.webp`)
tiringa.sendMessage(from, buf, sticker, {quoted: mek})
break

case 'help':
case 'menu':
textmenu = `        ────────────────
oi ${pushname} use ${prefix}menu caso queira usar meus comandos🧙‍♂️
        ────────────────`
reply(textmenu)
        break
}
             
//_COMANDOS
switch(command) {
case 'time':
const hott = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
const hual = `Horário: ${hott}`
reply(hual)
break

case 'esh':
tiringa.sendMessage(from, esh, text, {quoted: mek})
break

//_MENU
case 'help':
case 'menu':
case '?':
case 'ajuda':
case 'comandos':
msgFilter.isFiltered(from)
const useLevel = getLevelingLevel(sender)
const useXp = getLevelingXp(sender)
const xingg = getLevelingId(sender)
const useTime = getRegisterTime(sender) 
const requireXp = 5 * Math.pow(useLevel, 2) + 50 * useLevel + 100
const chec = getLevelingId(sender)
if (useLevel === undefined && chec === undefined) addLevelingId(sender)
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
const checATM = checkATMuser(sender)
const Menu = {
text:
 `    ☆━✪🕴  ∴₰Ⱦꪋℓo፝֯֟ ߷  🕴✪━☆

     ༻▬࣭ ▭࣭ ▬ ▭࣭ ★ ▬࣭ ▭࣭ ▬ ▭࣭༺
      Olá @${sender.split("@")[0]} 🧙‍♂️
     ༻▬࣭ ▭࣭ ▬ ▭࣭ ★ ▭࣭ ▬ ▭࣭ ▬࣭༺

☀️　　🌎　°　　🌓　•　　.°•　　　🚀　　
　　　★　*　　🛸　　　°　🚀　　　　°·　
.　　　•　°★　•

🧙‍♂️ BOT 🧙‍♂️
❁➸ Prefix:「 ${prefix} 」
❁➸ Nome: Tiringa-BOT
❁➸ Versão 12.4
❁➸ Tempo online: ${temporizador(uptime)}
❁➸ Status: ON✅
❁➸ Horário: ${hr}
❁➸ Data: ${tanggal}
❁➸ Grupo:  ${groupName}
❁➸ Total de usuários: ${_level.length} usuários
❁➸ Total de chats: ${totalchat.length} chats
❁➸ Total de comandos: 192
▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄

👨‍💻USUÁRIO👨‍💻
❁➸ Nome: @${sender.split("@")[0]}
❁➸ Tipo de usuário: ${prema}
❁➸ Dinheiro: ${checATM}
❁➸ Level: ${useLevel}
❁➸ XP: ${useXp}/${requireXp}
❁➸ Patente: ${patt}
▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄
 ♻️NOVIDADES:

      ❧ comando slot repaginado
｡☆✼▬࣭ ▭࣭ ▬ ▭࣭  ★  ▭࣭ ▬ ▭࣭ ▬࣭ ✼☆｡
✅  COMANDOS NOVOS:

      ❧ clima
｡☆✼▬࣭ ▭࣭ ▬ ▭࣭  ★  ▭࣭ ▬ ▭࣭ ▬࣭ ✼☆｡
✔ REMOVIDOS:     

      ❧ registro totalmente removido
｡☆✼▬࣭ ▭࣭ ▬ ▭࣭  ★  ▭࣭ ▬ ▭࣭ ▬࣭ ✼☆｡
⚠️AVISO:

      ❧ versão 12.0 no github
      use ${prefix}git para obter o link
      ❧ comandos hentai em breve...
｡☆✼▬࣭ ▭࣭ ▬ ▭࣭  ★  ▭࣭ ▬ ▭࣭ ▬࣭ ✼☆｡

▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄
╔════ 🧙‍♂️ INFORMAÇÕES 🧙‍♂️
║╭╼╾╼╾╼╾╼╾╼╾╼╾╼╾
║├► ${prefix}info
║│_Informações do bot_
║├► ${prefix}criador
║│_Número do meu criador_
║├► ${prefix}ping
║│_Mostra meu tempo de resposta_
║├► ${prefix}infome
║│_Mostra algumas informações suas_
║├► ${prefix}infogp
║│_Mostra algumas informações do grupo_
║╰╼╾╼╾╼╾╼╾╼╾╼╾╼╾
╚═════ ≪ •❈• ≫ ═════╝

▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄
╔════ 🔞 +18 🔞
║╭╼╾╼╾╼╾╼╾╼╾╼╾╼╾
║├► Em breve...
║╰╼╾╼╾╼╾╼╾╼╾╼╾╼╾
╚═════ ≪ •❈• ≫ ═════╝

▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄
╔════ 👥 GRUPO 👥
║╭╼╾╼╾╼╾╼╾╼╾╼╾╼╾
║├► ${prefix}listadmin
║│_Lista todos os administradores do grupo_
║├► ${prefix}online
║│_Lista todos os membros online_
║├► ${prefix}fecharg
║│_Fecha o grupo_
║├► ${prefix}abrirg
║│_Abre o grupo_
║├► ${prefix}promover
║│_Promove o alvo ao cargo de administrador_
║├► ${prefix}rebaixar
║│_Rabaixa o alvo a membro comum_
║├► ${prefix}setname
║│_Altera o nome do grupo_
║├► ${prefix}setdesk
║│_Altera a descrição do grupo_
║├► ${prefix}tagall
║│_Tag All members_
║├► ${prefix}linkgc
║│_link do grupo_
║├► ${prefix}Leave
║│_O bot sai do grupo_
║├► ${prefix}notif
║│_Notifica todos os membros_
║├► ${prefix}qelcome
║│_On/off welcome_
║├► ${prefix}delete (marque a mensagem)
║│_Apaga uma mensagem enviada pelo bot_
║╰╼╾╼╾╼╾╼╾╼╾╼╾╼╾
╚═════ ≪ •❈• ≫ ═════╝

▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄
╔════ 🎥  MÍDIA 🎥
║╭╼╾╼╾╼╾╼╾╼╾╼╾╼╾
║├► ${prefix}esquilo (marque um áudio)
║│_Efeito de áudio esquilo_
║├► ${prefix}slow (marque um áudio)
║│_Efeito de áudio lento_
║├► ${prefix}gemuk (marque um áudio)
║│_Efeito de áudio gigante_
║├► ${prefix}bass (marque um áudio)
║│_Aumenta o bass de uma música_
║├► ${prefix}earrape
║│_Deixa o áudio estourado_
║╰╼╾╼╾╼╾╼╾╼╾╼╾╼╾
╚═════ ≪ •❈• ≫ ═════╝

▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄
╔════ 🏖 IMAGEM 🏖
║╭╼╾╼╾╼╾╼╾╼╾╼╾╼╾
║├► ${prefix}gtav (Foto)
║│_Cria um banner do GTA V_
║├► ${prefix}wanted (Foto)
║│_Cria um banner estilo "WANTED"_
║├► ${prefix}drawing (Foto)
║│_Cria uma imagem estilo desenho_
║├► ${prefix}Img (Texto)
║│_Busca uma imagem relacionada_
║├► ${prefix}8bit (Texto)
║│_Cria uma imagem no estilo 8bit_
║├► ${prefix}lovepaper (Texto)
║│_Cria uma imagem no estilo lovepaper_
║├► ${prefix}narutobanner (Texto)
║│_Cria um banner de Naruto_
║├► ${prefix}romancetext (Texto)
║│_Cria uma imagem no estilo romancetext_
║├► ${prefix}shadowtext (Texto)
║│_Cria uma imagem no estilo shadowtext_
║├► ${prefix}tiktokeffect (Texto)
║│_Cria uma imagem no estilo Tik Tok_
║├► ${prefix}neon (Texto)
║│_Cria uma imagem no estilo neon_
║├► ${prefix}hpotter (Texto)
║│_Cria uma imagem no estilo Harry Potter_
║├► ${prefix}gaming (Texto)
║│_Cria uma imagem no estilo gaming_
║├► ${prefix}bneon (Texto)
║│_Cria uma imagem no estilo neon_
║├► ${prefix}matrix (Texto)
║│_Cria uma imagem no estilo Matrix_
║├► ${prefix}breakwall (Texto)
║│_Cria uma imagem no estilo breakwall_
║├► ${prefix}dropwater (Texto)
║│_Cria uma imagem no estilo dropwater_
║├► ${prefix}wolflogo (Texto)
║│_Cria uma imagem no estilo wolflogo_
║├► ${prefix}tfire (Texto)
║│_Cria uma imagem no estilo tfire_
║├► ${prefix}sandw (Texto)
║│_Cria uma imagem no estilo sandw_
║├► ${prefix}firofiro (Texto)
║│_Cria uma imagem no estilo free fire_
║├► ${prefix}text3d (Texto)
║│_Cria uma imagem no estilo text3d_
║├► ${prefix}text3d2 (Texto)
║│_Cria uma imagem no estilo text3d2_
║├► ${prefix}phlogo (Texto)
║│_Cria uma imagem no estilo PornHub_
║├► ${prefix}bpmek (Texto)
║│_Cria uma imagem no estilo BlackPmek_
║├► ${prefix}folhas (Texto)
║│_Cria uma imagem com texto entre folhas_
║├► ${prefix}tlight (Texto)
║│_Cria uma imagem no estilo tlight_
║├► ${prefix}sparkling (Texto)
║│_Cria uma imagem no estilo sparkling_
║├► ${prefix}neve (Texto)
║│_Cria uma imagem com texto na neve_
║├► ${prefix}crismes (Texto)
║│_Cria uma imagem no estilo crismes_
║├► ${prefix}retro (Texto)
║│_Cria uma imagem no estilo retro_
║├► ${prefix}watercolor
║│_Cria uma imagem no estilo watercolor_
║├► ${prefix}pubglogo (Texto)
║│_Cria uma imagem no estilo pubg_
║├► ${prefix}bf4 (Texto)
║│_Cria uma imagem no estilo bf4_
║├► ${prefix}cslogo (Texto)
║│_Cria uma imagem no estilo CS_
║├► ${prefix}lithgtext (Texto)
║│_Cria uma imagem no estilo lithgtext_
║├► ${prefix}silktext (Texto)
║│_Cria uma imagem no estilo silktext_
║├► ${prefix}flametext (Texto)
║│_Cria uma imagem no estilo flametext_
║├► ${prefix}crosslogo (Texto)
║│_Cria uma imagem no estilo crosslogo_
║├► ${prefix}glowtext (Texto)
║│_Cria uma imagem no estilo glowtext_
║├► ${prefix}marvellogo (Texto)
║│_Cria uma imagem no estilo marvellogo_
║├► ${prefix}vingador (Texto)
║│_Cria uma imagem no estilo vingador_
║├► ${prefix}halloween (Texto)
║│_Cria uma imagem no estilo halloween_
║├► ${prefix}lol (Texto)
║│_Cria uma imagem no estilo LOL_
║├► ${prefix}hacker (Texto)
║│_Cria uma imagem no estilo hacker_
║╰╼╾╼╾╼╾╼╾╼╾╼╾╼╾
╚═════ ≪ •❈• ≫ ═════╝

▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄
╔════ 🎲 DIVERSÃO 🎲
║╭╼╾╼╾╼╾╼╾╼╾╼╾╼╾
║├► ${prefix}shitpost
║│_Imagem aleatória shitpost br_
║├► ${prefix}nomeninja (texto)
║│_Cria um nome ninja_
║├► ${prefix}tagme
║│_Te menciona_
║├► ${prefix}conta
║│_Cria uma conta matemática simples_
║├► ${prefix}dado
║│_Sticker de dado aleatório_
║├► ${prefix}ppt (✊pedra, 🤚papel ou ✌tesoura)
║│_Jogue pedra, papel e tesoura com o bot_
║├► ${prefix}sn
║│_Lhe diz sim ou não para uma pergunta_
║├► ${prefix}gado
║│_Lhe diz seu nível de gado_
║├► ${prefix}chance
║│_Lhe diz a chance de algo_
║├► ${prefix}pau
║│_Lhe diz o tamanho do seu brinquedinho_
║├► ${prefix}gay
║│_Lhe diz o quanto gay você é_
║├► ${prefix}slot
║│_Caça níqueis sem premiação algumakkk_
║├► ${prefix}caracoroa
║│_Caracoroa_
║├► ${prefix}level
║│_Mostra seu level atual_
║├► ${prefix}roleta
║│_Roleta russa_
║├► ${prefix}amongus
║│_"Expulsa" alguém da nave_
║╰╼╾╼╾╼╾╼╾╼╾╼╾╼╾
╚═════ ≪ •❈• ≫ ═════╝

▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄
╔════ 💮 ANIME 💮
║╭╼╾╼╾╼╾╼╾╼╾╼╾╼╾
║├► ${prefix}anime
║│_Imagem de anime aleatória_
║├► ${prefix}loli
║│_Imagem de loli aleatória_
║├► ${prefix}neko
║│_Imagem de neko aleatória_
║├► ${prefix}nekonime
║│_Imagem de nekos_
║├► ${prefix}randomloli
║│_Loli aleatória_
║├► ${prefix}nezuko
║│_Imagem aleatória da Nezuko_
║├► ${prefix}shinobu
║│_Imagem aleatória da Shinobu_
║├► ${prefix}kanna
║│_Imagem aleatória da Kanna_
║╰╼╾╼╾╼╾╼╾╼╾╼╾╼╾
╚═════ ≪ •❈• ≫ ═════╝

▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄
╔════ 🔧 FERRAMENTAS 🔧
║╭╼╾╼╾╼╾╼╾╼╾╼╾╼╾
║├► ${prefix}st 
║│_Cria um sticker em 512x512_
║├► ${prefix}sticker
║│_Cria um sticker_
║├► ${prefix}triggered
║│_Cria um sticker no estilo triggered_
║├► ${prefix}wasted
║│_Cria um sticker no estilo wasted_
║├► ${prefix}toimg
║│_Converte sticker em imagem_
║├► ${prefix}tomp3
║│_Converte vídeo em áudio_
║├► ${prefix}play (título)
║│_Baixa o áudio de um vídeo no YouTube_
║├► ${prefix}tts (língua) (texto)
║│_Texto para áudio(voz do google)_
║├► ${prefix}timer (tempo)
║│_Um timer_
║├► ${prefix}wame
║│_Mostra seu link wa.me_
║├► ${prefix}ocr
║│_Captura o texto de uma imagem_
║├► ${prefix}cep (cep)
║│_Lista algumas informações do cep_
║├► ${prefix}cartão 
║│_Gera uma cartão de crédito fake_
║├► ${prefix}contar
║│_Conta a quantidade de letras_
║├► ${prefix}clima
║│_Mostra o clima atual_
║╰╼╾╼╾╼╾╼╾╼╾╼╾╼╾
╚═════ ≪ •❈• ≫ ═════╝

▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄
╔════ 📲 DOWNLOADER 📲
║╭╼╾╼╾╼╾╼╾╼╾╼╾╼╾
║├► ${prefix}ytmp3 (link)
║│_Baixa audio do youtube_
║├► ${prefix}ytmp4 (link)
║│_Baixa video do youtube_
║╰╼╾╼╾╼╾╼╾╼╾╼╾╼╾
╚═════ ≪ •❈• ≫ ═════╝

▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄
╔════ 🕴 CRIADOR 🕴
║╭╼╾╼╾╼╾╼╾╼╾╼╾╼╾
║├► ${prefix}clone
║│_Copia a foto de perfil do alvo_
║├► ${prefix}block
║│_Bloqueia o alvo_
║├► ${prefix}unblock
║│_Remove o block do alvo_
║├► ${prefix}blocklist
║│_Lista dos usuários bloqueados_
║╰╼╾╼╾╼╾╼╾╼╾╼╾╼╾
╚═════ ≪ •❈• ≫ ═════╝`,
contextInfo: {mentionedJid: [sender]}}
//costum(Menu, text, tescuk, cr)
tiringa.sendMessage(from, Menu, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "Tiringa-BOT v12.4", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('teste/bot.jpg')}}}})
if(useLevel == undefined && useXp == undefined){
reply('Informações com "undefined" indicam que você ainda não se registrou \nUse o comando =registrar')
}
break
/*
┏────────────⊱
║  ── 🔰 MENUS 🔰 ──
║
┣━━━━━ ★ ━━━━━༺
║──🎲 DIVERSÃO 🎲──
║├► ${prefix}mrate
┣━━━━━ ★ ━━━━━༺
║  ── 🎥  MÍDIA 🎥──
║├► ${prefix}midia
┣━━━━━ ★ ━━━━━༺
║ ── 🏖 IMAGEM 🏖  ──
║├► ${prefix}mimage
┣━━━━━ ★ ━━━━━༺
║ ──   👥 GRUPO 👥   ──
║├► ${prefix}menugrupo
┗━━━━━ ★ ━━━━━༺*/

//_GIT DO BOT
case 'git':
if (isBanned) return 
msgFilter.addFilter(from)
tiringa.sendMessage(from, `https://github.com/italuH/Tiringa-BOT` , text, {quoted: mek})
break

case 'clima':
case 'tempo':
anu = await getBuffer(`https://api.apiflash.com/v1/urltoimage?access_key=57fcd6384cff4e529b9ca76089f05992&url=https://pt.wttr.in/${args[0]}`)
tiringa.sendMessage(from, anu, image, {quoted: mek})
break

case 'ganteng':
					 
					membr = []
					const nus = groupMembers
					const msl = groupMembers
					const siapss = nus[Math.floor(Math.random() * nus.length)]
					const sipss = pushname2[Math.floor(Math.random() * msl.length)]
					teks = `Yang paling Ganteng disini Adalah : @${siapss.jid.split('@')[0]}`
					membr.push(siapss.jid)
					mentions(teks, membr, true)
					tiringa.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break

case 'macumba':
pedido = body.slice(8)
buf = fs.readFileSync(`./teste/macu.mp4`)
tiringa.sendMessage(from, buf, video, {quoted: mek})
break

case 'ban':
if (!isOwner) return reply(mess.only.ownerB)
addBan(body.slice(4))
tiringa.sendMessage(from, `você foi banido ${body.slice(4)}@c.us`, text)
break

case 'unban':
if (!isOwner) return reply(mess.only.ownerB)
addBanUser (`${body.slice(4)}@c.us`, "remove")
tiringa.sendMessage(from, `você foi banido ${body.slice(4)}@c.us`, text)
break

case 'block':
				 tiringa.updatePresence(from, Presence.composing) 
				 tiringa.chatRead (from)
					if (!isGroup) return reply(mess.only.group)
					
					tiringa.blockUser (`${body.slice(7)}@c.us`, "add")
					tiringa.sendMessage(from, `perintah Diterima, memblokir ${body.slice(7)}@c.us`, text)
					tiringa.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
                    case 'unblock':
					if (!isGroup) return reply(mess.only.group)
					
				    tiringa.blockUser (`${body.slice(9)}@c.us`, "remove")
					tiringa.sendMessage(from, `Perintah Diterima, membuka ${body.slice(9)}@c.us`, text)
					tiringa.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break  

case 'jadian':
if (!isGroup) return reply(from, 'este comando só pode ser usado dentro do grupo', id)
const up = groupMembers
const aku = up[Math.floor(Math.random() * up.length)];
const kamu = up[Math.floor(Math.random() * up.length)];
const sapa = `teste... @${(/[@c.us]/g, '')} (💘) @${(/[@c.us]/g, '')} teste`
tiringa.sendMessage(from, sapa, {quoted: mek})
break

case 'hi':
if (isBanned) return reply('Você está banido')
break

case 'boc':
if (!isOwner) return reply(mess.only.ownerB)
const horatt = moment.tz('America/Sao_Paulo').format('HH:mm')
			const horaAtual = `${horatt}`
			if (/*horaAtual == '08:42' && */ammOff == "off" && isGroup) {
				const aMimirMp3 = fs.readFileSync('./teste/acorda.mp3')
				const aMimirSt = fs.readFileSync('./teste/sonic.webp')
				for (let _ of groupMembers) {
				tiringa.sendMessage(_.jid, aMimirMp3, MessageType.audio, {mimetype: 'audio/mp4', ptt:true})
				tiringa.sendMessage(_.jid, aMimirSt, sticker)
				}
				ammOff = "on"
			} else if (/*horaAtual != '08:42' && */ammOff == "on") {
				ammOff = "off"
			}
break
//_ENVIA OS ARQUIVOS .JSON By: Resen 
case 'jsonfiles':
						if (!isOwner) return reply(mess.only.ownerB)
						const daftarfile = fs.readFileSync('./database/json/daftar.json')
						tiringa.sendMessage(from, daftarfile, document, {mimetype: 'json', filename: 'daftar.json'})
						const diariofile = fs.readFileSync('./database/json/diario.json')
						tiringa.sendMessage(from, diariofile, document, {mimetype: 'json', filename: 'diario.json'})
						const levelfile = fs.readFileSync('./database/json/level.json')
						tiringa.sendMessage(from, levelfile, document, {mimetype: 'json', filename: 'level.json'})
						const levelingfile = fs.readFileSync('./database/json/leveling.json')
						tiringa.sendMessage(from, levelingfile, document, {mimetype: 'json', filename: 'leveling.json'})
						const nsfwfile = fs.readFileSync('./database/json/nsfw.json')
						tiringa.sendMessage(from, nsfwfile, document, {mimetype: 'json', filename: 'nsfw.json'})
						const simifile = fs.readFileSync('./database/json/simi.json')
						tiringa.sendMessage(from, simifile, document, {mimetype: 'json', filename: 'simi.json'})
						const tictactoefile = fs.readFileSync('./database/ttt/tictactoe.json')
						tiringa.sendMessage(from, tictactoefile, document, {mimetype: 'json', filename: 'tictactoe.json'})
						const userfile = fs.readFileSync('./database/json/user.json')
						tiringa.sendMessage(from, userfile, document, {mimetype: 'json', filename: 'user.json'})
						const welkomfile = fs.readFileSync('./database/json/welkom.json')
						tiringa.sendMessage(from, welkomfile, document, { mimetype: 'json', filename: 'welkom.json'})
					break

case 'premium':
				    if (!isOwner) return reply(ind.ownerb())
				    premm = body.slice(9)
				    prem.push(`${premm}@s.whatsapp.net`)
				    fs.writeFileSync('./database/pengguna/premium.json', JSON.stringify(prem))
				    reply(`Berhasil menjadi premium wa.me/${premm} `)
				    break

		case 'unpremium':
				    if (!isOwner) return reply(ind.ownerb())
				    premm = body.slice(11)
				    prem.splice(`${premm}@s.whatsapp.net`, 1)
				    fs.writeFileSync('./database/pengguna/premium.json', JSON.stringify(prem))
				    reply(`Nomor sudah berakhir menjadi premium wa.me/${premm} `)
				    break

case 'tebakgambar':  //Case by nayla
                    if (!isRegistered) return reply( ind.noregis())
				    
                    anu = await fetchJson(`https://videfikri.com/api/tebakgambar/`)
                    anu1 = await getBuffer(anu.result.soal_gbr)
                    anu2 = `► *JAWABAN* : ${anu.result.jawaban}`
                    setTimeout( () => {
                    ara.sendMessage(from, anu1, image,{caption: 'Jawab kak.... 60 detik cukup kan? cukup lah.. masa ga cukup? kalo gabisa mending pulang!', quoted: mek})
                    }, 1)
                    setTimeout( () => {
                    costum('50 DETIK LAGI', text)
                    }, 10000)                                                                                                                                   
                    setTimeout( () => {
                    costum('40 DETIK LAGI', text)
                    }, 20000)    
                    setTimeout( () => {
                    costum('30 DETIK LAGI', text)
                    }, 30000)    
                    setTimeout( () => {
                    costum('20 DETIK LAGI', text)
                    }, 40000)                                       
                    setTimeout( () => {
                    costum('10 DETIK LAGI', text)
                    }, 50000)                                                                                                                                                     
                    setTimeout( () => {
                    ara.sendMessage(from, anu2, text,{quoted: mek})                   
                    }, 60000)                                                                          
				    await limitAdd(sender)
                    break          

case 'minerar':
                    if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				    if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (!isEventon) return reply(`Maaf ${pushname} event mining tidak di aktifkan oleh owner`)
					if (isOwner | isAdmin | isPremium) {
					const one = Math.ceil(Math.random() * 10000)
					addLevelingXp(sender, one)
					await reply(`Yeyen BOT kasih kamu hadiah, Yeyen BOT akan berikan sebanyak *${one}Xp* untuk kamu`)
        		    }else{
					const mining = Math.ceil(Math.random() * 10000)
					addLevelingXp(sender, mining)
					await reply(`*Selamat* ${pushname} kamu mendapatkan *${mining}Xp* dari Yeyen Bot`)
					}
					await limitAdd(sender)
					break

case 'addxp':
if (!isGroup) return reply(mess.only.group)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `Foi adicionado ${args[1]} em xp para @${mentioned[0].split('@')[0]}`
mentions(`${susp}`, mentioned, true)
addLevelingXp(pru, Number(args[1]))                     
break

case 'testt':
sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms));
}
cbuff = `djsjsj`
tiringa.sendMessage(from, cbuff, image, {quoted: freply, caption: `Silahkan jawab soal berikut dengan benar\nwaktu: 30 detik`})
reply('30 segs')
sleep(30000)
reply('20 segs')
sleep(20000)
reply('10 segs')
sleep(10000)
reply('5 segs')
sleep(5000)
reply('3 segs')
sleep(3000)
reply('o tempo acabou')
break

case 'timer':
				if (!isUser) return reply(mess.only.daftarB)
				if (args[1]=="segundo") {var timer = args[0]+"000"
				} else if (args[1]=="minuto") {var timer = args[0]+"0000"
				} else if (args[1]=="hora") {var timer = args[0]+"00000"
				} else {return reply("*Escolher:*\nsegundo\nminuto\nhora\n\nExemplo: .timer 30 segundo")}
				setTimeout( () => {
				reply("O tempo acabou")
				}, timer)
				break

case 'ttp':
msgFilter.isFiltered(from)
if (args.length < 1) return reply(`Use dessa forma:\nComando: ${prefix}ttp Toin gado`)
attp1 = body.slice(4).trim()
attp2 = await getBuffer(encodeURIComponent`https://api.xteam.xyz/attp?file&text=${attp1}`)
tiringa.sendMessage(from, attp2, sticker, {quoted: mek})
break

case 'simi':
msgFilter.isFiltered(from)
ffffg = body.slice(5)
if (args.length == 0) return reply( 'Converse comigo...😁 \n(evite usar acentos)')
sami = await fetchJson(`https://simsumi.herokuapp.com/api?text=${ffffg}&lang=pt`)
fala = `${sami.success}🐥`
reply(fala)
break

case 'pão':
if (isOwner) return reply('Oi Italu')
else {
reply('Oi membro comum')
}
break 

case 'testens':
anu = await axios.get(`https://nekos.life/api/v2/img/pussy_jpg`)
options = {
  url: `${anu.data.url}`,
  dest: '/teste/photo.jpg'      // will be saved to /path/to/dest/photo.jpg
}
feg = download.image(options)
  .then(({ filename }) => {
    console.log('Saved to', filename)  // saved to /path/to/dest/photo.jpg
  })
  .catch((err) => console.error(err))
tiringa.sendMessage(from, feg, MessageType.image)
break

//_LEVEL ATUAL
case 'level':
msgFilter.isFiltered(from)
if (isBanned) return reply(mess.erro.ban)   
if (!isGroup) return reply(mess.only.group)
if (!isLevelingOn) return reply(mess.levelnoton)
const userLevel = getLevelingLevel(sender)
const userXp = getLevelingXp(sender)
const userTime = getRegisterTime(sender) 
if (userLevel === undefined && userXp === undefined) return reply(levelnol)
const requiredXp = 5 * Math.pow(userLevel, 2) + 50 * userLevel + 100
levela =
`┏━━━♡ *LEVEL* ♡━━━┓
║╭───────────
║│‣ Nome: @${sender.split("@")[0]}
║│
║│‣ XP: ${userXp}/${requiredXp}
║│
║│‣ Level: ${userLevel}
║│
║│‣ Patente: ${patt}
║╰───────────
┗━━━━━━━━━━━━┛`     
tiringa.sendMessage(from, levela, text, {quoted: mek, contextInfo: {mentionedJid: [sender]}})
break

//_ENVIA O VCARD
case 'italu':
const sentMsg  = await tiringa.sendMessage(from, {displayname: "Italu🧙‍♂️", vcard: vcard}, MessageType.contact)
break
                    case 'leaderboard':
				case 'lb':
				let userh = _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
                let leaderboardlvl = '-----[ COLOCAÇÕES ]----\n\n'
                let nom = 0
                try {
                    for (let i = 0; i < 1; i++) {
                        nom++
                        leaderboardlvl += `[${nom}] @${userh[i].id.replace('@s.whatsapp.net', '')}\n┗⊱XP: ${userh[i].xp} Level: ${userh[i].level}\n┗⊱Patente: ${patt}\n`            
                       
                     }
                    tiringa.sendMessage(from, leaderboardlvl, text, {quoted: mek})
                } catch (err) {
                    console.error(err)
                    await reply(`pelo menos 10 usuários para poder acessar o banco de dados`)
                }
				break
//const gy =['0','5','10','15','20','25','30','35','40','45','50','55','60','65','70','75','80','85','90','95','100']
//tiringa.groupRemove(from, mentioned)
//tiringa.groupAdd(from, [num])
				  case 'amongus':
				msgFilter.isFiltered(from)
					if (!isGroup) return reply(mess.only.group)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
						pro = '.\n'
						for (let _ of mentioned) {
							pro += `@${_.split('@')[0]}\n`
						}
                       sus = 
`.      　。　　　　•　    　ﾟ　　。
　　.　　　.　　　  　　.　　　　　。　　   。　.
　.　　      。　        ඞ   。　    .    •
•            @${mentioned[0].split('@')[0]} was E j e c t e d
                  1 impostor remain   。　.
　 　　。　　 　　　　ﾟ　　　.　      　　　.
,　　　　.                  .`
                      //  tiringa.groupRemove(from, mentioned)
						mentions(`${sus}`, mentioned, true)
					break

case 'abraço':
msgFilter.isFiltered(from)
if (!isGroup) return reply(mess.only.group)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pro = '.\n'
for (let _ of mentioned) {
pro += `@${_.split('@')[0]}\n`
}
yhb = `Que fofo... @${sender.split("@")[0]} deu um abraço apertado em @${mentioned[0].split('@')[0]}`
mentions(yhb, mentioned, true)
break

case 'shipp':
msgFilter.isFiltered(from)
if (!isGroup) return reply(mess.only.group)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pro = '.\n'
for (let _ of mentioned) {
pro += `@${_.split('@')[0]}\n`
}
porc = `${Math.floor(Math.random() * 100)}`
yhb =  `@${mentioned[0].split('@')[0]} tem uma chance de ${porc}% de namorar com @${mentioned[1].split('@')[0]}`,
mentions(`${yhb}`, mentioned, true, {quoted: mek})
break

//if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
//var group = await tiringa.groupMetadata(from)
case 'testime':
					setTimeout( () => {
					tiringa.sendMessage(from, 'O tempo acabou', text) 
					}, 10000)
					setTimeout( () => {
					tiringa.sendMessage(from, '5 segundos restantes', text)
					}, 5000)
					setTimeout( () => {
					tiringa.sendMessage(from, '10 segundos restantes', text)
					}, 0)
					break

case 'kill':
if (!isOwner) return reply(mess.only.ownerB)
                   pm2 = `ESC C`
                   reply('A mimir...')
	               exec(pm2, (err, stdout) => {
		           if(err) return tiringa.sendMessage(from, "Comando inexistente", text, {quoted: mek})

		           if (stdout) {
			       tiringa.sendMessage(from, stdout, text, {quoted: mek})
} 
                   })
                  break

case 'kill2':
if (!isOwner) return reply(mess.only.ownerB)
                   pm2 = `pm2 kill`
                   reply('A mimir...')
	               exec(pm2, (err, stdout) => {
		           if(err) return tiringa.sendMessage(from, "Comando inexistente", text, {quoted: mek})

		           if (stdout) {
			       tiringa.sendMessage(from, stdout, text, {quoted: mek})
} 
                   })
                  break

case 'reiniciar':
if (!isOwner) return reply(mess.only.ownerB)
                   npm = `npm start`
                   reply('Reiniciando em alguns segundos...')       
	               exec(npm, (err, stdout) => {
		           if(err) return tiringa.sendMessage(from, "Comando inexistente", text, {quoted: mek})

		           if (stdout) {
			       tiringa.sendMessage(from, stdout, text, {quoted: mek})
} 
                   })
                  break

case 'exe':
	              tiringa.updatePresence(from, Presence.composing) 
	              if (!isOwner) return reply(mess.only.ownerB)
	               const cmd = body.slice(4)
	               exec(cmd, (err, stdout) => {
		           if(err) return tiringa.sendMessage(from, "Comando inexistente", text, {quoted: mek})

		           if (stdout) {
			       tiringa.sendMessage(from, stdout, text, {quoted: mek})

		           }
	           })
                  break

//_CONTADOR DE LETRAS
case 'contar':
msgFilter.isFiltered(from)
            if (args.length == 0) return reply( '0 letras, pois obviamente não há texto😀')
			const count = body.slice(8).length
            if (count === 1) {
            reply(`O texto possui ${count} letra.`)
            } else if (count > 1) {
	    reply(`O texto possui ${count} letras.`)
            }
			break

case 'linesticker': 
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu = await fetchJson(`https://api.zeks.xyz/api/linesticker?link=${args[0]}&apikey=apivinz`, {method: 'get'})
dung = (anu.sticker)
var tes2 =  dung[Math.floor(Math.random() * dung.length)];
exec(`wget ${tes2} -O ${ranp} && ffmpeg -i ${ranp} -vcodec adminwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
if (err) return reply('Error cok')
fs.unlinkSync(ranp)
buffer = fs.readFileSync(rano)
costum(buffer, sticker, tescuk, `Judul Sticker : ${anu.title}`)
fs.unlinkSync(rano)
})
break

case 'igstory': 
anu = await fetchJson(`https://api.zeks.xyz/api/igs?apikey=apivinz&username=${body.slice(9)}`, {method: 'get'})
teks = '𝗜𝗚 𝗦𝗧𝗢𝗥𝗬\n'
for (let i of anu.data) {
teks += `Username : ${anu.username}
Total story : ${anu.stories_count}
Tipe : ${i.type}
Story : ${i.url}
Swipe Up Link : ${i.swipeUpLink}\n\n𝗜𝗚 𝗦𝗧𝗢𝗥𝗬\n`
}
reply(teks.trim())
break

case 'mediafire': 
anu = await fetchJson(`https://api.zeks.xyz/api/mediafire?apikey=apivinz&url=${args[0]}`, {method: 'get'})
buffer = await getBuffer(anu.download)
teks = `Nama File : ${anu.name_file}
File Size : ${anu.file_size}
Tanggal Upload : ${anu.upload_date}
File Tipe : ${anu.file_type}
Link Download : ${anu.download}
Deskripsi : ${anu.description}`
tiringa.sendMessage(from, teks, text, {quoted: mek})
costum(buffer, MessageType.document)
break

case 'playstore': 
anu = await fetchJson(`https://api.zeks.xyz/api/sgplay?apikey=apivinz&q=${body.slice(11)}`, {method: 'get'})
buffer = await getBuffer(`https://i.ibb.co/znvZ20B/9b667c9d4b1b.jpg`)
tiringa.sendMessage(from, buffer, image, {quoted: mek})
teks = '𝗣𝗹𝗮𝘆 𝘀𝘁𝗼𝗿𝗲\n'
for (let i of anu.result) {
teks = `Nama Apk : ${i.title}
App ID : ${i.appid}
Developer : ${i.developer}
Price : ${i.price}
Rate : ${i.rating}
Url Apk : ${i.url}
𝗣𝗹𝗮𝘆 𝘀𝘁𝗼𝗿𝗲
`
}
reply(teks.trim())
break

case 'searchsticker': 
case 'searchstiker': 
ranp = getRandom('.png')
rano = getRandom('.webp')
anu = await fetchJson(`https://api.zeks.xyz/api/searchsticker?apikey=apivinz&q=${body.slice(14)}`, {method: 'get'})
buffer = await getBuffer(anu.thumb)
teks = `Nama Sticker : ${anu.title}`
dung = (anu.sticker)
tiringa.sendMessage(from, buffer, image, {quoted: mek, caption: teks})
var tes2 =  dung[Math.floor(Math.random() * dung.length)];
exec(`wget ${tes2} -O ${ranp} && ffmpeg -i ${ranp} -vcodec adminwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
if (err) return reply('Error cok')
fs.unlinkSync(ranp)
buffer2 = fs.readFileSync(rano)
costum(buffer2, sticker, tescuk, `Judul Sticker : ${anu.title}`)
fs.unlinkSync(rano)
})
break

case 'igstalk': 
anu = await fetchJson(`https://api.zeks.xyz/api/igstalk?apikey=apivinz&username=${body.slice(9)}`, {method: 'get'})
buffer = await getBuffer(anu.profile_pic)
teks = `Username : ${anu.username}
Fullname : ${anu.fullname}
Follower : ${anu.follower}
Following : ${anu.following}
Verified : ${anu.is_verified}
Bussiness : ${anu.is_bussiness}
Private : ${anu.is_private}
Link : https://www.instagram.com/${anu.username}
Bio : ${anu.bio}`
tiringa.sendMessage(from, buffer, image, {quoted: mek, caption: teks})
break

case 'shopee': 
anu = await fetchJson(`https://api.zeks.xyz/api/shopee?apikey=apivinz&q=${body.slice(9)}`, {method: 'get'})
buffer = await getBuffer(`https://i.ibb.co/yFZgntN/f9ab826750ea.jpg`)
teks = '𝗦𝗛𝗢𝗣𝗘𝗘\n'
for (let i of anu.data) {
teks += `Nama barang : ${i.name}
HMrG : ${i.hMrG}
Terjual : ${i.terjual}
Lokasi : ${i.location}
Cover : ${i.cover}
Stock : ${i.stock}
Informasi : ${i.information}
Url : ${i.url}
Deskripsi : ${i.desc}\n\n𝗦𝗛𝗢𝗣𝗘𝗘
`
}
tiringa.sendMessage(from, buffer, image, {quoted: mek, caption: teks.trim()})
break

case 'ytsearch': 
anu = await fetchJson(`https://api.zeks.xyz/api/yts?q=${body.slice(10)}&apikey=apivinz`, {method: 'get'})
buffer = await getBuffer(`https://i.ibb.co/XyS1DLw/cdfbdf66f07b.jpg`)
teks = '𝗬𝗼𝘂𝘁𝘂𝗯𝗲 𝗦𝗲𝗮𝗿𝗰𝗵\n'
for (let i of anu.result) {
teks += `Uploader : 
Nama Channel : ${i.uploader.username}
Url Channel : ${i.uploader.url}
Verified : ${i.uploader.verified}

Video :
Nama Video : ${i.video.title}
Url : ${i.video.url}
Durasi : ${i.video.duration}
Deskripsi : ${i.video.snippet}
Tanggal Upload : ${i.video.upload_date}
Views : ${i.video.views}\n\n𝗬𝗼𝘂𝘁𝘂𝗯𝗲 𝘀𝗲𝗮𝗿𝗰𝗵
`
}
tiringa.sendMessage(from, buffer, image, {quoted: mek, caption: teks.trim()})
break

case 'neonime': 
anu = await fetchJson(`https://api.zeks.xyz/api/neonimesearch?q=${body.slice(9)}&apikey=apivinz`, {method: 'get'})
teks = '𝗡𝗲𝗼𝗻𝗶𝗺𝗲 𝗦𝗲𝗮𝗿𝗰𝗵\n'
for (let i of anu.result) {
teks += `Nama Neonime : ${i.title}
Link : ${i.link}
Deskripsi : ${i.desc}\n\n𝗡𝗲𝗼𝗻𝗶𝗺𝗲 𝗦𝗲𝗮𝗿𝗰𝗵
`
}
reply(teks.trim())
break

case 'apkpure': 
if (isBanned) return reply(mess.erro.ban)
reply(mess.wait)
anu = await fetchJson(`https://api.zeks.xyz/api/apkpure?q=${body.slice(9)}&apikey=apivinz`, {method: 'get'})
teks = '𝗔𝗽𝗸 𝗣𝘂𝗿𝗲 𝗦𝗲𝗮𝗿𝗰𝗵\n'
for (let i of anu.result) {
teks += `Nama Apk : ${i.title}
Url : ${i.url}
Rating : ${i.rating}\n\n𝗔𝗽𝗸 𝗣𝘂𝗿𝗲 𝗦𝗲𝗮𝗿𝗰𝗵
`
}
reply(teks.trim())
break

case 'igsearch': 
if (isBanned) return reply(mess.erro.ban)
reply(mess.wait)
anu = await fetchJson(`https://api.zeks.xyz/api/iguser?apikey=apivinz&q=${body.slice(8)}`, {method: 'get'})
teks = '𝗜𝗻𝘀𝘁𝗮𝗴𝗿𝗮𝗺 𝗦𝗲𝗮𝗿𝗰𝗵\n'
for (let i of anu.result) {
teks += `Username : ${i.username}
Private : ${i.private_user}
Verified : ${i.verified_user}
Link : https://www.instagram.com/${i.username}\n\n𝗜𝗻𝘀𝘁??𝗴𝗿𝗮𝗺 𝗦𝗲𝗮𝗿𝗰𝗵
`
}
reply(teks.trim())
break

case 'happymod': 
if (isBanned) return reply(mess.erro.ban)
reply(mess.wait)
anu = await fetchJson(`https://api.zeks.xyz/api/happymod?apikey=apivinz&q=${body.slice(10)}`, {method: 'get'})
teks = '𝗛𝗮𝗽𝗽𝘆 𝗺𝗼𝗱 𝗦𝗲𝗮𝗿𝗰𝗵\n'
for (let i of anu.result) {
teks += `Nama Apk : ${i.title}
Rating : ${i.rating}
Url : ${i.url}\n\n𝗛𝗮𝗽𝗽𝘆 𝗺𝗼𝗱 𝗦𝗲𝗮𝗿𝗰𝗵
`
}
reply(teks.trim())
break

case 'slapimage': 
try {
profil = await tiringa.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
} catch {
profil = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
buffer = await getBuffer(`https://api.zeks.xyz/api/slap?apikey=apivinz&img1=${profil}&img2=https://img.tek.id/img/content/2019/06/01/16833/whatsapp-tak-lagi-bisa-simpan-foto-profil-C7fSwKVQ2i.jpg`)
tiringa.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih'})
break
	
             case 'waifukawai':
				    try {
					reply(mess.wait)
						axios.get(`https://nekos.life/api/v2/img/kemonomimi`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
					tiringa.sendMessage(from, buf, image, {quoted: mek,caption: "KAWAII!!"})
					})})
					} catch (e) {
					console.log(`Error :`, color(e,'red'))
						reply('тЭМ *ERROR* тЭМ')
					}
					break
			case 'kemonomimi':
				    try {
	   			reply(mess.wait)
						axios.get(`https://nekos.life/api/v2/img/kemonomimi`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
					tiringa.sendMessage(from, buf, image, {quoted: mek,caption: "ONII CHAN BAKA!!"})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('тЭМ *ERROR* тЭМ')
					}
					break
		case 'kuni':
				    try {
					
					reply(mess.wait)
						axios.get(`https://nekos.life/api/v2/img/kuni`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
					tiringa.sendMessage(from, buf, image, {quoted: mek,caption: "*INGAT ADA TUHAN*!!"})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('тЭМ *ERROR* тЭМ')
					}
					break 
				case 'nsfwloli3':
				   
				if (isBanned) return reply(mess.erro.ban)
				
				
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=neko loli`, {method: 'get'})
					naru = JSON.parse(JSON.stringify(anu));
					to =  naru[Math.floor(Math.random() * naru.length)];
					nye = await getBuffer(to)
					tiringa.sendMessage(from, nye, image, { caption: 'kyaa one chan!!', quoted: mek })
					await limitAdd(sender)
					break 
					
					case 'reversevid':
            if (!isQuotedVideo) return reply('Reply videonya!')
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await tiringa.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return reply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            tiringa.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
                case 'fastvid':
            if (!isQuotedVideo) return reply('Reply videonya!')
            reply(ind.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await tiringa.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return reply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            tiringa.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case 'slowvid':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            reply(ind.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await tiringa.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            tiringa.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
            
   case 'siapa':
					
					membr = []
					const mett = groupMembers
					const msdd = groupMembers
					const siapssa = mett[Math.floor(Math.random() * mett.length)]
					const sipssd = pushname[Math.floor(Math.random() * msdd.length)]
					bbebn = `${body.slice(7)} Adalah : @${siapssa.jid.split('@')[0]}`
					membr.push(siapssa.jid)
					mentions(bbebn, membr, true)
					break         
            
       case 'beban':
					membr = []
					const met = groupMembers
					const msd = groupMembers
					const siapsa = met[Math.floor(Math.random() * met.length)]
					const sipsd = pushname[Math.floor(Math.random() * msd.length)]
					bebn = `Yang paling Beban disini Adalah : @${siapsa.jid.split('@')[0]}`
					membr.push(siapsa.jid)
					mentions(bebn, membr, true)
            
case 'togif':
				case 'tomedia':
                                        if (!isQuotedSticker) return reply('Reply stiker nya')
                                        if (mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
                                        const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        const media = await tiringa.downloadAndSaveMediaMessage(encmedia)
                                        const upload = await uploadimg(media, Date.now() + '.webp')
                                        console.log(upload)
                                        const rume = await axios.get(`http://nzcha-apii.herokuapp.com/webp-to-mp4?url=${upload.result.image}`)
                                        const buff = await getBuffer(rume.data.result)
                                        console.log(rume.data)
                                        tiringa.sendMessage(from, buff, video, { mimetype: Mimetype.gif, caption: 'Nih', quoted: mek})
                                }
                                break
					
		case 'neko2':
				   try {
				reply(mess.wait)	
					axios.get(`https://nekos.life/api/v2/img/meow`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
				tiringa.sendMessage(from, buf, image, {quoted: mek,caption: "NYANG!!"})
					})})
					} catch (e) {
				console.log(`Error :`, color(e,'red'))
						reply('тЭМ *ERROR* тЭМ')
					}
					break
					
      case 'holo':
				    try {
					reply(mess.wait)
						axios.get(`https://nekos.life/api/v2/img/holo`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
					tiringa.sendMessage(from, buf, image, {quoted: mek,caption: "NIH OM!!"})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('тЭМ *ERROR* тЭМ')
					}
					break

                 case 'ttp2':
				
				if (isBanned) return reply(mess.erro.ban)
			
				if (args.length < 1) return reply(`_Teksnya Mana Boss_\n*Contoh ${prefix}ttp2 alok lah*`)
				nan = await getBuffer(`https://api.xteam.xyz/ttp?file&text=${body.slice(6)}`)
				tiringa.sendMessage(from, nan, sticker, {quoted: mek})
				break
				
case 'ttp3':
if (isBanned) return reply(mess.erro.ban)
if (args.length < 1) return reply(`_Teksnya Mana Boss_\n*Contoh ${prefix}ttp3 arnando ngegay sama arya*`)
nan = await getBuffer(`https://api.xteam.xyz/ttp?file&text=${agrs}`)
tiringa.sendMessage(from, nan, sticker, {quoted: mek})
break
				
case 'ttp4':
if (isBanned) return reply(mess.erro.ban)
if (args.length < 1) return reply(`_Teksnya Mana Boss_\n*Contoh ${prefix}ttp4 Riu ngegay sama sofyan*`)
nan = await getBuffer(`https://api.xteam.xyz/ttp?file&text=${body.slice(6)}`)
tiringa.sendMessage(from, nan, sticker, {quoted: mek})
break
				
 case 'attp':
if (isBanned) return reply(mess.erro.ban)
if (args.length < 1) return reply(`_Teksnya Mana Boss_\n*Contoh ${prefix}attp Wajahku Ganteng*`)
attp2 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${body.slice(5)}`)
tiringa.sendMessage(from, attp2, sticker, {quoted: mek})
break
				
case 'addprem':
if (!isOwner) return reply(ind.ownerb())
addp = body.slice(10)
premium.push(`${addp}@s.whatsapp.net`)
fs.writeFileSync('./owner/user/premium.json', JSON.stringify(premium))
reply(`Berhasil Menambahkan wa.me/${addp} Ke Daftar Premium`)
break

case 'dellprem':
if (!isOwner) return reply(ind.ownerb())
delp = body.slice(11)
premium.splice(`${delp}@s.whatsapp.net`, 1)
fs.writeFileSync('./owner/user/premium.json', JSON.stringify(premium))
reply(`Berhasil Menghapus wa.me/${delp} Dari Daftar Premium`)
break					
					
case 'ban':
if (!isOwner) return reply(ind.ownerb())
bnnd = body.slice(6)
ban.push(`${bnnd}@s.whatsapp.net`)
fs.writeFileSync('./datauser/banned.json', JSON.stringify(ban))
reply(`Número wa.me/${bnnd} banido`)
break

case 'unban':
if (!isOwner) return reply(ind.ownerb())
bnnd = body.slice(8)
ban.splice(`${bnnd}@s.whatsapp.net`, 1)
fs.writeFileSync('./datauser/banned.json', JSON.stringify(ban))
reply(`Número wa.me/${bnnd} desbanido!`)
break
					
					
case 'premiumlist':
tiringa.updatePresence(from, Presence.composing) 
teks = `╭─「 *JUMLAH USER PREMIUM* 」\n`
no = 0
for (let prem of premium) {
no += 1
teks += `│「${no.toString()}」 @${prem.split('@')[0]}\n`
}
teks += `│ Jumlah User Premium : ${premium.length}\n╰──────「 *REM BOT -X* 」`
tiringa.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": premium}})
break
					
					
case 'blub':
if (!isQuotedAudio) return reply('Reply audio nya om')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await tiringa.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
tiringa.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break

//_DEIXA O AUDIO RÁPIDO
case 'fasst':
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await tiringa.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3/m4a/ptt')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.4,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('NGEN(uh)')
hah = fs.readFileSync(ran)
tiringa.sendMessage(from, hah, audio, {mimetype: 'audio/mp3/ptt/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break

//_NULIS
case 'nulis':
if (args.length < 1) return reply(`Use o comando da seguinte forma: ${prefix}nulis (texto)`)
teks = body.slice(7)
reply(mess.wait)
anu = await fetchJson(`https://tools.zone-xsec.com/api/nulis.php?q=${teks}`, {method: 'get'})
if (anu.error) return reply(anu.error)
buff = await getBuffer(anu.image)
tiringa.sendMessage(from, buff, image, {quoted: mek, caption: '✏📕'})
break

//_TESTES
case 'bokep':
tiringa.updatePresence(from, Presence.composing) 
if (isBanned) return reply(mess.erro.ban)
data = fs.readFileSync('./src/18.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
randBokep = await getBuffer(randKey.image)
reply('JANGAN COMLY MULU BRO')
randTeks = randKey.teks
tiringa.sendMessage(from, randBokep, image, {quoted: mek, caption: randTeks})
break

//_INFORMAÇÕES DO USUÁRIO
case 'infome':
case 'perfil':
msgFilter.isFiltered(from)
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
  ‣ Patente: ${patt}
  ‣ link: wa.me/${sender.split("@")[0]}
  ‣ Código: ${serh}
`
  its = await getBuffer (ppimg)
  tiringa.sendMessage(from, its, image, {quoted: mek, caption: pf, contextInfo: {mentionedJid: [sender]}})
  if(usLevel == undefined && usXp == undefined && usTime == undefined && serh == undefined) {
  reply('Informações com "undefined" indicam que você ainda não se registrou \nUse o comando =registrar')
  }
  break

//_ENVIA O WA.ME DO CRIADOR
case 'criador':
case 'owner':
msgFilter.isFiltered(from)
italuft = fs.readFileSync('./teste/gojo.jpg')
tiringa.sendMessage(from, italuft, image, {quoted: mek, caption: `☆━✪🕴  ∴₰Ⱦꪋℓo፝֯֟ ߷  🕴✪━☆\n\nChat do baiano: wa.me/+5574999510904`})
break

//_EFEITO SLOW PARA AUDIO
case 'slow':
msgFilter.isFiltered(from)
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

//_EFEITO ESQUILO PARA AUDIO
case 'esquilo':
msgFilter.isFiltered(from)
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

//_EFDEITO GIGANTE PARA AUDIO	
case 'gemuk':
msgFilter.isFiltered(from)
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

//_AUMENTA O BASS DE UM AUDIO	
case 'bass':                 
msgFilter.isFiltered(from)
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

//_DEIXA O AUDIO ESTOURADO		
case 'earrape':         
case 'estourar':       
msgFilter.isFiltered(from)
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

//_INFORMAÇÕES DO BOT		
case 'info':
msgFilter.isFiltered(from)
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

//_INFORMAÇÕES DO GRUPO
case 'infogp':
case 'infogc':
case 'groupinfo':
case 'infogrup':
case 'grupinfo':
msgFilter.isFiltered(from)
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

//_TEMPO DE RESPOSTA DO BOT		
case 'ping':
case 'speed':
msgFilter.isFiltered(from)
const timestamp = speed();
const latensi = speed() - timestamp
tiringa.updatePresence(from, Presence.composing)
uptime = process.uptime()
tiringa.sendMessage(from, `Pong!\nTempo de resposta: ${latensi.toFixed(4)} segundos\n`, text, {quoted: mek})
break

//_BUSCA IMAGEM NO PINTEREST		
case 'img':
case 'image':
case 'imagem':
msgFilter.isFiltered(from)
if (args.length < 1) return reply('digite o que você deseja buscar')
tiringa.updatePresence(from, Presence.composing)
reply(mess.wait)
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${args}`, {method: 'get'})
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
tiringa.sendMessage(from, pok, image, {quoted: mek, caption: `Achei isso sobre: ${args}`})
} catch {
reply(`Não econtrei nada sobre ${agrs}...`)
}
break

case 'online':
msgFilter.isFiltered(from)
        		let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
			    let online = [...Object.keys(tiringa.chats.get(ido).presences), tiringa.user.jid]
			    tiringa.sendMessage(from, 'Lista de usuários online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, text, { quoted: mek,
  			  contextInfo: { mentionedJid: online }
			    })
				break



//_NEKOS PINTEREST
case 'neko':
msgFilter.isFiltered(from)
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

//_LOLIS PINTEREST
  case 'loli':
msgFilter.isFiltered(from)
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
msgFilter.isFiltered(from)
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
  msgFilter.isFiltered(from)
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

//_PROCURA WALLPAPER NO PINTEREST
  case 'wp':
case 'wallpaper':
msgFilter.isFiltered(from)
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
msgFilter.isFiltered(from)
  if (args.length < 1) return reply('escreva seu nome')
tiringa.updatePresence(from, Presence.composing)
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
msgFilter.isFiltered(from)
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
msgFilter.isFiltered(from)
if (!q.includes('|')) return reply(`Digite da forma correta:\nComando: ${prefix}8bit texto1|texto2`)
reply(mess.waitimg)
pc = body.slice(5)
  tx1 = pc.split("|")[0];
  tx2 = pc.split("|")[1];
hehe = await getBuffer(`https://videfikri.com/api/textmaker/8bit/?text1=${tx1}&text2=${tx2}`)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
break

case 'bneon':
msgFilter.isFiltered(from)
if (args.length < 1) return reply('digite algum texto para isso')
pc = body.slice(6)
reply(mess.waitimg)
hehe = await getBuffer(`https://api.zeks.xyz/api/bneon?apikey=apivinz&text=${pc}`)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
break
//ttk
case 'luzneon':
msgFilter.isFiltered(from)
if (args.length < 1) return reply('digite algum texto para isso')
pc = body.slice(8)
reply(mess.waitimg)
hehe = await getBuffer(`https://docs-jojo.herokuapp.com/api/neon_light?text=${pc}`)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
break

case 'matrix':
msgFilter.isFiltered(from)
if (args.length < 1) return reply('digite algum texto para isso')
pc = body.slice(7)
reply(mess.waitimg)
hehe = await getBuffer(`https://api.zeks.xyz/api/matrix?apikey=apivinz&text=${pc}`)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
break

case 'breakwall':
msgFilter.isFiltered(from)
if (args.length < 1) return reply('digite algum texto para isso')
pc = body.slice(10)
reply(mess.waitimg)
hehe = await getBuffer(`https://api.zeks.xyz/api/breakwall?apikey=apivinz&text=${pc}`)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
break

case 'dropwater':

if (args.length < 1) return reply('digite algum texto para isso')
pc = body.slice(10)
reply(mess.waitimg)
hehe = await getBuffer(`https://api.zeks.xyz/api/dropwater?apikey=apivinz&text=${pc}`)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
break

case 'wolflogo':
if (args.length < 1) return reply(`Digite da forma correta:\nComando: ${prefix}wolflogo texto1|texto2`)
if (!q.includes('|')) return reply(`Digite da forma correta:\nComando: ${prefix}wolflogo texto1|texto2\nNão esqueça do: | `)
pc = body.slice(9)
  tx1 = pc.split("|")[0];
  tx2 = pc.split("|")[1];
reply(mess.waitimg)
hehe = await getBuffer(`https://api.zeks.xyz/api/wolflogo?apikey=apivinz&text1=${tx1}&text2=${tx2}`)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
break
///_photoOXY
case 'flowertext':
if (args.length < 1) return reply('digite algum texto para isso')
pc = body.slice(11)
reply(mess.waitimg)
hehe = fetchJson(`https://api.zeks.xyz/api/flowertext?text=${pc}&apikey=apivinz`)
heh = await getBuffer(hehe.result)
tiringa.sendMessage(from, heh, image, {quoted:mek})
break
///_photoOXY

case 'lovepaper':
if (args.length < 1) return reply('digite algum texto para isso')
pc = body.slice(10)
reply(mess.waitimg)
hehe = await getBuffer(`https://videfikri.com/api/textmaker/lovemsg/?text=${pc}`)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
break

case 'tfire':
if (args.length < 1) return reply('digite algum texto para isso')
pc = body.slice(6)
reply(mess.waitimg)
hehe = await getBuffer(`https://api.zeks.xyz/api/tfire?text=${pc}&apikey=apivinz`)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
break

case 'sandw':
if (args.length < 1) return reply('digite algum texto para isso')
pc = body.slice(6)
reply(mess.waitimg)
hehe = await getBuffer(`https://api.zeks.xyz/api/sandw?apikey=apivinz&text=${pc}`)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
break

case 'firofiro':
if (args.length < 1) return reply('digite algum texto para isso')
pc = body.slice(9)
reply(mess.waitimg)
hehe = await getBuffer(`https://api.zeks.xyz/api/epep?text=${pc}&apikey=apivinz`)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
break

case 'text3d2':
if (args.length < 1) return reply('digite algum texto para isso')
pc = body.slice(8)
reply(mess.waitimg)
hehe = await getBuffer(`https://api.zeks.xyz/api/text3dbox?apikey=apivinz&text=${pc}`)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
break

case 'text3d':
if (args.length < 1) return reply('digite algum texto para isso')
pc = body.slice(7)
reply(mess.waitimg)
hehe = await getBuffer(`https://api.zeks.xyz/api/text3d?text=${pc}&apikey=apivinz`)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
break

case 'phlogo':
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
if (args.length < 1) return reply('digite algum texto para isso')
pc = body.slice(6)
reply(mess.waitimg)
hehe = await getBuffer(`https://api.zeks.xyz/api/logobp?text=${pc}&apikey=apivinz`)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
break

case 'folhas':
if (args.length < 1) return reply('digite algum texto para isso')
pc = body.slice(7)
reply(mess.waitimg)
hehe = await getBuffer(`https://api.zeks.xyz/api/leavest?text=${pc}&apikey=apivinz`)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
break

case 'tlight':
if (args.length < 1) return reply('digite algum texto para isso')
pc = body.slice(7)
reply(mess.waitimg)
hehe = await getBuffer(`https://api.zeks.xyz/api/tlight?text=${pc}&apikey=apivinz`)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
break


case 'narutobanner':
if (args.length < 1) return reply('digite algum texto para isso')
pc = body.slice(14)
reply(mess.waitimg)
hehe = await getBuffer(`https://videfikri.com/api/textmaker/narutobanner/?text=${pc}`)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
break

case 'romancetext':
if (args.length < 1) return reply('digite algum texto para isso')
pc = body.slice(12)
reply(mess.waitimg)
hehe = await getBuffer(`https://videfikri.com/api/textmaker/romancetext/?text=${pc}`)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
break

case 'shadowtext':
if (args.length < 1) return reply('digite algum texto para isso')
pc = body.slice(11)
reply(mess.waitimg)
hehe = await getBuffer(`https://videfikri.com/api/textmaker/shadowtext/?text=${pc}`)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
break

case 'tiktokeffect':
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
if (args.length < 1) return reply('digite algum texto para isso')
pc = body.slice(5)
if (pc.length >= 80 ) return reply(`Máximo 80 carateres`)
reply(mess.waitimg)
hehe = await getBuffer(`https://videfikri.com/api/textmaker/glowingneon/?text=${pc}`)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
break

case 'hpotter':
if (args.length < 1) return reply('digite algum texto para isso')
pc = body.slice(8)
reply(mess.waitimg)
hehe = await getBuffer(`https://videfikri.com/api/textmaker/hpotter/?text=${pc}`)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
break

case 'gaming':
if (args.length < 1) return reply('digite algum texto para isso')
pc = body.slice(7)
reply(mess.waitimg)
hehe = await getBuffer(`https://docs-jojo.herokuapp.com/api/gaming?text=${pc}`)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
break

case 'yuri':

hehe = await getBuffer(`https://docs-jojo.herokuapp.com/api/random_yuri`)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
break

case 'cep':
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
msgFilter.isFiltered(from)
try {
hehe = await fetchJson(`https://docs-jojo.herokuapp.com/api/nekonime`)
buffer = await getBuffer(hehe.result)
tiringa.sendMessage(from, buffer, image, {quoted: mek, caption: 'nyan!'})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌ocorreu um erro❌')
}
break

case 'waifu':
msgFilter.isFiltered(from)
try {
hehe = await fetchJson(`https://docs-jojo.herokuapp.com/api/waifu`)
buffer = await getBuffer(hehe.image)
tiringa.sendMessage(from, buffer, image, {quoted: mek, caption: `${hehe.name}`})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌ocorreu um erro❌')
}
break

case 'randomloli':
msgFilter.isFiltered(from)
try {
buffer = await getBuffer(`https://docs-jojo.herokuapp.com/api/randomloli`)
tiringa.sendMessage(from, buffer, text, {quoted: mek})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌ocorreu um erro❌')
}
break

case 'sparkling':
try {  
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

case 'testeg':
hah =  await axios.get(`https://meme-api.herokuapp.com/gimme/animepussy`)
tiringa.sendMessage(from, hah.url, image, {quoted:mek})
break

case 'nezuko':
msgFilter.isFiltered(from)
try {
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
if (args.length < 1) return reply(`Digite da forma correta:\nComando: ${prefix}glowtext texto`)
pc = body.slice(9)
reply(mess.waitimg)
haha = await fetchJson(`https://api.zeks.xyz/api/glowtext?text=${pc}&apikey=apivinz`)
hehe = await getBuffer(haha.result)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
break

case 'crosslogo':
try {  
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
msgFilter.isFiltered(from)
reply(mess.wait)
hehe = await getBuffer(`http://api.lolhuman.xyz/api/random/kanna?apikey=847de7716f17a51eeba4235c`)
tiringa.sendMessage(from, hehe, text, {quoted: mek})
break

case 'shinobu':
msgFilter.isFiltered(from)
reply(mess.wait)
hehe = await getBuffer(`http://api.lolhuman.xyz/api/random/shinobu?apikey=847de7716f17a51eeba4235c`)
tiringa.sendMessage(from, hehe, text, {quoted: mek})
break

//847de7716f17a51eeba4235c
case 'nekogif':
await tiringa.sendMessage(from, { url: `http://api.lolhuman.xyz/api/random2/nsfw_neko_gif?apikey=847de7716f17a51eeba4235c`}, MessageType.video, { mimetype: Mimetype.gif, caption: "teste!" })
break

case 'gtav':
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
if (args.length < 1) return tiringa.sendMessage(from, `digite da forma correta: ${prefix}tl texto/língua`, text, {
  quoted: mek
})
var pc = body.slice(3)
nomor = pc.split("/")[0];
pesan = pc.split("/")[1];
try {
data = await fetchJson(`https://api-translate.azharimm.tk/translate?engine=google&text=${nomor}&to=${pesan}`)
hasil = `Traduzir:\n${data.data.result}`
reply(hasil)
} catch {
  reply(mess.ferr)
}
break

case 'notif':
if (!isGroupAdmins) return reply(mess.only.admin)
tiringa.updatePresence(from, Presence.composing)
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

//_ALTERA O NOME DO GRUPO
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

//_ALTERA A DESCRIÇÃO DO GRUPO
  case 'setdesk':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
tiringa.groupUpdateDescription(from, `${body.slice(9)}`)
tiringa.sendMessage(from, 'a descrição do grupo atualizada', text, {
  quoted: mek
})
break


//_TE MENCIONA
case 'tagme':
const tagme = {
  text: `@${sender.split("@")[0]} 🧙‍♂️`,
  contextInfo: {mentionedJid: [sender]
  }
}
tiringa.sendMessage(from, tagme, text)
break

case 'play':

msgFilter.isFiltered(from)
if (args.length < 1) return reply('Digite o nome da música')
  play = body.slice(5)
reply('Procurando sua música...⏳')
  anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp4?apikey=apivinz&q=${play}`)
  if (anu.message) return reply('Música não encontrada...\nTente específicar o nome dela.')
  aanu = await fetchJson(`https://api-tiringa.italuh.repl.co/api/yta?url=${anu.result.source}`)
  infomp3 = 
`    MÚSICA ENCONTRADA
   ‣ Título: ${anu.result.title}
   ‣ Fonte: ${anu.result.source}
   ‣ link: ${anu.result.url_audio} `
  buffer = await getBuffer(anu.result.thumbnail)
  //lagu = await getBuffer(anu.result.url_audio)
  lagu = await getBuffer(aanu.result)
  setTimeout( () => {
  tiringa.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
  }, 1500)
  reply('Baixando e enviando sua música...')
  tiringa.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', quoted: mek})
  break

case 'ytsearch':
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
msgFilter.isFiltered(from)
  reply(mess.wait)
  play = body.slice(7)
  if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('Esse link não é do YouTube')
  try {
  anu = await fetchJson(`https://api-tiringa.italuh.repl.co/api/yta?url=${play}`)
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
msgFilter.isFiltered(from)
  reply(mess.wait)
  play = body.slice(6)
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

//_CAPTURA O TEXTO NA IMAGEM
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

//_pacote de sticker especial

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

//_CRIAÇÃO DE STICKERS
				case 's':
				case 'stiker':
				case 'sticker':
				case 'stickergif':
				case 'stikergif':
                case 'fig':
                case 'gif':
                case 'figura':
                case 'figu':
                case 'figurinha':
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
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`, `scale='min(180,iw)':min'(180,ih)':force_original_aspect_ratio=decrease,fps=20, pad=180:180:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
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
								if (err) return reply(mess.erro.stick)
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

case 'stk':
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
								reply(mess.erro.stick)
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
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`, `crop=in_w:in_h-40,fps=20`])
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
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`, `crop=in_w:in_h-40:force_original_aspect_ratio=decrease,fps=20, pad=180:180:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
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
								if (err) return reply(mess.erro.stick)
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
				tiringa.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststik`, MessageType.text, {quoted: mek})

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
				tiringa.sendMessage(from, `Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`, MessageType.text, {quoted: mek})

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
				tiringa.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listimage`, MessageType.text, {quoted: mek})

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
				tiringa.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvid`, MessageType.text, {quoted: mek})

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

  case 'togif':
tiringa.updatePresence(from,Presence.composing)
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

//_CONVERTE VÍDEO EM ÁUDIO
  case 'tomp3':
tiringa.updatePresence(from,
  Presence.composing)
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

//_VOZ DO GOOGLE
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

//_ALTERA O PREFIX
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

//_DESBLOQUEIA USUÁRIO BLOQUEADO
case 'unblock':
  if (!isGroup) return reply(mess.only.group)
  if (!isOwner) return reply(mess.only.ownerB)
  tiringa.blockUser (`${body.slice(9)}@c.us`, "remove")
  tiringa.sendMessage(from, `Membuka blokir, Perintah diterima`, text)
  break

//_MENCIONA TODOS OS MEMBROS DO GRUPO
case 'tagall':
msgFilter.isFiltered(from)
tiringa.updatePresence(from, Presence.composing)
//reply('comando desativado para evitar flood')
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
members_id = []
todos = (args.length > 1) ? body.slice(8).trim(): ''
todos += `Total: ${groupMembers.length} membros\n`
for (let mem of groupMembers) {
  todos += `║➸@${mem.jid.split('@')[0]}\n`
  members_id.push(mem.jid)
}
mentions('╭╾╼◐⚋ ༒ᴍᴇɴᴄɪᴏɴᴀʀ ᴛᴏᴅᴏs ༒⚋◑╾╼╮\n║➸'+todos+'╰╾╼◐⚋⚋ ༒ ∴₰Ⱦꪋℓo፝֯֟ ߷ ༒ ⚋⚋◑╾╼╯', members_id, true)
break

//_LIMPA TODOS OS CHATS
				case 'clearall':
					if (!isOwner) return reply('Só o Italu pode fazer isso')
					anu = await tiringa.chats.all()
					tiringa.setMaxListeners(25)
					for (let _ of anu) {
						tiringa.deleteChat(_.jid)
					}
					reply('todos os chats foram deletados :)')
					break

//_PROMOVE UM MEMBRO DO GRUPO
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

//_ALTERA O NOME DO GRUPO
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

//_ALTERA A DESCRIÇÃO DO GRUPO
  case 'setdesk':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
tiringa.groupUpdateDescription(from, `${body.slice(9)}`)
tiringa.sendMessage(from, 'descrição do grupo alterada', text, {
  quoted: mek
})
break

//_REBAIXA UM MEMBRO
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

//_LISTA OS ADMINISTRADORES DO GRUPO
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

//_ALTERA A FOTO DE PERFIL DO BOT
case 'setppbot':
  tiringa.updatePresence(from, Presence.composing)
  if (!isOwner) return reply(mess.only.ownerB)
  const botpp = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contxtInfo: mek
  const cuk = await tiringa.downloadAndSaveMediaMessage(botpp)
  await tiringa.updateProfilePicture(botNumber, cuk)
  reply('Obrigado pela nova foto de perfil')
  break

//_LINK DO GRUPO
    case 'linkgroup':
    case 'linkgc':
        if (!isGroup) return reply(mess.only.group)
        if (!isGroupAdmins) return reply(mess.only.admin)
        if (!isBotGroupAdmins) return reply(mess.only.Badmin)
        linkgc = await tiringa.groupInviteCode(from)
        reply('Link do grupo: https://chat.whatsapp.com/'+linkgc)
                    break

//_RETIRAR BOT DO GRUPO
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
                 total = `Total de usuários: ${_level.length}`
                 reply(total)
                 break 
    

//_CONVERTE STICKER EM IMAGEM
				case 'toimg':
				    tiringa.updatePresence(from, Presence.composing)                       
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

//_FECHA O GRUPO
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

case 'cry':
msgFilter.isFiltered(from)
ran = getRandom('.webp')
axios.get(`https://tobz-api.herokuapp.com/api/cry?apikey=yzh9ASfGwJHXMTFmLKcn`).then((res) => {
imageToBase64(res.data.result)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image)
})
})
break//yzh9ASfGwJHXMTFmLKcn

case 'nsfwneko':
msgFilter.isFiltered(from)
ran = getRandom('.webp')
axios.get(`https://tobz-api.herokuapp.com/api/nsfwneko?apikey=yzh9ASfGwJHXMTFmLKcn`).then((res) => {
imageToBase64(res.data.result)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image)
})
})
break

case 'trap':
msgFilter.isFiltered(from)
ran = getRandom('.webp')
axios.get(`https://tobz-api.herokuapp.com/api/nsfwtrap?apikey=yzh9ASfGwJHXMTFmLKcn`).then((res) => {
imageToBase64(res.data.result)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
//setTimeout( () => {
if (Error) reply('erro')
tiringa.sendMessage(from, buf, MessageType.image)
//}, 5000)
})
})
break

case 'randomhentai':
msgFilter.isFiltered(from)
ran = getRandom('.webp')
axios.get(`https://tobz-api.herokuapp.com/api/hentai?apikey=yzh9ASfGwJHXMTFmLKcn`).then((res) => {
imageToBase64(res.data.result)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image)
})
})
break

case 'semoji':
if (args.length < 1) return reply('Emoji?')
ranp = getRandom('.png')
rano = getRandom('.webp')
teks = body.slice(7).trim()
axios.get(`https://docs-jojo.herokuapp.com/api/emoji2png?emoji=${teks}&type=apple`).then((res) => {
imageToBase64(res.data)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
exec(`wget ${buf} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(mess.erro.stick)
buffer = fs.readFileSync(rano)
tiringa.sendMessage(from, buffer, MessageType.sticker)
fs.unlinkSync(rano)
})
})
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

//_ABRE O GRUPO
case 'openg':
  case 'abrirg':
tiringa.updatePresence(from, Presence.composing)
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins || !isOwner) return reply(mess.only.admin)
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

//_APAGA MENSAGENS ENVIADAS PELO BOT
case 'delete':
  case 'del':
case 'apagar':
if (!isGroup)return reply(mess.only.group)
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
					if (!isGroupAdmins)return reply(mess.only.admin)
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
con = ["+","×","÷","-"]
ty = con[Math.floor(Math.random() * con.length)]
number1 = `${Math.floor(Math.random() * 100)}`
number2 = `${Math.floor(Math.random() * 100)}`
conta = `Quanto é ${number1} ${ty} ${number2}?`
reply(conta)
break


case 'dado':
msgFilter.isFiltered(from)
const dadus = ["⚀","⚁","⚂","⚃","⚄","⚅"]
dadu = dadus[Math.floor(Math.random() * dadus.length)]
dador = fs.readFileSync('./database/dados/'+dadu+'.webp')
tiringa.sendMessage(from, dador, sticker, {quoted: mek})
break


case 'caracoroa':
msgFilter.isFiltered(from)
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
		    idde = ["30","76","90","72","83","73","83","74","92","100","94","48","37","53","63"]
            idade = idde[Math.floor(Math.random() * (idde.length))]
			morte = `Pessoas com este nome: ${pushname} \nTendem a morrer aos ${idade} anos de idade.`
			reply(morte)
			break
			

case 'sn':
            const sn = ['sim', 'não']
                     gosto = body.slice(3)
                     if (args.length < 1) return tiringa.sendMessage(from, `Você deve fazer uma pergunta...\nExemplo: ${prefix}sn O Italu é um baiano preguiçoso?`, text, {quoted: mek})

                     const jawab = sn[Math.floor(Math.random() * (sn.length))]
                     hasil = `${gosto}\n\nSegundo meus cálculos, eu acredito que... ${jawab}`
                     reply(hasil)
                     break
           
          
case 'gadometro':
		case 'gado':
			var chifre = ["ultra extreme gado", "Gado-Master", "Gado-Rei", "Gado", "Escravo-ceta", "Escravo-ceta Maximo", "Gacorno?", "Jogador De Forno Livre<3", "Mestre Do Frifai<3<3", "Gado-Manso", "Gado-Conformado", "Gado-Incubado", "Gado Deus", "Mestre dos Gados", "Topa tudo por buceta", "Gado Comum", "Mini Gadinho", "Gado Iniciante", "Gado Basico", "Gado Intermediario", "Gado Avançado", "Gado Profisional", "Gado Mestre", "Gado Chifrudo", "Corno Conformado", "Corno HiperChifrudo", "Chifrudo Deus", "Mestre dos Chifrudos"]
			var gado = chifre[Math.floor(Math.random() * chifre.length)]
			gadop = `${Math.floor(Math.random() * 100)}`
			hisil = `Você é:\n\n${gado}`
			reply(hisil)
			break
			

case 'oculto':
            if (!isGroup) return reply(mess.only.group) 
            const eur = groupMetadata.participants
            const mem = eur[Math.floor(Math.random() * eur.length)]
    	    var xvid = ["Negoes branquelos e feministas", `${pushname} se depilando na banheira`, `${pushname} comendo meu cuzinho`, `${pushname} quer me comer o que fazer?`, "lolis nuas e safadas", "Ursinhos Mansos Peludos e excitados", "mae do adm cozida na pressao", "Buceta de 500 cm inflavel da boneca chinesa lolita company", "corno manso batendo uma pra mim com meu rosto na webcam", "tigresa vip da buceta de mel", "belle delphine dando o cuzinho no barzinho da esquina", "fazendo anal no negao", "africanos nus e chupando pau", "anal africano", "comendo a minha tia", "lgbts fazendo ahegao", "adm gostoso tirando a roupa", "gays puxando o intestino pra fora", "Gore de porno de cachorro", "anoes baixinhos do pau grandao", "AnÃµes Gays Dotados Peludos", "anÃµes gays dotados penetradores de botas", "Ursinhos Mansos Peludos", "Jailson Mendes", "Vendo meu Amigo Comer a Esposa", "Golden Shower"]
            const surpresa2 = xvid[Math.floor(Math.random() * xvid.length)]
            xvidd = `EQUIPE ❌VIDEOS\n\nCaro usuário @${mem.jid.split('@')[0]}...\n\nSou da administração do Xvideos e nós percebemos que você não entrou em sua conta por mais de 2 semanas e decidimos checar pra saber se está tudo OK com o(a) nosso(a) usuário(a) mais ativo(a).\n\nDesde a última vez que você visitou nosso site, você procurou mais de centenas de vezes por ${surpresa2} (acreditamos ser sua favorita), viemos dizer que elas foram adicionadas e temos certeza que você irá gostar bastante.\nEsperamos você lá!\n\nPara o nosso usuário(a) favorito(a), com carinho, Equipe Xvideos.`
            tiringa.sendMessage(from, xvidd, text, {quoted: mek, contextInfo: {mentionedJid: [mem]}})
            break
            

case "ppt":
msgFilter.isFiltered(from)
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
const groupMetadata = await tiringa.groupMetadata(from)
ag = groupMetadata.participants(from)
const mem2 = ag[Math.floor(Math.random() * (ag.length))]
const mem1 = ag[Math.floor(Math.random() * (ag.length))]
casal = `@${mem1.jid.split('@')[0]}  teste @${mem2.jid.split('@')[0]}`
tiringa.sendMessage(from, casal, text, {quoted: mek, contextInfo: {"mentionedJid": [ag]}})
break
			
case 'slot':
msgFilter.isFiltered(from)
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
`Consiga 3 iguais para ganhar
╔════ ≪ •❈• ≫ ════╗
║         [💰SLOT💰 | 777 ]        
║                                             
║                                             
║           ${somtoy}  ◄━━┛
║            
║                                           
║          [💰SLOT💰 | 777 ]        
╚════ ≪ •❈• ≫ ════╝
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
              tiringa.updatePresence(from, Presence.composing) 
                var avb = body.slice(7)
                if (args.length < 1) return tiringa.sendMessage(from, `Você precisa digitar da forma correta\nExemplo: ${prefix}chance do Italu ser um trouxa`, text, {quoted: mek})

                random = `${Math.floor(Math.random() * 100)}`
               hasil = `A chance ${body.slice(7)}\n\né de... ${random}%`
             tiringa.sendMessage(from, hasil, text, {quoted: mek, contextInfo: {mentionedJid: [sender]}})
                break
     

case 'dadog':
tiringa.updatePresence(from, Presence.composing)
reply(mess.wait)
const dadusg = ["https://i.ibb.co/njdfrHT/jogodedados-128px-1.gif","https://i.ibb.co/Bw42zpY/jogodedados-128px-2.gif","https://i.ibb.co/BBcyPp2/jogodedados-128px-3.gif","https://i.ibb.co/YhhDbX5/jogodedados-128px-4.gif","https://i.ibb.co/9g8ns1b/jogodedados-128px-5.gif","https://i.ibb.co/qFTd1K1/jogodedados-128px-6.gif"]
try {
const dadugg = dadusg[Math.floor(Math.random() * (dadusg.length))]	
pok = await getBuffer(dadugg)
tiringa.sendMessage(from, pok, text, {quoted: mek})

} catch {
  reply(mess.ferr)
}
break
      

case 'rola':
case 'pau':
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
const figr = ["pattta1","pattta2","pattta3"]
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

//_JOGO DA VELHA By: Resen
//INICIO DO JOGO DA VELHA ❌ ⭕ 🔲
				case 'ttt':
					const limitrl = getLimit(sender, daily)
					if (!isGroup) {
						reply(mess.only.group)
					} else if (tttset.tttstatus == "on") {
						reply(`Alguém já está jogando no momento\nPor favor aguarde um instante...`)
					} else if (tttset.waitingTime == "on") {
						reply(`Alguém jogou recentemente\nPor favor aguarde o tempo de espera...`)
					} else if (args == 0 || (args != 'easy' && args != 'Easy' && args != 'EASY' && args != 'normal' && args != 'Normal' && args != 'NORMAL' && args != 'hard' && args != 'Hard' && args != 'HARD'&& args != 'impossible'&& args != 'Impossible' && args != 'IMPOSSIBLE')) {
						reply(`Defina a dificuldade\nEx.: ${prefix}ttt easy\n\nDificuldades: easy, normal, hard e impossible`)
					} else if (limitrl !== undefined && cdd - (Date.now() - limitrl) > 0) {
						reply('Opa, deixe seus abigos jogarem também, tente novamente em 8 minutos.')
					} else {
						tttset.tttstatus = "on"
						tttset.player = sender
						tttset.playerName = pushname
						tttset.mentionPlayer = mek
						tttset.local = from
						if (args == 'easy' || args == 'Easy' || args == 'EASY') {
							tttset.tttdifficulty = "EASY"
						} else if (args == 'normal' || args == 'Normal' || args == 'NORMAL') {
							tttset.tttdifficulty = "NORMAL"
						} else if (args == 'hard' || args == 'Hard' || args == 'HARD') {
							tttset.tttdifficulty = "HARD"
						} else if (args == 'impossible' || args == 'Impossible' || args == 'IMPOSSIBLE') {
							tttset.tttdifficulty = "IMPOSSIBLE"
						}
						const randomStartIA = Math.floor(Math.random() * 3)
						if (randomStartIA == 0) {
							IA()
							tttset.reActivate1 = "on"	
						}
						costum(`O jogo começou!!!\nModo: ${tttset.tttdifficulty}`, text, tescuk, crtt)
						tiringa.sendMessage(from, `🌀1️⃣2️⃣3️⃣\n🅰️${esp.a1}${esp.a2}${esp.a3}\n🅱️${esp.b1}${esp.b2}${esp.b3}\n©️${esp.c1}${esp.c2}${esp.c3}`,text )
						tiringa.sendMessage(from,`Caso não saiba como jogar digite: ${prefix}ttthelp`, text) 
						setTimeout( () => {
							tttset.waitingTime = "off"
							tttset.autoEndTime = "on"
						}, 240000) //4 minutos
						addLimit(sender, daily)
					}

					break

					case 'ttthelp':
						tiringa.sendMessage(from, ttthelp(prefix), text)
					break

					case 'tttme':
						if (!isGroup) return reply(mess.only.group)
						const checkTTTIdMe = getTTTId(sender)
						if (checkTTTIdMe === undefined) addTTTId(sender)
						tiringa.sendMessage(from, tttme(pushname, getTTTwins(sender), getTTTdefeats(sender), getTTTties(sender), getTTTpoints(sender)), text, {quoted:mek})
					break

					case 'tttrank':
						if (!isGroup) return reply(mess.only.group)
						if (tictactoe.length < 5) return reply(from, `Humm, é necessário que no mínimo 5 pessoas tenham jogado...`, text)
						tictactoe.sort((a, b) => (a.points < b.points) ? 1 : -1)
						let board = '【 TTT RANKS 】\n\n'
						try {
							for (let i = 0; i < 5; i++) {
								if (i == 1) {
									board += `${i + 1}º 🥇 : @${tictactoe[i].jid.split('@')[0]}\n➣ Vitórias: ${tictactoe[i].wins} 🎊\n➣ Derrotas: ${tictactoe[i].defeats} 💥\n➣ Empates : ${tictactoe[i].ties} 🌀\n➣ Pontos  : ${tictactoe[i].points} ✨\n\n`
								} else if (i == 2) {
									board += `${i + 1}º 🥈 : @${tictactoe[i].jid.split('@')[0]}\n➣ Vitórias: ${tictactoe[i].wins} 🎊\n➣ Derrotas: ${tictactoe[i].defeats} 💥\n➣ Empates : ${tictactoe[i].ties} 🌀\n➣ Pontos  : ${tictactoe[i].points} ✨\n\n`
								} else if (i == 3) {
									board += `${i + 1}º 🥉 : @${tictactoe[i].jid.split('@')[0]}\n➣ Vitórias: ${tictactoe[i].wins} 🎊\n➣ Derrotas: ${tictactoe[i].defeats} 💥\n➣ Empates : ${tictactoe[i].ties} 🌀\n➣ Pontos  : ${tictactoe[i].points} ✨\n\n`
								} else {
									board += `${i + 1}º : @${tictactoe[i].jid.split('@')[0]}\n➣ Vitórias: ${tictactoe[i].wins} 🎊\n➣ Derrotas: ${tictactoe[i].defeats} 💥\n➣ Empates : ${tictactoe[i].ties} 🌀\n➣ Pontos  : ${tictactoe[i].points} ✨\n\n`
								}
							} 
							await tiringa.sendMessage(from, board, text, {quoted: mek, contextInfo: {mentionedJid: [tictactoe[0].jid, tictactoe[1].jid, tictactoe[2].jid, tictactoe[3].jid, tictactoe[4].jid]}})
						} catch (err) {
							console.log(err)
						}
					break

					case 'coord' :
						tttset.playertest = sender
						if (!isGroup) {
							reply(mess.only.group)
						} else if (tttset.tttstatus == "off") {
							reply(`Você ainda não iniciou o jogo\nDigite ${prefix}ttt [DIFICULDADE] para iniciar`)
						} else if (tttset.player != tttset.playertest) {
							reply(`Alguém já está jogando no momento\nPor favor aguarde um instante...`)
						} else if (tttset.tttantibug == "on") {
							reply(`Aguarde a ação anterior ser concluída...`)
						} else {
							tttset.tttantibug = "on"
							const coordX = args
							if (coordX != 'a1' && coordX != 'a2' && coordX != 'a3' &&
								coordX != 'b1' && coordX != 'b2' && coordX != 'b3' &&
								coordX != 'c1' && coordX != 'c2' && coordX != 'c3') {
								reply(`Digite o comando com uma coordenada\nExemplo: ${prefix}coord a1`)
								tttset.tttantibug = "off"
							} else {
								switch (args[0]) {
									case 'a1':
										if (esp.a1 != "🔲") {
											reply('O espaço já foi ocupado\nTente outra coordenada')
										} else {
											esp.a1 = "❌"
											while (tttset.reActivate1 == "on") {
												IA()
											}
										}
									break
									case 'a2':
										if (esp.a2 != "🔲") {
											reply('O espaço já foi ocupado\nTente outra coordenada')
										} else {
											esp.a2 = "❌"
											while (tttset.reActivate1 == "on") {
												IA()
											}
										}
									break
									case 'a3':
										if (esp.a3 != "🔲") {
											reply('O espaço já foi ocupado\nTente outra coordenada')
										} else {
											esp.a3 = "❌"
											while (tttset.reActivate1 == "on") {
												IA()
											}
										}
									break
									case 'b1':
										if (esp.b1 != "🔲") {
											reply('O espaço já foi ocupado\nTente outra coordenada')
										} else {
											esp.b1 = "❌"
											while (tttset.reActivate1 == "on") {
												IA()
											}
										}
									break
									case 'b2':
										if (esp.b2 != "🔲") {
											reply('O espaço já foi ocupado\nTente outra coordenada')
										} else {
											esp.b2 = "❌"
											while (tttset.reActivate1 == "on") {
												IA()
											}
										}
									break
									case 'b3':
										if (esp.b3 != "🔲") {
											reply('O espaço já foi ocupado\nTente outra coordenada')
										} else {
											esp.b3 = "❌"
											while (tttset.reActivate1 == "on") {
												IA()
											}
										}
									break
									case 'c1':
										if (esp.c1 != "🔲") {
											reply('O espaço já foi ocupado\nTente outra coordenada')
										} else {
											esp.c1 = "❌"
											while (tttset.reActivate1 == "on") {
												IA()
											}
										}
									break
									case 'c2':
										if (esp.c2 != "🔲") {
											reply('O espaço já foi ocupado\nTente outra coordenada')
										} else {
											esp.c2 = "❌"
											while (tttset.reActivate1 == "on") {
												IA()
											}
										}
									break
									case 'c3':
										if (esp.c3 != "🔲") {
											reply('O espaço já foi ocupado\nTente outra coordenada')
										} else {
											esp.c3 = "❌"
											while (tttset.reActivate1 == "on") {
												IA()
											}
										}
									break
								}
								
								tttset.reActivate1 = "on"
								reply(`🌀1️⃣2️⃣3️⃣\n🅰️${esp.a1}${esp.a2}${esp.a3}\n🅱️${esp.b1}${esp.b2}${esp.b3}\n©️${esp.c1}${esp.c2}${esp.c3}`)
								var randomTTTXP = 0

								if (WinnerX()) {
									if (isLevelingOn) {
										switch (tttset.tttdifficulty) {
											case "EASY":
												randomTTTXP = Math.floor(Math.random() * 25) + 25
												addLevelingXp(tttset.player, randomTTTXP)
											break
											case "NORMAL":
												randomTTTXP = Math.floor(Math.random() * 75) + 75
												addLevelingXp(tttset.player, randomTTTXP)
											break
											case "HARD":
												randomTTTXP = Math.floor(Math.random() * 200) + 200
												addLevelingXp(tttset.player, randomTTTXP)
											break
											case "IMPOSSIBLE":
												randomTTTXP = Math.floor(Math.random() * 1000) + 1000
												addLevelingXp(tttset.player, randomTTTXP)
											break
										}
										tiringa.sendMessage(from, `🎉🎉 VITÓRIA DO JOGADOR 🎉🎉\n\n➣  RECOMPENSA: +${randomTTTXP} XP 🔮`, text)
									} else {
										tiringa.sendMessage(from, `🎉🎉 VITÓRIA DO JOGADOR 🎉🎉`, text)
									}
									const currentTTTwins = getTTTwins(tttset.player)
            						const checkTTTIdWin = getTTTId(tttset.player)
									if (currentTTTwins === undefined && checkTTTIdWin === undefined) addTTTId(tttset.player)
									addTTTwin(tttset.player, 1)
									addTTTpoints(tttset.player, randomTTTXP)
									esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
									esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
									esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
									tttset.tttstatus = "off"
									tttset.waitingTime = "on"
								} else if (WinnerO()) {
									if (isLevelingOn) {
										switch (tttset.tttdifficulty) {
											case "EASY":
												randomTTTXP = 0 - (Math.floor(Math.random() * 200) + 200)
												addLevelingXp(tttset.player, randomTTTXP)
											break
											case "NORMAL":
												randomTTTXP = 0 - (Math.floor(Math.random() * 75) + 75)
												addLevelingXp(tttset.player, randomTTTXP)
											break
											case "HARD":
												randomTTTXP = 0 - (Math.floor(Math.random() * 25) + 25)
												addLevelingXp(tttset.player, randomTTTXP)
											break
											case "IMPOSSIBLE":
												randomTTTXP = 0
												addLevelingXp(tttset.player, randomTTTXP)
											break
										}
										tiringa.sendMessage(from, `🎉🎉 VITÓRIA DO TIRINGA-BOT 🎉🎉\n\n➣  PUNIÇÃO: ${randomTTTXP} XP 🔮`, text)
									} else {
										tiringa.sendMessage(from, `🎉🎉 VITÓRIA DO TIRINGA-BOT 🎉🎉`, text)
									}
									const currentTTTdefeats = getTTTdefeats(tttset.player)
            						const checkTTTIdDefeat = getTTTId(tttset.player)
									if (currentTTTdefeats === undefined && checkTTTIdDefeat === undefined) addTTTId(tttset.player)
									addTTTdefeat(tttset.player, 1)
									addTTTpoints(tttset.player, randomTTTXP)
									esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
									esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
									esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
									tttset.tttstatus = "off"
									tttset.waitingTime = "on"
								} else if (Tie()) {
									if (isLevelingOn) {
										tiringa.sendMessage(from, `🎉🎉 EMPATE 🎉🎉\n\n➣  NÃO HÁ GANHOS NEM PERDAS`, text)
									} else {
										tiringa.sendMessage(from, `🎉🎉 EMPATE 🎉🎉`, text)
									}
									const currentTTTties = getTTTties(tttset.player)
            						const checkTTTIdTie = getTTTId(tttset.player)
									if (currentTTTties === undefined && checkTTTIdTie === undefined) addTTTId(tttset.player)
									addTTTtie(tttset.player, 1)
									esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
									esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
									esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
									tttset.tttstatus = "off"
									tttset.waitingTime = "on"
								}
								tttset.tttantibug = "off"
							}
						}
					break
//_FIM DO JOGO DA VELHA By: Resen
//mini games, rate, random

//_COMANDOS NSFW
case 'ecchi':
msgFilter.isFiltered(from)
if (!isNsfw) return reply('??funções NSFW desativadas nesse grupo🚫')
reply(mess.waitsfw)
hehe = await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/ecchi?apikey=847de7716f17a51eeba4235c`)
tiringa.sendMessage(from, hehe, text, {quoted: mek})
break

case 'random':
msgFilter.isFiltered(from)
try {  
if (!isNsfw) return reply('🚫funções NSFW desativadas nesse grupo🚫')
hah = await fetchJson(`https://freerestapi.herokuapp.com/api/v1/randomp`)
hehe = await getBuffer(hah.url)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌ocorreu um erro❌')
}
break

case 'yaoi':
msgFilter.isFiltered(from)
if (!isNsfw) return reply('🚫funções NSFW desativadas nesse grupo🚫')
reply(mess.waitsfw)
hehe = await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/yaoi?apikey=847de7716f17a51eeba4235c`)
tiringa.sendMessage(from, hehe, text, {quoted: mek})
break

case 'bj':
msgFilter.isFiltered(from)
if (!isNsfw) return reply('🚫funções NSFW desativadas nesse grupo🚫')
reply(mess.waitsfw)
hehe = await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/blowjob?apikey=847de7716f17a51eeba4235c`)
tiringa.sendMessage(from, hehe, text, {quoted: mek})
break

case 'trap':
msgFilter.isFiltered(from)
if (!isNsfw) return reply('🚫funções NSFW desativadas nesse grupo🚫')
reply(mess.waitsfw)
hehe = await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/trap?apikey=847de7716f17a51eeba4235c`)
tiringa.sendMessage(from, hehe, text, {quoted: mek})
break

case 'oppai':
msgFilter.isFiltered(from)
if (!isNsfw) return reply('🚫funções NSFW desativadas nesse grupo🚫')
reply(mess.waitsfw)
hehe = await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/sideoppai?apikey=847de7716f17a51eeba4235c`)
tiringa.sendMessage(from, hehe, text, {quoted: mek})
break

case 'animebooty':
msgFilter.isFiltered(from)
if (!isNsfw) return reply('🚫funções NSFW desativadas nesse grupo🚫')
reply(mess.waitsfw)
hehe = await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/animebooty?apikey=847de7716f17a51eeba4235c`)
tiringa.sendMessage(from, hehe, text, {quoted: mek})
break

case'boobs':
msgFilter.isFiltered(from)
if (!isNsfw) return reply('🚫funções NSFW desativadas nesse grupo🚫')
reply(mess.waitsfw)
res = axios.get(`https://nekos.life/api/v2/img/pussy_jpg`, {method: 'get'})
tiringa.sendMessage(from, ggf.url, text, {quoted: mek})
break

case 'nsfwaifu':
msgFilter.isFiltered(from)
if (!isNsfw) return reply('🚫funções NSFW desativadas nesse grupo🚫')
reply(mess.waitsfw)
res = await fetchJson(`https://waifu.pics/api/nsfw/waifu`)
ggf = await dI(res.url)
tiringa.sendMessage(from, ggf, text, {quoted: mek})
break

case 'teta':
tits = await dl(`https://meme-api.herokuapp.com/gimme/tits`, {method: 'get'})
tiringa.sendMessage(from, tits.url, '', { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "Tiringa-BOT v12.3🧙‍♂️", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('teste/bot.jpg')}}}})
break

case 'nsfwloli':
msgFilter.isFiltered(from)
loli.getNSFWLoli(async (err, res) => {
if (err) return reply('❌ *ERROR* ❌')
buffer = await getBuffer(res.url)
tiringa.sendMessage(from, buffer, image, {quoted: mek, caption: 'Seu lolicon safado😔'})
})
break

//_ FIM DOS COMANDOS NSFW

				default:
				if (body == `${prefix}${command}`) {
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
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts()
