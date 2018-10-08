const express = require('express');
var app = express();
const hbs = require('hbs');

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home.hbs', {
        name: "Raj Vasikarla"
    });
});

app.get('/bad', (req, res) => {
    res.send({
        reason: "Unable to process your request"
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: "About Page from HBS",
        year: new Date().getFullYear()
    });
});

app.listen(3000);