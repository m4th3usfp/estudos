function compareNumbers(a, b) {

    const isAPar = a % 2 === 0;
    const isBPar = b % 2 === 0;

    if(isAPar && isBPar ) {
        
        return a - b;
    
    } else if(!isAPar && !isBPar) {
    
        return b - a;
 
    } else {
        isAPar ? -1 : 1;
    }
}

    function ordenarNumeros(input) {

        const n = input.shift();
        const numeros = input.map(Number);

        numeros.sort(compareNumbers);

        for(const numero of numeros) {
            console.log(numero);
        }
    }
        const input = [
            5,
            4,
            3,
            2,
            1,
            0
        ];  
            ordenarNumeros(input);