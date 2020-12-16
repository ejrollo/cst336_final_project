const express = require("express");
const app = express();
const fetch = require("node-fetch");
const fakeData = require("faker");
const session = require('express-session');
const pool = require('./public/js/dbPool.js');


app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(session({
    secret: "top secret!",
    resave: true,
    saveUninitialized: true
}));
//session variable
var ssn;

//parse POST parameters
app.use(express.urlencoded({extended: true}));

//routes
app.get("/", async function(req, res){
    ssn = req.session;
    ssn.cart = [];

    let keyword = "playstation";
    let apiKey = "-3BOO4vv-FqVD_CUht9-NXtA5Pb0NMM0RkPJE6yZjb4";
    let apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&featured=true&orientation=landscape&query=${keyword}`;
    let response = await fetch(apiUrl);
    let randName = fakeData.name.findName();

    if (!response.ok){
        ssn.pic = "img/ps.jpg";
    } else{
        let data = await response.json();
        ssn.pic = data.urls.small;
    }

    res.render("index", {"ps4Url": ssn.pic, "fakerName":randName});
});

app.get("/register", async function(req, res){
    ssn = req.session;
    let randName = fakeData.name.findName();
    res.render("register", {"ps4Url": ssn.pic, "fakerName":randName});
});

app.get("/registered", async function(req, res){
    let username = req.query.username;
    let password = req.query.password;
    let zip = req.query.zip;
    let city = req.query.city;
    let state = req.query.state;
    let randName = fakeData.name.findName();

    let userExists = await checkCredentials(username, password);
    if (userExists.length > 0){
        res.render("register", {"ps4Url": ssn.pic, "usernameError":true, "fakerName":randName});
    } else{
        let sql = "INSERT INTO customer (username, password, zip, city, state) VALUES (?,?,?,?,?)";
        let sqlParams = [username, password, zip, city, state];
        pool.query(sql, sqlParams, function (err, rows, fields){
            if (err) throw err;
        });
        res.render("registered", {"ps4Url": ssn.pic, "fakerName":randName});
    }

});

app.post("/", async function(req, res){
    ssn = req.session;
    let username = req.body.username;
    let password = req.body.password;
    let randName = fakeData.name.findName();
    let cart = [];
    let catalog = [];

    if (username == '' || password == ''){
        req.session.authenticated = false;
        res.render("index", {"ps4Url": ssn.pic, "loginError":true, "fakerName":randName});
    }
    let match = await checkCredentials(username, password);
    if (match.length > 0){
        req.session.authenticated = true;
        // store username and id in session
        req.session.userId = match[0].user_id;
        req.session.username = match[0].username;

        let products = await getProducts();
        let items = await getCart(req.session.userId);

        if (products) {
            catalog = products;
            req.session.products = products;
        }

        if (items) {
            cart = items;
            req.session.items = items;
        }

        res.render("product", { "ps4Url": ssn.pic, "fakerName": randName, "products": catalog, "cart": cart });
    } else{
        req.session.authenticated = false;
        res.render("index", {"ps4Url": ssn.pic, "loginError":true, "fakerName":randName});
    }
});

//routes
app.get("/product", isAuthenticated, async function(req, res){
    let cart = [];
    let catalog = [];

    let products = await getProducts();
    let items = await getCart(req.session.userId);

    if (products) {
        catalog = products;
        req.session.products = products;
    }

    if (items) {
        cart = items;
        req.session.items = items;
    }

    let randName = fakeData.name.findName();

    res.render("product", { "ps4Url": req.session.pic, "fakerName": randName, "products": catalog, "cart": cart });
});

app.get("/checkout", async function(req, res){
    let items = await getCart(req.session.userId);

    let cart = items ? items : req.session.items;

    let randName = fakeData.name.findName();
    res.render("checkout", { "ps4Url": req.session.pic, "fakerName": randName, "cart": cart });
});

app.post("/addCart", async function(req, res) {
    let productId = parseInt(req.body.productId);
    let productName = req.body.productName;
    let productCost = req.body.productCost;
    console.log(req.body)
    let randName = fakeData.name.findName();

    let product = await addToCart(productId, productName, productCost, 1, req.session.userId);
    let items = await getCart(req.session.userId);

    let cart = items ? items : req.session.items;

    res.render("product", { "ps4Url": req.session.pic, "fakerName": randName, "products": req.session.products, "cart": cart });
});

app.get("/submit", function(req, res){
    res.render("submit");
});

function isAuthenticated(req, res, next){
    if (!req.session.authenticated){
        res.redirect('/');
    } else{
        next();
    }
}

function checkCredentials(username, password){
    let sql = "SELECT * FROM customer WHERE username = ? AND password = ?";
    return new Promise(function(resolve, reject){
        pool.query(sql, [username, password], function (err, rows, fields){
            if (err) throw err;
            resolve(rows);
        });//query
    });//promise

}

function addToCart(productId, name, cost, quantity, userId) {
    let sql = "INSERT INTO cartItems (id, productId, productName, productCost, quantity, userId) VALUES (?, ?, ?, ?, ?, ?) ON DUPLICATE KEY UPDATE quantity = quantity + 1";
    let params = ['DEFAULT', productId, name, cost, quantity, userId];
    console.log("attempting to add to cart (params): ", params);
    return new Promise(function(resolve, reject) {
        pool.query(sql, params, function(err, rows, fields) {
            if (err) throw err;
            resolve(rows);
        }); //query
    }); //promise
}

function getCart(userId) {
    let sql = "SELECT * FROM cartItems WHERE userId = ?";
    let params = [userId];
    return new Promise(function(resolve, reject) {
        pool.query(sql, params, function(err, rows, fields) {
            if (err) throw err;
            resolve(rows);
        }); //query
    }); //promise
}

function getProducts() {
    let sql = "SELECT * FROM product";
    return new Promise(function(resolve, reject) {
        pool.query(sql, function(err, rows, fields) {
            if (err) throw err;
            resolve(rows);
        }); //query
    }); //promise
}

//starting server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express server is running...");
});
