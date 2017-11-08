var express             = require("express"),
    moment              = require("moment"),
    router              = express.Router(),
    Portfolio           = require("../models/portfolio"),
    middleware          = require("../middleware");

function paginate(req,res,next){
    var perPage=6;
    var page = req.params.page;
    Portfolio.find({}).sort({date:'descending'}).skip(perPage*page).limit(perPage).exec(function(err,allPortfolio){
        if(err){
            console.log(err)
        } else {
            Portfolio.count().exec(function(err,count){
                if(err){
                    console.log(err)
                } else {
                    res.render("portfolios/index",{portfolios:allPortfolio,pages:count/perPage,moment:moment});
                }
            })
        }
    })
}


//SHOW PORTFOLIO
router.get("/",function(req,res,next){
    paginate(req,res,next);
})

router.get("/event/:year",function(req,res,next){
  var year = req.params.year
  var perPage=6;
  var page = req.params.page;
  Portfolio.find({"$where":"this.date.getFullYear()==="+year}).sort({date:'descending'}).skip(perPage*page).limit(perPage).exec(function(err,allPortfolio){
      if(err){
          console.log(err)
      } else {
          Portfolio.count().exec(function(err,count){
              if(err){
                  console.log(err)
              } else {
                  res.render("portfolios/index",{portfolios:allPortfolio,pages:count/perPage,moment:moment});
              }
          })
      }
  })
})

router.get("/page/:page",function(req,res,next){
    paginate(req,res,next);
})

//CREATE PORTFOLIO
router.post("/", function(req, res){
    // get data from form and add to portfolio array
    var name = req.body.name;
    var image = req.body.image;
    var numberofservice = req.body.numberofservice;
    var service1 = req.body.service1;
    var service2 = req.body.service2;
    var service3 = req.body.service3;
    var service4 = req.body.service4;
    var date = req.body.date;
    var host = req.body.host;
    var video = req.body.video;
    var desc = req.body.desc;
    var image1 = req.body.image1;
    var image2 = req.body.image2
    var image3 = req.body.image3;
    var image4 = req.body.image4;
    var image5 = req.body.image5;
    var image6 = req.body.image6;
    var image7 = req.body.image7;
    var image8 = req.body.image8;
    var image9 = req.body.image9;
    var image10 = req.body.image10;

    var newPortfolio = {name: name,
                        image: image,
                        numberofservice:numberofservice,
                        service1:service1,
                        service2:service2,
                        service3:service3,
                        service4:service4,
                        date:date,
                        host:host,
                        video:video,
                        desc:desc,
                        image1:image1,
                        image2:image2,
                        image3:image3,
                        image4:image4,
                        image5:image5,
                        image6:image6,
                        image7:image7,
                        image8:image8,
                        image9:image9,
                        image10:image10
    }
    // Create a new portfolio and save to DB
    Portfolio.create(newPortfolio, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            //redirect back to portfolio page
            res.redirect("/portfolios");
        }
    });
});

//NEW PORTFOLIO
router.get("/new",middleware.isLoggedIn, function(req, res){
   res.render("portfolios/new");
});

//SHOW MORE INFO ABOUT PORTFOLIO
router.get("/:id", function(req, res){
    //find the campground with provided ID
    Portfolio.findById(req.params.id,function(err, foundPortfolio){
        if(err){
            console.log(err);
        } else {
            res.render("portfolios/show", {portfolio: foundPortfolio,moment:moment});
        }
    });
})

//EDIT PORTFOLIO
router.get("/:id/edit", middleware.isLoggedIn, function(req, res){
    Portfolio.findById(req.params.id, function(err, foundPortfolio){
        if(err){
            console.log(err)
        } else {
            res.render("portfolios/edit", {portfolio: foundPortfolio});
        }
    });
});

// UPDATE CAMPGROUND ROUTE
router.put("/:id",middleware.isLoggedIn, function(req, res){
    // find and update the correct portfolio
    Portfolio.findByIdAndUpdate(req.params.id, req.body.portfolio, function(err, updatedPortfolio){
       if(err){
           res.redirect("/portfolios");
       } else {
           //redirect somewhere(show page)
           res.redirect("/portfolios/" + req.params.id);
       }
    });
});

// DESTROY CAMPGROUND ROUTE
router.delete("/:id",middleware.isLoggedIn, function(req, res){
   Portfolio.findByIdAndRemove(req.params.id, function(err){
      if(err){
          res.redirect("/dashboard/portfolio");
      } else {
          res.redirect("/dashboard/portfolio");
      }
   });
});


module.exports = router;
