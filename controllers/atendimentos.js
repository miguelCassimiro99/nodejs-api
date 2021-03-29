const Atendimento = require("../models/atendimentos");

module.exports = (app) => {
    app.get("/atendimentos", (req, res) =>
        res.send("Página Atendimentos com Consign, customExpress")
    );

    app.post("/atendimentos", (req, res) => {
        // conteudo do body é um atendimento
        const atendimento = req.body;

        // chama o model atendimento para utilizar o método adiciona
        // passando como parametro o atendimento (conteúdo do body)
        Atendimento.adiciona(atendimento);
        res.send("Post Rota Atendimentos");
    });
};

// responsabilidade principal => controlar as rotas