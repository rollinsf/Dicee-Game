// Define rolls function
function diceeRoll() {
    return Math.floor(Math.random() * 6) + 1
}

// Set player's dice rolls
rollNumber1 = diceeRoll();
rollNumber2 = diceeRoll();

// Set each player's dice image
document.querySelector(".img1").setAttribute("src", "images/dice" + rollNumber1 +".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + rollNumber2 +".png");

// Determine winner of game
if (rollNumber1 > rollNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player One Wins";
} else if (rollNumber2 > rollNumber1) {
    document.querySelector("h1").innerHTML = "Player Two Wins 🚩";
} else {
    document.querySelector("h1").innerHTML = "🚩 Draw 🚩";
}

