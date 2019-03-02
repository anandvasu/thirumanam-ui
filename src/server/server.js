var path = require("path");
var express = require ("express"), 
    proxy  = require("http-proxy-middleware"),
    appRoutes = require("./routes")

var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../public'));



app.use(
    proxy("**/thirumanam/**", appRoutes.thirumanamService)
    );

app.use(
    proxy("**/matrimony/**", appRoutes.thirumanamService)
    );

app.listen(3000, function() {
    console.log("Server Started @:" + 3000);
});