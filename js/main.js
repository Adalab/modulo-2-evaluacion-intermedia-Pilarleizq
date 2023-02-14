'use strict';

// Variables 

const number = document.querySelector('.js__number');
const button = document.querySelector('.js__button');
const pista = document.querySelector('.js__pista');
const intentos = document.querySelector('.js__intentos');

const numberRandom = getRandomNumber(100)
    console.log(numberRandom);

var contador = 0;

// Funciones 

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
    }

function compareNumber(){
    const numberWrite = number.value;

if (numberWrite < numberRandom){
    return ('Demasiado bajo.')
} else if (numberWrite > numberRandom){
    return  ('Demasiado alto.')
} else if (numberWrite == numberRandom){
    return ('Has ganado campeona!!!!')
} else {
    return ('El número debe estar entre 0 y 100')
}

}

function clickButton(event) {
    pista.value = compareNumber();
}

button.onclick = function () {
    contador++;
    document.getElementById("intentos").value = `Número de intentos: ${contador}`

}

function handleClickButton (event){
    event.preventDefault();
    clickButton();
    pista.value = compareNumber ();
}

// Eventos 

button.addEventListener ('click', handleClickButton);
