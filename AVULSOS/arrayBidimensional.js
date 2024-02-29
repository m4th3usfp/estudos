function Arraybidimensional(N) {
    if( N < 0 || N > 100) {
        console.log('N deve estar no intervalo de 0 à 100');
        return;
    }
    
    const arrayBidimensional = [];

    for(let i = 0; i < N; i++) {
        const linha = [];
        for(let j = 0; j < N; j++) {
            linha.push(Math.floor(Math.random()* 100) + 1);
        }
            arrayBidimensional.push(linha);
    }
            return arrayBidimensional;
}
    function imprimirArrayBidimensional(array) {
        for(let i = 0; i < array.length; i++) {
            console.log(array[i].join(' '));
        }
    }               
    
    const N = parseInt(prompt('Digite um numero inteiro N (0 <= N <= 100'));

    if(!isNaN(N)) {
        const arrayBidimensional = Arraybidimensional(N);
        
        if(arrayBidimensional) {
            
            console.log('Array Bidimensional gerado:');
            
            imprimirArrayBidimensional(arrayBidimensional);
        }
    } else {
        
        console.log('por favor digite um numero inteiro valido');
        
    }