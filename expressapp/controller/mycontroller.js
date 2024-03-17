const axios = require("axios");
const { param } = require("../routes");
const cookieParser = require("cookie-parser");
exports.getNotes = function (req, res) {
  console.log("Controller Method is invoked..");
  axios
    .get("http://localhost:5000/notes")
    .then(function (response) {
      console.log(response.data);
      res.send(response.data);
    })
    .catch(function (error) {
      console.log(error);
      res.status(500).send("Something went wrong");
    });

  // res.send(`Name is ${req.query.name} and Age is ${req.query.age}`);
};
exports.getNotesById = function (req, res) {
  console.log("Controller Method is invoked..");
  axios
    .get("http://localhost:5000/notes/" + req.params.noteid)
    .then(function (response) {
      console.log(response.data);
      res.send(response.data);
    })
    .catch(function (error) {
      console.log(error);
      res.status(500).send("Something went wrong");
    });

  // res.send(`Name is ${req.query.name} and Age is ${req.query.age}`);
};
exports.addNotes = function (req, res) {
  axios
    .post("http://localhost:5000/notes", { title: req.body.title })
    .then(function (response) {
      console.log(response.data);
      res.send("New Note Added" + JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
      res.status(500).send("Something went wrong");
    });
};
exports.getNotesParams = function (req, res) {
  res.send(`Name is ${req.params.userid} `);
};
exports.editNotes = function (req, res) {
  res.send("Editing Note");
};
exports.invalid = function (req, res) {
  res.send("Invalid URL");
};

exports.user1 = async (req, res) => {
  res.cookie("name", req.params.name);
  res.send('<p>Cookie set:<a href="/user"> View here </a>');
};
exports.user2 = async (req, res) => {
  res.send(req.cookies.name);
};
