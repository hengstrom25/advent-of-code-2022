#! /usr/bin/env node
const fs = require("fs");

function sumOfItems() {
  const file = __dirname + "/input.js";

  const contents = fs
    .readFileSync(file, {
      encoding: "utf8",
    })
    .split("\n");

  let sum = 0
  let alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("")

  contents.forEach((content) => {
    const totalLength = content.length
    const firstHalf = content.substring(0, totalLength / 2).split('')
    const items = {}
    firstHalf.forEach(item => items[item] = true)

    const secondHalf = content.substring(totalLength / 2, totalLength).split("")
    let foundItem
    for (let i = 0; i<secondHalf.length; i++) {
        if (items[secondHalf[i]]) {
            foundItem = secondHalf[i]
            break
        }
    }
    if (foundItem) {
        let value = alphabet.indexOf(foundItem) + 1
        sum += value
    }
  })
  return sum;
}

console.log(sumOfItems());
