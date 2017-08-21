var express = require("express");
var router  = express.Router();
var passport = require("passport");
var User = require("../models/user");
var middleware = require("../middleware");
var Journal = require("../models/journal");
var Portfolio = require("../models/portfolio");
var moment = require("moment");


router.get("/", function(req, res){
    res.render("landing");
});

// show register form
// router.get("/register", function(req, res){
//   res.render("register"); 
// });

//handle sign up logic
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

router.get("/dashboard/portfolio",middleware.isLoggedIn, function(req, res,next){
   Portfolio.find({}).exec(function(err,allPortfolio){
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

module.exports = router;