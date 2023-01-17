console.log('HI, I am java and I am working fine'); // ↑ ↓

// SetInterval attiva una funzione all'infinito, ogni tot di tempo


// variabile = setInterval(nomeDellaFunzione, tempo in millisecondi)
const clock = setInterval(myFunction, 3000); // OGNI 3 SECONDI

function myFunction () {
    alert('Hello')
}

//Per stoppare l'intervallo
clearInterval(clock);
// ↑ voce fissa (nome della variabile)



