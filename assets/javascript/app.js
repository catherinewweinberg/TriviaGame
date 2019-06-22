$(document).ready(function() {
  $("#mainpage").hide();
  $("#start").on("click", triviaGame.startTimer);
});
var triviaGame = {
  timeRemaining: 90,
  startTimer: function() {
    $("#time").text("Time Remaining: " + triviaGame.timeRemaining);
    setInterval(triviaGame.countdown, 1000);
    $("#mainpage").show();
  },
  countdown: function() {
    triviaGame.timeRemaining--;
    $("#time").text("Time Remaining: " + triviaGame.timeRemaining);
    console.log(triviaGame.timeRemaining);
    if (triviaGame.timeRemaining === 0) {
      triviaGame.stopTime();
      $("#time").empty();
    }
  }
};

$("input[class='Question1']").click(function() {
  if ($(this).is(":checked")) {
    alert($(this).val());
    if ($(this).val() === "Jim Henson") {
      correct++;
    }
  }
});
$("input[class='Question2']").click(function() {
  if ($(this).is(":checked")) {
    alert($(this).val());
    if ($(this).val() === "1983") {
      correct++;
    }
  }
});
$("input[class='Question3']").click(function() {
  if ($(this).is(":checked")) {
    alert($(this).val());
    if ($(this).val() === "Woozles") {
      correct++;
    }
  }
});
$("input[class='Question4']").click(function() {
  if ($(this).is(":checked")) {
    alert($(this).val());
    if ($(this).val() === "Gorgs") {
      correct++;
    }
  }
});
$("input[class='Question5']").click(function() {
  if ($(this).is(":checked")) {
    alert($(this).val());
    if ($(this).val() === "Earth") {
      correct++;
    }
  }
});

document.getElementById("afterSubmit").style.visibility = "visible";
document.getElementById("numberCorrect").innerHTML =
  "You got " + correct + "correct.";

// stopTime: function() {
//   clearInterval();

// }
// When the "Finished!" button is selected at the end of the game the timer should stop and it should be provided your score.  This will need to be corrected.
