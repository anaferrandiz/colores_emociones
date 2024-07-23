'use strict'

// FONDOS ALEATORIOS

// COLORES QUE HEMOS DECIDIDO PONER
const colors = [
    "#ffff4d",
    "#1e288b",
    "#e83b47",
    "#000",
    "#fabe7d",
    "#befa7d",
];

// EMOCIONES ASOCIADAS A LOS COLORES
const emociones = [
    "Alegría",
    "Tristeza",
    "Rabia",
    "Miedo",
    "Vergüenza",
    "Calma",
];

function getRandomNumber() {
    // Aquí le estamos diciendo que coja un número aleatorio en cuanto a las posiciones de los colores que hemos puesto.
    return Math.floor(Math.random() * colors.length);
}

const btn = document.getElementById('flip-btn');
const color = document.querySelector('.color');
const testigo = document.querySelector('.testigo');
const emocion = document.querySelector('.emocion');

function asignaColores(){
    const randomNumber = getRandomNumber();
    let colorAsignado = colors[randomNumber];
    let emocionAsignada = emociones[randomNumber];
    
    document.body.style.backgroundColor = colorAsignado;

    color.textContent = colorAsignado;
    color.style.color = colorAsignado;
    testigo.textContent = colorAsignado;
    emocion.textContent = emocionAsignada; // Asigna la emoción correspondiente
}

btn.addEventListener('click', function(){
    asignaColores();
});

document.addEventListener('DOMContentLoaded', function(){
    asignaColores();
});
