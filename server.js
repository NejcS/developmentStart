var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use('/static', express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var portNumber = 3000;

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/html/index.html');
});

app.listen(portNumber, function() {
    console.log("App listening on port: " + portNumber);
});
