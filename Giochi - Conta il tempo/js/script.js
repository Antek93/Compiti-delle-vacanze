console.log('HI, I am java and I am working fine')

let seconds = prompt('Inserisci qui i secondi da calcolare:');
console.log('Secondi inseriti:', seconds, typeof seconds);
let stamp_seconds = document.getElementById('seconds')
stamp_seconds.innerHTML += seconds;

let minutes = (seconds / 60);
console.log('Minuti calcolati:', minutes, typeof minutes);
let stamp_minutes = document.getElementById('minutes');
stamp_minutes.innerHTML += minutes;

let hours = (minutes / 60);
console.log('Ore calcolate:', hours, typeof hours);
let stamp_hours = document.getElementById('hours');
stamp_hours.innerHTML += hours;

const h = Math.floor(seconds / 3600);
const m = Math.floor((seconds % 3600) / 60);
const s = Math.round(seconds % 60);
console.log('orario', h, m, s)

let ore_calcolate = document.getElementById('ore');
ore_calcolate.innerHTML += (h + 'h');
let minuti_calcolati = document.getElementById('minuti');
minuti_calcolati.innerHTML += (m + 'm');
let secondi_calcolati = document.getElementById('secondi');
secondi_calcolati.innerHTML += (s + 's');

