/* 3 - Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. */

//1.chiedo all'utente 10 volte un numero
    //1.1 faccio si che la richiesta sia in un ciclo
        //1.1.1 il ciclo continua fino a 10 volte
        //1.1.2 conservo i 10 numeri in un array
//2.esco dal ciclo e sommo i numeri ottenuti
    //stampo un consol log della somma
    const numeriInseriti = parseInt(prompt("inserisci un numeero"))
    const ListaNumeri =[numeriInseriti]
    
    
    for ( i = 0;  ListaNumeri.length <= 10; i++) {
       if (ListaNumeri<=10){
        const numeriInseriti = parseInt(prompt("inserisci un numeero"))
       }else{
        console.log(ListaNumeri);
       } 
    };
   

 