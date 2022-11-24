const mongoose = require("mongoose");
mongoose.Promise = Promise;

if (process.env.NODE_ENV == "production") {
  mongoose.connect(process.env.DB_URL, {
  }, function(err) {
    if (err) {throw err;
    } else {console.log("Production Database Connection Successful");}
    })
} else {
  mongoose.connect("mongodb://localhost/project4"), { 
  }, function(err) {
    if (err) {throw err;
    } else {console.log("Development Database Connection Successful")}
    };
}

module.exports = mongoose;
