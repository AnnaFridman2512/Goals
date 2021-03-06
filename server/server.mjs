import express from "express";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });
const __dirname = path.resolve();

//import { playersRouter } from "./src/players.routs.mjs";
import { connect } from "./db/connect.mjs";

const app = express();

app.use(express.json()); //Used to parse JSON bodies
app.use(express.urlencoded()); //Parse URL-encoded bodies
app.use(cors());


//app.use("/api/players", playersRouter);
app.use(express.static('../client/build'));
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});



const port = process.env.PORT || 8080; //listening to heroku port Or 8080 default

app.listen(port, () => {
  connect();
});

console.log("Server up and running on localhost: " + port);
