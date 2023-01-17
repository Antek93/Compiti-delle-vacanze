console.log('HI, I am java and I am working fine');

// Crea un array di oggetti che rappresentano delle persone.
// Ogni persona ha un nome, un cognome e un’età.
// Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.

const people = [

    { firstName: 'Antonio', surname: 'Savino', age: 16 },
    { firstName: 'Davide', surname: 'De Padova', age: 26 },
    { firstName: 'Claudia', surname: 'Lella', age: 89 },
    { firstName: 'Cecilia', surname: 'Lasorella', age: 100 },
    { firstName: 'Gabriella', surname: 'Radogna', age: 14 }

];

for (let i = 0; i < people.length; i++) {


    for (let key in people[i]){

        console.log('-', key, people[i][key]);
    }

}

const drivers = [];

people.forEach(person => {

    let maggiorenne = 'è abilitato';

    if(person.age >= 18) maggiorenne = 'non è abilitato';

    drivers.push(`
    ${person.name}
    ${person.surname}
    ${maggiorenne}
    
    a guidare`
    );
});

console.log(drivers);