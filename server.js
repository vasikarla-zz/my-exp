const express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.send("Hello World!");
    console.log("This is my First Message");
});

app.listen(3000);