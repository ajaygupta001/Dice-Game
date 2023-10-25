var randonNumber1 = Math.floor(Math.random() * 6) +1;

var randomDiceImage = "dice" + randonNumber1 + ".png";

var randomImageSource = "../images/" +randomDiceImage;

var imagee1 = document.querySelectorAll("img")[0];

imagee1.setAttribute("src", randomImageSource);


var randonNumber2 = Math.floor(Math.random() * 6) +1;

var randomDice2Image = "dice" + randonNumber2 + ".png";

var randomImage2Source = "../images/" +randomDice2Image;

var imagee2 = document.querySelectorAll("img")[1];

imagee2.setAttribute("src", randomImage2Source);


if(randonNumber1>randonNumber2)
{
  document.querySelector("h1").innerHTML = " 🚩 Play 1 wins!";
}
else{
  document.querySelector("h1").innerHTML = "Play 2 wins! 🚩";
}

if(randonNumber1==randonNumber2)
{
  document.querySelector("h1").innerHTML = "Draw!";
}
