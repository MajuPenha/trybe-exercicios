let n = 5
let a = ''
let b = [' ', ' ', ' ', ' ', ' ']



for(let i = 0; i < n; i++){
    a +='* '
    b.pop()
    let c = b.join('')
        
    
    console.log(c+a)
    
}


