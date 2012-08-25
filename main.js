var express = require('express');

exports.startServer = function (options) {

    var app = express();
    app.set('view engine', 'ejs');
    app.set('views', process.env.PWD + '/server/views');
    app.use(express.static(process.env.PWD + '/client'));

    app.configure('development', function () {
        console.log("Running in Development Mode");
        app.use(express.static(__dirname + '/clientSpecRunner'));
        app.get('/runspecs', function (req, res) {
            app.set('views', __dirname + '/clientSpecRunner');
            res.render("specrunner", {
                specs: "['one', 'two']"
            });
            app.set('views', process.env.PWD + '/server/views');
        });
    });

    app.get('/', function (req, res) {
        res.render("index");
    });

    app.listen(options.port);
    console.log("Server listening on port", options.port);
}
