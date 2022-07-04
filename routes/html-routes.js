const { appendFile } = require("fs");
const path = require("path");


// create a GET notes route to return notes.html
// HTML routes for the note and index file //
module.exports = function (app) {
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../Develop/public/notes.html"));
});

// create a GET * notes route to return index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../Develop/public/index.html"));
});
};

