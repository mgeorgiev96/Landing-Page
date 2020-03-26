"use strict";

var time = document.querySelector(".time"),
    message = document.querySelector(".message"),
    goal = document.querySelector(".goal"),
    name,
    m,
    container = document.querySelector(".container"),
    day = document.querySelector(".day"),
    moment = require("moment"),
    animate = document.querySelector(".animate");

var display = function display() {
  name = prompt("Enter Name");
  m = prompt("Enter your goal for today");
  var greet;
  setInterval(function () {
    var date = new Date();
    var info = moment(date).format("LL");
    var hour = date.getHours();
    var min = date.getMinutes();
    min < 10 ? min = "0".concat(min) : min;
    hour < 10 ? hour = "0".concat(hour) : hour;

    if (hour >= 12 && hour < 19) {
      time.innerHTML = "".concat(hour, ":").concat(min, " PM");
      container.style.backgroundImage = "url(images/david-marcu-78A265wPiO4-unsplash.jpg)";
      greet = "Good Afternoon, ";
    } else if (hour >= 19 || hour < 6) {
      time.innerHTML = "".concat(hour, ":").concat(min, " PM");
      container.style.backgroundImage = "url(images/eberhard-grossgasteiger-g5487il35P0-unsplash.jpg)";
      greet = "Good Evening, ";
    } else if (hour >= 6 && hour < 12) {
      time.innerHTML = "".concat(hour, ":").concat(min, " AM");
      container.style.backgroundImage = "url(images/janko-ferlic-h9Iq22JJlGk-unsplash.jpg)";
      greet = "Good Morning, ";
    }

    goal.innerHTML = m;
    message.innerHTML = "".concat(greet).concat(name);
    day.innerHTML = info;
  }, 500);
  animate.classList.add("active");
};

display();