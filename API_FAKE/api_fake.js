const pessoasSalvas = [{}];

const idsalvo = [{}];

document.addEventListener('DOMContentLoaded', function () {
    let url = document.querySelector('#URL')


    let urlUsada = '';

    url.addEventListener('blur', function () {
        const URL = url.value;
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
                            idsalvo.push(pessoa_ID)
                            console.log(pessoa_ID)

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
                                    <button id="editar_pessoa" class="btn btn-secondary" type="button">Editar</button>
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
            console.log('response post =>',response)
            return response.json();
        })
        .then((response) => {
            let pessoa_ID = response._id;
            console.log(pessoa_ID)
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
                  <button id="editar_pessoa" class="btn btn-secondary" type="button" onclick= "editarLinha(this)">Editar</button>
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
    // Obtém o elemento <tr> pai do botão de cancelar
    const linha = botao.closest('tr');

    // Obtém o elemento <tbody> pai da linha
    const tbody = linha.parentNode;

    // Remove a linha
    linha.remove();

    // Se o número de linhas no tbody for igual a 1, remove o tbody
    if (tbody.querySelectorAll('tr').length > 1) {
        alert('Tem certeza que deseja remover a pessoa ?');

        linha.remove()
       
    } else if (tbody.querySelectorAll('tr').length === 1) {

        alert('Tem certeza que deseja remover a pessoa ?');

        linha.remove();
        tbody.style.display = 'none';
        document.querySelector('h5').style.display = 'block'
    }
    
    
    const url = document.querySelector('#URL').value;

    let pessoa_ID = document.querySelector('#cancelar_linha').value;
    console.log('null || undefined =>',pessoa_ID)


    fetch(`${url}/pessoa/${pessoa_ID}`, {
        method: "DELETE",
        //mode: 'no-cors'
        
    })
    
        .then(response => {
            console.log(response.status);
        })
        
        .catch(error => {
            console.log('Erro ao tentar excluir a pessoa', error);
        });
    }
    


    







































