var express = require("express");
var router  = express.Router();

router.get("/",(req,res)=>{
  console.log("A")
  res.send("ardentic")
})

module.exports = router;
