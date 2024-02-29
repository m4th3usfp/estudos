
const pessoasSalvas = [{}];

document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('container');    
    container.innerHTML = gerarHTML();

    
});


function gerarHTML(data) {
    let formularioHTML = '';

    for (const pessoa of data) {
        formularioHTML +=
            `<body id="container" name="container" class="container-fluid">
                <main role="main" class="container-sm col-7">
                    <section class="container-fluid mb-3 mt-4">
                        <div class="container-sm">
                            <div class="form-group">
                                <label class="mb-2">Endereço de API</label>
                                <input id="URL" placeholder="Endereço URL ..." class="form-control">
                            </div>
                        </div>
                    </section>
                    
                    <section class="container-fluid">
                        <div class="container-sm">
                            <div class="form-group d-flex justify-content-end ">
                                <h5 id="h5" class="col">Nenhuma pessoa cadastrada.</h5>
                                <button id="nova_pessoa" class="btn btn-primary float-right"
                                data-bs-toggle="modal" data-bs-target="#pessoa_modal">Nova pessoa</button> 
                            </div>
                        </div>
                    </section>
                                
                    <section class="container-fluid">
                        <div id="tabela_container" class="container-xl"></div>
                    </section>
                    <section id="empty" class="container-fluid">
                        <div class="container-xl col-9"></div>
                    </section>
                    

                    <section class="container-fluid">
                    <div class="container">
                        <div id="tabelaDIV" class="container-xl">
                    <table class="table" id="table">
                        <tbody id='tbody'></tbody>
                    </table>
                </div>
                </div>
            </section>
            </main>

                <div id="pessoa_modal" class="modal fade" tabindex="-1" aria-labelledby="label_adicionar" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <form id="form_pessoa" onsubmit="inserirDados(this); return false;">
                                <div class="modal-header">
                                    <h5 id="label_adicionar" class="modal-title">Adicionar pessoa</h5>
                                </div>
                                <div class="modal-body">
                                    <section class="container-fluid">
                                        <div class="container-sm">
                                            <div class="form-group row mb-3">
                                                <label class="col-sm-2 col-form-label">Nome</label>
                                                <div class="col-sm-10">
                                                    <input class="form-control" name="nome" required="">
                                                </div>
                                            </div>
                                            <div class="form-group row mb-3">
                                                <label class="col-sm-2 col-form-label">Email</label>
                                                <div class="col-sm-10">
                                                    <input class="form-control" type="email" name="email" placeholder="nome@exemplo.com" required="">
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <legend class="col-form-label col-sm-2 pt-0">Tipo</legend>
                                                <div class="col-sm-10">
                                                    <div class="form-check">
                                                        <input id="tipo1" class="form-check-input" type="radio" name="tipo" value="1" required="">
                                                        <label for="tipo1" class="form-check-label">Cliente</label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input id="tipo2" class="form-check-input" type="radio" name="tipo" value="2">
                                                        <label for="tipo2" class="form-check-label">Fornecedor</label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input id="tipo3" class="form-check-input" type="radio" name="tipo" value="3">
                                                        <label for="tipo3" class="form-check-label">Empregado</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                                <div class="modal-footer">
                                    <button id="cancelar_modal" class="btn btn-secondary float-right" data-bs-dismiss="modal">Cancelar</button>
                                    <button id="adicionar_pessoa" class="btn btn-primary float-right" type="submit">Adicionar pessoa</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                
        </body>`;
  
    }
    
    return formularioHTML;
};


/*
function inserirDados(form) {
    const nome = form.querySelector('input[name="nome"]').value;
    const email = form.querySelector('input[name="email"]').value;
    const tipo = form.querySelector('input[name="tipo"]:checked').value;
    const URL = document.getElementById('URL').value;

    

    let value;
    if (tipo === '1') {
        value = 'Cliente';
    } else if (tipo === '2') {
        value = 'Fornecedor';
    } else if (tipo === '3') {
        value = 'Empregado';
    } else {
        value = 'Tipo desconhecido';
    }
    
    const novaPessoa = {nome, email, tipo, URL};
    pessoasSalvas.push(novaPessoa);

    const tbody = document.querySelector('#table');

    // Criação da linha de cabeçalho
    if (tbody.querySelectorAll('tbody').length === 0) {
        const headerRow = document.createElement('tbody');
        headerRow.innerHTML = `
            <td>Nome</td>
            <td>Email</td>
            <td>Tipo</td>
            <td></td>
            
            `;
        tbody.appendChild(headerRow);
    }

    // Criação da nova linha com os dados da pessoa
    const newRow = document.createElement('tbody');
    newRow.innerHTML = `
        <td>${nome}</td>
        <td>${email}</td>
        <td>${value}</td>
        <td>
            <button id="editar" class="btn btn-secondary" type="button">Editar</button>
            <button id="cancelar" class="btn btn-danger" type="button" data-bs-dismiss="modal">Cancelar</button>
        </td>
        
        `;
        
    tbody.appendChild(newRow);

    if (tbody.querySelectorAll('tbody').length > 1) {
        document.getElementById('h5').style.display = 'none';
        alert('Pessoa adicionada');
    }
}    


*/

function inserirDados(form) {

    if (event.submitter.id === 'cancelar_modal') {
        return; }
    
    const nome = form.querySelector('input[name="nome"]').value;
    const email = form.querySelector('input[name="email"]').value;
    const tipo = form.querySelector('input[name="tipo"]:checked').value;
    const URL = document.getElementById('URL').value;

    

    let value;
    if (tipo === '1') {
        value = 'Cliente';
    } else if (tipo === '2') {
        value = 'Fornecedor';
    } else if (tipo === '3') {
        value = 'Empregado';
    } else {
        value = 'Tipo desconhecido';
    }
    
    const novaPessoa = {nome, email, tipo, URL};

    /*
    
*/

        const url = 'https://crudcrud.com/api/e713465d595040829f9008424d45f426/pessoa';
        fetch(url, {
            method: 'POST',
            headers: {
              
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              
      
            },
            body: JSON.stringify(novaPessoa)
          })
          .then((response) => {
            console.log(response)
            return response.json();
          })
          .then((data) => {
            pessoasSalvas.push(novaPessoa);
    

    const tbody = document.querySelector('#tbody');

    // Criação da linha de cabeçalho
    if (tbody.querySelectorAll('tr').length === 0) {
        const headerRow = document.createElement('tr');
        headerRow.innerHTML = `
            <td>Nome</td>
            <td>Email</td>
            <td>Tipo</td>
            <td></td>
            </tr>
            `;
        tbody.appendChild(headerRow);
    }

    // Criação da nova linha com os dados da pessoa
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${nome}</td>
        <td>${email}</td>
        <td>${value}</td>
        <td>
            <button id="editar_pessoa" class="btn btn-secondary" type="button">Editar</button>
            <button id="cancelar_linha" class="btn btn-danger" type="button" data-bs-dismiss="modal" onclick="cancelarLinha(this)">Cancelar</button>
        </td>
        
        `;
        
    tbody.appendChild(newRow);

    if (tbody.querySelectorAll('tr').length > 1) {
        document.getElementById('h5').style.display = 'none';
        alert('Pessoa adicionada');
    }

            


          });

    
    

}    
    

    

function cancelarLinha(botao) {
    // Obtém o elemento <tr> pai do botão de cancelar
    const linha = botao.closest('tr');
    
    // Obtém o elemento <tbody> pai da linha
    const tbody = linha.parentNode;

    // Remove a linha
    linha.remove();

    // Se o número de linhas no tbody for igual a 1, remove o tbody
    if (tbody.querySelectorAll('tr').length > 1) {
        alert('Tem certeza que deseja remover a pessoa ?');

        newRow.remove()
    } else if (tbody.querySelectorAll('tr').length === 1 ) {

        alert('Tem certeza que deseja remover a pessoa ?');

        tbody.remove();
    }
}



