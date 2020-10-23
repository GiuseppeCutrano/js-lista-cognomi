// Chiedere all'utente il cognome
// inserirlo in un array con altri cognomi: 'Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'
// stampa la lista ordinata alfabeticamente
// scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova


// Dichiarazione delle variabili
var cognome
var tuocognome
var list
var elenco

// Lista dei nostri cognomi
list = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];

//  elenco
elenco = document.getElementById("ol_elenco");

// Chiedi all'utente il cognome
tuocognome = prompt("Inserisci il tuo cognome");
list.push(tuocognome);

// Stampa la lista dei cognomi
for (var i = 0; i < list.length; i++) {
  cognome = elenco.innerHTML;
  elenco.innerHTML = cognome + "<li>" + list.sort()[i] + "</li>";
}

// Comunicare la posizione nella Lista
document.getElementById("position").innerHTML = "Il tuo cognome è in posizione " + (list.indexOf(tuocognome) + 1);
