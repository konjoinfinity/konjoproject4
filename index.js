const express = require("express");
const cors = require("cors");
const parser = require("body-parser");
const methodOverride = require("method-override");
const passport = require("./config/passport")();
const userController = require("./controllers/user.js");
const communityController = require("./controllers/community");

const app = express();

app.use(cors());
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use(methodOverride("_method"));
app.use(passport.initialize());

app.use("/community", communityController);
app.use("/users", userController);

app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () => {
  console.log(`Running on PORT: ${app.get("port")}`);
});
