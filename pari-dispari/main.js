'use strict';

//SE somma % 2 = 0 e utente ha scelto pari  
//   -> Stampa vince Utente  
//ALTRIMENTI SE somma % 2 != 0 e utente ha scelto dispari  
//   -> Stampa vince Utente  
//ALTRIMENTI    
//   -> Stampa vince Computer  

//Input utente per pari o dispari
const userChoice = prompt('Scegli pari o dispari');

//Generazione numeri casuali per dadi utente e computer
function randomDiceSum() {
    const dice1 = Math.floor(Math.random() * (7 - 1) + 1);
    const dice2 = Math.floor(Math.random() * (7 - 1) + 1);
    const sumDice = dice1 + dice2;
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


