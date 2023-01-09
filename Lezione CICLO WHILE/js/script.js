console.log('HI, I am java and I am working fine')

// CICLO WHILE

// Si usa quando non sappiamo quante volte deve ripetersi il nostro ciclo

//keyword: while

// condizione: condizione da verificare per eseguire il codice fin quando la condizione tra parentesi è vera

// nelle parentesi grafffe: condizione in modo da rendere la parentesi falsa quando vogliamo terminare il ciclo

// ES:

// while (condizione) {

//     condizione per sfalsare la condizione tra parentesi
// }


// ESERCIZIO: STAMPARE I NUMERI DA 1 a 10:

// Ciclo for:

//   contatore;    cond. permanenza,  mod di avanzamento
for (let i = 1;        i <= 10;               i++) {
    console.log(i); //stampo in console tutti i numeri da 1 a 10
}

// ciclo while

let j = 1; // 1 è il contatore

while (j <=10) { //Finché il valore di J è minore o = a 10:

    console.log('ciclo while', j); // stampa il valore di J in console

    j++ // modalità di avanzamento // poi incrementa di 1
}

// Il ciclo while continuerà a stampare fino a quando incrementando di 1 in 1 la variabile j non arriva a 10
// Una volta a 10 la condizione tra parentesi viene invalidata
// il ciclo quindi si interrompe