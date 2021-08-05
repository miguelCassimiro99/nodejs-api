const fs = require('fs')
const path = require('path')

module.exports = (caminho, nomeArquivo, callbackImagemCriada) => {

    const tiposValidos = ['jpg', 'png', 'jpeg']
    const tipo = path.extname(caminho)
    const tipoEhValido = tiposValidos.indexOf(tipo.substring(1)) !== -1

    if (!tipoEhValido) {
        const erro = "Tipo é inválido"
        console.log('Erro! Tipo Inválido')
        callbackImagemCriada(erro)

    } else {
        const novoCaminho = `./assets/imagens/${nomeArquivo}${tipo}`

        fs.createReadStream(caminho)
            .pipe(fs.createWriteStream(novoCaminho))
            .on('finish', () => callbackImagemCriada(false, novoCaminho))
    }

}






// File Stream ==> Indicated
// createReadStrem: used to handle with file Stream
// pipe: transform the read-stream on a write-stream to handle with



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