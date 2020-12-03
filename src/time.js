"use strict";

// create a button variable
const convertBtn = document.querySelector(".convertbtn");
// Make the dropdown menus variables
const cfromMenu = document.getElementById("cfrom");
const cToMenu = document.getElementById("cto");

// Now make all of the dropdown menu items into variables
const seconds = (document.getElementById("cfrom").value = "seconds"),
  minutes = (document.getElementById("cfrom").value = "minutes"),
  hours = (document.getElementById("cfrom").value = "hours"),
  days = (document.getElementById("cfrom").value = "days"),
  weeks = (document.getElementById("cfrom").value = "weeks"),
  months = (document.getElementById("cfrom").value = "months"),
  years = (document.getElementById("cfrom").value = "years");
// Turn the result message into a variable
const result = document.querySelector(".results");

document.querySelector(".convertbtn").addEventListener("click", function () {
  // We first want to create objects for the imput values
  let input = document.getElementById("cnumber").value;

  /*                    SECONDS TO (...)                    */
  // Seconds to minutes
  if (cfromMenu.value === seconds && cToMenu.value === minutes) {
    let sum = input / 60;
    result.classList.remove("hidden");
    result.textContent = `${input} ${cfromMenu.value} = ${sum} ${cToMenu.value} = 
    `;
    // Seconds to hours
  } else if (cfromMenu.value === seconds && cToMenu.value === hours) {
    let sum = input / 3600;
    result.classList.remove("hidden");
    result.textContent = `${input} ${cfromMenu.value} equals to ${sum} ${cToMenu.value}`;
    // Seconds to days
  } else if (cfromMenu.value === seconds && cToMenu.value === days) {
    let sum = input / 86400;
    result.classList.remove("hidden");
    result.textContent = `${input} ${cfromMenu.value} = ${sum} ${cToMenu.value}`;
    // Seconds to weeks
  } else if (cfromMenu.value === seconds && cToMenu.value === weeks) {
    let sum = input / 604800;
    result.classList.remove("hidden");
    result.textContent = `${input} ${cfromMenu.value} equals to ${sum} ${cToMenu.value}`;
    // Seconds to months
  } else if (cfromMenu.value === seconds && cToMenu.value === months) {
    let sum = input / 2.628e6;
    result.classList.remove("hidden");
    result.textContent = `${input} ${cfromMenu.value} equals to ${sum} ${cToMenu.value}`;
    // Seconds to Years
  } else if (cfromMenu.value === seconds && cToMenu.value === years) {
    let sum = input / 3.154e7;
    result.classList.remove("hidden");
    result.textContent = `${input} ${cfromMenu.value} = ${sum} ${cToMenu.value}`;
    /*                    ..................                    */

    /*                    Minutes to (...)                    */
    // Minutes to seconds
  } else if (cfromMenu.value === minutes && cToMenu.value === seconds) {
    let sum = input * 60;
    let intoHours = 60 / input;
    result.classList.remove("hidden");
    result.textContent = `${input} ${cfromMenu.value} = ${sum} ${cToMenu.value} `;
    // Minutes to hours
  } else if (cfromMenu.value === minutes && cToMenu.value === hours) {
    let sum = input / 60;
    result.classList.remove("hidden");
    result.textContent = `${input} ${cfromMenu.value} = ${sum} ${cToMenu.value} `;
    // Minutes to days
  } else if (cfromMenu.value === minutes && cToMenu.value === days) {
    let sum = input / 1440;
    result.classList.remove("hidden");
    result.textContent = `${input} ${cfromMenu.value} = ${sum} ${cToMenu.value} `;
    // Minutes to weeks
  } else if (cfromMenu.value === minutes && cToMenu.value === weeks) {
    let sum = input / 10080;
    result.classList.remove("hidden");
    result.textContent = `${input} ${cfromMenu.value} = ${sum} ${cToMenu.value} `;
    // Minutes to months
  } else if (cfromMenu.value === minutes && cToMenu.value === months) {
    let sum = input / 10080;
    result.classList.remove("hidden");
    result.textContent = `${input} ${cfromMenu.value} = ${sum} ${cToMenu.value} `;
    // Minutes to Years
  } else if (cfromMenu.value === minutes && cToMenu.value === years) {
    let sum = input / 525600;
    result.classList.remove("hidden");
    result.textContent = `${input} ${cfromMenu.value} = ${sum} ${cToMenu.value} `;
  }
  /*                    ................                    */
});
