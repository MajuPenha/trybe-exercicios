let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
var num = 0


for(let i = 0; i < numbers.length;i++){
    if(numbers[i] % 2 !== 0){
       num++
       
    }
    else if(numbers[i] == 2){
        num++
    }
    
}
if(num>0){
    console.log(num)
}
else{
    console.log('nenhum valor ímpar encontrado')
}




