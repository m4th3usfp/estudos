function verificaParenteses(expression) {
    let contador = 0;
  
    for (let i = 0; i < expression.length; i++) {
      const char = expression.charAt(i);
  
      if (char === '(') {
        contador++;
      } else if (char === ')') {
        contador--;
  
        if (contador < 0) {
          return "Incorreto";
        }
      }
    }
  
    if (contador === 0) {
      return "Correto";
    } else {
      return "Incorreto";
    }
  }
  
  // Exemplos
  console.log(verificaParenteses("a+(b*c)-2-a")); // Correto
  console.log(verificaParenteses("(a+b*(2-c)-2+a)*2")); // Correto
  console.log(verificaParenteses("(a*b-(2+c)")); // Incorreto
  console.log(verificaParenteses("2*(3-a))")); // Incorreto
  console.log(verificaParenteses(")3+b*(2-c)(")); // Incorreto
  