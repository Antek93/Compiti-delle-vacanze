console.log('HI, I am java and I am working fine');

let invitati = ['giacomo', 'matteo', 'luca', 'francesco', 'giada', 'eleonora'];

let userName = prompt('Inserisci il tuo nome');

let i = 0;

let flag = false;

while ((flag == false) && (i < invitati.length))  {

   if (userName == invitati[i]){
      flag = true;
   }

   i++

}

if (flag == true) {
    alert('Benvenuto alla festa');

} else {
    alert('Non sei ammesso alla festa');
    prompt('Inserisci il tuo nome');

}
