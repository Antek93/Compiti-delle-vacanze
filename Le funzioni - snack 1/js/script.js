console.log('HI, I am java and I am working fine');

// Esercizio: generare 10 numeri random (uno con ciclo for e uno while) attraverso una funzione e stamparli

// STEP:

// 1. Definire una funzione per generare un numero random 
// 2. Definiamo un ciclo for da 0 a 9 
// 3. Per ogni iterazione del ciclo:
//   - genera un nuremo random tramite funzione
//   - stampo il numero appena generato in console

function generaNumeroRandom(num) {
    
    const numeroRandom = 3 + num;
    
    return numeroRandom;
}


for (let i = 0; i < 10; i++) {

    const numero = generaNumeroRandom(i); // avrà 10 interazioni del ciclo, dove il valore i viene sommato a 3

    console.log(numero);
}

//__________________________________________________________________________________________________________________

// Math.floor(numero) --> arrotonda per difetto

//Math.random()  --> genera un numero casuale tra 0 e 1 (1 escluso)

//Math.random() * numero = (genera un numero casuale tra 0 e 1 (1 escluso)) * numero --> equivale alla percentuale di un numero

// SE VOGLIO UN NUMERO COMPRESO TRA 0 e 10 -> Math.random() * 11;
// SE VOGLIO UN NUMERO COMPRESTO TRA 1 e 10 -> Math.floor(Math.random() * 10) + 1;

//Math.floor(Math.random() * 100);



// Funzione:

function generaNumeroRandomDue(min, max) { // basta sostituire il num MIN e il num MAX per applicare la formula della funzione "genera num. random" 
    
    const numeroRandomDue = Math.floor(Math.random() * (max - min + 1)) + min; //formula "genera num. random"
    
    return numeroRandomDue;

}

// Ciclo for con applicazione della funzione: 

for (let i = 0; i < 10; i++) { // crea 10 interazioni

    const num = generaNumeroRandomDue(1, 5); // genera dieci numeri random tra 1 e 5

    console.log(num);

}

// Ciclo for con applicazione della funzione: 

for (let i = 0; i < 10; i++) { //crea 10 interazioni

    const num = generaNumeroRandomDue(90, 100); // genera dieci numeri random tra 90 e 100

    console.log(num);

}



