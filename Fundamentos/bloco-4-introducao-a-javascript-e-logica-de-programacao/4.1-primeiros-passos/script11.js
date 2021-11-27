const salario = 3000.00

if(salario <= 1556.94){
    var salarioINSS = (salario - ((salario*8)/100))
}
else if(salario >= 1556.95 && salario <= 2594.92){
    var salarioINSS = (salario - ((salario*9)/100))
}
 else if(salario >= 2594.93 && salario <= 5189.82){
     var salarioINSS = (salario - ((salario*11)/100))
 }
 else if(salario > 5189.82){
     var salarioINSS = (salario - 570.88)
 }
// ##########################
 if(salarioINSS <= 1903.98){
     var salarioFinal = salarioINSS
 }
 else if(salarioINSS >= 1903.99 && salarioINSS <= 2826.65){
     var salarioFinal = (salarioINSS - (((salarioINSS*7.5)/100) -142.80))
 }
 else if(salarioINSS >= 2826.66 && salarioINSS <= 3751.05){
     var salarioFinal = (salarioINSS - (((salarioINSS*15)/100) -354.80))
 }
 else if(salarioINSS >= 751.06 && salarioINSS <= 4664.68){
     var salarioFinal = (salarioINSS - (((salarioINSS*22.5)/100)- 636.13))
 }
 else if(salarioINSS > 4664,68){
     var salarioFinal = (salarioINSS - (((salarioINSS*27.5)/100) -869.36))
 }
console.log(salarioFinal)

