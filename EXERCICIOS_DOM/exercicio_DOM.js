let corpo = document.getElementsByTagName('body')[0]
corpo.style.backgroundColor = 'antiquewhite';

function exibirAlerta() {
    // obtem o valor do input
    var texto = document.getElementById('input1').value
    
    var texto2 = document.getElementsByName('input2')[0].value

    var texto3 = document.getElementsByTagName('input')[1].value   
    
    //Exibir alerta com o texto inserido
        
    alert(`getElementById: ${texto} 
    getElementByName: ${texto2}
    getElementByTagName: ${texto3}`)
}

function limpartudo() {
    document.querySelector('#input1').value = '';
    document.querySelector('#input2').value = '';
    document.querySelector('#checkbox').checked = false;
}

