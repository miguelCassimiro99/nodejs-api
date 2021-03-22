const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');

module.exports = () => {
    const app = express();

    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json())

    consign()
        .include('controllers')
        .into(app);

    return app
}

// responsabilidade principal => configurações do express
// consign jogará o 'app' para demais arquivos que utilizarem a partir da pasta controller
// body parser => converter as requisições para algo que possa ser lido pelo JavaScript