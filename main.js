var express = require('express');

exports.startServer = function (options) {

    var app = express();
    app.set('view engine', 'ejs');
    app.use(express.static(process.env.PWD + '/client'));

    app.configure('development', function () {
        console.log("Running in Development Mode");
        app.get('/runspecs', function (req, res) {
            app.set('views', __dirname + '/specrunner');
            res.render("specrunner");
        });
    });

    app.get('/', function (req, res) {
        app.set('views', process.env.PWD + '/server/views');
        res.render("index");
    });

    app.listen(options.port);
    console.log("Server listening on port", options.port);
}
