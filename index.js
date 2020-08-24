var player1 = prompt(" Enter the Player 1 name ");

var player2 = prompt(" Enter the Player 2 name ");

document.querySelector(".container .player-one").innerHTML = player1;

document.querySelector(".container .player-two").innerHTML = player2;


var randomNumber1 = Math.floor(Math.random() * 6 + 1);

var diceImg = "dice" + randomNumber1 + ".png";

var imgOneSrc = "images\\" + diceImg;

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src", imgOneSrc);


// For second Img

var randomNumber2 = Math.floor(Math.random() * 6 + 1);

var diceimg2 = "images\\dice" + randomNumber2 + ".png";

var img2 = document.querySelectorAll("img")[1].setAttribute("src", diceimg2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = " 🏆 " + player1 + " Wins ";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = " 🏆 " + player2 + " Wins ";
} else {
  document.querySelector("h1").innerHTML = " It's a draw 🤝";
}

function refreshPage() {
  window.location.reload();
}
