"use strict";
// Load elements
const inputSearch = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

const cities = [];
const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

// Load the data and put into the cities
fetch(endpoint)
  .then((resp) => resp.json())
  .then((data) => cities.push(...data));

const findMatches = function (pattern, cities) {
  const regex = new RegExp(pattern, "ig");
  return cities.filter((c) => c.city.match(regex) || c.state.match(regex));
};

const displayMatches = function () {
  const matches = findMatches(this.value, cities);
  if (!matches) return;

  const html = matches
    .map((m) => {
      // Add a thousand separator
      const formattedPopulation = parseInt(m.population).toLocaleString();

      // Add hl class to both city and state
      const regex = new RegExp(this.value, "ig");
      const cityName = m.city.replace(
        regex,
        `<span class=hl>${this.value}</span>`
      );
      const stateName = m.state.replace(
        regex,
        `<span class=hl>${this.value}</span>`
      );

      return `<li>
            <span class='name'>${cityName}, ${stateName}</span>
            <span class='population'>${formattedPopulation}</span>
            </li>`;
    })
    .join("");

  suggestions.innerHTML = html;
};

// Add the Event
inputSearch.addEventListener("change", displayMatches);
