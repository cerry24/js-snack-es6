// Crea un array di oggetti che rappresentano degli animali.
// Ogni animale ha un nome, una famiglia e una classe.
// Es:

// [
//   { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
//   { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
//   { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
// ]

// Crea un nuovo array con la lista dei mammiferi.
// Bonus 1 : trasforma ogni valore di ogni animale in tutto maiuscolo tranne la prima lettera, tipo // leone => lEONE, canidi => cANIDI









const animals = [
    {
        name : 'leone',
        family : 'felidi',
        class : 'mammiferi',
    },
    {
        name : 'cane',
        family : 'canidi',
        class : 'mammiferi',
    },
    {
        name : 'gallina',
        family : 'fasianidi',
        class : 'uccelli',
    },
    {
        name : 'cavallo',
        family : 'equini',
        class : 'mammiferi',
    },
    {
        name : 'delfino',
        family : 'delfinidi',
        class : 'mammiferi',
    },
    {
        name : 'capra',
        family : 'bovidi',
        class : 'mammiferi',
    },
    {
        name : 'cinghiale',
        family : 'suidi',
        class : 'mammiferi',
    },
    {
        name : 'cervo',
        family : 'cervidi',
        class : 'mammiferi',
    },
];


const mammals = animals.filter((animal) => animal.class === 'mammiferi');

console.log(mammals);

const newMammals = mammals.map((mammal) => {
    mammal.name = mammal.name.charAt(0) + mammal.name.substring(1).toUpperCase();
    mammal.family = mammal.family.charAt(0) + mammal.family.substring(1).toUpperCase();
    mammal.class = mammal.class.charAt(0) + mammal.class.substring(1).toUpperCase();

    return mammal;
});

console.log(newMammals);