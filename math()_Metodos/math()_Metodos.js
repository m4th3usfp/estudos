function round(num) {
    var M = Number((Math.abs(num) * 100). toPrecision(15));
    return Math.round(M) / 100 * Math.sign(num);
}
    console.log(round(1.005));
////////////////////////////////////////////////////

function roundToTow(numero) {
    return +(Math.round(numero + 'e+2') + 'e-2'); // atenção essa operação resulta em uma concatenação, que é: "2.005e+2", porem o JS entende que é uma operação,
}                                                 // devido que a string resultante "2.005e+2" começa com um Number, portanto ele transforma em numero e   
    console.log(roundToTow(2.005));               // realiza a operação de potencialização resultando em: 200.5 logo apoz tem "e-2" que e a mesma coisa que dividir por 100      
                                                  // mas como tem o Math.round() ele arredonda para o inteiro mais proximo que é: 2.01  
function round2(num) {
    var b = Number((Math.abs(num) * 100). toPrecision(15));
    return Math.round(b) / 100; 
}   
    console.log(round2(1.005))
    