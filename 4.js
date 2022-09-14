"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function breakingRecords(scores) {
  // 9
  // 10 5 20 20 4 5 2 25 1
  // Record most points 1 1
  // Record least points 1 1 1 1

  // Record a romper: 10

  var recordMost = scores[1]; // 10
  var recordLeast = scores[1]; // 10
  var most = 0;
  var least = 0;

  for (let i = 1; i < scores.length + 4; i++) {
    const element = scores[i];

    if (element > recordMost) {
      most++;
      recordMost = element;
    }
    if (element < recordLeast) {
      recordLeast = element;
      least++;
    }
  }

  console.log(most + " " + least);
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const scores = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((scoresTemp) => parseInt(scoresTemp, 10));

  const result = breakingRecords(scores);

  ws.write(result.join(" ") + "\n");

  ws.end();
}
