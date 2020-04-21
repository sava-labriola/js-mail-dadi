var mailAutorizzate = ['mariobros@gmail.com', 'walterwhite@gmail.com', 'lightyagami@gmail.com'];

var mailUtente = prompt('Inserisci una email');

var inLista;

for (var i = 0; i < mailAutorizzate.length; i++) {
    if (mailAutorizzate[i] == mailUtente) {
        inLista = true;
    }
}

if (inLista) {
    document.getElementById('autorizzazione').innerHTML = ('Sei in lista');
}
else {
    document.getElementById('autorizzazione').innerHTML = ('Non sei in lista');
}
