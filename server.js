//dependencies
var express = require("express");
var bodyParser = require("body-parser");
var app = express();

// Sets an initial port. We"ll use this later in our listener
var port = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", express.static("public"));

//route files
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);


//start the server
app.listen(port, function () {
    console.log("App is listening on port " + port)
});