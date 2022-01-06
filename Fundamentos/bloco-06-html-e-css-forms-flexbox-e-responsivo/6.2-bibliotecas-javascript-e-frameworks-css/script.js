const statesOptions = ["Acre", "Alagoas", "Amazonas", "Amapá", "Bahia", "Ceará", "Distrito Federal", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rondônia", "Rio Grande do Sul", "Roraima", "Santa Catarina", "Sergipe", "São Paulo", "Tocantins"]
const main = document.getElementById('page')
const selectState = document.getElementById('select-state')
const submit = document.getElementById('submit-btn')
const resetBtn = document.getElementById('reset-btn')
const userName = document.querySelector('[name=name]')
const email = document.querySelector('[name=email]')
const cpf = document.querySelector('[name=cpf]')
const address = document.querySelector('[name=address]')
const city = document.querySelector('[name=city]')
const abstract = document.querySelector('[name=abstract]')
const position = document.querySelector('[name=position]')
const description = document.querySelector('[name=description]')
const date = document.querySelector('[name=date]')



function createState(){
  for(i = 0; i < statesOptions.length; i++) {
    let option = document.createElement('option')
    option.value = statesOptions[i]
    option.innerText = statesOptions[i]
    selectState.appendChild(option)
  }
}

function showInfo() {
  let divInfo = document.createElement('div')
  divInfo.id = 'divInfo'
  let nameInfo = document.createElement('p')
  nameInfo.innerHTML = 'Nome: ' + userName.value
  divInfo.appendChild(nameInfo)
  let emailInfo = document.createElement('p')
  emailInfo.innerHTML = 'Email: ' + email.value
  divInfo.appendChild(emailInfo)
  let cpfInfo = document.createElement('p')
  cpfInfo.innerHTML = 'CPF: ' + cpf.value
  divInfo.appendChild(cpfInfo)
  let addressInfo = document.createElement('p')
  addressInfo.innerHTML = 'Endereço: ' + address.value
  divInfo.appendChild(addressInfo)
  let cityInfo = document.createElement('p')
  nameInfo.innerHTML = 'Cidade: ' + city.value
  divInfo.appendChild(cityInfo)
  let abstractInfo = document.createElement('p')
  abstractInfo.innerHTML = 'Resumo do currículo: ' + abstract.value
  divInfo.appendChild(abstractInfo)
  let positionInfo = document.createElement('p')
  positionInfo.innerHTML = 'Cargo: ' + position.value
  divInfo.appendChild(positionInfo)
  let descriptionInfo = document.createElement('p')
  descriptionInfo.innerHTML = 'Descrição do cargo: ' + description.value
  divInfo.appendChild(descriptionInfo)
  let dateInfo = document.createElement('p')
  dateInfo.innerHTML = 'Data de início: ' + date.value
  divInfo.appendChild(dateInfo)

  main.appendChild(divInfo)

}

function validation() {
  if(userName.value.length > 40 || userName.value.length === 0) {
    alert('Nome Inválido')
  }
  else if (email.value.length > 50|| email.value.length === 0) {
    alert('Email Inválido')
  }
  else if (cpf.value.length > 11|| cpf.value.length === 0) {
    alert('CPF Inválido')
  }
  else if (address.value.length > 200|| address.value.length === 0) {
    alert('Endereço Inválido')
  }
  else if (city.value.length > 28|| city.value.length === 0) {
    alert('Cidade Inválida')
  }
  else if (abstract.value.length > 1000|| abstract.value.length === 0) {
    alert('Resumo do currículo Inválido')
  }
  else if (position.value.length > 500|| position.value.length === 0) {
    alert('Cargo Inválido')
  }
  else if (date.value.length > 500|| date.value.length === 0) {
    alert('Data Inválida')
  } else {
    showInfo()
  }
}

function sendInfo(event) {
  event.preventDefault()
  validation()
}

function reset() {
  let div = document.getElementById('divInfo')
  if(div !== null){
    div.remove()
  }

}
submit.addEventListener('click', sendInfo)
resetBtn.addEventListener('click', reset)

window.onload = createState()