#! /usr/bin/env node
const fs = require("fs");

function overlaps() {
  const file = __dirname + "/input.js";

  const contents = fs
    .readFileSync(file, {
      encoding: "utf8",
    })
    .split("\n");

  let overlaps = 0

  contents.forEach((content) => {
    const sides = content.split(",")
    const sideOne = sides[0].split('-').map(side => parseInt(side))
    const sideTwo = sides[1].split('-').map(side => parseInt(side))

    if (!(sideOne[1] < sideTwo[0] || sideTwo[1] < sideOne[0] ||
        sideOne[0] > sideTwo[1] || sideTwo[0] > sideOne[1])) {
            overlaps += 1
        }
  })

  return overlaps;
}

console.log(overlaps());
