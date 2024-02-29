/*function removerFilhos() {
    let inputElement = document.getElementById('number');
    let stringNumero = inputElement.value

    var numero = parseInt(stringNumero);
    
    var tabela = document.getElementById('table');

    var tbody = document.querySelector('#table-body') || tabela;

    var elementos = tbody.children;

    var numerodefihos = elementos.length

    if (!isNaN(numero) && numero >= 1 && numero <= numerodefihos) {
        var filhoremovido = elementos[numero - 1];
        tbody.removeChild(filhoremovido);
        
    } else {
        alert('digite um numero valido.')
    }
};  
*/
function removeRow() {
    // Obtenha o valor do campo de entrada
    let input = document.getElementById('number').value;

    // Converta o valor para um número inteiro
    let numero = parseInt(input);

    // Verifique se a entrada é um número válido
    if (!isNaN(numero)) {
        // Selecione a linha a ser removida
        let rowToRemove = document.querySelector(`#table-body tr:nth-child(${numero})`);

        // Verifique se a linha foi encontrada antes de tentar removê-la
        if (rowToRemove) {
            rowToRemove.remove();
        } else {
            console.error('Linha não encontrada.');
        }
    } else {
        console.error('Entrada inválida. Certifique-se de inserir um número.');
    }
}
    


    




