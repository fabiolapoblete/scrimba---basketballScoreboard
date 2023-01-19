let homeScore = 0;
let guestScore = 0;

document.querySelector(".home__score").innerHTML = homeScore;
document.querySelector(".guest__score").innerHTML = guestScore;

function addOneHome() {
    homeScore = homeScore + 1
    document.querySelector(".home__score").innerHTML = homeScore;
};

function addTwoHome() {
    homeScore = homeScore + 2
    document.querySelector(".home__score").innerHTML = homeScore;
    
};

function addThreeHome() {
    homeScore = homeScore + 3
    document.querySelector(".home__score").innerHTML = homeScore;
};

function addOneGuest() {
    guestScore = guestScore + 1
    document.querySelector(".guest__score").innerHTML = guestScore;
};

function addTwoGuest() {
    guestScore = guestScore + 2
    document.querySelector(".guest__score").innerHTML = guestScore;
    
};

function addThreeGuest() {
    guestScore = guestScore + 3
    document.querySelector(".guest__score").innerHTML = guestScore;
};

function resetScore() {
    homeScore = 0;
    document.querySelector(".home__score").innerHTML = homeScore;
    guestScore = 0;
    document.querySelector(".guest__score").innerHTML = guestScore;
}