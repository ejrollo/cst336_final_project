/* global */
$(document).ready(function(){
    
    //total of shopping cart
    var total = 0;
    //array of games
    var games = [];
    //game1
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
        let btnNum = this.value;
        games[btnNum].qty++;
        total += games[btnNum].cost;
        if(games[btnNum].qty == 1) {
            $("#cart").append(`<tr><td>${games[btnNum].name}</td> <td id=${`game${btnNum}qty`}>${games[btnNum].qty}</td> <td>${games[btnNum].cost}</td></tr><br>`);
        }
        $(`#game${btnNum}qty`).html(`${games[btnNum].qty}`);
        $("#totalCost").html(`${total}`);
    });
    
});