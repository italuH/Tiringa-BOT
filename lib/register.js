const fs = require('fs')
const crypto = require('crypto')

const _registered = JSON.parse(fs.readFileSync('./datauser/registered.json'))

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

module.exports = {
	getRegisterTime,
	getRegisterAge,
	getRegisterSerial,
	getRegisterName,
	getRegisterNo,
	getRegisteredRandomId,
	addRegisteredUser,
	createSerial,
	checkRegisteredUser,
}