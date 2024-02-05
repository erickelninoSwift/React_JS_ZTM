// 1- What floor does santa endup on
import fs from "fs";

function Question1() {
  fs.readFile("./puzzle.txt", (error, data) => {
    console.time("santa-time");
    if (error) {
      console.log(`Error was found ${error.message}`);
    }
    const directions = data.toString();
    const directionArrays = directions.split("");
    const answer = directionArrays.reduce((acc, currentData) => {
      if (currentData === "(") {
        return (acc += 1);
      } else if (currentData === ")") {
        return (acc -= 1);
      }
    }, 0);
    console.timeEnd("santa-time");
    console.log(`Santa will stop at floor : ${answer}`);
  });
}

function Question2() {
  fs.readFile("./puzzle.txt", (error, data) => {
    console.time("santa-time");
    if (error) {
      console.log(`Error was found ${error.message}`);
    }
    const directions = data.toString();
    const directionArrays = directions.split("");
    let accumulator = 0;
    let counter = 0;
    const answer = directionArrays.some((currentValue) => {
      if (currentValue === "(") {
        accumulator += 1;
      } else if (currentValue === ")") {
        accumulator -= 1;
      }
      counter++;
      return accumulator < 0;
    });
    console.timeEnd("santa-time");
    console.log("Question 2 :", answer, counter);
  });
}

Question1();
console.log("==============================");
Question2();
