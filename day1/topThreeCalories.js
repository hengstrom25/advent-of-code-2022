#! /usr/bin/env node
const fs = require("fs");

function topThreeCalories() {
  let topThree = [0, 0, 0];
  const file = __dirname + "/input.js";

  const contents = fs
    .readFileSync(file, {
      encoding: "utf8",
    })
    .split("\n");

  let currentTotal = 0

  contents.forEach((content) => {
    const line = parseInt(content.replace(";", ""));
    if (!isNaN(line)) {
      currentTotal = currentTotal + line;
    } else {
        if (currentTotal > topThree[0]) {
            topThree[2] = topThree[1]
            topThree[1] = topThree[0]
            topThree[0] = currentTotal
        } else if (currentTotal > topThree[1]) {
            topThree[2] = topThree[1]
            topThree[1] = currentTotal
        } else if (currentTotal > topThree[2]){
            topThree[2] = currentTotal
        }
      currentTotal = 0;
    }
  });
  return topThree[0] + topThree[1] + topThree[2];
}

console.log(topThreeCalories());
