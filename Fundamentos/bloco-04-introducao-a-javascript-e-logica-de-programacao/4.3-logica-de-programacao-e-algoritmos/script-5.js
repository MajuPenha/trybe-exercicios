let n = 5
let a = '*'
let b = [' ', ' ', ' ', ' ', ' ']



for(let i = 1; i <= n; i+=2){
    
    b.pop()
    let c = b.join('')
        
    
    console.log(c+a)
    a +='**'
    
}


