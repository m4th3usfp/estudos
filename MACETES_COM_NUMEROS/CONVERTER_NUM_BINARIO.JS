function converterparabiario(number) {
    let num = number;
    let binary = (num % 2).toString();
    for (; num > 1;) {
        num = parseInt(num / 2);
        binary = (num % 2) + binary;
    }
    return binary;
}

window.onload = function() {
    const res1 = converterparabiario(25);
    document.getElementById('resultado1').textContent = res1;

    const res2 = converterparabiario(8);
    document.getElementById('resultado2').textContent = res2

}
