const conexao = require('../infraestrutura/conexao')


class Pet {
    adiciona(pet, res) {

        const sql = 'INSERT INTO pets SET ?'

        conexao.query(sql, pet, erro => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(201).json(pet)
            }
        })
    }
}

module.exports = new Pet();