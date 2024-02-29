// O METODO toTimeString(); EXTRAI O APENAS O TEMPO DA VARIAVEL 'date';
let date = new Date();
result = date.toTimeString();
console.log(result);

// USANDO O 'toUTCString', EXTRAI O DIA DA SEMANA, A DATA DENTRO DO MÊS, MAIS O MÊS, E O ANO;
let date2 = new Date();
result2 = date2.toUTCString();
console.log(result2);

// USANDO O METODO toDateString(); EXTRAI A DATA E RETORNA EM STRING;
let date3 = new Date();
result3 = date3.toDateString();
console.log(result3);

// USANDO O METODO toISOString(), RETORNA UMA STRING CONTENDO DATA/HORARIO NO FORMATO ISO 8601;
let date4 = new Date();
result4 = date4.toISOString();
console.log(result4);

// USANDO O METODO toLocaleString(), CONVERTE O OBJETO DE DATA EM UMA STRING, USANDO AS CONFIGURAÇÕES DE LOCAL;
let date5 = new Date();
result5 = date5.toLocaleString();
console.log(result5);

// USANDO O METODO toLocaleTimeString(), EXTRAI APENAS O HORARIO PARA UMA STRING USANDO AS COFIGURAÇÕES DE LOCAL;
let date6 = new Date();
result6 = date6.toLocaleTimeString();
console.log(result6);

// USANDO FUNÇÕES PERSONALIZADAS PARA FORMATAR DATAS EM JS;
let date7 = new Date();
const formatDate = date => {
    let formatted_date = date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear()
    return formatted_date;
}   
    console.log(formatDate(date))

// USANDO ARRAY;
let  date8 = new Date();
const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV',
'DEC'];

const formatDate2 = date => {
    let formatted_date2 = date2.getDate() + '-' + (date2.getMonth() + 1) + '-' + date2.getFullYear();
    return formatted_date2;
}   
    console.log(formatDate2(date2));

    function addDAYtoDATES(date, days) {
        let res = new Date(date);
        res.setDate(res.getDate() + days);
        return res;
    }   

    let tmpdate = new Date(2020,7,20);
    console.log(addDAYtoDATES(tmpdate, 2))

// PEGAR O NUMERO DA SAMENANA DENTRO DA DATA;

currentdate = new Date();
var oneJan = new Date(currentdate.getFullYear(), 0, 1);
var numberOfDays = Math.floor((currentdate - oneJan) / (24 * 60 * 60 * 1000));
var result = Math.ceil((currentdate.getDay() + 1 + numberOfDays) / 7);
console.log(
    `The week number of the current date (${currentdate}) is ${result}.`);

    function difference(date1, date2) {
        const date1utc =
            Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
        const date2utc =
            Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());
        day = 1000 * 60 * 60 * 24;
        return (date2utc - date1utc) / day
      }
      
      const date1 = new Date('2020-12-10'); 
      date2 = new Date('2021-10-31'),
      time_difference = difference(date1, date2)
      console.log(time_difference)
      
// VALIDAR DATA EM JS;

let isValidDate = Date.parse('03/09/1998');
if(isNaN(isValidDate)) {
    document.getElementById('message').innerHTML = 'this is not avalid Date format';
} else {
    document.getElementById('message').innerHTML = 'this is a valid Date format';
}
