///// tratamento de erros no fetch /////////////
  
 const url = 'https://crudcrud.com/api/4295d0bad30e4ae187cdbbb67ae93006/pessoa';
fetch(url, {
  method: 'GET',
  mode: "no-cors"  
  })

.then((response) => {
  return response.json();
})
.then((data) => {
  console.log(data);
})
.catch((error) => {
    console.log(error)
});
