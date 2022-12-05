/**
 * 
*Crea un array composto da 10 automobili.
*Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

*Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
*Infine stampa separatamente i 3 array.
 */






const cars = [
    {
        brand : 'volvo',
        model : 'xc60',
        powerSupply : 'benzina'
    },
    {
        brand : 'mercedes',
        model : 'glc',
        powerSupply : 'diesel'
    },
    {
        brand : 'fiat',
        model : 'fiorino',
        powerSupply : 'metano'
    },
    {
        brand : 'lancia',
        model : 'ipsylon',
        powerSupply : 'gpl'
    },
    {
        brand : 'tesla',
        model : 'model x',
        powerSupply : 'elettrico'
    },
    {
        brand : 'tesla',
        model : 'model s',
        powerSupply : 'elettrico'
    },
    {
        brand : 'bmw',
        model : 'm3 cs',
        powerSupply : 'benzina'
    },
    {
        brand : 'audi',
        model : 'q3',
        powerSupply : 'diesel'
    },
];

const gasolineCars = [];
const dieselCars = [];
const otherCars = [];


for ( i = 0; i < cars.length; i++ ) {
    const currentCar = cars[i];
    if ( currentCar.powerSupply === 'benzina' ) {
        gasolineCars.push(currentCar);
    } else if ( currentCar.powerSupply === 'diesel' ) {
        dieselCars.push(currentCar);
    } else {
        otherCars.push(currentCar);
    }
}

console.log(gasolineCars, dieselCars, otherCars);