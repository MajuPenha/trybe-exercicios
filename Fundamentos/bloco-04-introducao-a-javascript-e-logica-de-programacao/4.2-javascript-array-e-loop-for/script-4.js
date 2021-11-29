let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
var sum = 0
for(let i of numbers){

    sum += i
}
var med = sum / numbers.length 

if(med > 20){
    console.log('valor maior que 20')
}
else{
    console.log('valor menor ou igual a 20')
}
