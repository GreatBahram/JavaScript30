"use strict";

const OFFSET = 90;

// Select the necessary elements
const hour = document.querySelector(".hour-hand");
const minute = document.querySelector(".minute-hand");
const second = document.querySelector(".second-hand");
second.style.backgroundColor = "red";

const setDate = function () {
  const d = new Date();

  const hours = d.getHours();
  const minutes = d.getMinutes();
  const seconds = d.getSeconds();

  const secondsDegrees = (seconds / 60) * 360 + OFFSET;
  const minutesDegrees = (minutes / 60) * 360 + OFFSET;
  const hourDegrees = ((hours % 12) / 12) * 360 + OFFSET;

  second.style.transform = `rotate(${secondsDegrees}deg)`;
  minute.style.transform = `rotate(${minutesDegrees}deg)`;
  hour.style.transform = `rotate(${hourDegrees}deg)`;
};
// Animate to the current time
setTimeout(setDate(), 100);

// Update every second
setInterval(setDate, 1000);
