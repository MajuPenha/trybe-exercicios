const compare = (bet, lotNumbers) => bet === lotNumbers;

const result = (bet, callback) => {
  const lotNumbers = Math.floor(Math.random()*5 + 1);
  console.log(lotNumbers);

  return callback(bet, lotNumbers) ? 'Congratulations, you won!! :)' : 'Try again :('
  
};

console.log(result(5, compare));