/**
 *
 * Crea 10 oggetti che rappresentano una zucchina, 
 * indicandone per ognuno varietà, peso e lunghezza.
 *
 * Calcola quanto pesano tutte le zucchine.
 *
 */








const eggPlants = [
    {
        variety : 'nero di milano',
        weight : 80,
        length : 7,
    },
    {
        variety : 'romanesco',
        weight : 100,
        length : 12,
    },
    {
        variety : 'striato di napoli',
        weight : 200,
        length : 15,
    },
    {
        variety : 'lunga fiorentina',
        weight : 222,
        length : 22,
    },
    {
        variety : 'siciliano',
        weight : 300,
        length : 14,
    },
    {
        variety : 'siciliano',
        weight : 225,
        length : 17,
    },
    {
        variety : 'striato di napoli',
        weight : 225,
        length : 18.25,
    },
    {
        variety : 'striato di napoli',
        weight : 225,
        length : 17,
    },
    {
        variety : 'lunga fiorentina',
        weight : 189,
        length : 16.5,
    },
    {
        variety : 'striato di napoli',
        weight : 300,
        length : 17,
    },
];


let totalWeight = 0;
let totalLength = 0;

for ( i = 0; i < eggPlants.length; i++ ) {
    totalWeight += eggPlants[i].weight;

    totalLength += eggPlants[i].length;
}

const avgWeight = totalWeight / eggPlants.length;

const avgLength = totalLength / eggPlants.length;

console.log(`il peso totale è ${totalWeight}`);
console.log(`il peso medio è ${avgWeight.toFixed(2)}`);
console.log(`la lunghezza totale è ${totalLength}`);
console.log(`la lunghezza media è ${avgLength.toFixed(2)}`);