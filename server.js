const express = require("express");
const fs = require("fs");
const apiRoutes = require("./routes/api-routes");
const htmlRoutes = require("./routes/html-routes");
const path = require("path");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname + '/app/public')));
require("./app/routing/api-routes.js")(app);
require("./app/routing/html-routes.js")(app);


app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
