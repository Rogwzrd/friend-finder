//pull in friends data
var friends = require("../data/friends.js");


module.exports = function(app) {

    //add a new friend
    app.post("/api/friends", function (req, res) {
        var newfriend = req.body;
        friends.push(newfriend);
        res.json(newfriend)

    });
    //display saved friends data
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });
};