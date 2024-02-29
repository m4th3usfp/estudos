

    /*
fetch('https://crudcrud.com/api/70f9c79405a74b9681478c8290d36cae', {
    
    method: 'POST', // get, put, delete
    
    Headers: {
        'accept': 'application/json',
        'Content-Type': 'aplication/json',
        'Authorization': `Bearer ${token}`,
        },
      
        body: JSON.stringify({
            nome: "Nelson",
            Email: "nelsonguara@gmail.com",
            id: 5 
        }),
    });
    */

    
    const url = 'https://crudcrud.com/api/bedb493ae725448b88476f29ecdef687/pessoa';
    fetch(url, {
      
      
      method: 'POST',
      headers: {
        
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        

      },
      body: JSON.stringify({
        "nome": "maconha",
        "email": "maconha@hotmail.com",
        "tipo": "2",
        
      })
    })
    .then((response) => {
      console.log(response)
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
    