const mongoose = require("mongoose");
mongoose.Promise = Promise;

if (process.env.NODE_ENV == "production") {
  mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
useUnifiedTopology: true,
serverSelectionTimeoutMS: 5000,
autoIndex: false, // Don't build indexes
maxPoolSize: 10, // Maintain up to 10 socket connections
serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
family: 4 
  }, function(err) {
    if (err) {throw err;
    } else {console.log("Production Database Connection Successful");}
    })
} else {
  mongoose.connect("mongodb://127.0.0.1/project4"), { 
    useNewUrlParser: true,
useUnifiedTopology: true,
serverSelectionTimeoutMS: 5000,
autoIndex: false, // Don't build indexes
maxPoolSize: 10, // Maintain up to 10 socket connections
serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
family: 4 
  }, function(err) {
    if (err) {throw err;
    } else {console.log("Development Database Connection Successful")}
    };
}

module.exports = mongoose;
