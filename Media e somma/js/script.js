console.log('HI, I am java and I am working fine')

// X

let xbox = document.getElementById('xbox');
let x = parseInt(prompt('Inserisci il valore della x'));
console.log('Valore della x:', x, typeof x);
xbox.innerHTML += x;

// Y 

let ybox = document.getElementById('ybox');
let y = parseInt(prompt('Inserisci il valore della y'))
console.log('Valore della y:', y, typeof y)
ybox.innerHTML += y;

// Z 

let zbox = document.getElementById('zbox');
let z = parseInt(prompt('Inserisci il valore della z'));
console.log('Valore della z:', z, typeof z);
zbox.innerHTML += z;

// V 

let vbox = document.getElementById('vbox');
let v = parseInt(prompt('Inserisci il valore della v'));
console.log('Valore della v:', v, typeof v);
vbox.innerHTML += v;

// H

let hbox = document.getElementById('hbox');
let h = parseInt(prompt('Inserisci il valore della h'));
console.log('Valore della h:', h, typeof h);
hbox.innerHTML += h;

// SOMMA

let sommabox = document.getElementById('sommabox');
let sum = parseInt(x + y + z + v + h);
console.log('Somma dei valori:', sum, typeof sum);
sommabox.innerHTML += sum;

// MEDIA 


let media = document.getElementById('media');
let average = parseInt(sum / 5);
console.log('media dei valori:', average, typeof average)
media.innerHTML += average;





