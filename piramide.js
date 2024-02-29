function exibirAstericos(linha) {
    for (let i = 1; i <= linha; i++) {

        let linha = '';

    for (let j = 1; j <= i; j++) {

        linha += '*';

    }
    
    console.log(linha)
 
    }

    }
    
    exibirAstericos(10)


function asteriscosempiramides(linhas) {
    
    let numasteriscos = 1;
    
    for (let i = 1; i <= linhas; i++) {
    
        let linha = '';
    
    for (let j = 1; j <= numasteriscos; j++) {

        linha += '*'
    }
    console.log(linha);
    numasteriscos += 2;
    }
}
    asteriscosempiramides(12)

function exibirPadraoAsteriscosELinhas(linhas) {

        for (let i = 1; i <= linhas; i++) {
          let linha = '';
          if (i % 2 !== 0) {
            // Linhas ímpares (asteriscos)
            for (let j = 1; j <= i; j++) {
              linha += '*';
            }
          } else {
            // Linhas pares (traços)
            for (let j = 1; j <= i; j++) {
              linha += '-';
            }
          }
          console.log(linha);
        }
      }
      
      exibirPadraoAsteriscosELinhas(13);

      for (let linha = 1; linha <= 10; linha++) {
        let padrao = '';
        for (let i = 1; i <= linha; i++) {
            if (i === linha) {
                padrao += '*';
            } else {
                padrao += '-';
            }
        }
        console.log(padrao);
    }
        
    for(let line = 1; line <= 10; line++) {
        
        let standard = '';
        
        for(let i = 1; i <= line; i++) {

            if(i % 2 === 0) {
                
                standard += '*';
            } else {

                standard += '-';
            }

        }
        console.log(standard)
    }

    for (let linha = 10; linha >= 1; linha--) {
        let padrao = '';
        for (let i = 1; i <= linha; i++) {
            padrao += '*';
        }
        console.log(padrao);
    }
    
    
    function imprimirPadrao(altura) {
         // Defina a altura desejada
        for (let i = 0; i < altura; i++) {
          let linha = "";
          // Adicione espaços em branco à esquerda
          for (let j = 0; j < i; j++) {
            linha += " ";
          }
          // Adicione asteriscos
          for (let k = 0; k < altura - i; k++) {
            linha += "*";
          }
          console.log(linha);
        }
      }
      
      imprimirPadrao(15);

      
    for(let line = 1; line <= 10; line++) {
        
        let standard = '';
        
        for(let i = 1; i <= line; i++) {

            if(i % 2 === 0) {
                
                standard += '__';
            } else {

                standard += '_|_';
            }

        }
        console.log(standard)
    }

    for(let line = 1; line <= 10; line ++) {

        let linhafake = '';

    for(let i = 1; i <= line; i ++) {

        if(i % 2 === 0) {

            linhafake += '--|--';
        }  else {

            linhafake += '_';
        }
    }
        console.log(linhafake)
    }