$(document).ready(function () {
// Ticker clock set at 10 seconds to speed up bugging purposes
    var number = 10;
// Var holding intervalId for running the function run.
    var intervalId;
// Runs interval one second at a time and clears interval ID before setting up new one.
    function run() {
        clearInterval(intervalId);
        intervalId =setInterval(decrement, 1000);
    }
// 
    function decrement() {
        number--;

        $("#ticker").html("<h2>" + number + "</h2>");

        if (number === 0) {
            stop();

            alert("Times up!");
        }
    }

    function stop() {
        clearInterval(intervalId);
    }
    run();
    
})