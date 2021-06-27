const fs = require('fs')

const ceemde = JSON.parse(fs.readFileSync('./database/data/totalcmd.json'))

const cmdadd = () => {
	ceemde[0].totalcmd += 1
	fs.writeFileSync('./database/data/totalcmd.json', JSON.stringify(ceemde))
}

module.exports = {
	cmdadd
}