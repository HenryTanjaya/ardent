var mongoose = require("mongoose");

var journalSchema = new mongoose.Schema({
   title:String,
   date:Date,
   quote:String,
   image:String,
   image2:String,
   desc:String,
   desc2:String
});
module.exports = mongoose.model("Journal", journalSchema);