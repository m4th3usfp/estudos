
const input = prompt('Digite numeros separados por virgulas');

const userNumber = input.split('.').map(Number);

if(userNumber.length === 0) {
    
    console.log('nenhum numero foi inserido');
    
} else {
    
    let minvalue = userNumber[0];
    let position = 0;

    for(let i = 0; i < userNumber.length; i++) {
        
        if (userNumber[i] < minvalue) {
            minvalue = userNumber[i];
            position = i;
        }  
    }
}       
        
        console.log(`O valor minimo é : ${minvalue}`);
        console.log(`A posição é : ${position}`);





const X = [1,2,3,4,-5,6,7,8,9];
let minvalue = X[0];
let position = 0;

for(let i = 0; i <= X.length; i++) {

    if( X[i] < minvalue) {
        
      minvalue = X[i];
      position = i;
      
    }
}
        
    console.log(`O valor mínimo é : ${minvalue}`);
    console.log(`A posição é : ${position}`);



