
const pessoasSalvas = [{}];

document.addEventListener('blur', function () {
    const URL = document.getElementById('URL').value;

    console.log('e isso', URL)
    if (URL.length > 0) {

        fetch(URL + '/pessoa', {
            method: 'GET',

        })

            .then(response => {

                return response.json()


            })
            .then(response => {
                console.log(response)

                for (pessoa of response) {
                    const tbody = document.querySelector('#tbody');
                    const newRow = document.createElement('tr');
                    newRow.innerHTML = `
                    <td>${pessoa.nome}</td>
                    <td>${pessoa.email}</td>
                    <td>${pessoa.value}</td>
                    <td>
                        <button id="editar_pessoa" class="btn btn-secondary" type="button">Editar</button>
                        <button id="cancelar_linha" class="btn btn-danger" type="button" data-bs-dismiss="modal" onclick="cancelarLinha(this)">Cancelar</button>
                    </td>
                    
                    `;

                    tbody.appendChild(newRow);

                }



            })


    }

})







function inserirDados(form) {


    const nome = form.querySelector('input[name="nome"]').value;
    const email = form.querySelector('input[name="email"]').value;
    const tipo = form.querySelector('input[name="tipo"]:checked').value;
    const URL = document.getElementById('URL').value;


    if (event.submitter.id === 'cancelar_modal') {
        return;
    }

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




            







            // Criação da nova linha com os dados da pessoa
            // const url = 'https://crudcrud.com/api/bedb493ae725448b88476f29ecdef687';
            // fetch(url, {
            //     method: 'GET',

            // })

            //     .then((response) => {

            //         return response.json();
            //     })


            //     .then((data) => {
            //         for (pessoa of data) {
            //             

            //         }
            //     })
            //     .catch((error) => {
            //         console.log(error)
            //     });

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
    } else if (tbody.querySelectorAll('tr').length === 1) {

        alert('Tem certeza que deseja remover a pessoa ?');

        tbody.remove();
    }
}

















