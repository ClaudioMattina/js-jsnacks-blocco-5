/**
 *
 *
    Crea un array di oggetti che rappresentino delle persone.
    Ogni persona ha un nome, un cognome e un'età.
    
    Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.
 */


let persone =[
   { 
      nome: "Loredana",
      cognome: "Loredanini",
      età: 47
   },

   { 
      nome: "Maria",
      cognome: "Marini",
      età: 8
   },

   { 
      nome: "Francesca",
      cognome: "Franceschini",
      età: 11
   },

   { 
      nome: "Luca",
      cognome: "Luchini",
      età: 20
   },

   { 
      nome: "Giada",
      cognome: "Giadini",
      età: 62
   },
]

/* creo un array che è una copia dell'array persone però filtrato in base all'elemento età */
let maggiorenni = persone.filter((Element) => {
   if(Element.età >= 18) return true     /* se l'elemento.età è maggiore o uguale a 18 allora inseriscilo nel nuovo array */    
})


/* creo un ciclo che dice "per ogni elemento di maggiorenni, stampa: l'elemento nome, l'elemento cognome e la frase...."" */
maggiorenni.forEach(element => {
   console.log(element.nome, element.cognome + " può guidare perchè è maggiorenne")
});

