var express = require("express");
var app = module.exports = express();
var bodyParser = require("body-parser");

var friends = require("../data/friends.js");

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.post("/api/new", function(req, res){
    var newfriend =  req.body;
    friends.push(newfriend)
    res.json(newfriend)

});

app.get("/api/friends", function (req, res) {
    res.json(friends);
});