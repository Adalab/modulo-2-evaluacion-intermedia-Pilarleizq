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

function writeHTML(text){
    clue.innerHTML = text;
}

function compareNumber(){
    const numberWrite = parseInt(number.value);

if (number.value.length === 0){
    console.log('hola');
    writeHTML('Escríbe un número')
} else if (numberWrite < 1 || numberWrite > 100) {
    writeHTML('El número debe estar entre 1 y 100')
} else if (numberWrite < numberRandom){
    writeHTML('Demasiado bajo.')
} else if (numberWrite > numberRandom){
    writeHTML('Demasiado alto.')
} else if (numberWrite === numberRandom){
    writeHTML('Has ganado campeona!!!!')
} 

}

function counterButton () {
    counter++;
    attempts.innerHTML = `Número de intentos: ${counter}`
}

function handleClickButton (event){
    event.preventDefault();
    clue.value = compareNumber();
    counterButton();
}

// Eventos 

button.addEventListener ('click', handleClickButton);
