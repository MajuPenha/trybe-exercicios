function solvingProblems (num1, num2, num3) {
  const promise = new Promise ((resolve, reject) => {
    if(typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number') reject(new Error('Retorne apenas números'));

    const res = (num1 + num2) * num3;

    if(res <= 50) reject(new Error('valor muito baixo'));

    resolve(res)
  });
  return promise;
}

solvingProblems(1,10,4)
.then(result => console.log('Sucesso: %s', result))
.catch(err => console.log('erro: %s', err.message));
