/* 
Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.
*/

const addInput = document.createElement('input');
const wrapper = document.getElementById('wrapper');
const btn = document.querySelector('button');

wrapper.prepend(addInput);

addInput.addEventListener('change', function() {
    let value = parseInt(addInput.value);    console.log(addInput.value);
    if (!(value % 2 == 0)){
        console.log(addInput.value);
        value++;
    }
wrapper.getElementsByTagName('span')[0].innerHTML = value;
})


const wrapper2 = document.getElementById('wrapper2');
// wrapper2.append(addInput);