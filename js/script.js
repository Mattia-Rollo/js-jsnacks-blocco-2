/* 
Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.
*/

const wrapper = document.getElementById('wrapper');
const btn = document.querySelector('button');


for(let i = 0; i < 1 ; i++){
    const addInput = document.createElement('input');
    wrapper.prepend(addInput);
}

const primoSneak = wrapper.getElementsByTagName('input')[0];
// wrapper.prepend(addInput);
const cls = ['my-3','d-block'];
primoSneak.classList.add(...cls);
primoSneak.addEventListener('change', function() {
    let value = parseInt(primoSneak.value);    
    console.log(primoSneak.value);
    if (!(value % 2 == 0)){
        console.log(primoSneak.value);
        value++;
    }
wrapper.getElementsByTagName('span')[0].innerHTML = value;
})

/*
Generatore di “nomi cognomi” casuali: il Grande Gatsby ha  una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.



*/

const listaNomi = ['mario', 'luca', 'giovanni'];
const listaCognomi = ['rossi', 'capatonda','enstein'];

for(let i = 0; i < listaNomi.length; i++){
    let nome = listaNomi[i];
    // console.log(nome);
    for(let a = 0; a < listaCognomi.length; a++){
        let cognome = listaCognomi[a];
        // console.log(cognome);
        let nomeCognome = nome + ' ' + cognome;
        console.log(nomeCognome);
    }
    
}

/*
Crea un array di numeri interi e fai la somma di tutti gli elementi  che sono in posizione dispari



*/

const listaInteri = [0,1,2,3,4,5,6,7];

let somma = 0;

for (let i = 0; i < listaInteri.length; i++){
    if(!(i % 2 == 0)){
        somma += parseInt(listaInteri[i]);
    }
}
console.log(somma);

/*
**Snack4 (Bonus)**
Crea due array che hanno un numero di elementi diversi.  Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.


*/

const listaUno = ['banana', 'kiwi', 'arancia', 'mela'];
const listaDue = ['apple','cocco'];

while (listaUno.length > listaDue.length){

    listaDue.push('nuovo');
}
console.log(listaUno,listaDue);