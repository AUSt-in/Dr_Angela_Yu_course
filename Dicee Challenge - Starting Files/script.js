var randomNumber1 = Math.floor(Math.random() * 6)+1; //1-6
var randomDiceImg = "dice" + randomNumber1 + ".png";
var randomDiceImgSource = "images/" + randomDiceImg;
var image1 = document.querySelectorAll(".img")[0];
image1.setAttribute("src", randomDiceImgSource);
var randomNumber2 = Math.floor(Math.random() * 6)+1; //1-6
var randomDiceImg2 = "dice" + randomNumber2 + ".png";
var randomDiceImgSource2 = "images/" + randomDiceImg2;
var image2 = document.querySelectorAll(".img")[1];
image1.setAttribute("src", randomDiceImgSource2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 wins";
}
else{
    document.querySelector("h1").innerHTML = "DRAW";
}