const express = require('express');
let app = express();

app.listen(800);
app.set('view engine','ejs');

app.get('/', function(req, res){
    res.sendfile(__dirname + '/tests/test_original.html');
});

app.get('*', function(req, res){
    res.send('404 Error');
});