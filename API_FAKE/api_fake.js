const pessoasSalvas = [{}];

const idsalvo = [{}];

document.addEventListener('DOMContentLoaded', function () {

    let url = document.querySelector('#URL').value
    console.log('zuado', url)

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
        }







    })









});


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

            console.log('id da pessoa => ', pessoa_ID)

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
                alert('Pessoa adicionada');
                tbody.style.display = '';

            } else {

                document.getElementById('h5').style.display = 'block';

            }

        });
}





function cancelarLinha(botao) {
    const linha = botao.closest('tr');
    const tbody = linha.parentNode;
    let pessoa_ID = botao.value;
    const url = document.querySelector('#URL').value;


    confirm('Deseja deletar essa pessoa ?')

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

function editarLinha(botao) {
    console.log('o botao aqqui =>', botao)
    let username = document.querySelector('input[name="nome"]').value;
    let useremail = document.querySelector('input[name="email"]').value;
    let tipo = document.querySelector('input[name="tipo"]:checked').value;
    const url = document.querySelector('#URL').value;
    let editar_ID = botao.value;


    const novaPessoa = { username, useremail, tipo, url, editar_ID };

    console.log('ta aqui', novaPessoa)

    // let inputform = document.querySelector('#form_pessoa')
    //         console.log(inputform)

    let dadosAtualizados = {
        nome: username,
        email: useremail,
        tipo: tipo,
        editarID: editar_ID,

    }


    fetch(`${url}/pessoa/${editar_ID}`, {
        method: "PUT",
        headers: {
            "Content-Type": "Aplication/json",
            "Accept": "Aplication/json"
        },
        body: JSON.stringify(dadosAtualizados)
        })

        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao editar linha')
            }
            return response.json();
        })
        .then(response => {
            
        })



    // .then(response => {
    //     let editar_ID = response._id;



    //     console.log('id do editar => ', editar_ID)


    //     if (tipo === '1') {
    //         tipo = 'Cliente';
    //     } else if (tipo === '2') {
    //         tipo = 'Fornecedor';
    //     } else if (tipo === '3') {
    //         tipo = 'Empregado';
    //     } else {
    //         tipo = 'Tipo desconhecido';
    //     }


    //     const tbody = document.querySelectorAll('#tbody')[0];



    //     const newRow = document.createElement('tr');
    //     newRow.innerHTML = `
    //       <td>${username}</td>
    //       <td>${useremail}</td>
    //       <td>${tipo}</td>
    //       <td>
    //           <button id="editar_pessoa" class="btn btn-secondary" type="button" data-bs-toggle="modal" value=${editar_ID} onclick="editarLinha(this)">Editar</button>
    //           <button id="cancelar_linha" class="btn btn-danger" type="button" data-bs-dismiss="modal" value=${pessoa_ID} onclick="cancelarLinha(this)">Cancelar</button>
    //       </td>

    //       `;

    //     tbody.appendChild(newRow);

    //     pessoasSalvas.push(novaPessoa);
    //     idsalvo.push(editar_ID);


    // })
};































































