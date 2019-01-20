var path = require("path");
var express = require ("express"), 
    proxy  = require("http-proxy-middleware"),
    appRoutes = require("./routes")

var app = express();

//app.use(express.static(__dirname, '/../public'));
app.use(express.static(__dirname + '/../public'));

app.use(
    proxy("**/thirumanam/**", appRoutes.thirumanamService)
    );

app.listen(3000, () => {
    console.log("Server Started @:" + 3000);
});