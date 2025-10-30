//Mail
// Crea un array con delle email di chi può acedere.
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
// Non è necessario provvedere alla validazione delle email.
// NON USARE INCLUDES!

// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?

// Consigli del giorno:
// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
// 3. si ma noi cosa vogliamo fare?
// 4. torniamo a scrivere in italiano
// 5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"




// creo un array con delle email con cui si può accedere
// con un prompt chiedo all'utente la sua mail
// faccio un if per vedere se la sua mail è nella lista di accesso
// stamo un messaggio in caso lo sia o in caso non lo sia

const accesso = ["marco@gmail.com", "gennaro@gmail.com", "luca@gmail.com"];
console.log(accesso);

const emailUtente = prompt("digita la tua email");

// const i = []
// for (let i = 0; i < accesso.length; i++) {
//     if (emailUtente === i) {
//         console.log("accesso consentito");

//     }
// }

if (accesso.indexOf(emailUtente) !== -1) {
    console.log("accesso consentito");
} else {
    console.log("email errata")
}