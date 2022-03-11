

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
        marca: "good",
        modello: "story",
        alimentazione: "gpl",
    },
    
    {
        marca: "daje",
        modello: "boh",
        alimentazione: "metano",
    },

    {
        marca: "punto",
        modello: "punto",
        alimentazione: "benzina",
    },
]

let autoMetano= automobili.filter((Element) => {
        if(automobili[4].alimentazione == "metano"){
            return true
        }

        else{
            return false
        }
})




console.log(autoMetano)