const jwt = require("jwt-simple");
const config = require("../config/config");
const User = mongoose.model("User");

function verifyToken(req, res) {
  var token = req.headers["user-token"];
  if (!token)
    return res.status(401).send({ auth: false, message: "No token provided." });
  try {
    var decoded = jwt.decode(token, config.jwtSecret);
    User.findById(decoded.id, { password: 0 }, function(err, user) {
      if (err)
        return res.status(500).send("There was a problem finding the user.");
      if (!user) return res.status(404).send("No user found.");
    });
  } catch (error) {
    return res
      .status(500)
      .send({ auth: false, message: "Failed to authenticate token." });
  }
}

module.exports = verifyToken;
