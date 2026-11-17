console.log("Inizio esecuzione"); //Stampa messaggio nella console
let d = new Date(); //Crea una variabile che contiene la data
document.getElementById("data-odierna").innerHTML += d.getDate(); //Aggiunge all'elemento data-odierna solo il giorno di oggi

let colori = []; //Crea un array chiamato colori per salvare R, G e B

//Funzione elabora che viene richiamata dal bottone Aggiungi valore
function elabora() {
    //Prende il valore testuale grezzo dal campo input-valore-rgb
    let valoreInput = document.getElementById("input-valore-rgb").value;
    //Cast in numero del valore inserito
    let numero = Number(valoreInput);

    //Prende il testo inserito nel campo input-nome-colore
    let testo = document.getElementById("input-nome-colore").value;
    //Se l'utente ha scritto un testo lo mette dentro il riquadro, altrimenti lascia "Anteprima"
    if (testo !== "") {
        document.getElementById("testo-dentro-riquadro").innerHTML = testo;
    }

    //Controlla che il campo non sia vuoto e che il numero sia valido per l'RGB (tra 0 e 255)
    if (valoreInput !== "" && numero >= 0 && numero <= 255) {
        //Pulisce eventuali messaggi di errore precedenti
        document.getElementById("messaggio-errore").innerHTML = "";

        //Se ci sono già 3 colori, svuota l'array per iniziare un nuovo colore da capo
        if (colori.length == 3) {
            colori = [];
            document.getElementById("badge-g").innerHTML = "G: -";
            document.getElementById("badge-b").innerHTML = "B: -";
        }

        //Inserisce il numero alla fine dell'array colori
        colori.push(numero);

        //Aggiorna i badge R, G, B in base a quanti numeri sono stati inseriti
        if (colori.length >= 1) document.getElementById("badge-r").innerHTML = "R: " + colori[0];
        if (colori.length >= 2) document.getElementById("badge-g").innerHTML = "G: " + colori[1];
        if (colori.length == 3) document.getElementById("badge-b").innerHTML = "B: " + colori[2];

        //Aggiorna il testo sotto il rettangolo mostrando i valori inseriti finora
        document.getElementById("codice-rgb-testo").innerHTML =
            `rgb(${colori[0] ?? "?"}, ${colori[1] ?? "?"}, ${colori[2] ?? "?"})`;

        //Controlla se nell'array colori ci sono esattamente 3 numeri
        if (colori.length == 3) {
            //Crea la stringa del colore rgb completo
            let newColor = `rgb(${colori[0]}, ${colori[1]}, ${colori[2]})`;
            //Applica il colore come sfondo del rettangolo di anteprima
            document.getElementById("riquadro-colore").style.backgroundColor = newColor;
            document.getElementById("testo-dentro-riquadro").style.color = newColor;
            document.getElementById("codice-rgb-testo").style.color = newColor;
        }

    } else {
        //Se il numero non è valido scrive il messaggio di errore
        document.getElementById("messaggio-errore").innerHTML =
            "Inserisci un numero valido tra 0 e 255!";
    }
}

//Funzione reset che riporta tutta la pagina allo stato iniziale
function reset() {
    //Svuota i due campi di input
    document.getElementById("input-valore-rgb").value = "";
    document.getElementById("input-nome-colore").value = "";

    //Pulisce il messaggio di errore
    document.getElementById("messaggio-errore").innerHTML = "";

    //Ripristina i badge dei 3 canali
    document.getElementById("badge-r").innerHTML = "R: -";
    document.getElementById("badge-g").innerHTML = "G: -";
    document.getElementById("badge-b").innerHTML = "B: -";

    //Ripristina il rettangolo grigio iniziale e i testi predefiniti
    document.getElementById("riquadro-colore").style.backgroundColor = "#e5e7eb";
    document.getElementById("testo-dentro-riquadro").innerHTML = "Anteprima";
    document.getElementById("codice-rgb-testo").innerHTML = "rgb(?, ?, ?)";

    //Svuota l'array colori
    colori = [];
}