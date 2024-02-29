const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < numbers.length; i++) {
  const n = numbers[i];

  if (n < 1 || n > 50) {
    console.log('Número inválido:', n);
  } else {
    const baralho = Array.from({ length: n }, (_, i) => i + 1);
    const descartadas = [];

    while (baralho.length >= 2) {
      descartadas.push(baralho.shift());
      baralho.push(baralho.shift());
    }

    console.log('Sequência de cartas descartadas:', descartadas.join(', '));
    console.log('Última carta restante:', baralho[0]);
  }
}
