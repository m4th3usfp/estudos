setTimeout(() => console.log("1"), 3000);
console.log("2");
console.log("3");
  
let salariobruto = 3000;
let salarioLiquido;

getSalario(salariobruto, (resultado) => {
    salarioLiquido =  resultado;
    console.log(`o salario liquido é: ${salarioLiquido}`)
}); 
    function getSalario(salariobruto, callback) {
        let liquido = 0;
        
        const inss = salariobruto * 0.11;
        const vr = salariobruto * 0.05;
        const vt = salariobruto * 0.06;
        const fgts = salariobruto * 0.15;

        let descontos = inss + vr + vt + fgts;
        liquido = salariobruto - descontos;
        return callback(liquido) 
    };



    function realizarOperacaoAssincrona(callback) {
        // Simulando uma operação assíncrona, como uma requisição de rede
        setTimeout(function() {
          // Após a operação assíncrona ser concluída
          callback("Operação concluída!");
        }, 3000); // Aguarda 1 segundo
      }
      
      function minhaFuncaoDeCallback(resultado) {
        console.log("Resultado da operação:", resultado);
      }
      
      // Chamando a função realizarOperacaoAssincrona e passando minhaFuncaoDeCallback como callback
      realizarOperacaoAssincrona(minhaFuncaoDeCallback);
      
      console.log("Esperando a operação assíncrona terminar...");
      