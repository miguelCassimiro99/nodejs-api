const customExpress = require("./config/customExpress");

// DATABASE
const conexao = require("./infraestrutura/conexao");
const Tabelas = require("./infraestrutura/tabelas");

conexao.connect((erro) => {
    if (erro) {
        console.log(erro);
    }
    // o servidor vai subir apenas se a conexão com o banco não tiver erros
    console.log("conectado com sucesso");

    Tabelas.init(conexao);

    const app = customExpress();
    app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
});

// responsabilidade principal => subir servidor