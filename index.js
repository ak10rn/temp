const express = require("express");
const app = express();

const PORT = 3001;

app.get("/", (req, res) => {
  res.send("Hello There!!");
});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
