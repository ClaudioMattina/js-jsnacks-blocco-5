

/**
 *
 *
    Crea un array composto da 12 automobili.
    Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

    Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.

    Infine stampa separatamente i 3 array.

 *
 */




let automobili= [
    {
        marca: "punto",
        modello: "punto",
        alimentazione: "benzina",
    },

    {
        marca: "audi",
        modello: "TT",
        alimentazione: "disel",
    },

    {
        marca: "toyota",
        modello: "bella",
        alimentazione: "elettrica",
    },

    {
        marca: "Lamborghini",
        modello: "story",
        alimentazione: "gpl",
    },
    
    {
        marca: "Ferrari",
        modello: "cavallo",
        alimentazione: "metano",
    },

    {
        marca: "Yaris",
        modello: "ganza",
        alimentazione: "benzina",
    },

    {
        marca:"Mercedes",
        modello:"wow",
        alimentazione:"disel",
    },

    {
        marca:"motard",
        modello:"non lo so",
        alimentazione:"benzina",
    },

    {
        marca:"motana",
        modello:"dajeee",
        alimentazione:"gpl",
    },

    {
        marca:"motina",
        modello:"34456",
        alimentazione:"benzina",
    },

    {
        marca:"motorino",
        modello:"aw237",
        alimentazione:"metano",
    },

    {
        marca:"wowww",
        modello:"fhgot",
        alimentazione:"disel",
    }
]



/* creo un'array uguale all'array "automobili" ma gli elementi saranno filtrati in base al tipo di elemento.alimentazione */
let autoBenzina = automobili.filter((Element) => {
    if(Element.alimentazione == "benzina") return true    /* se elemento chiamato alimentazione è uguale a benzina, allora "true" ovvero inseriscilo*/
});


/* uguale con disel */
let autoDisel = automobili.filter((Element) =>{
    if(Element.alimentazione == "disel") return true
});


/* in tutti gli altri casi */
let others = automobili.filter((Element) => {
    if(Element.alimentazione !== "benzina" && Element.alimentazione !== "disel") return true /* se l'elemento alimentazione è diverso da benzina e diverso da disel.. allora inseriscilo */
});



console.table(autoBenzina);
console.table(autoDisel);
console.table(others);





























/* let autoMetano= automobili.filter((Element) => {
        if(automobili[4].alimentazione == "metano"){
            return true
        }

        else{
            return false
        }
})




console.log(autoMetano) */