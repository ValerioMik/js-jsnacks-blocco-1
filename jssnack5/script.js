/* 5 - Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.
 */

//creo una lista vuota arrey
//chiedo all'utente per 6 volte di inserire un numero
//se l'utente inserisce un numero dispari lo salvo nella lista vuota
//se l'utente inserisce un numero pari la lista rimane vuota
/* const listaVuota =[] */
const listaDispari = []
/* console.log(listaDispari);
 */
for (let i = 0; i < 6; i++) {
    const numeriIseriti = parseInt(prompt("inserisci un numero")); {
        if (numeriIseriti % 2 == 1) {
            listaDispari.push(numeriIseriti);
            console.log(listaDispari);
        }
    }

};
