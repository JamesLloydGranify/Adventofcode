const fs = require('fs')
const {join} = require('path')

const file = fs.readFileSync(join(__dirname, 'input.txt'), 'utf8')
const inputs = file.split('\n')

function rating_check(sign){

{const master = inputs.map(x => x);
let rating = master ;
 console.log(rating[0].length)
 for (let i = 0; i<rating[0].length; i++) {
     var counter = 0
     var temp = []
     for (let j=0; j<rating.length;j++) {
         counter += Number(rating[j][i])
     }
          if (counter >= rating.length/2) {
         counter = 1
     }
     else {
         counter = 0
     }        
     for (let k=0; k<rating.length;k++) {
         if ((sign==true && rating[k][i] == counter) || (sign==false && rating[k][i] != counter)) {
           temp.push(rating[k]) 
         }
     }
     rating = temp
     if (rating.length == 1) {
         return console.log('Rating found:', rating)
         }
 }
}
}
rating_check(false)
