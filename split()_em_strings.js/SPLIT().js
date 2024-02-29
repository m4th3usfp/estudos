let string  = 'mano ta muito calor e eu to com o ombro incomodando ainda, puta saco';
let novastring = string.split(' ').reverse().join(' ');
console.log(novastring);

function getnameadextensionsfromfile(arquivo) {
    let result = arquivo.split('.');
    return {
        nome: result[0],
        extension: result[1]
    };
}   
    let novo = getnameadextensionsfromfile('javascript.jpg');
    console.log(novo)
    
    function GetUsernameandDomainfromEmail(email) {
        let res = email.split('@');
        return {
            username: res[0],
            Domain: res[1]
        };
    }   
        let nova2 = GetUsernameandDomainfromEmail('matheuspizzinato975@gmail.com');
        console.log(nova2);
        