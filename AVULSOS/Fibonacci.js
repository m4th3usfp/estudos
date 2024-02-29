
let input = Number()

const Fibonacci = [0,1];

let sum = null;

for(let i = 1; i < input - 1; i++) {
  
  sum = Fibonacci[i] + Fibonacci[i - 1];
  
  Fibonacci.push(sum);
}

let str = '';
    
for(let i = 0; i < Fibonacci.length; i++) {

    str += Fibonacci[i] + ' ';
}
console.log(str.trim());








