'use strict';

// Variables 

const number = document.querySelector('.js__number');
const button = document.querySelector('.js__button');
const clue = document.querySelector('.js__clue');
const attempts = document.querySelector('.js__attempts');

const numberRandom = getRandomNumber(100)
    console.log(numberRandom);

let counter = 0;

// Funciones 

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
    }

function compareNumber(){
    const numberWrite = number.value;

if (numberWrite < 1 || numberWrite > 100) {
    return ('El número debe estar entre 1 y 100')
} else if (numberWrite < numberRandom){
    return ('Demasiado bajo.')
} else if (numberWrite > numberRandom){
    return  ('Demasiado alto.')
} else if (numberWrite === numberRandom){
    return ('Has ganado campeona!!!!')
} else {
    return ('El número debe estar entre 0 y 100')
}

}

function clickButton(event) {
    clue.value = compareNumber();
}

// No sé como hacer para que sea una función que forme parte del addEventListener
button.onclick = function () {
    counter++;
    document.getElementById("attempts").value = `Número de intentos: ${counter}`

}

function handleClickButton (event){
    event.preventDefault();
    clickButton();
    clue.value = compareNumber ();

}

// Eventos 

button.addEventListener ('click', handleClickButton);
