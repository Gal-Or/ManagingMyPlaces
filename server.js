require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(cors());
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

// Fetch
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  //   express.json();
  next();
});

// Post
app.use(express.json());

var jsom_obj;
// read data from json file
const fs = require("fs");
fs.readFile("./ourSites.json", "utf8", (err, jsonString) => {
  if (err) {
    console.log("File read failed:", err);
    return;
  }

  // console.log('File data:', jsonString)
  jsom_obj = JSON.parse(jsonString);
  //console.log('json obj:', jsom_obj[0])
});

// respond with jsonString when a GET request is made to the client
app.get("/ourSites", function (req, res) {
  res.send(jsom_obj);
});

const sitesRouter = require("./routes/sites");
app.use("/sites", sitesRouter);

app.listen(3000, () => console.log("Listening to Port 3000"));
