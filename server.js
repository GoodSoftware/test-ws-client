var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('Hey!');
});

app.listen(80);
