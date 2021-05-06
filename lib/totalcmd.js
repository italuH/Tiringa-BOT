const fs = require('fs')

const ceemde = JSON.parse(fs.readFileSync('./data/totalcmd.json'))

/**
 * for add total command
 * @params {direktori} 
 * dah lah
**/
const cmdadd = () => {
	ceemde[0].totalcmd += 1
	fs.writeFileSync('./data/totalcmd.json', JSON.stringify(ceemde))
}

module.exports = {
	cmdadd
}