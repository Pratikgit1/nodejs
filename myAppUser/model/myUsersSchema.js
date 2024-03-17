const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/Users")
  .then(() => console.log("DB connection successful!"));
//Schema
const myUsersSchema = new mongoose.Schema(
  {
    userID: { type: Number, unique: true, required: [true, "Required field"] },
    password: { type: String, required: [true, "Required field"] },
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);
//Model
const UsersModel = mongoose.model("users", myUsersSchema);
module.exports = UsersModel;
