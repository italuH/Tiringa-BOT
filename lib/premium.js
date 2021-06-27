const fs = require('fs')
const toMs = require('ms')

 const addPremiumUser = (userId, expired, _data) => {
    let success = false
    if (expired === undefined) {
        expired = 'PERMANENT'
    } else {
        expired = expired
    }
    
    let expired_at = 'PERMANENT'
    
    if (expired === 'PERMANENT') {
        expired_at = 'PERMANENT'
    } else {
        expired_at = Date.now() + toMs(expired)
    }
    
    const obj = {
        id: userId,
        expired: expired_at
    }
    
    _data.push(obj)
    fs.writeFileSync('./database/datauser/premium.json', JSON.stringify(_data))
}

const dellprem = (userId, _data) => {
    let position = null
    Object.keys(_data).forEach((i) => {
        if (_data[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        _data.splice(position, 1)
        fs.writeFileSync('./database/datauser/premium.json', JSON.stringify(_data))
    }
    return true
}

const getPremiumExpired = (_dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (_dir[i].expired === 'PERMANENT') {
                position = null
            } else if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            console.log(`Premium expirado: ${_dir[position].id}`)
            _dir.splice(position, 1)
            fs.writeFileSync('./database/datauser/banned.json', JSON.stringify(_dir))
        }
    }, 1000)
}

const checkOwner = (userId, _dir) => {
    let status = false
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            status = true
        }
    })
    return status
}

const checkPremiumUser = (userId, _dir) => {
    let status = false
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            status = true
        }
    })
    return status
}

const expiredCheck = (_dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            console.log(`Premium expired: ${_dir[position].id}`)
            _dir.splice(position, 1)
            fs.writeFileSync('./database/datauser/premium.json', JSON.stringify(_dir))
        }
    }, 1000)
}

module.exports = {
    addPremiumUser,
    dellprem,
    getPremiumExpired,
    checkOwner,
    expiredCheck,
    checkPremiumUser
}