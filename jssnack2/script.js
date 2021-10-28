/* 2- L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga. */

//DONE=>1.Faccio si che l'utente insersca un nome
//DONE=>2.Faccio si che l'utente insersca un secondo nome
//DONE=>3.scorro le due parlole generate
    //3.1confronto la prima parola con la seconda
    //3.2 se la prima parola è piu lunga della seconda stampo la seconda
    //3.3se la prima parola è piu corta della seconda stampo la prima


    const priMOnum = prompt("Inserisci una parola");
    const secCOnum = prompt("Inserisci una seconda parola");
    const listaNomi=[priMOnum,secCOnum]
    
 for(let i = 0; i<listaNomi.length;i++){

        if(priMOnum.length > secCOnum.length){
            console.log(`${secCOnum},${priMOnum}`);
        }else if (priMOnum.length == secCOnum.length){
            console.log("hai sbagliato")
        }else{
            console.log(`${priMOnum},${secCOnum}`)
        }
           
    }  
      
    
  