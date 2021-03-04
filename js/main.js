let text = document.querySelector('.text')
let textLorem = 'Lorem text block'

function showText() {
    text.textContent = textLorem
}

text.addEventListener('click', showText)