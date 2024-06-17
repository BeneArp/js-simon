// Descrizione:
// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// RIFERIMENTI DOM
const container = document.getElementById("memoria-numeri");
const tempo = document.getElementById("timer");

// VARIABILI GLOBALI
let tempoTimer = 30;


// parte il timer di 30 secondi
let timer = setInterval(

    function(){
        tempo.innerHTML = tempoTimer;

        let punteggio = 0;
        let numeroUtente;
        const numeriIndovinati = [];

        if(tempoTimer === 0){
            clearInterval(timer);

           for(let i = 0; i < serieNumeri.length; i++){
            

            // compare il prompt
            numeroUtente = parseInt(prompt("Quali erano i numeri?"));

                // controllo se i numeri inseriti dall'utente corrispodnono
                if(serieNumeri.includes(numeroUtente)){
                    numeriIndovinati.push(numeroUtente);
                    punteggio++;
                    console.log(punteggio);

                }
           }

        
        // mostro il punteggio in base alle risposte corrette
        console.log(`Hai indovianto i numeri ${numeriIndovinati}, il tuo punteggio è: ${punteggio}`);

        }else{
            tempoTimer--;
        }

    }, 1000
);


// creo array con una serie di numeri casuali usando la funzione
const serieNumeri = randomNumbersArray(11, 0, 5);


// mostro i 5 numeri casuali in pagina
container.innerText = serieNumeri;




// i nuemri spariscono
setTimeout(numeriScompaiono, 31000);

    function numeriScompaiono() {
        container.innerText = "";
    }

    





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
