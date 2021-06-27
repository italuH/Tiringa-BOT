const fetch = require('node-fetch')
const fs = require('fs')
const axios = require('axios')
const cfonts = require('cfonts')
const spin = require('spinnies')
const Crypto = require('crypto')

var corzinhas = ["red","green","yellow","blue","magenta","cyan","white","gray","redBright","greenBright","yellowBright","blueBright","magentaBright","cyanBright","whiteBright"]
const cor1 = corzinhas[Math.floor(Math.random() * (corzinhas.length))]	
const cor2 = corzinhas[Math.floor(Math.random() * (corzinhas.length))]	
const cor3 = corzinhas[Math.floor(Math.random() * (corzinhas.length))]	
const cor4 = corzinhas[Math.floor(Math.random() * (corzinhas.length))]	
const cor5 = corzinhas[Math.floor(Math.random() * (corzinhas.length))]	

const uang = JSON.parse(fs.readFileSync('./database/datauser/uang.json'))

const h2k = (number) => {
    var SI_POSTFIXES = ["", " K", " M", " G", " T", " P", " E"]
    var tier = Math.log10(Math.abs(number)) / 3 | 0
    if(tier == 0) return number
    var postfix = SI_POSTFIXES[tier]
    var scale = Math.pow(10, tier * 3)
    var scaled = number / scale
    var formatted = scaled.toFixed(1) + ''
    if (/\.0$/.test(formatted))
      formatted = formatted.substr(0, formatted.length - 2)
    return formatted + postfix
}

const getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		});
		return res.data;
	} catch (e) {
		console.log(`Error : ${e}`);
	}
};

const randomBytes = (length) => {
    return Crypto.randomBytes(length);
};

const generateMessageID = () => {
    return randomBytes(10).toString('hex').toUpperCase();
};

const getGroupAdmins = (participants) => {
	admins = [];
	for (let i of participants) {
		i.isAdmin ? admins.push(i.jid) : '';
	}
	return admins;
};

const getRandom = (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`;
};

/*
  
 
*/
const spinner = { 
  "interval": 150,
  "frames": [
"I",
"It",
"Ita",
"Ital",
"Italu",
  ]}

let globalSpinner;

const getGlobalSpinner = () => {
  if(!globalSpinner) globalSpinner = new spin({ color: 'blue', succeedColor: 'green', spinner});
  return globalSpinner;
}

spins = getGlobalSpinner(false)

const start = (id, text) => {
	spins.add(id, {text: text})
	}
const info = (id, text) => {
	spins.update(id, {text: text})
}
const success = (id, text) => {
	spins.succeed(id, {text: text})

	}

const close = (id, text) => {
	spins.fail(id, {text: text})
}

const banner = cfonts.render(('TIRINGA|BOT|V14.1'), {
    font: 'block',
    align: 'center',
    colors: [`${cor4}`,`${cor2}`],
    lineHeight: 1
  });

const banner2 = cfonts.render(('BY: ITALU'), {
    font: 'chrome',
    align: 'center',
    colors: [`${cor3}`,`${cor1}`,`${cor5}`],
    lineHeight: 1
  });

const simih = async (budy) => { 
	try {
		const sami2 = await fetchJson(`https://ferdizstar-api.herokuapp.com/api/simi?text=${encodeURIComponent(budy)}&bahasa=pt`, { method: 'get' })
		const sumi2 = `${sami2.result}`
		return `${sumi2}`
	} catch {
		return
	}
}
			
const addATM = (sender) => {
        	const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./database/datauser/uang.json', JSON.stringify(uang))
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
                fs.writeFileSync('./database/datauser/uang.json', JSON.stringify(uang))
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

function temporizador(segundos){
  function tempo(s){
    return (s < 10 ? '0' : '') + s;
  }
  var horas = Math.floor(segundos / (60*60));
  var minutos = Math.floor(segundos % (60*60) / 60);
  var segundos = Math.floor(segundos % 60);
  return `${tempo(horas)}:${tempo(minutos)}:${tempo(segundos)}`;
}

module.exports = { 
     getBuffer, 
     h2k,  
     generateMessageID, 
     getGroupAdmins, 
     getRandom, 
     start, 
     info, 
     success,
     banner, 
     banner2,
     simih,
     close, 
     addATM, 
     addKoinUser, 
     checkATMuser,
     temporizador
}
