var mongoose = require("mongoose");

var landingSchema = new mongoose.Schema({
   imagetitle:String,
   imagevision:String,
   imagemission:String,
   imagevalues:String,
   imagecontact:String,
   featuredname1:String,
   featuredname2:String,
   featuredname3:String,
   featuredimage1:String,
   featuredimage2:String,
   featuredimage3:String,
   featureddate1:String,
   featureddate2:String,
   featureddate3:String,
   featuredlink1:String,
   featuredlink2:String,
   featuredlink3:String
});
module.exports = mongoose.model("Landing", landingSchema);
