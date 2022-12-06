/***
 * 
*Crea un array di oggetti che rappresentano delle persone.
*Ogni persona ha un nome, un cognome e un'età, creiamone almeno una decina.

*Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.
 */







const people = [
    {
        firstName : 'gigi',
        lastName : 'finizio',
        age : 33,
    },
    {
        firstName : 'piero',
        lastName : 'finizio',
        age : 44,
    },
    {
        firstName : 'gianni',
        lastName : 'finizio',
        age : 18,
    },
    {
        firstName : 'luca',
        lastName : 'rossi',
        age : 12,
    },
    {
        firstName : 'mario',
        lastName : 'bianchi',
        age : 8,
    },
    {
        firstName : 'luigi',
        lastName : 'verdi',
        age : 20,
    },
    {
        firstName : 'angelo',
        lastName : 'neri',
        age : 34,
    },
    {
        firstName : 'paolo',
        lastName : 'ferrari',
        age : 2,
    },
    {
        firstName : 'mario',
        lastName : 'verdi',
        age : 28,
    },
    {
        firstName : 'luigi',
        lastName : 'rossi',
        age : 70,
    },
];


const ableToDrive = people.map((person) => {
    const isAdult = person.age >= 18;

    return `La persona ${person.firstName} ${person.lastName} ${isAdult ? 'può guidare' : 'non può guidare'}`;
});

console.log(ableToDrive);