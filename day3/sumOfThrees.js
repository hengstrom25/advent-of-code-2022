#! /usr/bin/env node
const fs = require("fs");

function sumOfThrees() {
  const file = __dirname + "/input.js";

  const contents = fs
    .readFileSync(file, {
      encoding: "utf8",
    })
    .split("\n");

  let sum = 0
  let stringsSeen = 0
  let itemCount = {}
  let foundItem
  let alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("")

  contents.forEach((content) => {
    stringsSeen++
    let itemSet = new Set(content)
    for(const element of itemSet) {
        if (itemCount[element]) {
            itemCount[element] = itemCount[element] + 1
        } else {
            itemCount[element] = 1
        }
      }
    if (stringsSeen === 3) {
        for (const [key, value] of Object.entries(itemCount)) {
            if (value === 3) {
                foundItem = key
                break
            }
          }
        if (foundItem) {
            let value = alphabet.indexOf(foundItem) + 1
            sum += value
        }
        itemCount = {}
        foundItem = null
        stringsSeen = 0
    }
  })
  return sum;
}

console.log(sumOfThrees());
