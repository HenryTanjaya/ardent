var mongoose = require("mongoose");

var portfolioSchema = new mongoose.Schema({
   name: String,
   image: String,
   numberofservice: Number,
   service1:String,
   service2:String,
   service3:String,
   service4:String,
   video:String,
   date:Date,
   host:String,
   desc:String,
});
module.exports = mongoose.model("Portfolio", portfolioSchema);