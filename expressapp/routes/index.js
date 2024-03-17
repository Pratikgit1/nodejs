const express = require("express");
const mycontroller = require("../controller/mycontroller");
const notesController = require("../controller/myNotes");
const router = express.Router();
//Router configuration
router.get("/notes", mycontroller.getNotes);
//router.get("/notes/:userid",mycontroller.getNotesParams);
router.get("/notes/:noteid", mycontroller.getNotesById);
router.post("/notes", mycontroller.addNotes);
router.put("/notes", mycontroller.editNotes);
router.get("/user/:name", mycontroller.user1);
router.get("/user", mycontroller.user2); 

router.get("/mynotes", notesController.getNotes);
router.post("/mynotes", notesController.newNotes);
router.put("/mynotes/:id", notesController.updateNotes);
router.delete("/mynotes/:id", notesController.deleteNotes);
router.all("*", notesController.invalid);


module.exports = router;
