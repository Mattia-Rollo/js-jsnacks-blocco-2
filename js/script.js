/* 
Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.
*/

const addInput = document.createElement('input');
const wrapper = document.getElementById('wrapper');
const btn = document.querySelector('button');

wrapper.append(addInput);

addInput.addEventListener('change', function() {

    console.log(addInput.value);
    if ((parseInt(addInput.value)) % 2 == 0){
        console.log(addInput.value);
    }else {
        console.log(parseInt(addInput.value) + 1);
    }

})

const wrapper2 = document.getElementById('wrapper2');
// wrapper2.append(addInput);