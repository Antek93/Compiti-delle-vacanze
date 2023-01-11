console.log('HI, I am java and I am working fine');

console.log('HI, I am java and I am working fine');

//Creare una griglia 8x8
//Ogni volta che clicco su un quadrato questo si colora diversamente
// (e si decolora dopo il click)

// Selezionare il div del dom 

const gridContainer = document.getElementById('grid-container');

// Per ripetere un operazione 64 volte creiamo un ciclo FOR 

for (let i = 0; i < 64; i++) {

    //aggiungi nel div grid-container 64 volte un div class=cell
    // gridContainer.innerHTML += `<div class="cell"></div>`

    // oppure:

    const newCell = document.createElement('div');
    newCell.classList.add('cell');

    //aggiungere un evento per il click

    newCell.addEventListener('click',
            
            function() {

                console.log(this) // 
                console.log('Clicked') //in console compare la voce clicked come verifica

                if(this.classList.contains('clicked')) {
                    this.classList.remove('clicked')



                } else {

                    this.classList.add('clicked')
                    
                }

        }
        
    );

    const randomNumber = getRandomNumber(1, 64); //genera un numero casuale tra 1 e 64
    console.log(randomNumber); //stampa il numero casuale in console
    
    gridContainer.append(newCell); //attacca newCell al gridContainer
    newCell.append(randomNumber); //attacca randomNumber su newCell

    // Funzione per generare un numero casuale tra i valori compresi min e max
    function getRandomNumber(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;

    }

    //Creare un if per i numeri pari e dispari

    if(randomNumber % 2 == 0) {
    
    } 
}


