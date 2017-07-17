var express             = require("express"),
    app                 = express(),
    bodyParser          = require("body-parser"),
    mongoose            = require("mongoose"),
    passport            = require("passport"),
    LocalStrategy       = require("passport-local"),
    moment              = require("moment"),
    Portfolio           = require("./models/portfolio"),
    User                = require("./models/user"),
    seedDB              = require("./seeds");
    
    
mongoose.connect("mongodb://localhost/ardent");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
seedDB();

// PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "Ardent is gonna lauch so soon",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

function paginate(req,res,next){
    var perPage=2;
    var page = req.params.page;
    Portfolio.find({}).sort({date:'descending'}).skip(perPage*page).limit(perPage).exec(function(err,allPortfolio){
        if(err){
            console.log(err)
        } else {
            Portfolio.count().exec(function(err,count){
                if(err){
                    console.log(err)
                } else {
                    res.render("portfolio",{portfolios:allPortfolio,pages:count/perPage});
                }
            })
        }
    })
}

app.get("/", function(req, res){
    res.render("landing");
});

//SHOW PORTFOLIO
app.get("/portfolio",function(req,res,next){
    paginate(req,res,next);
})

app.get("/portfolio/page/:page",function(req,res,next){
    paginate(req,res,next);
})

//CREATE PORTFOLIO
app.post("/portfolio", function(req, res){
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
    var newPortfolio = {name: name, image: image, numberofservice:numberofservice ,service1:service1,service2:service2,service3:service3,service4:service4,date:date,host:host,video:video,desc:desc}
    // Create a new portfolio and save to DB
    Portfolio.create(newPortfolio, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            //redirect back to portfolio page
            res.redirect("/portfolio");
        }
    });
});

//NEW PORTFOLIO
app.get("/portfolio/new",isLoggedIn, function(req, res){
   res.render("new.ejs"); 
});

//SHOW MORE INFO ABOUT PORTFOLIO
app.get("/portfolio/:id", function(req, res){
    //find the campground with provided ID
    Portfolio.findById(req.params.id,function(err, foundPortfolio){
        if(err){
            console.log(err);
        } else {
            res.render("show", {portfolio: foundPortfolio,moment:moment});
        }
    });
})

//  ===========
// AUTH ROUTES
//  ===========

// show register form
app.get("/register", function(req, res){
   res.render("register"); 
});
//handle sign up logic
app.post("/register", function(req, res){
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render("register");
        }
        passport.authenticate("local")(req, res, function(){
           res.redirect("/"); 
        });
    });
});

// show login form
app.get("/login", function(req, res){
   res.render("login"); 
});
// handling login logic
app.post("/login", passport.authenticate("local", 
    {
        successRedirect: "/",
        failureRedirect: "/login"
    }), function(req, res){
});

// logic route
app.get("/logout", function(req, res){
   req.logout();
   res.redirect("/");
});

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The Ardent Server Has Started!");
});

