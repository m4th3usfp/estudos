// map() / reduce() / filter();

const prices = [50,60,70];
const newPrices = [];

for (i = 0; i < prices.length; i++) { 
  let newPrice = parseInt((prices[i] * 1.1))
  newPrices.push(newPrice)
}
    console.log(newPrices)

// usando o map();
const preço = [20, 30, 40];
const newPreço = preço.map((pre) => (pre * 1.1).toFixed());
console.log('map()=>',newPreço);
    
const arr = [80, 90, 100];
const newArr = arr.map((value) => {
    return { price: (value * 1.1).toFixed(2) };
}); 
    console.log('map(object)=>',newArr);

// filter();
const custo =  [ 78, 51, 36, 94, 56, 25, 90, 89, 62, 57 ];
let res = custo.filter((value) => value > 70);  
console.log('filter()=>',res);

// map() + filter();
const cost = [10,20,30,40,50,60,70,80,90,100];
let filtro = cost.map(value => {
    return {price: value}
}).filter(value => value.price > 50);

    console.log('map()+filter()=>',filtro)

// reduce();
const minhaLista = [0,1,2,3,4].reduce((accum, curr) => accum + curr);
console.log('reduce()=>',minhaLista);           

// reduce() em objetos;
const data = [  
    {  
       "name":"John",
       "books":[ 
          "Harry Potter",
          "1984"
       ]
    },
    {  
       "name":"Peter",
       "books":[  
          "Captains of the sands",
          "Barren Lives"
       ]
    }
 ]  
    var resultado = data.reduce(
        (prev, curr) => prev.concat(curr.books),[]
    );  
        console.log(resultado);

    // outro exemlo;
       const produtos = ['abc:12','def:77','gkl:0','zzz:0','opq:10'];
       var coisa = produtos.map(p => ({
        produto: p.split(':')[0],
        stock: Number.parseInt(p.split(':')[1])
       })).filter(p => p.stock > 0);

       console.log(coisa);

       produtos.forEach((value, index) => {
        console.log('posição: ' + index);
        console.log('elemento: ' + value);
       });
//////////////////////////////////////   EXEPLOS PART 2;   ////////////////////////////////////////   


// Exemplo usando map();
const products = [{
    name: 'TV',
    price: 100  
  }, {
    name: 'Monitor',
    price: 150
  }, {
    name: 'SSD',
    price: 300
}];

const discount = Object.keys(products).map(key => products[key]['price'] *= 0.9);
console.log(discount);

const discount2 = Object.keys(products).map(key => products[key]['prices']).filter(price => price > 100);
console.log(discount2);

// Exemplo usando o metodo filter();
const users = [1,2,3,4,5].filter(user => user !== 2 && user !== 3 && user !== 4);
console.log(users);
                                        //ou
const user1 = [1,2,3,4,5,6,7,8,9].filter(user => ![2,3,4].includes(user));
console.log(user1);


// Exemplo usando o metodo reduce();
const annualBilling = [1500, 1800, 700, 5000, 1600, 18000].reduce((total, currentvalue) => {
    return total + currentvalue;
},0);

console.log(annualBilling);


// exemplo usando todos os metodos (map(), filter(), reduce());

    const employees = [{
        name: 'Luke',
        department: 'Financeiro',
        salary: 1500    
      }, {
        name: 'Han',
        department: 'Financeiro',
        salary: 1200
      }, {
        name: 'Ben',
        department: 'Marketing',
        salary: 2000
      }, {
        name: 'Leia',
        department: 'Marketing',
        salary: 1750
      }, {
        name: 'Rey',
        department: 'Financeiro',
        salary: 1000
      }]

      const totalSalary = employees.filter(employee => {

        return (employee.department === 'Financeiro');
      
      }).map(item => {
        
        return item.salary *= 1.5;
      
      }).reduce((total, currentValue) => {
      
        return total + currentValue;
      
      });

      //forma simplificada;
      const TotalSalary = employees
    .filter(employee => (employee.department === 'Financeiro'))
    .map(item => item.salary *= 1.5)
    .reduce((total, currentValue) => total + currentValue);
      
    console.log(TotalSalary);
      



       
       
       



