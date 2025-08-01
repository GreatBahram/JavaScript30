"use strict";

// Select the root element to update CSS variables.
const root = document.querySelector(":root");

// Select all input elements
const inputs = document.querySelectorAll("input");

// Generic handler for all input elements
const handleUpdate = function (e) {
  const suffix = e.target.dataset?.sizing || "";
  root.style.setProperty(`--${e.target.name}`, `${e.target.value}${suffix}`);
};

// Listen for the change event
inputs.forEach((inp) => inp.addEventListener("change", handleUpdate));
