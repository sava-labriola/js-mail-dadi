//valore casuale del dado del computer
var dadoComputer = Math.floor(Math.random() * 6) + 1;
//valore del dado inserito dall'utente
var dadoUtente = prompt('Inserisci un numero intero da 1 a 6')
//controllo se il valore inserito dall utente sia valido
if (isNaN(dadoUtente) || dadoUtente < 1 || dadoUtente > 6) {
    document.getElementById('esito-partita').innerHTML = ('Valore inserito non valido');
}
else if (dadoUtente > dadoComputer) {
    document.getElementById('esito-partita').innerHTML = ('Hai vinto');
}
else if (dadoUtente == dadoComputer) {
    document.getElementById('esito-partita').innerHTML = ('Hai pareggiato');
}
//se il dadoUtente è minore l'utente perde
else {
        document.getElementById('esito-partita').innerHTML = ('Hai perso');
}
//visualizzo in pagina valore inserito dall'utente
document.getElementById('risultato-utente').innerHTML = ('Risultato Utente: ' + dadoUtente);
//visualizzo in pagina il valore del dadoComputer
document.getElementById('risultato-computer').innerHTML = ('Risultato Computer: ' + dadoComputer);
