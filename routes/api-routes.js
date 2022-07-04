const uniqid = require("uniqid");
const fs = require("fs");

module.exports = function (app) {
  // api GET AND POST ROUTES
  app.get("api/notes", (req, res) => {
    console.log("getting notes!");

    let data = fs.readFileSync("./develop/db/db.json", "utf8");
    res.json(JSON.parse(data));
  });

  app.post("/api/notes", (req, res) => {
    const newNote = {
      ...req.body,
      id: uniqid(),
    };

    let data = fs.readFileSync("./develop/db/db.json", "utf8");
    const dataJSON = JSON.PARSE(data);
    dataJSON.push(newNote);
    fs.writeFileSync(
      "./app/db/db.json",
      JSON.stringify(dataJSON),
      (err, text) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log("text");
      }
    );
    console.log("done");
    res.json(data);
  });
};

