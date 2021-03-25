class Tabelas {
    init(conexao) {
        this.conexao = conexao;
<<<<<<< HEAD
        this.criarAtendimentos();
    }

    criarAtendimentos() {
        const sql =
            "CREATE TABLE atendimentos (id int NOT NULL AUTO_INCREMENT, cliente varchar(50) NOT NULL, status varchar(20) NOT NULL, observacoes text, PRIMARU KEY(id))";

        this.conexao.query(sql, (erro) => {
            if (erro) {
                console.log(erro);
            }
            console.log("Tabela atendimentos criada com sucesso");
        });
    }
=======
    }

    criarAtendimentos() {}
>>>>>>> develop
}

module.exports = new Tabelas();