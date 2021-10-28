/* 1 - L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore. */

//DONE=> 1.faccio si che l'utente inserica il primo numero
//DONE=> 2.faccio si che l'utente inserica il secondo numero
//DONE=>3. confronto i numerio inseriti 
    //DONE=>3.1 se il primo numero e maggiore lom stampo
    //DONE=>3.2 altrimenti stampo il secondo
         
    
const priMOnum = parseInt(prompt("Inserisci il primo numero"));
const secCOnum = parseInt(prompt("Inserisci il secondo numero"));


let risultato;
if(priMOnum > secCOnum){
    console.log(priMOnum);

}else if(priMOnum < secCOnum){
    console.log(secCOnum);

}else{
    console.log("hai sbagliato");
}; 
   
   