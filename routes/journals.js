var express             = require("express"),
    moment              = require("moment"),
    router              = express.Router(),
    Journal             = require("../models/journal"),
    middleware          = require("../middleware");
    
function paginate(req,res,next){
    var perPage=10;
    var page = req.params.page;
    Journal.find({}).sort({date:'descending'}).skip(perPage*page).limit(perPage).exec(function(err,allJournal){
        if(err){
            console.log(err)
        } else {
            Journal.count().exec(function(err,count){
                if(err){
                    console.log(err)
                } else {
                    res.render("journals/index",{journals:allJournal,pages:count/perPage});
                }
            })
        }
    })
}

//SHOW JOURNAL
router.get("/",function(req,res,next){
    paginate(req,res,next);
})

router.get("/page/:page",function(req,res,next){
    paginate(req,res,next);
})

//CREATE JOURNAL
router.post("/", function(req, res){
    // get data from form and add to blog array
    var title   = req.body.title;
    var date    = req.body.date;
    var image   = req.body.image;
    var desc    = req.body.desc;
    
    
    var newJournal ={  title:title,
                    date:date,
                    image:image,
                    desc:desc,
        }
    // Create a new portfolio and save to DB
    Journal.create(newJournal, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            //redirect back to portfolio page
            res.redirect("/journals");
        }
    });
});


module.exports = router;
