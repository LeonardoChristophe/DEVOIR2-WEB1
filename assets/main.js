var personage = document.querySelector(".personage");
var obstacle = document.querySelector(".obstacle");

function sauter() {
  if (personage.classList != "animation") {
    personage.classList.add("animation");
  }
  setTimeout(function () {
    personage.classList.remove("animation");
  }, 500);
}

var verification = setInterval(function () {
  var personageTop = parseInt(
    window.getComputedStyle(personage).getPropertyValue("Top")
  );
  var obstacleLeft = parseInt(
    window.getComputedStyle(obstacle).getPropertyValue("left")
  );
  if (obstacleLeft < 20 && obstacleLeft > 0 && personageTop >= 130) {
    obstacle.style.animation = "none";
    alert("Vous avez perdu");
  }
}, 1);
