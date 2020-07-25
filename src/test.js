var sites = [
    {
        code:   "CHRE",
        url:    "https://chacabucoenred.com/",
        logo:   "/logos/CHRE.png",
        name:   "Chacabuco en Red",
        status: 1
    },
    {
        code:   "CUAP",
        url:    "https://cuatropalabras.com/",
        logo:   "/logos/CUAP.png",
        name:   "Cuatro Palabras",
        status: 1
    },
    {
        code:   "QPCH",
        url:    "https://quepensaschacabuco.com/",
        logo:   "/logos/QPCH.png",
        name:   "Que pensás Chacabuco",
        status: 1
    },
    {
        code:   "CHRO",
        url:    "https://chacabuquero.com.ar/",
        logo:   "/logos/CHRO.png",
        name:   "Chacabuquero",
        status: 1
    },
    {
        code:   "DDEM",
        url:    "https://www.diariodemocracia.com/ciudad/chacabuco/",
        logo:   "/logos/DDEM.png",
        name:   "Diario Democracia",
        status: 1
    },
    {
        code:   "DHOY",
        url:    "https://dehoy.com.ar/",
        logo:   "/logos/DHOY.png",
        name:   "Diario de Hoy",
        status: 1
    },
    {
        code:   "CHAC",
        url:    "https://chacabuco.gob.ar/",
        logo:   "/logos/CHAC.png",
        name:   "Municipalidad de Chacabuco",
        status: 1
    },
    {
        code:   "RLID",
        url:    "https://radioliderchacabuco.com.ar/",
        logo:   "/logos/RLID.png",
        name:   "Radio Lider Chacabuco",
        status: 1
    },
    {
        code:   "LPCH",
        url:    "https://lapostachacabuco.com/",
        logo:   "/logos/LPCH.png",
        name:   "La Posta de Chacabuco",
        status: 1
    }
   
    
];

//buscador
Array.prototype.findBy = function (column, value) {
    for (var i=0; i<this.length; i++) {
        var object = this[i];
        if (column in object && object[column] === value) {
            return object;
        }
    }
    return null;
}


console.log(sites.findBy('code', 'LPCH').logo);