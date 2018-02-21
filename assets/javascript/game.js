



$(document).ready(function () {
    var wins = 0;
    var losses = 0;
    var minNumber = 20;
    var maxNumber = 120;

    var randomNumber = randomNumberFromRange(minNumber, maxNumber);


    function randomNumberFromRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + 18);
    }

    console.log(randomNumber);
    $("#Magic-Number").text(randomNumber);

    //if $("#crystal1").click($("#crystal1")))
    //var minCrystal = 1;
    //var maxCrystal = 12;
    //    var randCrystal1 = randCrystal1FromRange(minCrystal, maxCrystal);
    //    function randomCrystal1FromRange(min, max)
    //{
    //        return Math.floor(Math.random() * (max - min + 1) + min);
    //        console.log(randCrystal1);
    //    }

        var crystal1 = $("#crystal1"),
        count = 0;
        crystal1.click = function() {
        count += 1;
        console.log(count);
        //crystal1.text = $("#your-number") + count;
      };
$("#wins").text(wins);
$("#losses").text(losses);

    
    
});
