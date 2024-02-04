import express, { response } from "express";
import bodyParser from "body-parser";

const PORT = 3005;

const app = express();

app.use(express.static(__dirname + "/public"));

app.use((request, response, next) => {
  next();
});

app.listen(PORT);
