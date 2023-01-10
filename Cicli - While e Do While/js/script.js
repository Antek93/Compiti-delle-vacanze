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
    console.log('ciclo for:', i); //stampo in console tutti i numeri da 1 a 10
}

// ciclo while

let j = 1; // 1 è il contatore

while (j <=10) { //Finché il valore di J è minore o = a 10:

    console.log('ciclo while:', j); // stampa il valore di J in console

    j++ // modalità di avanzamento // poi incrementa di 1
}

// Il ciclo while continuerà a stampare fino a quando incrementando di 1 in 1 la variabile j non arriva a 10
// Una volta a 10 la condizione tra parentesi viene invalidata
// il ciclo quindi si interrompe

// Il ciclo for e while sono equivalenti, va scelto il piu comodo in base al caso
// Generalmente for ha un numero definito di esecuzioni e while un ciclo non definito

const students = [
    'Alice',
    'Bartolo',
    'Claudia',
    'Damiano'
];

for (let i = 0; i < students.length; i++) {
    console.log('ciclo for:', i, students[i]);

}

let h = 0;
while (h < students.lenght) {
    console.log('ciclo while', h, students[h]);

    h++;
}

///////////////////////////////////////////////////////////////

const items = [
    'Latte',
    'Uova',
    'Pane',
    'Carne',
    'Acqua',
    'Fazzoletti'
];

console.log('items:', items, typeof items);

const itemsList = document.getElementById('items');

// Ciclo for per prendere tutti gli elementi 

for (let i = 0; i < items.length; i++) {
    console.log('items', items[i])

    // Sostituire su html i li con il contenuto  del for 

itemsList.innerHTML += `<li>${items[i]}</li>`;

// oppure creando un elemento nuovo

// const newLi = document.createElement('li');
// newLi.innerHTML = items [i];
// itemsList.append(newLi); // APPEND INSERISCE ALL'INTERNO DEL TAG ID SELEZIONATO
}

//_____________________________________________________________________________________________________________________________________________________-
// Come richiedere un input dall'utente all'infinito? - CICLO WHILE

// Chiedere all'utente la sua età e poi stamparla
// -- continuare a chiedere l'utente il valore corretto finché non ne viene inserito uno

// // COME FACEVAMO PRIMA con FOR 

// const age = parseInt(prompt('Inserisci la tua età:'));

// if (isNaN(age)) {

//     alert('hai inserito un valore non valido! Aggiorna la pagina per riprovare')

// } else {

//     console.log('age', age)
// }

// COME FACCIAMO ORA con WHILE 

let ageWhile = parseInt(prompt('Inserisci la tua età:'));

while (isNaN(ageWhile)) {

    ageWhile = parseInt(prompt('Valore inserito non valido! Inserisci la tua età'))

}

console.log('età utente', ageWhile);


// // CICLO DO WHILE 

// // simile al while ma controlla la condizione solo dopo aver eseguito

// let ageWhile2 = parseInt(prompt('Inserisci la tua età:'));

// do {

//     ageWhile = parseInt(prompt('Valore inserito non valido! Inserisci la tua età'))

// } while (isNaN(ageWhile2))

// console.log('età utente', ageWhile2);