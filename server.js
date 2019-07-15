var express = require("express");
var PORT = process.env.PORT || 3000;
var app = express();
app.use(express.json());
var handlebars = require("express-handlebars");

var route = require("./controllers/burgersController.js");

app.use(route);

app.listen(PORT, function() {
  console.log("Listening on port:3000", PORT);
});
