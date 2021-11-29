let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
var num = [numbers[0]]


for(let i = 1; i < numbers.length;i++){
    if(numbers[i] < num){
       num.pop()
       num.push(numbers[i])
       
    }
    
}
console.log(num)




