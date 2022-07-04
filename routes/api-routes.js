const uniqid = require("uniqid");
const fs = require("fs");
const router = require("express").Router();
const { findById, createNewNote, validateNote } = require("../../api/notes");
const { notes } = require("../../db/db.json");
// const note = createNewNote(req.body, notes);
// const result = findById(req.params.id, notes);

module.exports = function (router) {
  router.get("/notes/:id", function (req, res) {
    let result = fs.readFileSync("../../db/db.json", "utf8").trim();
    res.json(result);
  });

  router.post("/api/notes", function (req, res) {
    let data = fs.readFileSync("../../db/db.json", "utf8").trim();
    let notes = JSON.parse(data);
    let newNote = {
      id: uniqid(),
      title: req.body.title,
      text: req.body.text,
    };
    notes.push(newNote);
    fs.writeFileSync("../../db/db.json", JSON.stringify(notes));
    res.json(newNote);

    if (err) {
      console.log(err);
    }
  });

};

module.exports = router;
