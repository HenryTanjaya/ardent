var mongoose = require("mongoose");

var landingSchema = new mongoose.Schema({
   imagetitle:String,
   imagevision:String,
   imagemission:String,
   imagevalues:String,
   imagecontact:String,
});
module.exports = mongoose.model("Landing", landingSchema);
