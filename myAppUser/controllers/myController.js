const UsersModel = require("../model/myUsersSchema");

exports.addUser = async (req, res) => {
  try {
    const newUser = await UsersModel.create(req.body);
    res
      .status(201)
      .json({
        status: "success",
        message: "user Successfully added",
        data: { newUser },
      });
  } catch (err) {
    res.status(404).json({ status: "fail", message: err.message });
  }
};
exports.getUsers = async (req, res) => {
  try {
    const users = await UsersModel.find({}, { _id: 0, __v: 0 });
    if (users.length > 0) {
      res
        .status(200)
        .json({ status: "success", results: users.length, data: { users } });
    } else {
      res
        .status(400)
        .json({
          status: "success",
          data: { message: "No users available in the repo" },
        });
    }
  } catch (err) {
    console.log(err);
    res.status(404).json({ status: "fail", message: err.message });
  }
}; 

exports.login = async (req, res) => { try { console.log(`user name: ${req.body.userID}, password:${req.body.password} `) 
const user = await UsersModel.find({
  userID: req.body.userID,
  password: req.body.password,
});
console.log(`${req.body.password},${user.password}`);
 if (user.length != 0) { res.status(200).json({ status: 'success', data: { message: `successful Login `, }, }); } else{ res.status(200).json({ status: 'success', data: { message: `Invalid credentials `, }, }); } 
} catch (err) { 
    console.log(err) 
    res.status(404).json({ status: 'fail',message: err, }); } };

exports.invalid=async(req,res)=>{ res.send("Invalid URL..") }