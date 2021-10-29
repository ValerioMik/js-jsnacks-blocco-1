/* 6 - Genera un array di 50 numeri random. Nell’array non devono esserci doppioni.
*/

//1. generiamo un arrey di 50 nuimeri random 
//2.controlliamo se tra i numeri usciti non ci siano doppioni
//2.1scorriamo la lista per esaminare i doppioni
//2.2 se il numero non e presente lo stampiamo
// altrimenti andiamo avanti

let numeri = []


while (numeri.length < 50) {
    let numCasuali = Math.floor(Math.random() * 50) + 1; 
    let cerca = false;

    for(i = 0;i < numeri.length;i++){
        if (numCasuali === numeri[i]){
            cerca = true;
        }
    }
    if(cerca == false){
        numeri.push(numCasuali)
    }
}
console.log(numeri);
