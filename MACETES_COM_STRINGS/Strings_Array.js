// converter string de numeros para um array de numeros, usando o metodo JSON.parse();
var data = "0,1,2,3";
var arr = JSON.parse("[" + data + "]");
console.log( arr)
console.log(typeof arr[0])


// convertendo string em um array de strings, usando (Array.from());
let num = '1234';
let Arr = Array.from(data);
console.log(arr);
console.log(typeof(arr[0]));


// converter uma string e um array, usando o operador spread (...variavel);
let Data = '12345';
let ARr = [...Data];
console.log(ARr);
console.log(typeof ARr[0]);

// dividir string em um array, usando o metodo split();
let meuarr = 'matheus'.split('');
console.log(meuarr);


// usando o metodo from();
let MEUARR = 'fanuchy';
console.log(Array.from(MEUARR));


// usando o operador spread;
const str = 'Matheus';
const arR = [...str];
console.log(arR);


