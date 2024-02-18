const dots = document.querySelectorAll(".dot");
const pics = document.getElementById("pics");

let currentPic = 1;
let slideShow;

document.querySelector("#leftArrow").addEventListener("click", () => {
    moveLeft();
    adjustCarousel();
});

document.querySelector("#rightArrow").addEventListener("click", () => {
    moveRight();
    adjustCarousel();
});

document.getElementById("stop").addEventListener("click", () => {
    clearInterval(slideShow);
    pics.style.transition = "transform 0s";
});

document.getElementById("play").addEventListener("click", () => {
    startShow();
})

startShow();

function startShow() {
    slideShow = setInterval(advanceCarousel, 5000);
}

function moveRight() {
    if (currentPic < 4) {
        currentPic++;
    } 
    else {
        currentPic = 1;
    }
}

function moveLeft() {
    if (currentPic > 1) {
        currentPic--;
    } 
    else {
        currentPic = 4;
    }
}

function adjustCarousel() {
    pics.style.transform = "translateX(" + ((currentPic - 1) * -500) + "px)";
    document.getElementById(`dot${currentPic}`).checked = "true";
}

function advanceCarousel() {
    moveRight();
    if (currentPic != 1) {
        pics.style.transition = "transform 2s";
    }
    else {
        pics.style.transition = "transform 0s";
    }
    adjustCarousel();
}