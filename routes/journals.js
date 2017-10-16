var express             = require("express"),
    moment              = require("moment"),
    router              = express.Router(),
    Journal             = require("../models/journal"),
    middleware          = require("../middleware");
    
    
function paginate(req,res,next){
    var perPage=5;
    var page = req.params.page;
    Journal.find({}).sort({date:'descending'}).skip(perPage*page).limit(perPage).exec(function(err,allJournal){
        if(err){
            console.log(err)
        } else {
            Journal.count().exec(function(err,count){
                if(err){
                    console.log(err)
                } else {
                    res.render("journals/index",{journals:allJournal,pages:count/perPage,moment:moment});
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
    var quote   = req.body.quote;
    var image   = req.body.image;
    var desc    = req.body.desc;
    var image2  = req.body.image2;
    var desc2   = req.body.desc2;
    
    
    var newJournal ={  title:title,
                    date:date,
                    quote:quote,
                    image:image,
                    desc:desc,
                    image2:image2,
                    desc2:desc2,
        }
    // Create a new journal and save to DB
    Journal.create(newJournal, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            //redirect back to journal page
            res.redirect("/journals");
        }
    });
});


//NEW JOURNAL
router.get("/new",middleware.isLoggedIn, function(req, res){
   res.render("journals/new"); 
});

//SHOW MORE INFO ABOUT JOURNAL
router.get("/:id", function(req, res){
    //find the campground with provided ID
    Journal.findById(req.params.id,function(err, foundJournal){
        if(err){
            console.log(err);
        } else {
            res.render("journals/show", {journal: foundJournal,moment:moment});
        }
    });
})

//EDIT JOURNAL
router.get("/:id/edit", middleware.isLoggedIn, function(req, res){
    Journal.findById(req.params.id, function(err, foundJournal){
        if(err){
            console.log(err)
        } else {
            res.render("journals/edit", {journal: foundJournal});
        }
    });
});

// UPDATE CAMPGROUND ROUTE
router.put("/:id",middleware.isLoggedIn, function(req, res){
    // find and update the correct journal
    Journal.findByIdAndUpdate(req.params.id, req.body.journal, function(err, updatedJournal){
       if(err){
           res.redirect("/journals");
       } else {
           //redirect somewhere(show page)
           res.redirect("/journals/" + req.params.id);
       }
    });
});

// DESTROY CAMPGROUND ROUTE
router.delete("/:id",middleware.isLoggedIn, function(req, res){
   Journal.findByIdAndRemove(req.params.id, function(err){
      if(err){
          res.redirect("/dashboard/journal");
      } else {
          res.redirect("/dashboard/journal");
      }
   });
});


module.exports = router;
