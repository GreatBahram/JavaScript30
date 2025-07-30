"use strict";

const playAudio = function (e) {
  const key = e.key;
  const keyCode = key.charCodeAt(0);

  const elm = document.querySelector(`div[data-key="${keyCode}"]`);
  const audio = this.document.querySelector(`audio[data-key="${keyCode}"]`);
  if (!elm || !audio) return;

  // Reset to the beginning if it is already playing
  audio.currentTime = 0;

  // Add the class for animation
  elm.classList.toggle("playing");

  audio.play();
};

window.addEventListener("keypress", playAudio);

// Remove the playing class when the transition procedure is finished.
const removeTransition = (e) => {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
};
const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
