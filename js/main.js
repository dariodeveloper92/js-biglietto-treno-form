//Esercizio: Creiamo un finto biglietto del treno con:
//1) Nome passeggero
//2) Codice treno (numero casuale tra 90000 e 100000 escluso)
//3) Numero carrozza
//4) Prezzo calcolato
//5) Categoria selezionata dall'utente
//6) Aggiungiamo una piccola animazione al click su "Crea" e "Annulla", se clicchiamo su annulla dobbiamo ripulire il form.

//IL TUO BIGLIETTO
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
        
        //OFFERTA
        document.getElementById("offerta").innerHTML = 'Biglietto Standard';
        
        //CARROZZA
        var numeroRandom = Math.floor(Math.random() * 15)+ 1;
        document.getElementById("carrozza").innerHTML = numeroRandom;

        //CODICE TRENO
        var numeroRandom = Math.floor(Math.random() * 100000)+ 90001;
        document.getElementById("codiceTreno").innerHTML = numeroRandom;
    }
)

var btnAnnulla = document.getElementById('annulla');

btnAnnulla.addEventListener('click',
    function() {
        var biglietto_box = document.getElementById('biglietto');
        container_box.style.display = 'none';

        //Svuoto gli input
        document.getElementById('nome').value = '';
        document.getElementById('km').value = '';
        document.getElementById('fascia-eta').value = '';
    }
)

