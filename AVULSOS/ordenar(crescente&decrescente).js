const N = parseInt(prompt('Digite o número de valores a serem lidos :'));
const numeros = [];

for(let i = 0; i < N; i++) {
    const num = parseInt(prompt('Digite um numero inteiro não negativo;'));
    numeros.push(num);
}
    const pares = [];
    const impares = [];

for (const num of numeros) {

    if (num % 2 === 0) {
        pares.push(num);
    } else {
        impares.push(num);
    }
}

    pares.sort((a, b) => a - b);

    const numerosOrdenados = [...pares, ...impares];
console.log('Números ordenados: ' + numerosOrdenados);



