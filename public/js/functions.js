/* global */
$(document).ready(function(){
    
    //total of shopping cart
    var total = 0;
    //array of games
    var games = [];
    games[1] = {cost: 59.99, qty: 0, name: "ASSASSINS CREED VALHALLA"};
    games[2] = {cost: 69.99, qty: 0, name: "MADDEN 21"};
    games[3] = {cost: 99.99, qty: 0, name: "FIFA 21"};
    games[4] = {cost: 59.99, qty: 0, name: "CALL OF DUTY BLACK OPS"};
    games[5] = {cost: 69.99, qty: 0, name: "GHOST"};
    games[6] = {cost: 99.99, qty: 0, name: "MARVEL AVENGERS"};
    games[7] = {cost: 59.99, qty: 0, name: "NBA 2K21"};
    games[8] = {cost: 69.99, qty: 0, name: "SPIDER MAN"};
    games[9] = {cost: 99.99, qty: 0, name: "JEDI FALLEN ORDER"};
    games[10] = {cost: 59.99, qty: 0, name: "GOD OF WAR"};
    games[11] = {cost: 69.99, qty: 0, name: "THE INRECEDIBLES"};
    games[12] = {cost: 99.99, qty: 0, name: "SPYRO"};
    
    for(let i = 1; i < games.length; i++) {
        $(`#game${i}cost`).html(`$${games[i].cost}`);
    }
    
    
    $(".gamebtn").on("click", function(){
        let gameNum = this.value;
        games[gameNum].qty++;
        total += games[gameNum].cost;
        if(games[gameNum].qty == 1) {
            $("#cart").append(`<tr id=${`cart{btnNum}`}><td>${games[gameNum].name}</td> <td id=${`game${gameNum}qty`}>${games[gameNum].qty}</td> <td>${games[gameNum].cost}</td></tr><br>`);
        }
        $(`#game${gameNum}qty`).html(`${games[gameNum].qty}`);
        $("#totalCost").html(`${total}`);
    });
    
    //displaying city from API after typing a zip code
    $("#zip").on("change", async function(){
        $("#zipError").html("");
        let zipCode = $("#zip").val();
        let url = `https://cst336.herokuapp.com/projects/api/cityInfoAPI.php?zip=${zipCode}`;
        let response = await fetch(url);
        let data = await response.json();
                
        $("#city").html(data.city);
        
        if (data == false){
            $("#zipError").html("Zip code not valid, re-enter");
            $("#zipError").css("color","red");
        }
                
    });//zip
 

});


