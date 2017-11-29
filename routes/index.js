var express = require("express");
var router  = express.Router();
var passport = require("passport");
var User = require("../models/user");
var middleware = require("../middleware");
var Journal = require("../models/journal");
var Landing = require("../models/landing");
var Portfolio = require("../models/portfolio");
var moment = require("moment");
var nodemailer = require("nodemailer");
var GMAIL_PASSWORD = process.env.GMAIL_PASSWORD || "Alderbeagle2017";


router.get("/", function(req, res){
  Landing.find({}).exec(function(err,allLanding){
      if(err){
          console.log(err)
      } else {
          Landing.count().exec(function(err,count){
              if(err){
                  console.log(err)
              } else {
                  res.render("landing",{landings:allLanding});
              }
          })
      }
  })
});

router.get("/landing/:id/edit", middleware.isLoggedIn, function(req, res){
    Landing.findById(req.params.id, function(err, foundLanding){
        if(err){
            console.log(err)
        } else {
            res.render("landings/edit", {landing: foundLanding});
        }
    });
});

router.put("/landing/:id",middleware.isLoggedIn, function(req, res){
    // find and update the correct landing
    Landing.findByIdAndUpdate(req.params.id, req.body.landing, function(err, updatedLanding){
       if(err){
           res.redirect("/dashboard/landing");
       } else {
           //redirect somewhere(show page)
           res.redirect("/dashboard/landing");
       }
    });
});
  // show register form
  // router.get("/register", function(req, res){
  //   res.render("register");
  // });

  // handle sign up logic
  // router.post("/register", function(req, res){
  //     var newUser = new User({username: req.body.username});
  //     User.register(newUser, req.body.password, function(err, user){
  //         if(err){
  //             console.log(err);
  //             return res.render("register");
  //         }
  //         passport.authenticate("local")(req, res, function(){
  //           res.redirect("/");
  //         });
  //     });
  // });

// show login form
router.get("/login", function(req, res){
   res.render("login");
});

// handling login logic
router.post("/login", passport.authenticate("local",
    {
        successRedirect: "/dashboard/journal",
        failureRedirect: "/login"
    }), function(req, res){
});

// logic route
router.get("/logout", function(req, res){
   req.logout();
   res.redirect("/");
});

router.get("/dashboard/journal",middleware.isLoggedIn, function(req, res,next){
   Journal.find({}).exec(function(err,allJournal){
        if(err){
            console.log(err)
        } else {
            Journal.count().exec(function(err,count){
                if(err){
                    console.log(err)
                } else {
                    res.render("dashboard/journal",{journals:allJournal,moment:moment});
                }
            })
        }
    })
});

router.get("/dashboard/landing",middleware.isLoggedIn, function(req, res,next){
   Landing.find({}).exec(function(err,allLanding){
        if(err){
            console.log(err)
        } else {
            Landing.count().exec(function(err,count){
                if(err){
                    console.log(err)
                } else {
                    res.render("dashboard/landing",{landings:allLanding});
                }
            })
        }
    })
});


router.get("/dashboard/portfolio",middleware.isLoggedIn, function(req, res,next){
   Portfolio.find({}).sort({date:'descending'}).exec(function(err,allPortfolio){
        if(err){
            console.log(err)
        } else {
            Portfolio.count().exec(function(err,count){
                if(err){
                    console.log(err)
                } else {
                    res.render("dashboard/portfolio",{portfolios:allPortfolio,moment:moment});
                }
            })
        }
    })
});

router.post("/",function(req,res){
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'alderbeagle@gmail.com',
        pass: GMAIL_PASSWORD
      }
    });

    var mailOptions = {
      from: 'tellardent@ardent-family.com',
      to: 'tellardent@ardent-family.com',
      subject: 'Form',
      html: '<b>Name : </b>'+req.body.name +
            '<br><b>Email : </b>'+req.body.email +
            '<br><b>Phone : </b>'+req.body.phone
    };

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
        res.redirect('/');
      }
    });
})

module.exports = router;
