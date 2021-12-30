const fs = require('fs')
const {join} = require('path')

const file = fs.readFileSync(join(__dirname, 'input.txt'), 'utf8')
const inputs = file.split('\n')
//.slice(0, -1)
//.map(n => Number(n))

for (let i = 0; i<inputs.length; i++) {
   const [dir, spd] = inputs[i].split(' ')
   spd
}

console.log(inputs.length)