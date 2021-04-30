// Snack
// A partire da un array di numeri, genera un secondo array con le potenze al quadrato di ogni numero.
// Es: [1, 2, 3, 4, 5] => [1, 4, 9, 16, 25]

/*
original = [1, 2, 3, 4, 5, 6];

const power = original.map(e => e*e)

console.log(original);
console.log(power);
*/



// Snack 1
// Crea un array composto da 10 brand famosi (Sony, Gucci, Apple, Samsung, Dolce&Gabbana). 
// - Partendo da questo array creare un nuovo array dove tutti i brand dovranno essere "normalizzati" 
// (le lettere maiuscole saranno convertite in minuscolo quindi Gucci diventerà gucci)
//  e aggiungere, sempre in questo contesto di "clonazione", una nuova proprietà denominata "foundationYear". 
//  Quest'ultima proprietà conterrà l'anno (mettete un valore voi, è necessario inserire valore reale) in cui l'azienda è stata fondata. 



/*
const brandsNames = ['Microsoft','Apple','Sony','Philips','LG','Lenovo','Logitech','Western Digital','Samsung', 'Xiaomi'];

const newBrand = brandsNames.map((brand, index) => {
    return {
        nome: brand.toLowerCase(),
        foundationYear: random(1920, 2000),
    }
})
console.log(newBrand);

function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
*/


// Snack 2
// Crea un array composto da 10 automobili. 
// Ogni oggetto automobile avrà le seguenti proprietà: marca, modello, alimentazione (benzina, diesel, gpl, elettrico, metano).
// - Dividi in 3 array separati. Inserire nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo e ultimo il resto delle auto. 
// - Infine stampa separatamente i 3 array.

/*
const cars = [
    {
        marca: 'Ferrari',
        modello: 'SF90',
        alimentazione: 'benzina'
    },
    {
        marca: 'Porsche',
        modello: '991 GT3',
        alimentazione: 'benzina'
    },
    {
        marca: 'BMW',
        modello: 'M3',
        alimentazione: 'benzina'
    },
    {
        marca: 'Fiat',
        modello: 'Punto',
        alimentazione: 'diesel'
    },
    {
        marca: 'Volkswagen',
        modello: 'Golf',
        alimentazione: 'diesel'
    },
    {
        marca: 'Peugeot',
        modello: '406',
        alimentazione: 'diesel'
    },
    {
        marca: 'Citroen',
        modello: 'C4',
        alimentazione: 'diesel'
    },
    {
        marca: 'Fiat',
        modello: 'Fiorino',
        alimentazione: 'metano'
    },
    {
        marca: 'Fiat',
        modello: 'Panda',
        alimentazione: 'GPL'
    },
    {
        marca: 'Tesla',
        modello: 'Model 3',
        alimentazione: 'elettrica'
    },
]

const benzina = cars.filter(car => car.alimentazione == 'benzina')

const diesel = cars.filter(car =>car.alimentazione == 'diesel')

const altre = cars.filter(car =>car.alimentazione != 'diesel' && car.alimentazione != 'benzina')


benzina.forEach(car => {
    console.log(`auto a benzina: ${car.marca} ${car.modello}`);
})
diesel.forEach(car => {
    console.log(`auto diesel: ${car.marca} ${car.modello}`);
})
altre.forEach(car => {
    console.log(`auto con altra alimentazione: ${car.marca} ${car.modello} - ${car.alimentazione}`);
})
*/



/***************GIORNO 2**********************************/

//SNACK 1
// Crea un array di oggetti che rappresentano degli animali: ogni animale ha un nome, una famiglia e una classe.
// Crea un nuovo array con la lista dei mammiferi.

/*
const animali = [
    {
        nome: 'leone', 
        famiglia: 'felidi', 
        classe: 'mammiferi' 
    },
    { 
        nome: 'cane', 
        famiglia: 'canidi', 
        classe: 'mammiferi'
    },
    { 
        nome: 'gallina', 
        famiglia: 'fasianidi', 
        classe: 'uccelli' 
    },
    { 
        nome: 'gatto', 
        famiglia: 'felini', 
        classe: 'mammiferi' 
    },
    { 
        nome: 'serpente', 
        famiglia: 'viperidi', 
        classe: 'rettile' 
    },
    { 
        nome: 'lucertola', 
        famiglia: 'Lacertidae', 
        classe: 'rettile' 
    }
];

const mammiferi = animali.filter(animale => animale.classe === 'mammiferi')
console.log(mammiferi);
*/



// SNACK 2
// Crea un array di 8 oggetti che rappresentano delle persone: ogni persona ha un nome, un cognome e un'età.
// Crea un nuovo array inserendo per ogni persona una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.

/*
const persone = [
    {
        nome: 'Mario',
        cognome: 'Rossi',
        age: 22
    },
    {
        nome: 'Giuseppe',
        cognome: 'Verdi',
        age: 84
    },
    {
        nome: 'Andrea',
        cognome: 'Bianchi',
        age: 16
    },
    {
        nome: 'Samuele',
        cognome: 'Viola',
        age: 14
    },
    {
        nome: 'Miriam',
        cognome: 'Marrone',
        age: 31
    },
    {
        nome: 'Giovanni',
        cognome: 'Gialli',
        age: 12
    },
    {
        nome: 'Fabrizio',
        cognome: 'Verdini',
        age: 51
    },
    {
        nome: 'Mara',
        cognome: 'Sannini',
        age: 15
    },
];


const stato = persone.map(persona => `${persona.nome}${persona.age >= 18 ? "" : " NON"} può guidare`)  

console.log(stato);
*/



// SNACK 3
// Crea un array di 8 oggetti che rappresenti i pc in vendita nel nostro negozio: ogni pc ha un nome, una marca, un booleano 
// che indica se esce con Windows come OS di fabbrica (hasWindows: true oppure hasWindows: false), il prezzo originale ed un prezzo scontato
// Creiamo un nuovo array che indichi i pc che hanno Windows e di questi andiamo a tirar fuori la differenza tra prezzo originale e scontato.


const pcList = [
    {
        nome: 'ASusanna',
        marca: 'Asus',
        hasWindows: true,
        price: 949,
        discountPrice: 800 
    },
    {
        nome: 'Thinkpad 9000',
        marca: 'Lenovo',
        hasWindows: true,
        price: 1199,
        discountPrice: 950 
    },
    {
        nome: 'Macbook Air',
        marca: 'Apple',
        hasWindows: false,
        price: 1399,
        discountPrice: 1398 
    },
    {
        nome: 'TX 6500',
        marca: 'Acer',
        hasWindows: false,
        price: 499,
        discountPrice: 399 
    },
    {
        nome: 'TW 541',
        marca: 'Acer',
        hasWindows: true,
        price: 699,
        discountPrice: 599 
    },
    {
        nome: 'Surface',
        marca: 'Microsoft',
        hasWindows: true,
        price: 1299,
        discountPrice: 1149 
    },
    {
        nome: 'Tris 2000',
        marca: 'Asus',
        hasWindows: false,
        price: 399,
        discountPrice: 249 
    },
    {
        nome: 'Linux edition',
        marca: 'Lenovo',
        hasWindows: false,
        price: 689,
        discountPrice: 619 
    },
];

const windowsPC = pcList.filter(pc => pc.hasWindows).map((pc) => {
    return { ...pc, diffPrice: (pc.price - pc.discountPrice) }
})

console.table(windowsPC);


