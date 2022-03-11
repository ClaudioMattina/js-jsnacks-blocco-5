/**
    Creare un oggetto che rappresenti un giocatore di basket, con le seguenti proprietà:
    Codice giocatore, Nome, Cognome, Età,  Media punti fatti per partita, Percentuale di successo per tiri da 3 punti

    Generare casualmente le statistiche di gioco, secondo queste regole:

    A - il codice giocatore deve essere formato da 3 lettere maiuscole casuali e 3 cifre casuali

    B - la media punti fatti per partita deve essere compresa tra 0 e 50
    
    C - la percentuale di successo per da 3 punti deve essere compresa tra 0 e 100
 */





const giocatore=[
    {   
        codiceGiocatore:"",
        nome:"ciccio",
        cognome:"pasticcio",
        età:"26",
        mpp:"",
        ptc3:"",
    }
    
]


/* creo una funzione che crei randomicamente 3 lettere e 3 numeri */
function playerCodeGenerator(){
   /*  let chartPart = makeid(3)
    let numberPart = makeidNumber(3) */
    return makeid(3) + makeidNumber(3)
};

console.log(playerCodeGenerator())  /* importanti le parantesi vuote vicino il "plaerCodeGenerator".. altrimenti fa vedere la funzione e non il risultato */


giocatore.codiceGiocatore = playerCodeGenerator();
console.log(giocatore.codiceGiocatore);

giocatore.mpp = Math.floor(Math.random() * ((50 + 1) -  0) + 0);      /* genera un numero random da 0 a 50 */

giocatore.ptc3 = Math.floor(Math.random() * ((100 + 1) -  0) + 0);     /* stessa cosa è però da 0 a 100 */


console.log(giocatore)



/* *************************************** FUNZIONIIIIIII *************************************** */


/* funzione presa da google */
/* crea tre variabili.. una che è il risultato, una che mette i caratteri tra cui il pc ne sceglierà randomicamente ed una che specifica la lunghezza */
function makeid(length) {
    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';      /* abcdefghijklmnopqrstuvwxyz0123456789 */
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}


/* funzione che prenderà in considerazione solo i numeri che gli abbiamo dato */
function makeidNumber(length) {
    let result           = '';
    let characters       = '0123456789';      /* ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz */
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

/* ************************************************************************************************** */