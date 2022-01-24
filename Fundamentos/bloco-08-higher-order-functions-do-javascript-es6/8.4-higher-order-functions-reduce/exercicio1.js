const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
/*   const iteration = (result, item) => result + item.forEach(element => {
    return element; */
  // });
  const newArr = arrays.reduce((res,item) => res.concat(item), [])
  return newArr;
}
console.log(flatten())