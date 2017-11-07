var express = require("express");
var app = express();

var apiRoutes = require("./routing/apiRoutes.js");
var htmlRoutes = require("./routing/htmlRoutes.js");


app.use(apiRoutes);
app.use(htmlRoutes);


var port = 3000;

//start the server
app.listen(port, function () {
    console.log("App is listening on port " + port)
});