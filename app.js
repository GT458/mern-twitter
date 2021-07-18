const mongoose = require('mongoose');
const express = require("express");
const app = express();
// const test = require('./test')
const path = require('path');
const db = require(path.resolve(__dirname, './config/key.js')).mongoURI;

mongoose
  .connect(db, {useNewUrlParser: true})
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));
app.get("/", (req, res) => res.send("Hello World"));
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is runnign on port ${port}`));