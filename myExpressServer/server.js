const express = require("express");
const app = express();

app.get("/", function(req, res) {
  res.send("<h1>Hello, world</h1>");
});

app.get("/contact", function(req, res){
  res.send("This is the contact page.");
});

app.get("/about", function(req, res) {
  res.send("This is the about page.");
});

app.get("/hobbies", function(req, res){
  res.send("This is my hobbies page.");
});

app.listen(3000, function(){
  console.log("Server has started on port 3000");
});
