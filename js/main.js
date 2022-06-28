const MAIN_CNT = document.querySelector('section')
const FIRST_CNT = document.getElementById('first_container')
const SECOND_CNT = document.getElementById('second_container')
const INCREMENT = document.createElement('button');
const DECREMENT = document.createElement('button');
const RESETTA = document.createElement('button');
const TITLE = document.getElementById('title');
const DISPLAY = document.createElement('div');
const RESULT = document.createElement('p');

// dichiarazioni del tipo degli elementi presi dal' HTML
RESETTA.type='button';
INCREMENT.type = 'button';
DECREMENT.type = 'button';

// aggiunta di testo al'interno degli elementi 
INCREMENT.textContent = '+';
DECREMENT.textContent = '-';
RESETTA.textContent = 'RS';
RESULT.textContent = 0;
TITLE.textContent = 'COUNTER';

// posizionamento degli elementi
DISPLAY.appendChild(RESULT);
MAIN_CNT.appendChild(FIRST_CNT);
MAIN_CNT.appendChild(SECOND_CNT)
SECOND_CNT.appendChild(INCREMENT);
FIRST_CNT.appendChild(DISPLAY);
FIRST_CNT.appendChild(TITLE);
SECOND_CNT.appendChild(DECREMENT);
SECOND_CNT.appendChild(RESETTA);

// aggiunta delle classi dinamiche pre dichiarate in CSS
INCREMENT.classList.add('btn');
DECREMENT.classList.add('btn');
RESETTA.classList.add('btn');
RESULT.classList.add('result');
DISPLAY.classList.add('display');

// dichiarazione ed inizializzazione della variabile che farà da contatore 
let counter = 0;

// assegnazione degli eventListener
INCREMENT.addEventListener('click', incrementa);
DECREMENT.addEventListener('click', decrementa);
RESETTA.addEventListener('click', resetta);

// funzioni richiamate dagli eventListener
function incrementa(){
    counter++;
    RESULT.innerText = counter;
}

function decrementa(){
    counter--;
    RESULT.innerText = counter;
}

function resetta(){
    counter=0;
   RESULT.innerText = counter;
}

