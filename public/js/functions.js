/* global */
$(document).ready(function(){
    
    //total of shopping cart
    var total = 0;
    //game1
    var game1cost = 59.99;
    $("#game1cost").html(`$${game1cost}`);
    var game1qty = 0;
    var game1Name = "ASSASSINS CREED VALHALLA";
    //game2
    var game2cost = 69.99;
    $("#game2cost").html(`$${game2cost}`);
    var game2qty = 0;
    var game2Name = "MADDEN 21";
    //game3
    var game3cost = 99.99;
    $("#game3cost").html(`$${game3cost}`);
    var game3qty = 0;
    var game3Name = "FIFA 21";
    //game4
    var game4cost = 59.99;
    $("#game4cost").html(`$${game4cost}`);
    var game4qty = 0;
    var game4Name = "CALL OF DUTY BLACK OPS";
    //game5
    var game5cost = 69.99;
    $("#game5cost").html(`$${game5cost}`);
    var game5qty = 0;
    var game5Name = "GHOST";
    //game6
    var game6cost = 99.99;
    $("#game6cost").html(`$${game6cost}`);
    var game6qty = 0;
    var game6Name = "MARVEL AVENGERS";
     //game7
    var game7cost = 59.99;
    $("#game7cost").html(`$${game7cost}`);
    var game7qty = 0;
    var game7Name = "NBA 2K21";
    //game8
    var game8cost = 69.99;
    $("#game8cost").html(`$${game8cost}`);
    var game8qty = 0;
    var game8Name = "SPIDER MAN";
    //game9
    var game9cost = 99.99;
    $("#game9cost").html(`$${game9cost}`);
    var game9qty = 0;
    var game9Name = "JEDI FALLEN ORDER";
    //game10
    var game10cost = 59.99;
    $("#game10cost").html(`$${game10cost}`);
    var game10qty = 0;
    var game10Name = "GOD OF WAR";
    //game11
    var game11cost = 69.99;
    $("#game11cost").html(`$${game11cost}`);
    var game11qty = 0;
    var game11Name = "THE INRECEDIBLES";
    //game12
    var game12cost = 99.99;
    $("#game12cost").html(`$${game12cost}`);
    var game12qty = 0;
    var game12Name = "SPYRO";
    
    
    $("#game1").on("click", function(){
        game1qty++;
        sessionStorage.setItem("game1qty_stored", game1qty);
        total += game1cost;
        if(game1qty == 1) {
            $("#cart").append(`<tr><td>${game1Name}</td> <td id="game1qty">${game1qty}</td> <td>${game1cost}</td></tr><br>`);
        }
        $("#game1qty").html(`${game1qty}`);
        $("#totalCost").html(`${total}`);
    });
    
    $("#game2").on("click", function(){
        game2qty++;
        total += game2cost;
        if(game2qty == 1) {
            $("#cart").append(`<tr><td>${game2Name}</td> <td id="game2qty">${game2qty}</td> <td>${game2cost}</td></tr><br>`);
        }
        $("#game2qty").html(`${game2qty}`);
        $("#totalCost").html(`${total}`);
    });
    
    $("#game3").on("click", function(){
        game3qty++;
        total += game3cost;
        if(game3qty == 1) {
            $("#cart").append(`<tr><td>${game3Name}</td> <td id="game3qty">${game3qty}</td> <td>${game3cost}</td></tr><br>`);
        }
        $("#game3qty").html(`${game3qty}`);
        $("#totalCost").html(`${total}`);
    });
    
    $("#game4").on("click", function(){
        game4qty++;
        total += game4cost;
        if(game4qty == 1) {
            $("#cart").append(`<tr><td>${game4Name}</td> <td id="game4qty">${game4qty}</td> <td>${game4cost}</td></tr><br>`);
        }
        $("#game4qty").html(`${game4qty}`);
        $("#totalCost").html(`${total}`);
    });
    
    $("#game5").on("click", function(){
        game5qty++;
        total += game5cost;
        if(game5qty == 1) {
            $("#cart").append(`<tr><td>${game5Name}</td> <td id="game5qty">${game5qty}</td> <td>${game5cost}</td></tr><br>`);
        }
        $("#game5qty").html(`${game5qty}`);
        $("#totalCost").html(`${total}`);
    });
    
    $("#game6").on("click", function(){
        game6qty++;
        total += game6cost;
        if(game6qty == 1) {
            $("#cart").append(`<tr><td>${game6Name}</td> <td id="game6qty">${game6qty}</td> <td>${game6cost}</td></tr><br>`);
        }
        $("#game6qty").html(`${game6qty}`);
        $("#totalCost").html(`${total}`);
    });
    
    $("#game7").on("click", function(){
        game7qty++;
        total += game7cost;
        if(game7qty == 1) {
            $("#cart").append(`<tr><td>${game7Name}</td> <td id="game7qty">${game7qty}</td> <td>${game7cost}</td></tr><br>`);
        }
        $("#game7qty").html(`${game7qty}`);
        $("#totalCost").html(`${total}`);
    });
    
    $("#game8").on("click", function(){
        game8qty++;
        total += game8cost;
        if(game8qty == 1) {
            $("#cart").append(`<tr><td>${game8Name}</td> <td id="game8qty">${game8qty}</td> <td>${game8cost}</td></tr><br>`);
        }
        $("#game8qty").html(`${game8qty}`);
        $("#totalCost").html(`${total}`);
    });
    
    $("#game9").on("click", function(){
        game9qty++;
        total += game9cost;
        if(game9qty == 1) {
            $("#cart").append(`<tr><td>${game9Name}</td> <td id="game9qty">${game9qty}</td> <td>${game9cost}</td></tr><br>`);
        }
        $("#game9qty").html(`${game9qty}`);
        $("#totalCost").html(`${total}`);
    });
    
    $("#game10").on("click", function(){
        game10qty++;
        total += game10cost;
        if(game10qty == 1) {
            $("#cart").append(`<tr><td>${game10Name}</td> <td id="game10qty">${game10qty}</td> <td>${game10cost}</td></tr><br>`);
        }
        $("#game10qty").html(`${game10qty}`);
        $("#totalCost").html(`${total}`);
    });
    
    $("#game11").on("click", function(){
        game11qty++;
        total += game11cost;
        if(game11qty == 1) {
            $("#cart").append(`<tr><td>${game11Name}</td> <td id="game11qty">${game11qty}</td> <td>${game11cost}</td></tr><br>`);
        }
        $("#game11qty").html(`${game11qty}`);
        $("#totalCost").html(`${total}`);
    });
    
    $("#game12").on("click", function(){
        game12qty++;
        total += game12cost;
        if(game12qty == 1) {
            $("#cart").append(`<tr><td>${game12Name}</td> <td id="game12qty">${game12qty}</td> <td>${game12cost}</td></tr><br>`);
        }
        $("#game12qty").html(`${game12qty}`);
        $("#totalCost").html(`${total}`);
    });
    
});