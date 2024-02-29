let mydate = new Date()
console.log(mydate);
let mystring = mydate.toTimeString();
 console.log(mystring);
 let myoffstring = mystring.slice(9, 17);
 console.log(myoffstring) 


// OBTER O FUSU HORARIO;
let myDate = Intl.DateTimeFormat().resolvedOptions().timeZone;
console.log(myDate);

const dateObj = new Date('3-9-1998');
dateString = dateObj.toLocaleString('en-US', {month: 'long'}); // motra o nome do mês;
console.log(dateString)

// mesma coisa usando um array;
const month = ['janeiro','fevereiro','março','abriu','maio','junho','julho','agosto','setembro','outubro','novmbro','dezembro'];
let wichMonth = date => {return month[date.getMonth()]}
console.log(wichMonth(new Date('6-1-1998')));;

 let displayHours = new Date();
 let horas = displayHours.toLocaleTimeString() // mostra as horas com minutos e segundos;
 console.log(horas + 'hrs')
