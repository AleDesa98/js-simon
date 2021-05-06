// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function isInArray (element, array) {
    for (var i = 0; i < array.length; i++) {
        if (element == array[i]) {
            return true;
        }
    }
    return false;
}

var numeri = [];
var numeriUtente = [];
var numeriCorretti = [];
for (i = 0; i < 5; i++) {
    numeri.push (getRandomNumber(1, 5));
}
console.log(numeri);
alert (numeri)

setTimeout(function () {
    for (i = 0; i < 5; i++) {
        numeriUtente.push (parseInt(prompt ("Inserire il numero")));
        // if (isInArray(numeriUtente[i], numeri) ) {
        //     console.log("Numero inserito correttamente");
        // } else {
        //     i = 5;
        //     console.log("Hai perso!");
        // }
        if (numeriUtente[i] == numeri[i]) {
            numeriCorretti.push (numeriUtente[i])
        }
    }
    alert ("I numeri correttamente inseriti sono " + numeriCorretti + " Score: " + numeriCorretti.length);
    
    console.log(numeriUtente);
}, 30000);

