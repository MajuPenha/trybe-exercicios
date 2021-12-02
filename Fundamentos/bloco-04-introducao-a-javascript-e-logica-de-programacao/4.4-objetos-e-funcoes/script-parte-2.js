function palindromo(str){

  let rev = str.split('').reverse().join('')
  if(str == rev){
    console.log(true)
  }
  else{
    console .log(false)
  }

}


// palindromo('arara')



function maiorValor(arr){
  
  let res = 0
  for(let i in arr){
    
    if(arr[i] > arr[res]){
      res = i 
  }
}
console.log(res)
}

// maiorValor([200, 3, 6, 700000, 10000, 1])



function menorValor(arr){
  
  let res = 0
  for(let i in arr){
    
    if(arr[i] < arr[res]){
      res = i 
  }
}
console.log(res)
}

// menorValor([-6, 3, 6, -700000, 10000, 1])


function maiorNome(arr){
  let maiorNome = ''
  let tamanho = 0
  for(let i in arr){
    let nome = arr[i].split('')
    if(nome.length > tamanho){
      tamanho = nome.length
      maiorNome = arr[i]


    }

  }
  console.log(maiorNome)
}

// maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])





