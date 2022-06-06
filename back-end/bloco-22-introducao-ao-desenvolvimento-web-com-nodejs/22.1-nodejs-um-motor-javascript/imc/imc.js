const rl = require('readline-sync');

function calc (weight, height) {
  return( weight / (height ** 2));
}

function situation () {
  const weight = rl.questionFloat('Qual é o seu peso? ');
  const height = rl.questionFloat('Qual é a sua altura? ');

  const imc = calc(weight, height);
  console.log(`IMC: ${imc.toFixed(2)}`)

  if(imc < 18.5) {
    console.log('Abaixo do peso (magreza)')
    
  } if(imc >= 18.5 && imc <= 24.9) {
    console.log('Peso normal');

  } if(imc >= 25 && imc <= 29.9) {
    console.log('Acima do peso (sobrepeso)');

  } if(imc >= 30 && imc <= 34.9) {
    console.log('Obesidade grau I');

  } if(imc >= 35 && imc <= 39.9) {
    console.log('Obesidade grau II');

  } if(imc >= 40) {
    console.log('Obesidade grau III e IV');
  }
}
situation();