import http from "http";
const PORT = 3002;
const server = http.createServer((request, response) => {
  console.log(request.method);
  console.log(request.headers.host);
  console.log(request.url);
  const user = {
    name: "Erick",
    surname: "Jackpot",
  };
  response.setHeader("content-type", "application/json");
  response.end(`${JSON.stringify(user)}`);
});

server.listen(PORT);
