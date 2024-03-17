const express = require("express");
const session = require("express-session");
const app = express();
app.use(
  session({
    secret: "your_secret_key_here",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(express.urlencoded());
app.use(express.json());
app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  if (username === "admin" && password === "secret") {
    req.session.isLoggedIn = true;
    req.session.userData = { username: username };
    res.redirect("/dashboard");
  } else {
    res.send("Invalid credentials!");
  }
});
app.get("/dashboard", (req, res) => {
  if (req.session.isLoggedIn) {
    const username = req.session.userData.username;
    res.send(`Welcome to the dashboard, ${username}!`);
  } else {
    res.send("You must be logged in to view this page.");
  }
});
const port = 3000;
app.listen(port);
