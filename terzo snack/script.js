/**
 * 
    A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l'iniziale maiuscola.

    Es: ['pippo', 'PLUTO', 'Paperino'] => ['Pippo', 'Pluto', 'Paperino']

 * 
 */



let stringhe = ["CicCCio", "pastiCciO", "bELLA", "storIA", "sCuOla"]


/* creo una copia dell'array "stringhe" ma con delle modifiche */
let newStringa = stringhe.map((Element) =>{
    return Element.charAt(0).toUpperCase() +    /* ritorna l'elemento, con però la lettera in posizione 0 maiuscola  PIU' */
     Element.substring(1).toLowerCase()         /* il resto della stringa dell'elemento a partire dalla posizione 1 in minuscolo */
})

console.log(newStringa)














/* let stringhe = ["ciccio", "pasticcio", "bella", "storia", "scuola"];

let newStringhe = stringhe.map((Element) =>{
    return  Element.toUpperCase() 
})

console.log(newStringhe) */