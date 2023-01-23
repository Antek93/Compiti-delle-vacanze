console.log('HI, I am java and I am working fine');
    
function generaNumeroRandom(min, max) {
    
    const numeroRandom = Math.floor(Math.random() * (max - min + 1)) + min;

    return numeroRandom;

}



for (let i = 0; i < 10; i++) {

    const numero = generaNumeroRandom(1, 5);

    console.log(numero);

}