console.log("Inizio esecuzione");
let d = new Date();
console.log(d);
document.getElementById("saluto2").innerHTML += d.getDate();

let colori = [];

function elabora(){
    let numero = Number(document.getElementById("inNumber").value);

    let testo = document.getElementById("inText").value;
    document.getElementById("outText2").innerHTML = testo;

    if(numero >= 0 && numero <= 255){
        // inserire il numero dentro l'array
        colori.push(numero);

        // visualizzare il numero dentro il div output
        document.getElementById("outText").innerHTML =
            "Hai inserito il numero " + numero;

        // visualizzare i numeri inseriti
        document.getElementById("outText").innerHTML +=
            "<br>I colori inseriti sono: " + colori.join(", ");
        console.log(colori);

        if(colori.length == 3){
            let newColor = `rgb(${colori[0]}, ${colori[1]}, ${colori[2]})`;
            document.getElementById("error").style.color = newColor;
        }

    } else {
        // messaggio dentro il div error
        document.getElementById("error").innerHTML =
            "Il numero inserito non va bene";
    }
}

function reset(){
    // svuota input
    document.getElementById("inNumber").value = "";
    document.getElementById("inText").value = "";

    // svuota output
    document.getElementById("outText").innerHTML = "Output";
    document.getElementById("outText2").innerHTML = "Output2";
    document.getElementById("error").innerHTML = "Error";

    // ripristina colore testo
    document.getElementById("outText2").style.color = "black";

    // svuota array colori
    colori = [];
}

