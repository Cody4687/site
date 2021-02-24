var express = require('express');
var app = express();
var helmet = require('helmet')
app.use(helmet())
var server = require('http').createServer(app);

    app.use(express.static(__dirname));
    app.get('/', function (req, res, next) {
        res.sendFile(__dirname + 'index.html');
    });

    server.listen(3000, function () {
        console.log('listening on *:3000');
    });
