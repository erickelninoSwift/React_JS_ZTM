import express from "express";
import bodyParser from "body-parser";
const app = express();

const PORT = 3001;

app.use(bodyParser.json());
const database = {
  users: [
    {
      id: "1234",
      name: "erick",
      email: "erick@gmail.com",
      password: "jackpot",
      entries: 0,
      joined: new Date(),
    },
    {
      id: "1323",
      name: "yollande",
      email: "yollande@gmail.com",
      password: "yoyo",
      entries: 0,
      joined: new Date(),
    },
  ],
};

app.get("/", (request, response) => {
  response.send("Working well");
});
app.post("/signin", (request, response) => {
  if (
    request.body.email === database.users[0].email &&
    request.body.password === database.users[0].password
  ) {
    response.send("success");
  } else {
    response.status(400).json("Error found while loggin in");
  }
  response.send("SignIn");
});
app.post("/register", (request, response) => {
  const { email, password, name } = request.body;

  database.users.push({
    id: "1255",
    name: name,
    email: email,
    password: password,
    entries: 0,
    joined: new Date(),
  });

  response.send("registration successful");
});

app.listen(PORT, () => {
  console.log("Server is Running on PORT ", PORT);
});