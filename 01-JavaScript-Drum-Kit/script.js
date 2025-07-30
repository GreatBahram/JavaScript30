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
  elm.classList.add("playing");

  audio.play();
};

const init = function () {
  const removeTransition = (e) => {
    if (e.propertyName !== "transform") return;
    e.target.classList.remove("playing");
  };
  window.addEventListener("keypress", playAudio);

  const keys = document.querySelectorAll(".key");
  keys.forEach((k) => k.addEventListener("transitionend", removeTransition));
};
init();

export { playAudio };
