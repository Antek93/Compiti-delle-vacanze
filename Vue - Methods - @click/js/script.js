console.log('Hi, I am java and I am working fine');

// ↓ → ← ↑ ✓ ✕ :utilities

const { createApp } = Vue;

createApp({
    data() {
        return {
            greeting: 'Ciao Antonio',
            oggetto: {
                esempio1: 'Ciao',
                esempio2: 'Come va?'
            }
        }
    },
    methods: {
        functionExample: function () {
            return  console.log('Hai attivato la funzione contenuta in Methods chiamata functionExample');
        },
        
    }
}).mount('#app');