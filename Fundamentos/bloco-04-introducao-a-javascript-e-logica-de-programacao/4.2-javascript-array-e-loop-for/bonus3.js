
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let res = []
for (let i = 0; i < numbers.length; i += 1) {
  if(numbers[i] === numbers[numbers.length -1]){
    let mult = numbers[i] * 2
    res.push(mult)
  }else{
    let mult = numbers[i] * numbers[(i+1)]
    res.push(mult)
  }
      }
  console.log(res)