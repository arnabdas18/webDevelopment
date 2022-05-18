var randonNumber1 = Math.floor((Math.random() * 6) + 1);
var imageSource1 = "images/dice" + randonNumber1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", imageSource1);

var randomNumber2 = Math.floor((Math.random() * 6) + 1);
var imageSource2 = "images/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", imageSource2);

if(randonNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player1 won 🏆";
} else if (randonNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player2 won 🏆";
} else {
  document.querySelector("h1").innerHTML = "Match Drawn";
}
