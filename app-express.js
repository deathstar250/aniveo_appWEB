const express = require('express');
let app = express();

app.listen(80);
app.set('view engine','ejs');

app.get('/', function(req, res){
    //res.sendFile('../initial/login/Aniveo_Login.html');
    res.sendfile(__dirname + '/initial/login/Aniveo_Login.html');
});

app.get('*', function(req, res){
    res.send('404 Error');
});