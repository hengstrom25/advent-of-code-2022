#! /usr/bin/env node
const fs = require("fs");

function totalCalories() {
  // find all of the lines until a break
  // save the highest so far
  // return the highest
  let highestTotal = 0;
  const file = __dirname + "/input.js";

  const contents = fs
    .readFileSync(file, {
      encoding: "utf8",
    })
    .split("\n");
  let currentTotal = 0;
  // Reading line by line
  contents.forEach((content) => {
    const line = parseInt(content.replace(";", ""));
    if (!isNaN(line)) {
      currentTotal = currentTotal + line;
    } else {
      if (currentTotal > highestTotal) {
        highestTotal = currentTotal;
      }
      currentTotal = 0;
    }
  });
  return highestTotal;
}

console.log(totalCalories());
