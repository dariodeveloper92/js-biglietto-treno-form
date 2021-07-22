//Esercizio: Creiamo un finto biglietto del treno con:
//Nome passeggero


//Codice treno (numero casuale tra 90000 e 100000 escluso)


//Numero carrozza


//Prezzo calcolato


//Categoria selezionata dall'utente


//Aggiungiamo una piccola animazione al click su "Crea" e "Annulla", se clicchiamo su annulla dobbiamo ripulire il form.

var btnGenera = document.getElementById('calcolaPrezzo');
console.log(btnGenera);

btnGenera.addEventListener('click',
    function() {
        var nome = document.getElementById('nome').value;
        var km = document.getElementById('km').value;
        var fasciaEta = document.getElementById('fascia-eta').value;
         

        var biglietto = document.getElementById('biglietto');
        console.log(biglietto);
        biglietto.style.display = "block";


        // Calcola il prezzo del biglietto
       var prezzo = km * 0.21;

        console.log(km * 0.21);

        var minorenne = fasciaEta < 18;
        var maturo = fasciaEta > 65;

        if (fasciaEta < 18)
        {
            prezzo = prezzo * 0.8;
        }
        else if (fasciaEta > 65)
        {
            prezzo = prezzo * 0.6;
        }

        //PREZZO BIGLIETTO
        document.getElementById("prezzo").innerHTML = prezzo.toFixed(2) + '€';
        //NOME PASSEGGERO
        document.getElementById("passeggero").innerHTML = nome;
        
        //CODICE TRENO
        var numeroRandom = Math.floor(Math.random() * 100000)+ 90001;
        document.getElementById("codiceTreno").innerHTML = numeroRandom;
        //Stampa a video del nostro biglietto
    }
)

var btnAnnulla = document.getElementById('annulla');

btnAnnulla.addEventListener('click',
    function() {
        var biglietto_box = document.getElementById('biglietto');
        biglietto_box.style.display = 'none';

        //Svuoto gli input
        document.getElementById('nome').value = '';
        document.getElementById('km').value = '';
        document.getElementById('fascia-eta').value = '';

    }
)

//IL TUO BIGLIETTO