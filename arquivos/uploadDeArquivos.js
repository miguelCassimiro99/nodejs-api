const fs = require('fs')


fs.createReadStream('./assets/hantaro.jpg')
    .pipe(fs.createWriteStream('./assets/hantaro-stream.jpg'))
    .on('finish', () => console.log('imagem escrita com sucesso'))


// trabalhando com buffer

// readFile (substituída pelo createReadStream pois esta primeira é síncrona e trava a execução)
// a função readFile recebe 3 parâmetros:
// parametro 1: caminho do arquivo
// parametro 2: opções de formato
// parametro 3: função callback para erros e a imagem (buffer da memória que foi salvo)

// writeFile
// a função readFile recebe 3 parâmetros:
// parametro 1: caminho onde arquivo será salvo
// parametro 2: opções de escrita (ex: buffer)
// parametro 3: função callback