const express = require("express");
const app = express();
const fetch = require("node-fetch");
const fakeData = require("faker");

app.set("view engine", "ejs");
app.use(express.static("public"));

//routes
app.get("/", async function(req, res){
    let keyword = "playstation";
    let apiKey = "-3BOO4vv-FqVD_CUht9-NXtA5Pb0NMM0RkPJE6yZjb4";
    let apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&featured=true&orientation=landscape&query=${keyword}`;
    let response = await fetch(apiUrl);
    let data = await response.json();
    
    let randName = fakeData.name.findName();
    
    res.render("index", {"ps4Url": data.urls.small, "fakerName":randName});
});

app.get("/checkout", async function(req, res){
    let randName = fakeData.name.findName();
    
    res.render("checkout", {"fakerName":randName});
});

//starting server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express server is running...");
});