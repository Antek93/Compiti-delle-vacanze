console.log('HI, I am java and I am working fine'); // ↑ ↓

// Javascript conosce il tempo,
// queste funzioni ci permettono di approcciarci alla programmazione ASINCRONA.

// Asincrona --> In informatica, modalità di trasmissione dati che non dipende dal compiersi di altri processi.

// setTimeout ---> attiva una funzione dopo un certo tempo


//--------------------------Funzione SENZA argomenti:------------------------------------//
//Verrà eseguita questa funzione dopo 3000 millisecondi

function saluta () {

    alert('ciao 1')
}

    setTimeout    (saluta,         3000) //inteso come millisecondi
//       ↑           ↑               ↑
//  setTimeout(nomeFunzione, tempoDaAspettare);


//----------------------------Funzione CON argomenti-------------------------------------//
//Verrà eseguita questa funzione immediatamente


function saluta () {
    alert('ciao 2')
}

    setTimeout    (saluta(),         3000) //inteso come millisecondi
//       ↑           ↑               ↑
//  setTimeout(nomeFunzioneCON ARGOMENTO, tempoDaAspettare);

//----------------------------------Altra sintassi---------------------------------------//

setTimeout(function () {
    alert('ciao3')
}, 4000);



