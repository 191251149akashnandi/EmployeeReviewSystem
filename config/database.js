const mongoose = require("mongoose");

// Connection to mongodb.
mongoose.connect("mongodb+srv://kunaldeepers:ManCc4IC9t1a5bNO@cluster2.ozsiaoz.mongodb.net/?retryWrites=true&w=majority"); 


const db = mongoose.connection; // db store the connection

// cheacking the connection
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("DATABASE connection is Established");
});

// exporting the connection.
module.exports = db;
