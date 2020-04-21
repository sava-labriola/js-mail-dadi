// array con le mail autorizzate
var mailAutorizzate = ['mariobros@gmail.com', 'walterwhite@gmail.com', 'lightyagami@gmail.com'];
// mail inserita dall'utente
var mailUtente = prompt('Inserisci una email');
// variabile booleana che accerta che la mail dell'utente sia presente in quelle autorizzate
var inLista;
//controllo con ciclo for se la mail dell'utente è presente in quelle autorizzate
for (var i = 0; i < mailAutorizzate.length; i++) {
    if (mailAutorizzate[i] == mailUtente) {
        inLista = true;
        break;
    }
}
//controllo della variabile inLista (mail presente o no)
if (inLista) {
    document.getElementById('autorizzazione').innerHTML = ('Sei in lista');
}
else {
    document.getElementById('autorizzazione').innerHTML = ('Non sei in lista');
}
