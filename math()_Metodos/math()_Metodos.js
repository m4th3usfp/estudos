function round(num) {
    var M = Number((Math.abs(num) * 100). toPrecision(15));
    return Math.round(M) / 100 * Math.sign(num);
}
    console.log(round(1.005));
////////////////////////////////////////////////////

function roundToTow(numero) {
    return +(Math.round(numero + 'e+2') + 'e-2');
}
    console.log(roundToTow(2.005));

function round2(num) {
    var b = Number((Math.abs(num) * 100). toPrecision(15));
    return Math.round(b) / 100; 
}   
    console.log(round2(1.005))