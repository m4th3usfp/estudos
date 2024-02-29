


document.getElementById('corpo').style.backgroundColor = 'gray';

let titulo = document.querySelector('h1');
    
    titulo.textContent = 'Aula de DOM manipular CSS';
    
   // titulo.innerHTML = 'Aula de DOM';

    let imagem = document.querySelector('#foto')
    imagem.setAttribute('src', 'images.jpg')
    imagem.setAttribute('width', '300px')
    
    
    
   let imagem2 = document.getElementById('foto2')
   imagem2.setAttribute('src', 'image.jpg.webp')
   imagem2.setAttribute('width', '300px')

   document.querySelector('h1').style.color = 'red';
   document.querySelector('h1').style.backgroundColor = '#000';
   titulo.style.borderBottom = '5px solid aqua';
   titulo.style.padding = '0.625rem'
   titulo.style.borderRadius = '7px';

   

   let box = document.querySelectorAll('.box');
   box[0].setAttribute('class','gray');

   let tela = document.querySelector('.Tela_principal')

   let btnDark = document.querySelector('#btdark')

   let btnLight = document.querySelector('#btlight')
   
   btnDark.addEventListener('click', modoDark)
   btnLight.addEventListener('click', modoLight)
   
   function modoDark() {
    
    console.log('modo light')
    tela.classList.add('dark');
    tela.classList.remove('light');
    }

    function modoLight() {
        console.log('modo light')
        tela.classList.remove('dark');
        tela.classList.add('light');
    }





   
   