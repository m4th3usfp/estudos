//objeto pass by value;
const USER_ADMIN = {
    name: 'mateus fanuchy',
    login: 'root'
};  
        USER_ADMIN.login = 'admin';
        console.log(USER_ADMIN);

///////////////////////////////////

// 2 pass by reference;
var myname = {
    first_name: 'matheus',
    last_name: 'fanuchy'
};
    function fakemyname(name) {
        name.first_name = 'jederzelbio',
        name.last_name = 'fonseca'
    };
        fakemyname(myname);
        console.log(myname.first_name);
        console.log(myname.last_name)
/////////////////////////////////////

// pass by reference (fazendo uma copia do objeto original, para nao modifica-lo);
function alterarobjeto(obj) {
    const copiaobjeto = {...obj };
    copiaobjeto.prop = 'novo valor';
    return copiaobjeto;
}           
    let meuObjeto = { prop: 'valor original'};

    const objetoModificado = alterarobjeto(meuObjeto);
    
    console.log(meuObjeto.prop)
    
    meuObjeto = objetoModificado;

    console.log(meuObjeto.prop)
//////////////////////////////////////

//fake my name codigo (sem alterar o objeto original);
var myName = {
    first_name: 'matheus',
    last_name: 'fanuchy' 
};

function fakename(nome) {
    nome = {
        first_name: 'john',
        last_name: 'krasanski'
    };
        
}

fakename(myName);

console.log(myName.first_name, myName.last_name);




var nome = {
    first_name: 'matheus',
    last_name: 'fanuchy'
};

function fakename() {
    // Retorna um novo objeto com valores diferentes
    return {
        first_name: 'john',
        last_name: 'krasanski'
    };
}

// Chama a função e atribui o resultado à variável 'nome'
nome = fakename(nome);

// Agora 'nome' contém o novo objeto retornado pela função
console.log(nome.first_name, nome.last_name);
