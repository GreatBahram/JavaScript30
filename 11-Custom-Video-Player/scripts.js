"use strict";

const palyBtn = document.querySelector(".toggle");
const inputs = document.querySelectorAll("input");
const video = document.querySelector("video");
const skipButtons = Array.from(document.querySelectorAll(".player__button"));
const player = document.querySelector(".player");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");

// Register the togglePlay for both the playBtn and the video object
const togglePlay = () => {
  const method = video.paused ? "play" : "pause";
  video[method]();
};
palyBtn.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);
document.addEventListener("keydown", function (e) {
  if (
    e.code === "Space" &&
    document.activeElement.tagName !== "INPUT" &&
    document.activeElement.tagName !== "TEXTAREA"
  ) {
    e.preventDefault();
    togglePlay();
  }
});

// Update the icon depending on the play state
const updateToggle = function () {
  const icon = this.paused ? "►" : "❚ ❚";
  palyBtn.textContent = icon;
};
video.addEventListener("play", updateToggle);
video.addEventListener("pause", updateToggle);

// Handle both volume and playbackRate inputs
inputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (input.name == "volume") video.volume = input.value;
    else video.playbackRate = input.value;
  });
});

// Handle skip buttons
const skip = function (e) {
  const howMuch = +e.target.dataset.skip;
  video.currentTime += howMuch;
};
skipButtons.forEach((b) => b.addEventListener("click", skip));

// Update the progressBar
const handleProgress = () => {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
};
video.addEventListener("timeupdate", handleProgress);

// Handle the case when user click somewhere on the progressBar
const scrub = function (e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
};
progress.addEventListener("click", scrub);
