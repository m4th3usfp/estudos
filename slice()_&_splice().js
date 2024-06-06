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



let vetor1 = ['matheus', 'rodrigo', 'gacilia', 'anusca', 'rene', 'gatos'];

let b = vetor1.slice(2, 4) //o slice() ele pega uma parte do array como se fosse uma fatia 
// e adiciona em um novo vetor que ele mesmo cria, sem mudar o array origial;
// detahle o segundo argumento do slice() ele conta ate o indice anterior que foi indicado, EX: slice(2, 4) vai pegar ate o indice 3

console.log('esse é o slice() => ',vetor1, b)


let vetor = ['matheus', 'rodrigo', 'gacilia', 'anusca', 'rene', 'gatos'];

let a = vetor.splice(2, 4) // o splice() arranca um pedaço do array original alterando-o
// detalhe o segundo argumento do splice(), ele ja trata como o indice '1' e continua a contar a partir dele; 

console.log('esse é o splice() => ', vetor, a)








