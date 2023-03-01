'use strict';

//Creare input utente per inserire una parola  
const userWord = prompt('Inserisci una parola per sapere se è un palindromo').toLocaleLowerCase();

//Inverte la parola e inserisce le lettere in un array
function reverseWord(word) {
    const wordReverserd = [];
    for (let i = word.length - 1; i >= 0; i--) {
        wordReverserd.push(word[i]);  
    }
    return wordReverserd;
    //senza utilizzare array - prova per verifica se possibile
    // let wordReverserd = '';
    // for (let i = word.length - 1; i >= 0; i--) {
    //     wordReverserd += word[i];
    // }
    // return wordReverserd;
}

//Confrontare la variabile parola inserita con l'array inverso
function confront(user, reverse) {
    let check = false;
    for (let i = 0; i < user.length; i++) {
        if (user[i] != reverse[i]){
            return false;
        }else {
            check = true;
        }
    }
    return check;
}

//Inverte la parola fornita
const wordReverserd = reverseWord(userWord);
//Controlla le due parole
const checked = confront(userWord, wordReverserd);

if (checked) {
    console.log('Uguali');
} else {
    console.log('Diverse');
}