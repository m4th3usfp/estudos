const pessoasSalvas = [{}];

const idsalvo = [{}];

document.addEventListener('DOMContentLoaded', function () {
    const inputUrl = document.querySelector('#URL');
    const tbody = document.querySelector('#tbody');
    let inputusada = inputUrl.value


    function ocultarTbodySeVazio() {
        if (inputUrl.value.trim() === '' || inputUrl.value.trim() !== inputusada) {             // ja resolvi kkk
            tbody.style.display = 'none';
            document.querySelector('h5').style.display = ''
        } else {
            tbody.style.display = '';
            document.querySelector('h5').style.display = 'none';
        }
        console.log('voltou aqui')
    }

    inputUrl.addEventListener('blur', ocultarTbodySeVazio);

    ocultarTbodySeVazio();



    let url = document.querySelector('#URL').value // recebe a url que foi inserida no input #URL
    console.log('url linha 27 =>', url)

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

                    if (document.querySelectorAll('tr').length === 0) {
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

                    if (document.querySelectorAll('tr').length >= 1) {
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











    let urlUsada = ''; // valor inicial zerado

    let inputurl = document.querySelector('#URL') // recebe o proprio input da url



    if (url.length > 0) {          // verifica se existe a url no input e retorna 
        urlUsada = url
    }
    inputurl.addEventListener('blur', function () {             // adiciona o eventlistener no inputurl que e o proprio input, funções nao funcionam em strings 

        const URL = inputurl.value;                             // recebe a propria URl do input 
        if (urlUsada === '' || urlUsada !== URL) {              // verifica se a urlUsada for estritamente vazia ou diferente da url do crud, se sim faz o fetch()
            
           // console.log('urlusada', urlUsada)
            console.log('URL =>', URL)


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

                        if (document.querySelectorAll('tr').length === 0) {
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

                        if (document.querySelectorAll('tr').length >= 1) {
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
            
            
            
            console.log('urlUsada =>', urlUsada)
            tbody.style.display = ''
            document.querySelector('h5').style.display = 'none'
            if (URL === '') {
                document.querySelector('h5').style.display = 'block'
                tbody.style.display = 'none'
            }
             if (urlUsada !== URL) {
                tbody.innerHTML = ''
                urlUsada = URL
                tbody.style.display = ''
            }
        
        })
        
        







});

function aparecerbotao() {
    const nova_pessoa = document.querySelector('#nova_pessoa')
    const salvar_pessoa = document.querySelector('#salvar_pessoa')
    const adicionar_pessoa = document.querySelector('#adicionar_pessoa')

    if (nova_pessoa.id === 'nova_pessoa') {
        salvar_pessoa.style.display = 'none';
        adicionar_pessoa.style.display = 'block';

        const name = document.querySelector('input[name="nome"]')
        const Email = document.querySelector('input[name="email"]')
        let tipo = document.querySelectorAll('input[name="tipo"]')
        console.log(tipo)

        name.value = '';
        Email.value = '';


        tipo.forEach(input => {
            input.checked = false;
        })

    }





}

function inserirDados() {

    // const id = document.querySelector('input[name="id"]').value
    // console.log('o que eu quero ver =>', id)
    // if (id) {
    //     return editarPessoa();
    // }


    const nome = document.querySelector('input[name="nome"]').value;
    const email = document.querySelector('input[name="email"]').value;
    let tipo = document.querySelector('input[name="tipo"]:checked').value;
    const URL = document.getElementById('URL').value;



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
            if (document.querySelectorAll('tr').length === 0) {
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






            if (document.querySelectorAll('tr').length >= 1) {
                
                tbody.style.display = '';


            } else {

                document.getElementById('h5').style.display = 'block';

            }


            alert('Pessoa adicionada');
            const modalElement = document.getElementById('pessoa_modal');
            const modalInstance = bootstrap.Modal.getInstance(modalElement);
            modalInstance.hide();

            document.getElementById('h5').style.display = 'none';

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

                if (document.querySelectorAll('tr').length === 1) {


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
    //let salvar_pessoa1 = document.querySelector('#salvar_pessoa')

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
    const id = document.querySelector('input[name="id"]').textContent = valorBotao
    console.log('id da função editarlinha => ',id)
    console.log('valor do botao => ',valorBotao);
    

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
    document.querySelector('#salvar_pessoa').value = valorBotao
    //salvar_pessoa1.setAttribute('value', valorBotao);
    //console.log('o id do salvar', salvar_pessoa1)


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
    
    let name = document.querySelector('input[name="nome"]').value;
    let email = document.querySelector('input[name="email"]').value;
    let tipo = document.querySelector('input[name="tipo"]:checked').value;
    const url = document.querySelector('#URL').value;
    let _id = botao.value
    console.log(botao)

    const informaçãoSalva = { name, email, tipo, _id };
    
    console.log('olhar informação', informaçãoSalva);

    // fetch(`${url}/pessoa/${_id}`, {
    
    //     method: "PUT",
    //   mode: "no-cors", // Isso pode ser removido ou alterado para "cors" se o servidor suportar CORS
    //     headers: {
    //         "Content-Type": "application/json", // Corrigido aqui
    //         "Accept": "application/json"
    //     },
    //     body: JSON.stringify(informaçãoSalva)
    // })
    // .then(response => {
    //     response.json()})
    
    // .then(data => {
        
    //     console.log('Resposta da requisição:', data);
    //     return data; // Retornar os dados obtidos da resposta da requisição
    // })
    // .catch(error => {
    //     console.error('Erro na requisição:', error);
    // });
}
    




































































































