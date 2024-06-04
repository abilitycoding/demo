const express = require("express");
const path = require("path");

const app = express();

app.get("/login", (req, res) => {
  res.send({ name: "sandy" });
});

app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(8000, () => {
  console.log("Listening on port 8000");
});
