// I am a child and I am going to act like a server and nothing else
// const cluster = require("cluster");

// if (cluster.isMaster) {
//   cluster.fork();
//   cluster.fork();
// } else {
const express = require("express");
const crypto = require("crypto");
const app = express();

// function doWork(duration) {
//   const start = Date.now();
//   while (Date.now() - start < duration) {}
// }

app.get("/", (req, res) => {
  // doWork(5000);

  crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
    res.send("Hi There");
  });
});

app.get("/fast", (req, res) => {
  res.send("This was fast!");
});

app.listen(3000);
// }
