const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/IntellectNotes")
  .then(() => console.log("DB connection successful!"));
//Schema
const myNotesSchema = new mongoose.Schema(
  {
    notesID: { type: Number, unique: true, required: [true, "Required field"] },
    name: { type: String, required: [true, "Required field"] },
    data: { type: String },
  },
  { timestamps: { createdAt: true, updatedAt: true } }
); //Model
const NotesModel = mongoose.model("notes", myNotesSchema);
module.exports = NotesModel; 
