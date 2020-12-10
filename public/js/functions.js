/* global */
$(document).ready(function(){
    
    //game1
    var total = 0;
    var game1cost = 59.99;
    var game1qty = 0;
    var game1Name = "ASSASSINS CREED VALHALLA";
    //game2
    var total = 0;
    var game2cost = 69.99;
    var game2qty = 0;
    var game2Name = "MADDEN 21";
    //game3
    var total = 0;
    var game3cost = 99.99;
    var game3qty = 0;
    var game3Name = "FIFA 21";
    
    
    $("#game1").on("click", function(){
        game1qty++;
        total += game1cost;
        $("#cart").append(`<tr><td>${game1Name}</td> <td>${1}</td> <td>${game1cost}</td></tr><br>`);
        $("#totalCost").html(`${total}`);
    });
    
    $("#game2").on("click", function(){
        game2qty++;
        total += game2cost;
        $("#cart").append(`<tr><td>${game2Name}</td> <td>${1}</td> <td>${game2cost}</td></tr><br>`);
        $("#totalCost").html(`${total}`);
    });
    
    $("#game3").on("click", function(){
        game3qty++;
        total += game3cost;
        $("#cart").append(`<tr><td>${game3Name}</td> <td>${1}</td> <td>${game3cost}</td></tr><br>`);
        $("#totalCost").html(`${total}`);
    });
    
    
    
});