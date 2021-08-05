const conexao = require('../infraestrutura/conexao')
const uploadDeArquivo = require('../arquivos/uploadDeArquivos')

class Pet {
    adiciona(pet, res) {

        const sql = 'INSERT INTO pets SET ?'
        uploadDeArquivo(pet.imagem, pet.nome, (erro, novoCaminho) => {
            if (erro) {
                res.status(422).json({ erro })
            } else {

                const novoPet = {
                    nome: pet.nome,
                    imagem: novoCaminho
                }
                console.log('criei o pet')
                conexao.query(sql, novoPet, erro => {
                    if (erro) {
                        res.status(400).json(erro)
                        console.log(erro)
                    } else {
                        res.status(201).json(novoPet)
                        console.log('sucesso na imagem')
                    }
                })
            }

        })


    }
}

module.exports = new Pet();