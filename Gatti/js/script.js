console.log('HI, I am java and I am working fine');

// Numero totale gatti presenti 

let cats = prompt('Inserisci numeri di gatti');
console.log('cats', cats, typeof cats);
let gatti = document.getElementById('gatti');
gatti.innerHTML = cats;

// Numero di gatti per fila

let row = prompt('Inserisci il numero di file');
console.log('row', row, typeof row);
let file = document.getElementById('file');
file.innerHTML = row;

// Numero di file

let result = document.getElementById('result');
let plus = (cats / row);
result.innerHTML = Math.floor(plus);

// Avanzi di gatti
let surplus = document.getElementById('surplus');
let modulo = (cats % row);
console.log('modulo di cats / row', modulo);
surplus.innerHTML = modulo;




