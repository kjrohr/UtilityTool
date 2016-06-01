// Sets variable express to require the express module
var express = require('express');

// Sets variable body_parser to require the body-parser module
var body_parser = require('body-parser');

// Sets variable app to encompass express
var app = express();

// Config
var port = 3000;
app.listen(port, function(){
  console.log("Our server is running on port: " + port + ".");
});

// Tell the app to use these routes
app.use('/api', require('../routes/api.js')(express));
