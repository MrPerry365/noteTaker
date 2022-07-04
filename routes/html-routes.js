const path = require("path");
const router = require("express").Router();

// create a GET notes route to return notes.html
// HTML routes for the note and index file //
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../../ notes.html"));
});

// create a GET * notes route to return index.html
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/index.html"));
});

module.exports = router;
