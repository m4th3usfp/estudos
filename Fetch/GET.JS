
/*
fetch('https://crudcrud.com/api/70f9c79405a74b9681478c8290d36cae', {

    method: 'get',
})

// objeto de resposta da requisição
.then((response) => response.json())

// json com as informações recebidas na requisição 
.then((data) => {
    console.log(data);
})

// tratamento de erros da requisição
.catch((error) => {
    console.log(error);
});
    
*/


 
           /////////////////// get //////////////////
        const url = 'https://crudcrud.com/api/bedb493ae725448b88476f29ecdef687/pessoa';
        fetch(url, {
          method: 'GET',
          
          })
          
          .then((response) => {
              
            return response.json();
          })
          
        
        .then((data) => {
          for (pessoa of data) {
          const tbody = document.querySelector('#tbody');
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
      
        }
        })
        .catch((error) => {
            console.log(error)
        });
        

        /*  ////////////////////// get comum /////////////////////////////
      const url = 'https://crudcrud.com/api/70f9c79405a74b9681478c8290d36cae/pessoas';
      fetch(url)
            .then((response) => {
              
              return response.json()

            })
            .then((data) => {
              console.log(data);
            });
            
  */


            
            ///////////// GET + token() e bearer()///////////////////////
      /*
     const token = '12345';
      const url = 'https://crudcrud.com/api/d8c4fba1acc74c4899e6db5f80d8573f/pessoa';
      fetch(url, {
        method: 'GET',
        headers: {

          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`

        }
      })
            .then((response) => {
              
              return response.json()

            })
            .then((data) => {
              console.log(data);
           });  */
