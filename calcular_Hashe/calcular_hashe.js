const fs = require('fs');
const crypto = require('crypto');

function calcularHashArquivo(nomeArquivo) {
    return new Promise((resolve, reject) => {
        const hash = crypto.createHash('sha384');
        const stream = fs.createReadStream(nomeArquivo);

        stream.on('error', reject);
        stream.on('data', chunk => hash.update(chunk));
        stream.on('end', () => resolve(hash.digest('hex')));
    });
}

// Exemplo de uso:
const nomeArquivo = 'caminho-do-arquivo';
calcularHashArquivo(nomeArquivo)
    .then(hash => console.log('Hash SHA-384:', hash))
    .catch(error => console.error('Erro ao calcular o hash:', error));
