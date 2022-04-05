
//  Chiedere info all'utente che visita la pagina

/*
  1. Chiedi all’utente il suo nome,
  2. Chiedi il suo cognome,
  3. Chiedi il suo colore preferito
  4. Stampare in pagina

  a. Definire le variabili
  b. Creare sezione dove stampare il contenuto
  c. Stampare il contenuto
*/


// Definire le variabili

const firstName = prompt("Inserisci il tuo Nome");
const surName = prompt("Inserisci il tuo Cognome");
const favColor = prompt("Inserisci il tuo Colore Preferito");
let stupidpassword = "nomecognomecolorepreferito22"

// Stampare il contenuto

document.getElementById("content").innerHTML =
`
Ciao ${firstName} ${surName}, il ${favColor} è proprio un bel colore. Ecco la password (insicurissima) che ho generato per te: ${stupidpassword}
`;

