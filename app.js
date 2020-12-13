const express = require("express");
const app = express();
const fetch = require("node-fetch");
const fakeData = require("faker");
const session = require('express-session');
const mysql = require('mysql');


app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(session({
    secret: "top secret!",
    resave: true,
    saveUninitialized: true
}));

//parse POST parameters
app.use(express.urlencoded({extended: true}));

//routes
app.get("/", function(req, res){
    res.render("index");
});

app.post("/", async function(req, res){
    let username = req.body.username;
    let password = req.body.password;
    
    req.session.authenticated = true;
    
    let keyword = "playstation";
    let apiKey = "-3BOO4vv-FqVD_CUht9-NXtA5Pb0NMM0RkPJE6yZjb4";
    let apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&featured=true&orientation=landscape&query=${keyword}`;
    let response = await fetch(apiUrl);
    let data = await response.json();
    
    let randName = fakeData.name.findName();
    
    res.render("product", {"ps4Url": data.urls.small, "fakerName":randName});
});

//routes
app.get("/product", isAuthenticated, async function(req, res){
    let keyword = "playstation";
    let apiKey = "-3BOO4vv-FqVD_CUht9-NXtA5Pb0NMM0RkPJE6yZjb4";
    let apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&featured=true&orientation=landscape&query=${keyword}`;
    let response = await fetch(apiUrl);
    let data = await response.json();
    
    let randName = fakeData.name.findName();
    
    res.render("product", {"ps4Url": data.urls.small, "fakerName":randName});
});

app.get("/checkout", async function(req, res){
    let randName = fakeData.name.findName();
    
    res.render("checkout", {"fakerName":randName});
});

function createDBConnection(){
    var conn = mysql.createPool({
        connectionLimit: 10,
        host: "ixnzh1cxch6rtdrx.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        user: "gj572ofpi2j0wtwv",
        password: "xhwj9t0oc83y953d",
        database: "z6v85vcvb5bkcdal"
    });
    return conn;
}

function isAuthenticated(req, res, next){
    if (!req.session.authenticated){
        res.redirect('/');
    } else{
        next();
    }
}

//starting server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express server is running...");
});