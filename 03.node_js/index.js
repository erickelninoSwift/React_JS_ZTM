import express from "express";
import bodyParser from "body-parser";
import fs from "fs";
// import http from "http";
// const PORT = 3002;
// const server = http.createServer((request, response) => {
//   console.log(request.method);
//   console.log(request.headers.host);
//   console.log(request.url);
//   const user = {
//     name: "Erick",
//     surname: "Jackpot",
//   };
//   response.setHeader("content-type", "application/json");
//   response.end(`${JSON.stringify(user)}`);
// });

// server.listen(PORT);
fs.readFile("./erick.txt", (error, data) => {
  if (error) {
    console.log("there was an error while reading the file");
    return;
  }

  console.log(data.toString("utf8"));
});

fs.appendFile("./erick.txt", " This is so cool", (error) => {
  if (error) {
    console.log("There was an error");
  }
});
fs.writeFile("jackpot", "how are you doing today my friend ", (erro) => {
  if (erro) {
    console.log(erro.message);
  }
});
const app = express();
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use((request, response, next) => {
  console.log("<h1>Hello jackpot</h1>");
  next();
});

app.get("/profile", (request, response) => {
  response.send("Jackpot");
});
app.get("/", (request, response) => {
  const { headers, method, url } = request;

  const user = {
    name: "Erick",
    hobby: "Play video games",
  };
  response.setHeader("content-type", "application/json");
  response.send(user);
});

app.post("/user", (request, response) => {
  console.log(request.body);
  const user = {
    name: "Erick",
    hobby: "Play video games",
  };
  response.send(user);
});

app.listen(3002);
