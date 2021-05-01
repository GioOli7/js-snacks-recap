/*******************SNACKS BONUS WEEKEND */

/////////////////////// SNACK 1
// A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l'iniziale maiuscola.
// Es: ['pippo', 'PLUTO', 'Paperino'] => ['Pippo', 'Pluto', 'Paperino']
/*
const strings = ['pippo', 'PLUTO', 'Paperino', 'rosso', 'VeRde', 'GIAllo'];

const newStrings = strings.map(string => string.charAt(0).toUpperCase() + string.slice(1).toLowerCase())

console.log(strings);
console.log(newStrings);
*/


//////////////////////// SNACK 2
// Un oggetto rappresenta una finestra di un browser e contiene due campi: 
// un array di tab aperte
// un numero che indica l'indice della tab aperta nell'array:
// {
//     "tab": ["Facebook", "GitHub", "Gmail"],
//     "activeTab": 0
// }
// Il software deve guardare se c'è un social aperto ed eliminarlo dalle tab.
// Nel caso la tab fosse attiva, deve attivare la successiva.

/*
const browser = {
    tab: ["Facebook", "GitHub", "Gmail", "Twitter", "gDrive", "Esselunga", "Instagram"],
    activeTab: 0
};

const socialLists = ["Facebook", "Twitter", "Instagram"]

browser.tab = browser.tab.filter(e => socialLists.includes(e) === false)
console.log(browser);
console.log(`nuova tab attiva: ${browser.tab[browser.activeTab]}`);

// Non ho capito perchè attivare la tab successiva quando la vecchia posizione sarà comunque occupata da una tab non-social
// in ogni caso sarebbe browser.activeTab++
*/



///////////////////////// SNACK 3  
// -> si potrebbe ottimizzare con una funzione separata per il capitalize
// A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l'iniziale maiuscola.
// Es: ['pippo', 'PLUTO', 'Paperino'] => ['Pippo', 'Pluto', 'Paperino']
/*
const strings = ['pippo', 'PLUTO', 'Paperino', 'rosso', 'VeRde', 'GIAllo'];

const newStrings = strings.map(string => capitalize(string))

console.log(strings);
console.log(newStrings)

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}
*/


///////////////////////////////// SNACK 4 -> VUE 
// Partendo da un array di oggetti con i contatti di una rubrica con nome, cognome, numero, attivo (true,false)
// Andiamo a stampare nome cognome e numero dentro una lista.
// Fare in modo poi che i contatti non attivi (attivo: false) siano stampati di colore rosso mentre gli altri normalmente di nero. 
// Cliccando sul numero della persona fate in modo che appaia in console il cognome della persona di cui è stato cliccato il numero

const app = new Vue({
    el: "#app",
    data:{
        contacts:[
            {
                name: "Giovanni",
                lastname: "Olivieri",
                number: 154132549,
                active: false,
            },
            {
                name: "Mario",
                lastname: "Rossi",
                number: 12554687,
                active: true,
            },
            {
                name: "Antonio",
                lastname: "Verdi",
                number: 347984318,
                active: false,
            },
            {
                name: "Giulio",
                lastname: "Gialli",
                number: 1564121365486,
                active: false,
            },
            {
                name: "Franca",
                lastname: "Bianchi",
                number: 4547484657,
                active: true,
            },
        ],
    },
    methods:{ 
        showLastname(index){
           console.log(this.contacts[index].lastname);
        }
    }
});