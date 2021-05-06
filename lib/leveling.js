const fs = require('fs')
const crypto = require('crypto')

const _level = JSON.parse(fs.readFileSync('./datauser/level.json'))

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
        
        const getUserRank = (sender, _level) => {
    let position = null
    let found = false
    _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
    Object.keys(_level).forEach((i) => {
        if (_level[i].id === sender) {
            position = i
            found = true
        }
    })
    if (found === false && position === null) {
        const obj = { id: sender, xp: 0, level: 1 }
        _level.push(obj)
        fs.writeFileSync('./datauser/level.json', JSON.stringify(_level))
        return 99
    } else {
        return position + 1
    }
}

    const xpGain = new Set()
    
    const isGained = (sender) => {
    return !!xpGain.has(sender)
}
     const addCooldown = (sender) => {
    xpGain.add(sender)
    setTimeout(() => {
        return xpGain.delete(sender)
    }, 60000) // Each minute
}
     
module.exports = {
     getLevelingXp, 
     getLevelingId, 
     addLevelingXp, 
     addLevelingLevel, 
     addLevelingId, 
     getLevelingLevel,
     getUserRank,
     isGained,
     addCooldown
}

