var mongoose = require("mongoose");

var journalSchema = new mongoose.Schema({
   title:String,
   date:Date,
   image:String,
   desc:String,
});
module.exports = mongoose.model("Journal", journalSchema);