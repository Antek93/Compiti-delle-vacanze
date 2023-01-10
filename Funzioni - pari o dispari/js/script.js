console.log('HI, I am java and I am working fine');

// Esercizio:
// scrivere una funzione per verificare se un numero è pari o dispari, quindi chiedere un numero all'utente e comunicargli se è pari i dispari

// STEP:

// 1. Definire una funzione che verifichi se un numero è pari o dispari
// 2. Chiedere un numero all'utente 
// 3. Utilizzando la funzione appena definita, dire all'utente se il numero che ha inserito è pari o dispari;

function pariODispari(numero) {

    if (numero % 2 == 0) {

        alert('Il numero è pari')
    
    } else {
    
        alert('Il numero è dispari')
    
    }

    // return; non viene definito, perché l'azione della funzione termina con l'alert

    // si potrebbero creare due return distinti, uoo per i pari e uno per i dispari, per riutilizzare la risposta dell'IF come un valore
}

// ESEMPIO:

// function pariODispari(numero) {

//     if (numero % 2 == 0) {

//         return 'pari';
    
//     } else {
    
//         return 'dispari';
    
//     }

   
// }

const numeroUtente = parseInt(prompt('dimmi un numero')); //Prompt per ricavare numero dall'utente

console.log ('numero utente:', numeroUtente, typeof numeroUtente); // Log per visualizzare numero inserire dall'utente

// variabile = funzione (valore da elaborare nella funzione)
pariODispari(numeroUtente); //risposta è la variabile che applica la funzione pariODispari sul numero inserito dall'utente

console.log ('risposta', risposta, typeof risposta); //NON VERRA DEFINITA PERCHE' NON E' STATO DEFINITO UN RETURN NELLA FUNZIONE





