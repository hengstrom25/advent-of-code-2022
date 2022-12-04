#! /usr/bin/env node
const fs = require("fs");

function totalScore() {
  const file = __dirname + "/input.js";

  const contents = fs
    .readFileSync(file, {
      encoding: "utf8",
    })
    .split("\n");

    // A = Rock, X = Rock
    // B = Paper, Y = Paper
    // C = Scissors, Z = Scissors

  const scoringGuide = {
    'A': {'X': 3, 'Y': 6, 'Z': 0},
    'B': {'X': 0, 'Y': 3, 'Z': 6},
    'C': {'X': 6, 'Y': 0, 'Z': 3},
    'X': 1, 
    'Y': 2, 
    'Z': 3
  }
  let score = 0

  contents.forEach((content) => {
    score += scoringGuide[content[0]][content[2]] + scoringGuide[content[2]]
  })
  return score;
}

console.log(totalScore());
