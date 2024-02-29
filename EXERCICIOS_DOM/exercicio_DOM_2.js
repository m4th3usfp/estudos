    /*let botao1 = document.getElementById('btn1');
    let botao2 = document.getElementById('btn2');
    
    botao1.classList.add('button1');
    botao2.classList.add('button2');

    let foto1 = document.getElementById('foto1')
    foto1.setAttribute('src', 'prototype.jpg')
    foto1.setAttribute('width', '300px')
    

    let foto2 = document.getElementById('foto2')
    foto2.setAttribute('src', 'cavaleiro.jpg.webp')
    foto2.setAttribute('width', '300px')

    function toggleImage(imageId) {
        var image = document.getElementById(imageId);

        if (image.style.display === 'none') {
            
            image.style.display = 'block';
        } else {

            image.style.display = 'none';
        }
    }

    function toggleImages() {
        
        var foto1 = document.getElementById('foto1')
        var foto2 = document.getElementById('foto2')

        foto1.style.display = (foto1.style.display === 'none') ? 'block' : 'none';
        foto2.style.display = (foto2.style.display === 'none') ? 'block' : 'none';
    } 
    */
    
    let corpo = document.getElementsByTagName('body')[0];
    corpo.style.backgroundColor = 'aquamarine';
    

    function toggleImage(imageid) {
    var image = document.getElementById(imageid)

    if (image.style.display === 'none') {
        image.style.display = 'block';
    } else {
        image.style.display = 'none';
    }

   }

   function toggleImages() {
    var imagens = document.querySelectorAll('.foto')

    imagens.forEach(function (imagem) {
        imagem.style.display = (imagem.style.display === 'none') ? 'block' : 'none';
    });
   }

