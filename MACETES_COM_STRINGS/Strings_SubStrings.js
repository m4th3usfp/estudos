// verifique se a String possiu uma sub Strng;
// verificando se uma string possui uma sub string usando a função String.includes();
const str = 'matheus fanuchy';
const substr = 'fanuchy';
console.log(str.includes(substr));


const str1 = 'matheus fanuchy';
const substr1 = 'fanuchy';
console.log(str1.includes(substr1, 7));


// usando o metodo String.indexOf();
const str2 = 'matheus fanuchy';
const substr2 = 'fanuchy';
console.log(str2.indexOf(substr2)!=-1);