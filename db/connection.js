const mongoose = require("mongoose");
mongoose.Promise = Promise;

if (process.env.NODE_ENV == "production") {
  mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  });
  console.log("Production Database Connection Successful");
} else {
  mongoose.connect("mongodb://localhost/project4", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  });
  console.log("Development Database Connection Successful");
}

module.exports = mongoose;
