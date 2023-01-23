console.log('Hi, I am java and I am working fine');

// :utilities: ✕   ✓   ↑   ←   →   ↓

// what's happening?

const { createApp } = Vue; // E' un deconstructuring della funzione create App


// createApp si compone di:

// Data and methods

createApp({  // oggetto esterno

    
    data() {  // funzione                                       In data inseriamo tutte la variabili che vogliamo utilizzare
        return { // ritorno di funzione                         all'interno del nostro html
            greeting: 'Ciao Antonio',
            oggetto: {
                esempio1: 'Ciao',
                esempio2: 'Come va?'
            }
        }
    },
    methods: { // funzione
        functionExample: function () {
            return  console.log('I am Vue and I am working properly'); //ritorno di funzione
        },
        
    }
}).mount('#app'); // collega (.mount) l'oggetto createApp con l'html tramite il div con ID 'app'