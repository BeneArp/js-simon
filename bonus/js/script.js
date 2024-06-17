// Descrizione:
// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// RIFERIMENTI DOM
const container = document.getElementById("memoria-numeri");
const tempo = document.getElementById("timer");
const outputPunteggio = document.getElementById("risultato");


// RIFERIMENTI BOTTONI DOM
const numeroZero = document.getElementById("zero");
const numeroUno = document.getElementById("uno");
const numeroDue = document.getElementById("due");
const numeroTre = document.getElementById("tre");
const numeroQuattro = document.getElementById("quattro");
const numeroCinque = document.getElementById("cinque");
const numeroSei = document.getElementById("sei");
const numeroSette = document.getElementById("sette");
const numeroOtto = document.getElementById("otto");
const numeroNove = document.getElementById("nove");
const verifica = document.getElementById("verifica");




// VARIABILI GLOBALI
let tempoTimer = 10;


// parte il timer di 30 secondi
let timer = setInterval(

    function(){
        tempo.innerHTML = tempoTimer;

        let punteggio = 0;
        let numeroUtente;
        const numeriIndovinati = [];

        if(tempoTimer === 0){
            clearInterval(timer);
            
            
                numeroZero.addEventListener("click",
                    function(){
                        numeroUtente = 0

                        if(serieNumeri.includes(numeroUtente)){
                            numeriIndovinati.push(numeroUtente);
                            punteggio++;
                        }
                    }
                )
                
                numeroUno.addEventListener("click",
                    function(){
                        numeroUtente = 1

                        if(serieNumeri.includes(numeroUtente)){
                            numeriIndovinati.push(numeroUtente);
                            punteggio++;
                        }
                    }
                )
                
                numeroDue.addEventListener("click",
                    function(){
                        numeroUtente = 2

                        if(serieNumeri.includes(numeroUtente)){
                            numeriIndovinati.push(numeroUtente);
                            punteggio++;
                        }
                    }
                )

                numeroTre.addEventListener("click",
                    function(){
                        numeroUtente = 3

                        if(serieNumeri.includes(numeroUtente)){
                            numeriIndovinati.push(numeroUtente);
                            punteggio++;
                        }
                    }
                )
            
                numeroQuattro.addEventListener("click",
                    function(){
                        numeroUtente = 4

                        if(serieNumeri.includes(numeroUtente)){
                            numeriIndovinati.push(numeroUtente);
                            punteggio++;
                        }
                    }
                )

                numeroCinque.addEventListener("click",
                    function(){
                        numeroUtente = 5

                        if(serieNumeri.includes(numeroUtente)){
                            numeriIndovinati.push(numeroUtente);
                            punteggio++;
                        }
                    }
                )

                numeroSei.addEventListener("click",
                    function(){
                        numeroUtente = 6

                        if(serieNumeri.includes(numeroUtente)){
                            numeriIndovinati.push(numeroUtente);
                            punteggio++;
                        }
                    }
                )

                numeroSette.addEventListener("click",
                    function(){
                        numeroUtente = 7

                        if(serieNumeri.includes(numeroUtente)){
                            numeriIndovinati.push(numeroUtente);
                            punteggio++;
                        }
                    }
                )

                numeroOtto.addEventListener("click",
                    function(){
                        numeroUtente = 8

                        if(serieNumeri.includes(numeroUtente)){
                            numeriIndovinati.push(numeroUtente);
                            punteggio++;
                        }
                    }
                )

                numeroNove.addEventListener("click",
                    function(){
                        numeroUtente = 9

                        if(serieNumeri.includes(numeroUtente)){
                            numeriIndovinati.push(numeroUtente);
                            punteggio++;
                        }
                    }
                )

            verifica.addEventListener("click",
                function(){
                    outputPunteggio.style.display = "block";
                    outputPunteggio.innerText = `Hai indovinato i numeri ${numeriIndovinati}
                    il tuo punteggio è: ${punteggio}`
                }
            )

        }else{
            tempoTimer--;
        }

    }, 1000
);


// creo array con una serie di numeri casuali usando la funzione
const serieNumeri = randomNumbersArray(10, 0, 5);


// mostro i 5 numeri casuali in pagina
container.innerText = serieNumeri;




// i nuemri spariscono
setTimeout(numeriScompaiono, 11000);

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
