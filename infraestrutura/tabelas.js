class Tabelas {
    init(conexao) {
        this.conexao = conexao;
        this.criarAtendimentos();
        this.criarPets();
    }

    criarAtendimentos() {
        const sql = "CREATE TABLE IF NOT EXISTS atendimentos (id int NOT NULL AUTO_INCREMENT, cliente varchar(50) NOT NULL, pet varchar(20), servico varchar(20) NOT NULL, data datetime NOT NULL, data_criacao datetime NOT NULL, status varchar(20) NOT NULL, observacoes text, PRIMARY KEY(id))";

        // a funcao query recebe primeiramente a query e retorna uma função
        // esta função traz como parâmetro um erro caso tenha ocorrido algum problema na execução
        this.conexao.query(sql, (erro) => {
            if (erro) {
                console.log(erro);
            } else {
                console.log("Tabela atendimentos criada/encontrada com sucesso");
            }
        });
    }

    criarPets() {
        const query = 'CREATE TABLE IF NOT EXISTS pets (id int NOT NULL AUTO_INCREMENT, nome varchar(11), imagem varchar(200), PRIMARY KEY (id))'

        this.conexao.query(query, erro => {
            if (erro) {
                console.log(erro)
            } else {
                console.log('Tabela de pets criada/encontrada com sucesso')
            }
        })
    }
}

module.exports = new Tabelas();