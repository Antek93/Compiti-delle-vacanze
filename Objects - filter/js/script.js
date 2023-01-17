console.log('HI, I am java and I am working fine')

// Crea un array composto da 10 automobili:

// Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

// Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.

// Infine stampa separatamente i 3 array.



// - Creare una array con 10 oggetti e con 3 proprietà:

let cars = [
  {marca: 'Fiat', modello: 'Punto', alimentazione: 'benzina'},
  {marca: 'BMW', modello: '320i', alimentazione: 'benzina'},
  {marca: 'Ford', modello: 'Focus', alimentazione: 'diesel'},
  {marca: 'Opel', modello: 'Astra', alimentazione: 'gpl'},
  {marca: 'Tesla', modello: 'Model 3', alimentazione: 'elettrico'},
  {marca: 'Renault', modello: 'Clio', alimentazione: 'benzina'},
  {marca: 'VW', modello: 'Golf', alimentazione: 'metano'},
  {marca: 'Peugeot', modello: '308', alimentazione: 'benzina'},
  {marca: 'Audi', modello: 'A4', alimentazione: 'diesel'},
  {marca: 'Seat', modello: 'Ibiza', alimentazione: 'benzina'}
];

// - Utilizza la funzione array.filter per creare tre array separati per tipo:

let benzina = cars.filter(car => car.alimentazione === 'benzina'); // Array a benzina
let diesel = cars.filter(car => car.alimentazione === 'diesel'); // Array a diesel
let altre = cars.filter(car => car.alimentazione !== 'benzina' && car.alimentazione !== 'diesel');
                                                        //Array che non sia né benzina né diesel
// Stampa in console

console.log('Benzina:', benzina);   
console.log('Diesel:', diesel);
console.log('Altre:', altre);



