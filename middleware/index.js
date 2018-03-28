var Portfolio = require("../models/portfolio");

// all the middleare goes here
var middlewareObj = {};

middlewareObj.isLoggedIn = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

middlewareObj.checkPortfolioOwnership = function(req, res, next) {
 if(req.isAuthenticated()){
        Portfolio.findById(req.params.id, function(err, foundPortfolio){
           if(err){
               console.log("portfolio not found")
               res.redirect("back");
           }  else {
               // does user own the campground?
            if(foundPortfolio.author.id.equals(req.user._id)) {
                next();
            } else {
                console.log("you got no permission")
                res.redirect("back");
            }
           }
        });
    } else {
        res.redirect("back");
    }
}

module.exports = middlewareObj;
