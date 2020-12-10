const express = require("express");
const app = express();
const fetch = require("node-fetch");

app.set("view engine", "ejs");
app.use(express.static("public"));

//routes
app.get("/", async function(req, res){
    let keyword = "playstation";
    let apiUrl = `https://api.unsplash.com/photos/random/?client_id=-3BOO4vv-FqVD_CUht9-NXtA5Pb0NMM0RkPJE6yZjb4&featured=true&orientation=landscape&query=${keyword}`;
    let response = await fetch(apiUrl);
    let data = await response.json();
    
    res.render("index", {"ps4Url": data.urls.small});
});


//starting server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express server is running...");
});