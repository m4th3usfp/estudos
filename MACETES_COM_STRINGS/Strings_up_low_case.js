//comparar strings maiusculas e minusculas;
// usando o metodo toUpperCase();
 let strA = 'this is js tutorial';
 let strB = 'THIS is js TUTORIAL';

 if(strA.toLocaleUpperCase() === strB.toLocaleUpperCase()) {
    console.log('the strings are equal')
 } else {
    console.log('the strings are NOT equal')
 };

 let str1 = 'esse e um tutorial js';
 let str2 = 'ESSE e um tutorial JS';

 if(str1.toLowerCase() === str2.toLocaleLowerCase()) {
    console.log('as strings são iguais')
 } else {
    console.log('as strings não são iguais')
 }; 

 
 