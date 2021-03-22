module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('Página Atendimentos com Consign, customExpress'))

    app.post('/atendimentos', (req, res) => {

        console.log(req.body)
        res.send('Post Rota Atendimentos')

    })
}

// responsabilidade principal => controlar as rotas