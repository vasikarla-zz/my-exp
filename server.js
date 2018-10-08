const express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.send("Hello World!");
    console.log("This is my First Message");
});

app.get('/bad', (req, res) => {
    res.send({
        reason: "Unable to process your request"
    });
});

app.get('/about', (req, res) => {
    res.send("This is About Page");
});

app.listen(3000);