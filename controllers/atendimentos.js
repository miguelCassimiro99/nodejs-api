const atendimentos = require("../models/atendimentos");
const Atendimento = require("../models/atendimentos");

module.exports = (app) => {
    app.get("/atendimentos", (req, res) => {

        Atendimento.lista(res)

    })

    app.get("/atendimentos/:id", (req, res) => {
        const id = parseInt(req.params.id)

        Atendimento.buscaPorId(id, res)
        console.log(res)

    })

    app.post("/atendimentos", (req, res) => {

        // conteudo do body é um atendimento
        const atendimento = req.body;

        // chama o model atendimento para utilizar o método adiciona
        // passando como parametro o atendimento (conteúdo do body)
        Atendimento.adiciona(atendimento, res);


    })

    app.patch("/atendimentos/:id", (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body

        Atendimento.altera(id, valores, res)
    })

    app.delete('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        Atendimento.deleta(id, res)
    })
}

// responsabilidade principal => controlar as rotas