let lista = ['tigre','leao','girafa','elefante','onça'];

let listaUL = document.createElement('ul');

let body = document.getElementsByTagName('body');

//console.log(body[0]);

body[0].appendChild(listaUL);

let listaNoBody = document.getElementsByTagName('ul');

console.log(listaNoBody[0]);

/*for(let i = 0; i < lista.length; i++) {
   
   let lifor = document.createElement('li');          

   let texto = document.createTextNode(lista[i]);

   lifor.appendChild(texto) 
   
   listaNoBody[0].appendChild(lifor);
}*/
for(let animal of lista) {
   let lifor = document.createElement('li');
   
   let texto = document.createTextNode(animal);

   lifor.appendChild(texto)
   
   listaNoBody[0].appendChild(lifor);
}

const removeSpacesFromString = () => {
   let text1 =
         'site/ delft stack .com/';

   let text2 = text1.split(' ').join('');

   document.querySelector('.outputString').textContent = text2;
}

