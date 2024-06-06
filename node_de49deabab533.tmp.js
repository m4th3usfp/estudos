// const lista = ['marcelo','yago','matheus','rodrigo','alcino','fabão'];

// let listaUL = document.createElement('ul');

// let body = document.getElementsByTagName('body');


// body[0].appendChild(listaUL);

// let listaNoBody = document.getElementsByTagName('ul');


// console.log(listaNoBody[0]);

// for(let noiz of lista) {

//     let lifor = document.createElement('li');

//     let texto = document.createTextNode(noiz);

//     lifor.appendChild(texto);

//     listaNoBody[0].appendChild(lifor)
// }

// let removeSpacesFromString = () => {

//     let texta = 
//             'site/ you tube.com/';

//     let textb = texta.split(' ').join('');

//     document.querySelector('.outputString').textContent = textb;
// }


// const dadosPessoais = [
//     {nome: '', idade: 0, profissão: ''},
    
// ];

// function gerarFormulário(dados) {
//     let formularioHTML = '';
    
//     for (const pessoa of dados) {

//         formularioHTML = `
//     <h1>Exemplo:</h1>
//     <table id="table-3">
//     <thead>
//         <tr>
//         <th>Nome</th>
//         <th>Idade</th>
//         <th>Profissão</th>
//         </tr>
//     </thead>
//     <table>
//         <thead>
//             <tr>
//                 <td><input type="text" id="texto1"> Nome</td>
//                 <td><input type="number" id="number"> Idade</td>
//                 <td><input type="text" id="texto2"> Profissão</td>
//                 <td><button class="button" onclick=""> Adicionar</button></td>
//             </tr>
//         </thead>    
//     </table>
// </table>
// `;
// }

//     return formularioHTML;  
// }

// document.body.innerHTML = gerarFormulário(dadosPessoais);

// function salvarInformações(index) {
//     let nome = document.getElementById('texto1').value;
//     let idade = document.getElementById('number').value;
//     let profissão = document.getElementById('texto2').value;

//     dadosPessoais[index].nome = nome.value;
//     dadosPessoais[index].idade = parseInt(idade.value);
//     dadosPessoais[index].profissão = profissão.value;
    
//     document.body.innerHTML = gerarFormulário(dadosPessoais);   
// };

var input = require('fs').readFileSync(0, 'utf8');
var lines = input.split('\n');

let ordem = lines.shift();
let linha = [];
let matriz = [];

while(ordem) {
    let fim = ordem - 1;
    for (let i = 0; i < ordem; i++) {
        for (let j = 0; j < ordem; j++) {
            if (j == ordem - 1) {
                linha.push(2);
            } else if (i==3) {
                linha.push(1);
            } else {
                linha.push(3)
            }
        }
        matriz.push(linha.join(""))
    }
}