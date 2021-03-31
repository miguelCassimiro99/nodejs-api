const moment = require('moment')
const conexao = require("../infraestrutura/conexao")

class Atendimento {
    adiciona(atendimento, res) {

        // moment() retorna a data atual
        const data_criacao = moment().format('YYYY-MM-DD HH:MM:SS')
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')

        //verifica se a data do atendimento é a mesma ou depois da data de criação
        const dataEhValida = moment().isSameOrAfter(data_criacao)
        const clienteEhValido = atendimento.cliente.length >= 5

        const validacoes = [{
                nome: 'data',
                valido: dataEhValida,
                mensagem: 'Data deve ser maior ou igual a data atual'
            },
            {
                nome: 'cliente',
                valido: clienteEhValido,
                mensagem: 'Cliente deve ter pelo menos cinco caracteres'
            }
        ]

        const erros = validacoes.filter(campo => !campo.valido)
        const existemErros = erros.length

        if (existemErros) {
            res.status(400).json(erros)
        } else {

            const atendimentoDatado = {...atendimento, data_criacao, data }
            const sql = "INSERT INTO atendimentos SET ?"

            conexao.query(sql, atendimentoDatado, (erro, resultados) => {
                if (erro) {
                    res.status(400).json(erro);
                } else {
                    res.status(201).json(resultados);
                }
            });
        }




    }
}

module.exports = new Atendimento();

// model de atendimento
// biblioteca 'moment' trabalhar com datas (formatos, calculos)