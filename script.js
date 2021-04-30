/*
A:
Creare un oggetto che rappresenti un giocatore di basket, con le seguenti proprietà:
- Età
- Media punti fatti per partita
- Percentuale di successo per tiri da 3 punti
- Codice giocatore

Generare tramite delle funzioni le statistiche di gioco, secondo queste regole:
- l'età deve essere compresa tra 18 e 40
- la media punti fatti per partita deve essere compresa tra 0 e 50
- la percentuale di successo per tiri da 3 punti deve essere compresa tra 0 e 100
- il codice giocatore deve essere formato da 3 lettere maiuscole casuali (array di lettere) e 3 cifre casuali
Stampare poi Codice giocatore, Media punti e percentuale tiri da 3 punti.

B:
Creare un array di 10 giocatori di basket, con le regole sopra indicate
Dopo aver creato l'array, stampa codice giocatore e media punti per ogni giocatore.

C:
Creare un nuovo array con i giocatori che hanno una media di punti superiore a 25 e
la percentuale di successo per i tiri da 3 punti superiore all’50%.
*/


const player = {
    age: random(18, 40),
    avgPoints: random(0, 50),
    percentSuccess: random(0, 100),
    code: playerCode(),
}

const team = [];
for (let i = 0; i < 10; i++) {
    team.push({
            age: random(18, 40),
            avgPoints: random(0, 50),
            percentSuccess: random(0, 100),
            code: playerCode(),
        });
}

team.forEach((player, index) => console.log(`Codice giocatore ${index+1}: ${player.code}, media punti: ${player.avgPoints}, %successo: ${player.percentSuccess}`))

const topPlayers = team.filter(player => player.avgPoints > 25 && player.percentSuccess > 50)

console.table(topPlayers);


// **********FUNZIONI
function playerCode() {
    const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "L", "M", "N", "O"]
    let lett = '';
    let num = '';
    for (let i = 0; i < 3; i++) {
        let rand = random(0, (letters.length - 1));
        lett += letters[rand];
        num += random(0, 9);
    }
    code = lett + num;
    return code;
}

function random(min, max) {
    return Math.floor( Math.random() * max - min + 1) + min;
}
