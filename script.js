const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

var fail = new Audio();
fail.src = "audio/fail.mp3";

document.addEventListener("keydown", function (event) {
  jump();
});

document.addEventListener("touchstart", function (event) {
  jump();
});

function jump() {
  if (dino.classList != "jump") {
    dino.classList.add("jump");
  }
  setTimeout(function () {
    dino.classList.remove("jump");
  }, 300);
}

let isAlive = setInterval(function () {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );

  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop == 145) {
    // alert("Game Over!");
    fail.play();
  }
}, 10);
