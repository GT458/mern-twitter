const mongoose = require('mongoose');
const express = require("express");
const path = require('path');
const users = require(path.resolve(__dirname, './routes/api/users'));
const tweets = require(path.resolve(__dirname, './routes/api/tweets'));


const app = express();
// const test = require('./test')
const db = require(path.resolve(__dirname, './config/key.js')).mongoURI;

mongoose
  .connect(db, {useNewUrlParser: true})
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));
app.get("/", (req, res) => res.send("Hello World"));
app.use("/api/users", users);
app.use("/api/tweets", tweets);
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is runnign on port ${port}`));