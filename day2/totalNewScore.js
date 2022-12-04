#! /usr/bin/env node
const fs = require("fs");

function totalScore() {
  const file = __dirname + "/input.js";

  const contents = fs
    .readFileSync(file, {
      encoding: "utf8",
    })
    .split("\n");

    // A = Rock, X = Lose
    // B = Paper, Y = Draw
    // C = Scissors, Z = Win

  const scoringGuide = {
    'A': {'X': 3, 'Y': 1, 'Z': 2},
    'B': {'X': 1, 'Y': 2, 'Z': 3},
    'C': {'X': 2, 'Y': 3, 'Z': 1},
    'X': 0, 
    'Y': 3, 
    'Z': 6
  }
  let score = 0

  contents.forEach((content) => {
    score += scoringGuide[content[0]][content[2]] + scoringGuide[content[2]]
  })
  return score;
}

console.log(totalScore());
