//------------------------------1-------------------------------------
function getProgress(status) {
    if(status >= 100) return `Už jen chvilku! ${status}%`
    if(status >= 75) return `Aplikace vykresluje vaše data. ${status}%`
    if(status >= 50) return `Přihlašujeme vás. ${status}%`
    else return `Hledáme váš účet ${status}%`
}

console.log(getProgress(13))
console.log(getProgress(80))

//---------------------------2----------------------------------------
function compact(arr) {
    return arr.filter(i => i)
}

console.log(compact([1, 0, 2, 5, true]))
console.log(compact(["React"]))

//---------------------------3----------------------------------------
function distributeGold(gold) {
    const arr = [0, 0]
    let user = 0
    while (gold.length !== 0) {
        if(gold[0] >= gold[gold.length-1]) {
            arr[user] += gold.shift()
        } else {
            arr[user] += gold.pop()
        }
        user = user === 0 ? 1 : 0
    }
    return arr
}

console.log(distributeGold([2,3,8,9]))

//---------------------------4----------------------------------------
function getPosition(commands) {
    const position = [0, 0]
    commands.forEach(i => {
        if(i.toLowerCase() === 'up') position[0]++
        else if(i.toLowerCase() === 'down') position[0]--
        else if(i.toLowerCase() === 'right') position[1]++
        else if(i.toLowerCase() === 'left') position[1]--
    })
    return position
}

console.log(getPosition(['up', 'down', 'up', 'left', 'right', 'left']))
