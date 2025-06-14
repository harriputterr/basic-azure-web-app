const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"), (err) => {
    if (err) {
      console.log(err);
    }
  });
});

app.listen(PORT, () => {
  console.log("Application is running on PORT:", PORT);
});
