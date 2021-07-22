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
        //alert('nome');
        var km = document.getElementById('km').value;
        var fasciaEta = document.getElementById('fascia-eta').value;
         

        var biglietto = document.getElementById('biglietto').value;
        biglietto.style.display = "block";

        // Calcola il prezzo del biglietto
       var prezzo = chilometri * 0.21;

        console.log(chilometri * 0.21);

        var minorenne = eta < 18;
        var maturo = eta > 65;

        if (eta < 18)
        {
            prezzo = prezzo * 0.8;
        }
        else if (eta > 65)
        {
            prezzo = prezzo * 0.6;
        }

        function myFunction() 
        {
            var num = prezzo;
            var n = num.toFixed(2);
            document.getElementById("prezzo").innerHTML = n;
        }
        //Stampa a video del nostro biglietto
    }
)

var btnAnnulla = document.getElementById('annulla');

btnAnnulla.addEventListener('click',
    function() {
        var biglietto = document.getElementById('biglietto');
        biglietto.style.display = 'none';

        //Svuoto gli input
        document.getElementById('nome').value = '';
        document.getElementById('km').value = '';
        document.getElementById('fascia-eta').value = '';

    }
)

//IL TUO BIGLIETTO