
const fat = (n) => {
  if(n === 0){
    return  1
  } else {
    let res = 1;
    for(let i = 1; i <= n; i++) {
      res = res * i
    }
    return res;
  }
};
console.log(fat(4))


// const fat = n => (n<=1) ? 1 : fat(n-1) * n

// console.log(fat(3))s