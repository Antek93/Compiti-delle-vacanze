console.log('HI, I am java and I am working fine')

// Le funzioni

// Servono per riutilizzare un pezzo di codice piu volte 

/* Come si scrive una funzione */

// keyword: function;
// nome funzione: si imposta il nome della funzione per poterla richiamare successivamente + ();
// nelle parentesi graffe inseriamo il codice che vogliamo inserire;

function miaFunzione () {
    
}

// All'interno delle parentesi tonde: argomenti;

// Gli argomenti ci possono essere se necessari, se non viene specificato si parla di funzione ANONIMA

// Possono avere un nome qualunque, ma è preferibile utillizare un nome appropriato per anticipare il lavoro da farsi

//Per restituire un valore si usa il keyword RETURN

// keyword   //Nome funzione    //Argomenti
function     mia2Funzione      (num1, num2) {
    
    const risultato = num1 + num2;

    return risultato; //quando scriviamo RETURN la funzione TERMINA, tutto il codice dopo non viene eseguito.
}

//______________________________________________________________________________________________________________

function sommaNumeri (num1, num2) { 
    
    const risultato = num1 + num2;

    return risultato;
}

const somma = sommaNumeri (49, 2); //Definiti num1 e num2 e richiamata la funzione sommaNumeri, viene eseguita l'operazione della funzione

console.log (somma); // darà il risultato corretto della funzione sommaNumeri, poichè è stata richiamata; (51)
// console.log (risultato);

     //↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑//
// Darebbe errore se lavorasse, perché risultato esiste solo nello scope della funzione;

//_________________________________________________________________________________________________________________



