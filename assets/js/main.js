// ``
console.log('works');

// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
const start = document.querySelector('.btn');
const container = document.querySelector('.container')

const maxCells = 100;
const markup = `<div class="box"></div>`


start.addEventListener('click', function (e) {
    console.log('funziona al click');
    for (let i = 0; i < maxCells; i++) {
        container.insertAdjacentHTML('beforeend', markup);
        console.log(container);
    }
})
