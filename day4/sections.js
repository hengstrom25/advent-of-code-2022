#! /usr/bin/env node
const fs = require("fs");

function sections() {
  const file = __dirname + "/input.js";

  const contents = fs
    .readFileSync(file, {
      encoding: "utf8",
    })
    .split("\n");

  let sections = 0

  contents.forEach((content) => {
    const sides = content.split(",")
    const sideOne = sides[0].split('-').map(side => parseInt(side))
    const sideTwo = sides[1].split('-').map(side => parseInt(side))

    if ((sideOne[0] >= sideTwo[0] && sideOne[1] <= sideTwo[1]) || 
        (sideOne[1] >= sideTwo[1] && sideOne[0] <= sideTwo[0])) {
        sections += 1
    }
  })

  return sections;
}

console.log(sections());
