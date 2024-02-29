document.addEventListener('DOMContentLoaded', function() {
    // Obtém o elemento onde queremos adicionar o formulário gerado
    const container = document.getElementById('container');

    // Gera o formulário e o adiciona ao elemento container
    container.innerHTML = gerarFormulario(dadosPessoais);
});

const dadosPessoais = [
    { nome: '', idade: '', profissao: '' },
];

function gerarFormulario(dados) {
    let formularioHTML = '';

    for (const pessoa of dados) {
        formularioHTML += `
        <thead>
        <tr>
            <th>Nome <input type="text" class="nome">${pessoa.nome}</th> 
            <th>Idade <input type="number" class="idade">${pessoa.idade}</th>
            <th>Profissão <input type="text" class="profissao">${pessoa.profissao}</th>
            <th><button class="button" onclick="adicionarDadosPessoais(this)">Adicionar</button></th>
        </tr>
    </thead> 
            `;

    }

    return formularioHTML;
}

function adicionarDadosPessoais(botao) {
    const linha = botao.parentNode.parentNode;
    const nome = linha.querySelector('.nome').value;
    const idade = linha.querySelector('.idade').value;
    const profissao = linha.querySelector('.profissao').value;

    console.log('Nome:', nome);
    console.log('Idade:', idade);
    console.log('Profissão:', profissao);

    dadosPessoais.push({
        nome: nome,
        idade: parseInt(idade),
        profissao: profissao
    });

    console.log('dadosPessoais:', dadosPessoais);

    const tbodyElement = document.querySelector('#container');
    const novaLinha = document.createElement('tr');

    novaLinha.innerHTML = `
        <td>${nome}</td>
        <td>${idade}</td>
        <td>${profissao}</td>
        <td><button onclick="removerLinha(this)">Remover</button></td>
    `;

    console.log('Nova Linha:', novaLinha);
    tbodyElement.appendChild(novaLinha);
};

function removerLinha(botao) {
    const linha = botao.parentNode.parentNode;
    linha.parentNode.removeChild(linha);
}
