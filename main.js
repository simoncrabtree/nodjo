var express = require('express');

exports.startServer = function (options) {

    var app = express();
    app.set('view engine', 'ejs');
    app.set('views', __dirname + '/views');
    app.use(express.static(process.env.PWD + '/client'));
    app.use(express.static(__dirname + '/clientSideJs'));

    app.configure('development', function () {
        console.log("Running in Development Mode");
        app.get('/runspecs', function (req, res) {
            res.render("specrunner", {
                specs: "['one', 'two']"
            });
        });
    });

    app.get('/', function (req, res) {
        res.render("index");
    });

    app.listen(options.port);
    console.log("Server listening on port", options.port);
}
