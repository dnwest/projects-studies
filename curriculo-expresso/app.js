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
            name: 'William Oliveira',
            profession: 'Software Engineer',
            description: 'Experiência em desenvolvimento de single page applications com JavaScript e frameworks JavaScript (já trabalhei com Angular e React), module bundlers, package managers, transpilers (como Babel), pre processadores CSS (Sass e Stylus), task managers, arquitetura CSS (como BEM e SMACSS), Git, SEO, acessibilidade e usabilidade.',
            experience: [{
                company: 'Loggi Tecnologia',
                office: 'Software Engineer',
                description: 'Trabalho no squad de desenvolvimento do software de gestão de warehouses da Loggi, o ProXD. Nosso trabalho é automatizar os processos de recebimento, gestão, armazenamento, transferências e expedição de pacotes, cortes, rotas e monitoramento dos pacotes e sacas de entregas para ecommerces.'
            },
            {
                company: 'Casa do Código',
                office: 'Escritor',
                description: 'Autor do livro: O universo da programação: Um guia de carreira em desenvolvimento de software'
            }],
            education: [{
                institution: 'Vida',
                description: 'Sobrevivência nas ruas'
            }],
            skills: ['backend', 'frontend', 'infra', 'mobile']
        });
    });
});

app.listen(port, err => {
    console.log(`Server is listening on ${port}`);
});