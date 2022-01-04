// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function link(event) {
  event.preventDefault()
}

function check(event) {
  event.preventDefault()
}

function text(event) {
  if (event.key !== 'a') {
    event.preventDefault()
  }
}

HREF_LINK.addEventListener('click', link)
INPUT_CHECKBOX.addEventListener('click', check)
INPUT_TEXT.addEventListener('keypress', text)
