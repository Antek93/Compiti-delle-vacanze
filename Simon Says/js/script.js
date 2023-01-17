// 1.:  Creare una formula per generare 5 numeri casuali
// 1.a: Creare un array per contenere i numeri casuali
// 2.:  Stampa i numeri generati sulla pagina
// 3.:  Dopo 30 secondi:
// 3.a: - i numeri scompaiono
// 3.b: - l'utente deve inserire i numeri che si ricorda tramite prompt
// 4.a: Il computer risponde con quanti numeri giusti è stato risolto il gioco
// 4.b: Il computer risponde con quali numeri giusti è stato risolto il gioco

/*-------------------Funzione per generare un numero random compreso tra 1 e 100-----------------*/

function randomNumbers () {
    return (Math.floor(Math.random() * 100) + 1);
}

/*----------------------Array per inserire i numeri generati randomicamente----------------------*/

let boxNumbers = [];

/*-------Ciclo for per generare 5 volte dei numeri randomici e inserirli nell'array--------------*/

for (let i = 0; i <= 4; i++) {

    let randomNums = randomNumbers();
    boxNumbers.push(randomNums);

}

/*-----------------------------------Selezionati elementi dal DOM--------------------------------*/

let boxUno = document.getElementById('First-box');
let boxDue = document.getElementById('Second-box');
let boxTre = document.getElementById('Third-box');
let boxQuattro = document.getElementById('Fourth-box');
let boxCinque = document.getElementById('Fifth-box');

/*------------------------------------Creati Array colori e box----------------------------------*/


let megaBox = [boxUno, boxDue, boxTre, boxQuattro, boxCinque];


/*----------------------Funzione per assegnare elementi al dom ----------------------------------*/


for (let i = 0; i <= 4; i++) {
    megaBox[i].innerHTML = boxNumbers[i];
}

/*-------------------------Dopo 30 secondo i numeri scompaiono-----------------------------------*/


setTimeout(function () {


    for (let i = 0; i <= 4; i++) {

        megaBox[i].innerHTML = '?';
        
    }

/*-------------------------Dopo 1 secondo compare alert TIME OUT--------------------------------*/

    setTimeout(function () {

        alert('TIME OUT');
    
    }, 3000);

}, 30000);


/*---------------------------------Creazione box colori-----------------------------------------*/

let orange = 'arancione';
let blue = 'blu';
let pink = 'rosa';
let purple = 'viola';
let yellow = 'giallo';
let colorBox = ['arancione', 'blu', 'rosa', 'viola', 'giallo'];
let userNumber = [];


/*-----------------------------Creazione ciclo per ricevere num da utenti------------------------*/
setTimeout(function () {

    for (let i = 0; i <= 4; i++) {

        let number = 0;
        number = parseInt(prompt('Inserisci il numero del box' + ' ' + colorBox[i] + ':'));
        userNumber.push(number);
        console.log('userNumber:', userNumber)
        console.log('ordien colori:', colorBox[i])

    }


    while (isNaN(colorBox)) {

            alert('Puoi inserire solo numeri');
            colorBox = parseInt(prompt('Inserisci il numero del box' + ' ' + colorBox + ':'));

        }

}, 33000);



/*--------------------------Applicata funzione 5 volte tramite ciclo for-------------------------*/


setTimeout(function () {

    for(let i = 0; i <= 4; i++) {

     myFunction();
     console.log()
     
    }

    for(let i = 0; i <= 4; i++) {
    
    verifica(userNumber[i], boxNumbers[i], megaBox[i]) //verifica box
    }
    setTimeout(function () {

        alert("Il tuo punteggio è: " + '' + score + '')
    
    }, 3000);



}, 35000);

/*----------------------------Creata funzione per verifica punteggio----------------------------*/

let score = 0;

function verifica(numUtente, arraycasuale, box) {

    if(numUtente == arraycasuale) {

        score = score + 1;
        box.classList.add('corretto');
        

    } else {
        box.classList.add('scorretto');
        
    }


}