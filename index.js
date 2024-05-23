const fs = require('fs');
const csv = require('csv-parser');

// Exemplo de uso
const caminhoArquivoCSV = '/home/gabstadeo/mechanical-men/codigo-tio/numeros.csv';
const nomeDaColuna = 'telefones'

function extrairNumerosDoCSV(caminhoArquivo,nomeDaColuna, callback) {
    const numeros = [];

    fs.createReadStream(caminhoArquivo)
        .pipe(csv())
        .on('data', (row) => {
            // Verifica se a coluna "numeros" existe na linha
            if (row.hasOwnProperty(nomeDaColuna)) {
                // Extrai os números da coluna "numeros" e os adiciona ao array
                const numerosDaLinha = row[nomeDaColuna].split(',').map(Number);
                numeros.push(...numerosDaLinha);
            }
        })
        .on('end', () => {
            callback(null, numeros);
            return numeros
        })
        .on('error', (error) => {
            callback(error, null);
        });

        return numeros
}



const venom = require('venom-bot');


async function start(client) {
// const groups = await client.getAllGroups()
console.log(client)
}

async function initialize() {
  
  const client = await venom
    .create({
      session: 'bot', //name of session
      options: {
        headless:'new'
      }
    })
    .catch((error) => {
      console.log(error);
    });
    await start(client)

  return client;
}



extrairNumerosDoCSV(caminhoArquivoCSV,nomeDaColuna, async (error, numeros) => {
    if (error) {
        console.error('Ocorreu um erro:', error);
    } else {
       await initialize()
    }
});

