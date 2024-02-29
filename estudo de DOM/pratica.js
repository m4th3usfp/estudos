let titulo = document.querySelector('#titulo');

titulo.textContent = 'dom'

let testando = document.querySelectorAll('.box')
document.write(testando[0].textContent);
document.write(testando[1].textContent);
document.write(testando[2].textContent);


let testeTAG = document.getElementsByTagName('div');
document.write(testeTAG[0].textContent)

let testeID = document.getElementById('titulo')

let testeClass = document.getElementsByClassName('box')

function capitalizeString() {
    let input = document.getElementById('input');
    let headingElement = document.getElementById('modified-string');
    let string = input.value;
    headingElement.innerHTML = string[0].toUpperCase() + string.slice(1);
};

let myValue = document.getElementById('display_hidden_form1').value;
let isTrueVal = myValue === 'true';

let myValue2 = document.getElementById('display_hidden_form2').value;
let isTrueVal2 = myValue2 === 'true';

console.log({isTrueVal, isTrueVal2});

const convertString = (word) => {
    switch (word.toLowerCase().trim()) {
        case 'yes':
        case 'true':
        case '1':
            return true;
            case 'no':
            case 'false':
            case '0':
            case null:
                return false;
            default:
                return Boolean(word);
    }
}
    console.log(convertString('true'));
    console.log(convertString('no'));
    console.log(convertString('matheus'));

        