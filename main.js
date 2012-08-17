var express = require('express');

exports.startServer = function () {
    console.log("Starting Server!");

    var app = express();
    app.set('view engine', 'ejs');
    app.set('views', __dirname + '/views');

    app.get('/', function (req, res) {
        res.render("index");
    });

    app.listen(3000);
    console.log("Server listening on port 3000");
}
