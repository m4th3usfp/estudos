/*function adicionar()  {
    let inputText = document.getElementById('texto1').value
    let inputNumber = document.getElementById('number').value;
    let inputText1 = document.getElementById('texto2').value;
    
    let tabela = document.getElementById('table-3');
    let linha = tabela.insertRow();
    
    let cell1 = linha.insertCell(0);
    let cell2 = linha.insertCell(1);
    let cell3 = linha.insertCell(2);

    let text1 = document.createTextNode(inputText);
    let text2 = document.createTextNode(inputNumber);
    let text3 = document.createTextNode(inputText1);

    cell1.appendChild(text1);
    cell2.appendChild(text2);
    cell3.appendChild(text3);

    inputText.value = '';
    inputNumber.value = '';
    inputText1.value = '';
}


const dadosPessoais = [
    { nome: '', idade: 0, profissao: '' },
];

function gerarFormulario(dados) {
    let formularioHTML = '';
       
    for (const pessoa of dados) {
        formularioHTML += `
        <tbody>
            <tr>
                <td>${pessoa.nome}</td>
                <td>${pessoa.idade}</td>
                <td>${pessoa.profissao}</td>
                
            </tr>
        </tbody>
        `;
    }
        
    return formularioHTML;

}

function adicionarDadosPessoais() {

    const nome = document.getElementById('texto1').value;
    const idade = document.getElementById('number').value;
    const profissao = document.getElementById('texto2').value;


    dadosPessoais.push({
        nome: nome,
        idade: parseInt(idade),
        profissao: profissao
    });

    const tbodyElement = document.querySelector('#table-3 tbody');
    const novaLinha = document.createElement('tr');
    novaLinha.innerHTML = `
        <td>${nome}</td>
        <td>${idade}</td>
        <td>${profissao}</td>
        <td><button onclick="removerLinha(this)">Remover</button></td>
    `;
    tbodyElement.appendChild(novaLinha);

    tbodyElement.innerHTML = gerarFormulario(dadosPessoais);
}
    
 */


const dadosPessoais = [
    { nome: '', idade: 0, profissao: '' },
];

function gerarFormulario(dados) {
    let formularioHTML = '';
       
    for (const pessoa of dados) {
        formularioHTML += `
        <tr>
            <td>${pessoa.nome}</td>
            <td>${pessoa.idade}</td>
            <td>${pessoa.profissao}</td>
            <td><button onclick="removerLinha(this)">Remover</button></td>
        </tr>
        `;
    }
        
    return formularioHTML;
}

function adicionarDadosPessoais() {
    const nome = document.getElementById('texto1').value;
    const idade = document.getElementById('number').value;
    const profissao = document.getElementById('texto2').value;

    console.log('Nome:', nome);
    console.log('Idade:', idade);
    console.log('Profissão:', profissao);

    dadosPessoais.push({
        nome: nome,
        idade: parseInt(idade),
        profissao: profissao
    });

    console.log('Dados Pessoais:', dadosPessoais);

    const tbodyElement = document.querySelector('#table-3');
    const novaLinha = document.createElement('tr');
    novaLinha.innerHTML = `
        <td>${nome}</td>
        <td>${idade}</td>
        <td>${profissao}</td>
        <td><button onclick="removerLinha(this)">Remover</button></td>
    `;

    console.log('Nova Linha:', novaLinha);

    tbodyElement.appendChild(novaLinha);
}

function removerLinha(botao) {
    const linha = botao.parentNode.parentNode;
    linha.parentNode.removeChild(linha);
}
    
    
    
    
    
    






    

