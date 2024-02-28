// ``
console.log('works');

// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
const start = document.querySelector('.btn');
const container = document.querySelector('.container')

const maxCells = 100;
const markup = `<ul class="list"><li></li></ul>`


start.addEventListener('click', function (e) {
    console.log('funziona al click');
    for (let i = 1; i <= maxCells; i++) {
        container.insertAdjacentHTML('beforeend', markup);
        console.log(container);
        
        // Ogni cella ha un numero progressivo, da 1 a 100.
        const ulList = document.querySelector('.list')
        const markupList = `<li>${i}</li>`
        console.log(markupList);    
        ulList.innerHTML += markupList;

    }
})




    
