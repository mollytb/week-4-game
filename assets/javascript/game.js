



$(document).ready(function () {
    //global variables
    var wins = 0;
    var losses = 0;
    var crystal1 = 0;
    var crystal2 = 0;
    var crystal3 = 0;
    var crystal4 = 0;
    var magicNumber = 0;
    var yourScore = 0;
    // initial function to start game
    function init() {
        magicNumber = Math.floor((Math.random() * 101) + 20);
        crystal1 = Math.floor((Math.random() * 12) + 1);
        crystal2 = Math.floor((Math.random() * 12) + 1);
        crystal3 = Math.floor((Math.random() * 12) + 1);
        crystal4 = Math.floor((Math.random() * 12) + 1);   
    }
    init();
    //console.log(crystal1)
    //console.log(crystal2)
    //console.log(crystal3)
    //console.log(crystal4)
    
    $("#crystal1").click(function () {
        yourScore += crystal1
        $("#your-number").text(yourScore)
        update();
    });
    $("#crystal2").click(function () {
        yourScore += crystal2
        $("#your-number").text(yourScore)
        update();
    });
    $("#crystal3").click(function () {
        yourScore += crystal3
        $("#your-number").text(yourScore)
        update();
    });
    $("#crystal4").click(function () {
        yourScore += crystal4
        $("#your-number").text(yourScore)
        update();
    });
    function update() {
        if (yourScore === magicNumber) {
            wins += 1;
            $("#wins").text(wins);
            alert("You Won! You know addition!");
            init();
        }
        else if(yourScore > magicNumber) {
            losses += 1;
            $("#losses").text(losses);
            alert("You suck at life!");
            init();
        }
    }
    
    
    $("#Magic-Number").text(magicNumber);
    $("#wins").text(wins);
    $("#losses").text(losses);
    
      
});
