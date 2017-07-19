var express             = require("express"),
    app                 = express(),
    bodyParser          = require("body-parser"),
    mongoose            = require("mongoose"),
    passport            = require("passport"),
    LocalStrategy       = require("passport-local"),
    moment              = require("moment"),
    methodOverride      = require("method-override"),
    Portfolio           = require("./models/portfolio"),
    User                = require("./models/user"),
    seedDB              = require("./seeds");
    
var portfolioRoutes     = require("./routes/portfolios"),
    indexRoutes         = require("./routes/index");
    
mongoose.connect("mongodb://localhost/ardent");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
// seedDB();

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

app.use(function(req, res, next){
   res.locals.currentUser = req.user;
   next();
});

app.use("/portfolios", portfolioRoutes);
app.use("/",indexRoutes);

app.get("*",function(req,res){
    res.send("WE ARE UNDER CONSTRUCTION, ERROR 404")
})


app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The Ardent Server Has Started!");
});

