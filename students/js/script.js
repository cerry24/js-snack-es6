/**
 * 1.** Creare un oggetto che descriva una studentessa o uno studente, con le seguenti proprietà: `nome`, `cognome` e `età`.
 * 2.** Stampare a schermo attraverso un ciclo `for-in` tutte le proprietà dell'oggetto.
 * 3. Creare un array di oggetti di studenti (ossìa oggetti con le proprietà sopra descritte) e mostriamoli.
 */





const students = [
    {
        name : 'gigi',
        surname : 'finizio',
        age : 33
    },
    {
        name : 'piero',
        surname : 'finizio',
        age : 44
    },
    {
        name : 'gianni',
        surname : 'finizio',
        age : 55
    }
];




for ( i = 0; i < students.length; i++ ) {
    console.log(students[i]);
}

