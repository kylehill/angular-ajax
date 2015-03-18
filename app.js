var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.get("/", function(req, res){
  res.sendFile(path.join(__dirname, 'public/test.html'))
})

app.get("/api/chores", function(req, res){

  res.json([
    "Learned $http",
    "Create tasks",
    "Update stuff",
    "Do a thing"
  ])

})

var counter = 0;

app.get("/api/click", function(req, res){

  counter++;
  res.json({ clicks: counter });

})

app.get("/api/timesClicked", function(req, res){

  res.json({ clicks: counter });  

})

module.exports = app;
