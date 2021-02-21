const express = require("express");
const passport = require("passport");

const app = express();

app.use(passport.initialize());

app.listen(5000, () => {
  console.log("now listening for requests on port 5000");
});
