//Arrow function () =>

let hello = nome => `seja bemvindo ${nome}`;
console.log(hello('mark'));

const calc = (num1, num2, operator) => 'reultado: ' + eval(`${num1} ${operator} ${num2}`);
console.log(calc(4,5,'*'));

const calc2 = (operator2, [num1, num2] = [2, 3]) => 'resultado: ' + eval(`${num1} ${operator2} ${num2}`);
console.log(calc2('+'));


let ola = nome => nome;
console.log(`seja bem vindo ${ola('eva')}`);

class Hcode {
    constructor() {
        this.lista = [];
        this.preencherLista();
        console.log(this.lista); // Mova esta linha para dentro do construtor
    }

    preencherLista() {
        let novaLista = [1, 2, 3];

        novaLista.forEach(valor => {
            this.lista.push(valor);
        });
    }
}

// Crie uma instância da classe Hcode
const instancia = new Hcode();
