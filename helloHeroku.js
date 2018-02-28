var express = require("express");
var bodyParser = require("body-parser")
var path =  require("path")
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

var car = [
    { make:"Audi", 
    model:"A5"},
    { make:"Saturn", 
    model:"Something"},
    { make:"Ford", 
    model:"Tarus"},
    { make:"Nissan", 
     model:"Cool"},
];

// Search for Specific Character (or all characters) - provides JSON
app.get("/api/cars", function(req, res) {

    return res.json(car);
  });

  app.get("/", function(req, res) {

    res.sendFile(path.join(__dirname, "index.html"));

  });


