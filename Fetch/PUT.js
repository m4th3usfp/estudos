const url = "https://crudcrud.com/api/ce9ae8a5ffab4c8cac130d274f3efe0e/pessoa/65ce5ee16227a803e824ca55";

const newdata = {
    nome: "rodrigoFanuchy",
    email: "rodrigopizzinato975@hotmail.com",
    tipo: "1"
    
};

fetch(url, {
    
    method: "PUT",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"

    },
    body: JSON.stringify(newdata)
})
.then(()=> {
	console.log('ta funcionando puta')
})
.catch(error => {
    console.error("erro ao fazer a solicitação PUT:", error.message); // Imprime a mensagem de erro específica
});

//////////////////////////
/*
fetch('https://<some website>/data', {
  method: 'OPTIONS',
  headers: {
    'Origin': 'https://normal-website.com',
    'Access-Control-Request-Method': 'PUT',
    'Access-Control-Request-Headers': 'Special-Request-Header'
  }
})
.then(response => {
  console.log('Requisição OPTIONS enviada com sucesso!');
})
.catch(error => {
  console.error('Erro ao enviar requisição OPTIONS:', error);
});
*/



/////////////////////////////////////
/*
fetch(url, {
    
    method: "PUT",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        

    },
    body: JSON.stringify(newdata)
})
.then(res => {
    if(!res.ok) {
        throw new Error("ocorreu um erro ao atualizar o recurso");
    }
    return res.json();
})
.then(res => {
    console.log("recurso atualizado com sucesso:", res.message);
})
.catch(error => {
    console.error("erro ao fazer a solicitação PUT:", error.message); // Imprime a mensagem de erro específica
});
*/


























