
/**
 * 
 * 
    Crea un array di oggetti che rappresentano degli animali.
    Ogni animale ha un nome, una famiglia e una classe.
    Es:

    [
        { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
        { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
        { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
    ]

    Crea un nuovo array con la lista dei mammiferi.

 * 
 */


let animali = [
    { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
    { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
    { nome: "tacchino", famiglia: "fasianidi", classe: "uccelli"},
    { nome: "leopardo", famiglia: "felini", classe:"mammiferi"},
    { nome: "tigre", famiglia: "felini", classe:"mammiferi"},
    { nome: "piccione", famiglia: "fasianidi", classe:"uccelli"},
];




    let animaliMammiferi = animali.filter((element)=>{
        if(element.classe == "mammiferi") return true
        else return false
    })

    let pennuti = animali.filter((element) => {
        if(element.classe == "uccelli") return true
    })

    let micioni = animali.filter((element) => {
        if(element.famiglia == "felini") return true
    })


console.table(micioni);
console.table(pennuti);
console.table(animaliMammiferi);