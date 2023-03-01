'use strict';

//Input utente per pari o dispari e numero
let userChoice = '';
let userChoiceNumber = '';
//Controlli su input
while (userChoice != 'pari' && userChoice != 'dispari') {
    userChoice = prompt('Scegli pari o dispari').toLocaleLowerCase();
}

while (userChoiceNumber < 1 || userChoiceNumber > 5 || isNaN(userChoiceNumber)) {
    userChoiceNumber = Number(prompt('Scegli un numero da 1 a 5'));
}




//Generazione numeri casuali per dadi utente e computer
function randomDiceSum() {
    const diceComputer = Math.floor(Math.random() * (6 - 1) + 1);
    const sumDice = userChoiceNumber + diceComputer;
    return sumDice;
}

//verifica se pari o dispari
function checkEvenOdd(numberToCheck) {
    if (numberToCheck % 2 === 0) {
        return 'pari';
    }
    return 'dispari';
}

//Verifica se scelta utente corrisponde a numero estratto
function checkChoice() {
    const user = userChoice;
    const extract = evenOdd;
    if (user === extract) {
        return 'Vinci';
    }
    return 'Perdi';
}

const numberExtract = randomDiceSum();
const evenOdd = checkEvenOdd(numberExtract);


console.log('Numero generato ' + numberExtract);
console.log('Pari o dispari ' + checkEvenOdd(numberExtract));
console.log('Risultato ' + checkChoice());


