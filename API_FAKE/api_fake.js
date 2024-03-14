const pessoasSalvas = [{}];

const idsalvo = [{}];

document.addEventListener('DOMContentLoaded', function () {
    const inputUrl = document.querySelector('#URL');
    const tbody = document.querySelector('#tbody');

    function ocultarTbodySeVazio() {
        if (inputUrl.value.trim() === '') {
            tbody.style.display = 'none';
        } else {
            tbody.style.display = '';
        }
    }

    inputUrl.addEventListener('blur', ocultarTbodySeVazio);

    ocultarTbodySeVazio();

    if (nova_pessoa.id === 'nova_pessoa') {
        salvar_pessoa.style.display = 'none';
        adicionar_pessoa.style.display = ''
    }


    let url = document.querySelector('#URL').value
    console.log('url =>', url)

    if (url.length > 0) {

        fetch(url + '/pessoa', {
            method: 'GET',

        })

            .then(response => {

                return response.json()


            })
            .then(response => {



                console.log('response do GET =>', response)

                for (pessoa of response) {

                    if (pessoa.tipo === '1') {
                        pessoa.tipo = 'Cliente';
                    } else if (pessoa.tipo === '2') {
                        pessoa.tipo = 'Fornecedor';
                    } else if (pessoa.tipo === '3') {
                        pessoa.tipo = 'Empregado';
                    } else {
                        pessoa.tipo = 'Tipo desconhecido';
                    }

                    const tbody = document.querySelector('#tbody');
                    let pessoa_ID = pessoa._id;
                    let editar_ID = pessoa_ID;

                    idsalvo.push(pessoa_ID)

                    console.log('id do GET => ', pessoa_ID)

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

                    if (tbody.querySelectorAll('tr').length >= 1) {
                        document.getElementById('h5').style.display = 'none';
                    }


                    const newRow = document.createElement('tr');
                    newRow.innerHTML = `
                        <td>${pessoa.nome}</td>
                        <td>${pessoa.email}</td>
                        <td>${pessoa.tipo}</td>
                        <td>
                            <button id="editar_pessoa" class="btn btn-secondary" type="button" data-bs-toggle="modal" value=${editar_ID} onclick="editarLinha(this)">Editar</button>
                            <button id="cancelar_linha" class="btn btn-danger" type="button" data-bs-dismiss="modal" value=${pessoa_ID} onclick="cancelarLinha(this)">Cancelar</button>
                        </td>
                        
                        `;

                    tbody.appendChild(newRow);
                }
            })

    }











    let urlUsada = '';

    let inputurl = document.querySelector('#URL')



    if (url.length > 0) {
        return
    }
    inputurl.addEventListener('blur', function () {

        const URL = inputurl.value;
        if (urlUsada === '') {
            urlUsada = URL
            console.log('e isso', URL)
            if (URL.length > 0) {

                fetch(URL + '/pessoa', {
                    method: 'GET',

                })

                    .then(response => {

                        return response.json()


                    })
                    .then(response => {



                        console.log('response do segundo GET/BLUR =>', response)

                        for (pessoa of response) {

                            if (pessoa.tipo === '1') {
                                pessoa.tipo = 'Cliente';
                            } else if (pessoa.tipo === '2') {
                                pessoa.tipo = 'Fornecedor';
                            } else if (pessoa.tipo === '3') {
                                pessoa.tipo = 'Empregado';
                            } else {
                                pessoa.tipo = 'Tipo desconhecido';
                            }

                            const tbody = document.querySelector('#tbody');
                            let pessoa_ID = pessoa._id;
                            let editar_ID = pessoa_ID;

                            idsalvo.push(pessoa_ID)

                            console.log('id do GET/BLUR => ', pessoa_ID)

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

                            if (tbody.querySelectorAll('tr').length >= 1) {
                                document.getElementById('h5').style.display = 'none';
                            }


                            const newRow = document.createElement('tr');
                            newRow.innerHTML = `
                                <td>${pessoa.nome}</td>
                                <td>${pessoa.email}</td>
                                <td>${pessoa.tipo}</td>
                                <td>
                                    <button id="editar_pessoa" class="btn btn-secondary" type="button" data-bs-toggle="modal" value=${editar_ID} onclick="editarLinha(this)">Editar</button>
                                    <button id="cancelar_linha" class="btn btn-danger" type="button" data-bs-dismiss="modal" value=${pessoa_ID} onclick="cancelarLinha(this)">Cancelar</button>
                                </td>
                                
                                `;

                            tbody.appendChild(newRow);





                        }



                    })


            }
        }







    })









});

function aparecerbotao() {
    const nova_pessoa = document.querySelector('#nova_pessoa')
    const salvar_pessoa = document.querySelector('#salvar_pessoa')
    const adicionar_pessoa = document.querySelector('#adicionar_pessoa')

    if (nova_pessoa.id === 'nova_pessoa') {
        salvar_pessoa.style.display = 'none';
        adicionar_pessoa.style.display = 'block'
    }

}

function inserirDados(form) {


    const nome = form.querySelector('input[name="nome"]').value;
    const email = form.querySelector('input[name="email"]').value;
    let tipo = form.querySelector('input[name="tipo"]:checked').value;
    const URL = document.getElementById('URL').value;





    if (event.submitter.id === 'cancelar_modal') {
        return;
    }
    
    
    




    const novaPessoa = { nome, email, tipo, URL };

    const url = document.querySelector('#URL').value
    fetch(url + '/pessoa', {
        // mode: 'no-cors',
        method: 'POST',
        headers: {

            'Accept': 'application/json',
            'Content-Type': 'application/json',


        },
        body: JSON.stringify(novaPessoa)
    })
        .then((response) => {
            console.log('response post =>', response)
            return response.json();
        })
        .then((response) => {
            let pessoa_ID = response._id;
            let editar_ID = pessoa_ID;

            console.log('id da pessoa/POST => ', pessoa_ID)

            pessoasSalvas.push(novaPessoa);

            idsalvo.push(pessoa_ID);


            const tbody = document.querySelectorAll('#tbody')[0];

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
                tbody.appendChild(headerRow)





            }
            if (tipo === '1') {
                tipo = 'Cliente';
            } else if (tipo === '2') {
                tipo = 'Fornecedor';
            } else if (tipo === '3') {
                tipo = 'Empregado';
            } else {
                tipo = 'Tipo desconhecido';
            }


            const newRow = document.createElement('tr');
            newRow.innerHTML = `
              <td>${nome}</td>
              <td>${email}</td>
              <td>${tipo}</td>
              <td>
                  <button id="editar_pessoa" class="btn btn-secondary" type="button" data-bs-toggle="modal" value=${editar_ID} onclick="editarLinha(this)">Editar</button>
                  <button id="cancelar_linha" class="btn btn-danger" type="button" data-bs-dismiss="modal" value=${pessoa_ID} onclick="cancelarLinha(this)">Cancelar</button>
              </td>
              
              `;

            tbody.appendChild(newRow);

            
           
            


            if (tbody.querySelectorAll('tr').length >= 1) {
                document.getElementById('h5').style.display = 'none';
                tbody.style.display = '';


            } else {

                document.getElementById('h5').style.display = 'block';

            }


            alert('Pessoa adicionada');
            const modalElement = document.getElementById('pessoa_modal');
            const modalInstance = bootstrap.Modal.getInstance(modalElement);
            modalInstance.hide();

        });
}





function cancelarLinha(botao) {
    const linha = botao.closest('tr');
    const tbody = linha.parentNode;
    let pessoa_ID = botao.value;
    const url = document.querySelector('#URL').value;


    let confirmar = confirm('Deseja deletar essa pessoa ?')

    if (confirmar == true) {

        fetch(`${url}/pessoa/${pessoa_ID}`, {
            method: "DELETE",
        })
            .then(response => {
                console.log(response.status);

                alert('Deletado com sucesso XD')

                linha.remove();

                if (tbody.querySelectorAll('tr').length === 1) {


                    tbody.style.display = 'none';

                    document.querySelector('h5').style.display = 'block';
                }
            })
            .catch(error => {
                console.log('Erro ao tentar excluir a pessoa', error);
            });
    }
}

function editarLinha(botao) {
    console.log('o botao aqqui =>', botao);
    const editar_pessoa = document.querySelector('#editar_pessoa')
    const adicionar_pessoa = document.querySelector('#adicionar_pessoa')

    if (editar_pessoa.id === 'editar_pessoa') {
        adicionar_pessoa.style.display = 'none';
        salvar_pessoa.style.display = ''
    }

    
    const linha = botao.closest('tr');
    let username = linha.querySelector('td:nth-child(1)').textContent;
    let useremail = linha.querySelector('td:nth-child(2)').textContent;
    let tipo = linha.querySelector('td:nth-child(3)').textContent;
    console.log(tipo);

    let valorBotao = botao.value;
    console.log(valorBotao);

    let radioTipo; // Declare a variável aqui

    // Atribua um valor ao radioTipo com base no tipo
    if (tipo === 'Cliente') {
        radioTipo = '1';
    } else if (tipo === 'Fornecedor') {
        radioTipo = '2';
    } else if (tipo === 'Empregado') {
        radioTipo = '3';
    }

    // Defina a variável 'form' antes de usá-la
    const form = document.querySelector('#form_pessoa');
    

    
     
    



    // Preencha os valores nos campos do modal
    form.querySelector('input[name="nome"]').value = username;
    form.querySelector('input[name="email"]').value = useremail;


    // Verifique qual botão de opção corresponde ao tipo e marque-o como selecionado
    const radioTipos = form.querySelectorAll('input[name="tipo"]');
    for (let i = 0; i < radioTipos.length; i++) {
        if (radioTipos[i].value === radioTipo) { // Use radioTipo aqui em vez de tipo
            radioTipos[i].checked = true;
            break;
        }
    }

    // Abra o modal
    const modal1 = new bootstrap.Modal(document.getElementById('pessoa_modal'));
    modal1.show();
};



function editarPessoa(botao) {
    const url = document.querySelector('#URL').value;
    const linhadobotao = botao.closest('tr');
    const nome = linhadobotao.querySelector('input[name="nome"]').value;
    const email = linhadobotao.querySelector('input[name="email"]').value;





}


































































































