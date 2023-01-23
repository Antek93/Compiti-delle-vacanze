console.log('Hi, I am java and I am working fine');

// ↓ → ← ↑ ✓ ✕ :utilities

const { createApp } = Vue;

createApp({
    data() {
        return {
            greeting: 'Ciao Antonio',
            isLogged: false, //PRIMA CONDIZIONE - parte da falsa
            casoUno: 'Sono IF',
            casoDue: 'Sono ELSE',
            //ARRAY di ELEMENTI
            list: [
                'Acqua',
                'Patate',
                'Aglio',
                'Pomodoro',
            ],
            //OGGETTO di ELEMENTI
            listDue: {
                first: 'Acqua',
                second:'Patate',
                third: 'Aglio',
                fourth: 'Pomodoro',
            },
        }
    },
    methods: {
        functionExample: function () {
            return  console.log('I am Vue and I am working properly');
        },
        
    }
}).mount('#app');


