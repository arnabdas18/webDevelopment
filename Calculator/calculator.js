const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
  var n1 = Number(req.body.num1);
  var n2 = Number(req.body.num2);
  var result = n1 + n2;

  res.send("The answer is " + result);
});

app.get("/bmiCalculator", function(req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function(req, res) {
  var n1 = parseFloat(req.body.weight);
  var n2 = parseFloat(req.body.height);
  var result = n1/(n2*n2);

  res.send("Your BMI is: " + result);
});

app.listen(3000, function(){
  console.log("Port 3000 working");
});