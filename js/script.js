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
    let nomeCognome = listaNomi[i] + listaCognomi [i];
    console.log(nomeCognome);
}



