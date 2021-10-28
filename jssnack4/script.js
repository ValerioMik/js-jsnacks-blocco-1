/* 4 - In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa. */

//creo una lista di invitati alla festa
//chiedo all'utente il suo nome 
    //scorro la lista degli invitati
    //comparo la lista degli invitati con il nome inserito
    //se esiste entri
    //altrimenti stampo accesso negato

    const ilTuoNome = prompt("Inserisci il tuo nome e scopri se sei invitato");
    const listaGazby = [ "piero","marco","andrea","marcello","melania","tonina","andrea", "melissa","jasmine","valerio" ];

    let listanomi = false;
    for (let i = 0; i <= listaGazby.length; i++) {
        if(ilTuoNome === listaGazby[i]) {
            listanomi = true;  
        } 
    }

    if (listanomi === true) {
        console.log('sei nella lista di Gazby complimenti ora puoi entrare');
    }else {
        console.log('spiacente non sei stato invitato');
    };