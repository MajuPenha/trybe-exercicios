const cost = 100
const sell = 1000

let totalCost= cost + ((cost*20)/100)
let profit = sell - totalCost


if(cost < 0 || sell < 0){
    console.log('Valores invállidos')
}
else {
    
    console.log(profit)
}
