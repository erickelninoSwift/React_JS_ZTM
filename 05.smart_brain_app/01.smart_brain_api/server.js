import express from "express";
import bodyParser from "body-parser";

import bcrypt from "bcrypt";
const saltRounds = 2;
const myPlaintextPassword = "s0//P4$$w0rD";
// const someOtherPlaintextPassword = "not_bacon";

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
  login: [
    {
      id: "9877",
      email: "erick@gmail",
      password: "",
    },
  ],
};

const passwordHashing = (saltRounds, myPlaintextPassword) => {
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(myPlaintextPassword, salt);
  return hash;
};

const checkPassword = (passwordUser, passowrdHansed) => {
  return bcrypt.compareSync(passwordUser, passowrdHansed);
};

app.get("/", (request, response) => {
  response.send(database.users);
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
  const passowrdHansed = passwordHashing(1, password);
  const isRightPassword = checkPassword(password);

  database.users.push({
    id: "1255",
    name: name,
    email: email,
    password: password,
    entries: 0,
    joined: new Date(),
  });

  response.send(database.users[database.users.length - 1]);
});

app.get("/profile/:id", (request, response) => {
  const { id } = request.params;

  const userSelected = database.users.filter((user) => {
    return user.id === id;
  });

  if (userSelected.length > 0) {
  } else {
    return response.json("User not found");
  }
});

app.post("/image", (request, response) => {
  const { id } = request.body;
  const currentUser = database.users.filter((user) => {
    return user.id === id;
  });

  if (currentUser[0]) {
    currentUser[0].entries += 1;
    response.json(currentUser[0].entries);
  } else {
    response.json("not found");
  }
});

app.listen(PORT, () => {
  console.log("Server is Running on PORT ", PORT);
});
