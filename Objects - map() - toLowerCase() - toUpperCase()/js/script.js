console.log('HI, I am java and I am working fine');

// - Creare un array base:

let basicArray = ['pippo', 'PLUTO', 'Paperino'];

// Creare un array da manipolare:

let newArray   =    basicArray.map(function(converter) {
// nuovo array = vecchio array.map(funzione(NOME DELLA FUNZIONE) {

// - Creata una variabile per modifica: Prima lettera in maiuscola:

  // per ogni elemento: ogni lettera corrisponde ad una position: p(0)i(1)p(2)p(3)o(4) = pippo:

  let primaLettera = converter.charAt(0).toUpperCase();//charAt seleziona solo l'elemento (0) - .toUpperCase trasforma l'elemento in maiuscolo
  let altreLettere = converter.slice(1).toLowerCase(); //Slice taglia a partire da (1), quindi da ippo - .toLowerCase trasforma l'elemento in minuscolo

  return primaLettera + altreLettere;
});

console.log(newArray); // Output: [ 'Pippo', 'Pluto', 'Paperino' ]


