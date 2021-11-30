let megaSenaNumbers = [
    Math.floor(Math.random()*60+1),
    Math.floor(Math.random()*60+1),
    Math.floor(Math.random()*60+1),
    Math.floor(Math.random()*60+1),
    Math.floor(Math.random()*60+1),
    Math.floor(Math.random()*60+1),
]
let firstPlay = [45, 2,35, 36, 37, 26]
let numberOfHits = 0
while(numberOfHits < 6){

    let megaSenaNumbers = [
        Math.floor(Math.random()*60+1),
        Math.floor(Math.random()*60+1),
        Math.floor(Math.random()*60+1),
        Math.floor(Math.random()*60+1),
        Math.floor(Math.random()*60+1),
        Math.floor(Math.random()*60+1),
    ]

for(let i = 0; i < megaSenaNumbers.length; i++){
    for(let n = 0; n< firstPlay.length; n++){
        if(megaSenaNumbers[i] == firstPlay[n]){
            numberOfHits++
        }
    }
}

}
console.log('Números sorteados: ' + megaSenaNumbers)
console.log('Números jogados: ' + firstPlay)
console.log('Números de acertos: ' + numberOfHits)