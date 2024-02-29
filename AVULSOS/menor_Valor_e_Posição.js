// usando for; 
const x = [1,2,3,4,-5,6,7,8,9];
let menorvalor = x[0];
let posição = 0;

for(let i = 1; i < x.length; i ++) {
    if(x[i] < menorvalor) {
        menorvalor = x[i];
        posição = i;
    }
}

console.log('O menor valor é :', menorvalor);
console.log('A posição é :', posição);  

// usando math.min();
const X = [1,2,3,4,-5,6,7,8,9];

const valorMinimo = Math.min(...X);
const Aposição = X.indexOf(valorMinimo);

console.log('Menor valor é:', valorMinimo);
console.log('A posição é:', Aposição);

// usando os for e math.min();
const A = [1,2,3,4,-5,6,7,8,9];

let minValue = A[0];
let position = 0;

for(let i = 1; i < A.length; i++) {
    
    if(A[i] < minValue) {
        minValue = A[i];
        position = i;
    }
}

    let lesserValue = Math.min(...A);
    let lesserValuePosition = A.indexOf(lesserValue);

    console.log('the lesser value is:', lesserValue);
    console.log('the position is :', lesserValuePosition);





