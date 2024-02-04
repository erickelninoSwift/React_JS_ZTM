// 1- What floor does santa endup on
import fs from "fs";

function readFiles() {
  fs.readFile("./puzzle.txt", (error, data) => {
    if (error) {
      console.log(`Error was found ${error.message}`);
    }
    console.log(data.toString());
  });
}

readFiles();
