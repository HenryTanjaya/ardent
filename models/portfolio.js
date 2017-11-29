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
   image1:String,
   image2:String,
   image3:String,
   image4:String,
   image5:String,
   image6:String,
   image7:String,
   image8:String,
   image9:String,
   image10:String
});
module.exports = mongoose.model("Portfolio", portfolioSchema);
