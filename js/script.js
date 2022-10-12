/* 
Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.
*/

const wrapper = document.getElementById('wrapper');
const btn = document.querySelector('button');

//creo un input nel HTML ciclo for inutile :-)
for(let i = 0; i < 1 ; i++){
    const addInput = document.createElement('input');
    wrapper.prepend(addInput);
}
//prendo il primo input creato in javascript;
const primoInput = wrapper.getElementsByTagName('input')[0];
// wrapper.prepend(addInput);
const cls = ['my-3','d-inline-block'];
primoInput.classList.add(...cls);

primoInput.addEventListener('change', function() {
    let value = parseFloat(primoInput.value);    
    console.log(primoInput.value);
    if (!(value % 2 == 0)){
        console.log(primoInput.value);
        value++;
    }
wrapper.getElementsByTagName('span')[0].innerHTML = value;
})

/*
Generatore di “nomi cognomi” casuali: il Grande Gatsby ha  una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.



*/
const wrapper2 = document.getElementById('wrapper2');
const listaNomi = ['mario', 'luca', 'giovanni'];
const listaCognomi = ['rossi', 'capatonda','enstein'];
const persone = [];

for(let i = 0; i < listaNomi.length; i++){
    let nome = listaNomi[i];
    // console.log(nome);
    for(let a = 0; a < listaCognomi.length; a++){
        let cognome = listaCognomi[a];
        // console.log(cognome);
        let nomeCognome = nome + ' ' + cognome;
        persone.push(nomeCognome);
        console.log(nomeCognome);
    
    }
    
}
wrapper2.innerHTML = persone;
/*
Crea un array di numeri interi e fai la somma di tutti gli elementi  che sono in posizione dispari



*/
const wrapper3 = document.getElementById('wrapper3');
const listaInteri = [1,2,3,4,5,6,7];
const spanSomma = document.createElement('span');
const cls2 = ['d-block','fs-3']
spanSomma.classList.add(...cls2);
console.log(spanSomma);
let somma = 0;

for (let i = 0; i < listaInteri.length; i++){
    if(i % 2 == 0){
        somma += parseInt(listaInteri[i]);
    }
}
wrapper3.innerHTML = 'listaInteri: ' + listaInteri;
spanSomma.innerHTML = 'somma dei numeri pos. dispari: ' + somma;
// wrapper3.append(spanSomma);
wrapper3.append(spanSomma);
console.log(somma);

/*
**Snack4 (Bonus)**
Crea due array che hanno un numero di elementi diversi.  Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.


*/
const wrapper4 = document.getElementById('wrapper4');
const listaUno = ['banana', 'kiwi', 'arancia', 'mela'];
const listaDue = ['apple','cocco'];


while (listaUno.length > listaDue.length){

    listaDue.push('nuovo');
}
while (listaDue.length > listaUno.length){

    listaUno.push('nuovo');
}

console.log(listaUno,listaDue);
wrapper4.innerHTML = listaUno + ' <br>' + listaDue;