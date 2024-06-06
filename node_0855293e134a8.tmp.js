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

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function buildArray(N) {
  const array = [];
  for (let i = 0; i < N; i++) {
    const row = [];
    for (let j = 0; j < N; j++) {
      row.push(Math.abs(i - j) + 1);
    }
    array.push(row);
  }
  return array;
}

rl.on('line', (input) => {
  const N = parseInt(input);
  if (N === 0) {
    rl.close();
  } else {
    const result = buildArray(N);
    result.forEach(row => console.log(row.join(' ')));
  }
});
