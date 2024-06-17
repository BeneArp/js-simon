// Descrizione:
// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


// creo array con una serie di numeri casuali usando la funzione
randomNumbersArray(11, 0, 5);






// FUNZIONI
// funzione creazione array di numeri random tra un minimo e un massimo
function randomNumbersArray (rangeNumber, min, max){

    const arrayNum = [];


    while(arrayNum.length < max){
        // creo un numero random tra un minimo e un massimo
        let randomNum = Math.floor((Math.random() * rangeNumber) + min);
    
        // controllo che il numero non sia già presente nell'array
        if(!arrayNum.includes(randomNum)){
            arrayNum.push(randomNum);
        }
    }
    
    console.log(arrayNum);

    return arrayNum;
}
