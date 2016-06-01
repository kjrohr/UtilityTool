var express = require('express');
var app = express();

var port = 3000;

app.get('/', function(req,res){
  res.json({health: true})
});

app.listen(port, function(){
  console.log("Our server is running on port: " + port + ".");
});
