const express = require('express');
const port = 3000;
const app = express();
const path = require('path');

// Setup view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', function (req, res, next) {
    res.render('index', {
        title: "Meu primeiro servidor Express",
        version: "0.0.0"

    });
    app.get('/curriculo',(req, res, next) => {
        res.render('curriculo', {
            title: 'Meu currículo',
            name: 'Cristian Fernandes',
            profession: 'TI',
            description: 'Desc',
            experience: [{
                company: 'LoTecnologia',
                office: 'Software Engineer',
                description: 'Trabalho no squad de desenvolvimento do software de gestão de warehouses da Loggi, o ProXD. Nosso trabalho é automatizar os processos de recebimento, gestão, armazenamento, transferências e expedição de pacotes, cortes, rotas e monitoramento dos pacotes e sacas de entregas para ecommerces.'
            },
            {
                company: 'Casa do Código',
                office: 'Des',
                description: 'Desenvolvimento de software'
            }],
            education: [{
                institution: 'Digital House',
                description: 'CTD - Certified Tech Developer'
            }],
            skills: ['Full Stack']
        });
    });
});

app.listen(port, err => {
    console.log(`Server is listening on ${port}`);
});