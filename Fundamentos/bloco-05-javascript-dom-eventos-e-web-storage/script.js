let body = document.querySelector('body')
let colorB = document.querySelector('.colorB') 
let colorT = document.querySelector('.colorT') 
let fontS = document.querySelector('.fontS') 
let lineH = document.querySelector('.lineH') 
let fontF = document.querySelector('.fontF')




function changeBackground(){
    let b =  localStorage.setItem('colorB', colorB.value)
    body.style.backgroundColor = localStorage.getItem('colorB')
    console.log(b)

}

function changeColor(color){
    let c =  localStorage.setItem('colorT', colorT.value)
    body.style.color = localStorage.getItem('colorT')

}

function changeSize(size){
    let s =  localStorage.setItem('fontS', fontS.value)
    body.style.fontSize = localStorage.getItem('fontS') + 'px'

}


function changeHeight(){
    let h =  localStorage.setItem('lineH', lineH.value)
    body.style.lineHeight = localStorage.getItem('lineH') + 'px'
}


function changeFamily(){
    let f =  localStorage.setItem('fontF', fontF.value)
    body.style.fontFamily = localStorage.getItem('fontF')
}

window.onload = function(){
    body.style.backgroundColor = localStorage.getItem('colorB')
    body.style.color = localStorage.getItem('colorT')
    body.style.fontSize = localStorage.getItem('fontS') + 'px'
    body.style.lineHeight = localStorage.getItem('lineH') + 'px'
    body.style.fontFamily = localStorage.getItem('fontF')
}
colorB.addEventListener('input', changeBackground)
colorT.addEventListener('input', changeColor)
fontS.addEventListener('input', changeSize)
lineH.addEventListener('input', changeHeight)
fontF.addEventListener('input', changeFamily)