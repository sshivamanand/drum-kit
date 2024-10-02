function playSound(key) {
  let sound;
  buttonAnimation(key);
  switch (key) {
    case "w":
      sound = new Audio("sounds/tom-1.mp3");
      break;
    case "a":
      sound = new Audio("sounds/tom-2.mp3");
      break;
    case "s":
      sound = new Audio("sounds/tom-3.mp3");
      break;
    case "d":
      sound = new Audio("sounds/tom-4.mp3");
      break;
    case "j":
      sound = new Audio("sounds/crash.mp3");
      break;
    case "k":
      sound = new Audio("sounds/kick-bass.mp3");
      break;
    case "l":
      sound = new Audio("sounds/snare.mp3");
      break;
    default:
      return;
  }
  sound.play();
}

document.addEventListener("keydown", function (event) {
  playSound(event.key);
});

document.querySelector(".w").addEventListener("click", function () {
  playSound("w");
});

document.querySelector(".a").addEventListener("click", function () {
  playSound("a");
});

document.querySelector(".s").addEventListener("click", function () {
  playSound("s");
});

document.querySelector(".d").addEventListener("click", function () {
  playSound("d");
});

document.querySelector(".j").addEventListener("click", function () {
  playSound("j");
});

document.querySelector(".k").addEventListener("click", function () {
  playSound("k");
});

document.querySelector(".l").addEventListener("click", function () {
  playSound("l");
});

function buttonAnimation(key) {
  var selectedButton = document.querySelector("." + key);
  selectedButton.classList.add("pressed");
  setTimeout(() => {
    selectedButton.classList.remove("pressed");
  }, 200);
}
