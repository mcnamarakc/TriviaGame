var number = 120;
var intervalID;
var clockRunning = false;
var correct = 0;
var incorrect = 0;
$(".questions").hide()
$(".results").hide()

function start() {
  if (!clockRunning) {
    intervalID = setInterval(decrement, 1000);
    clockRunning = true
  }
};

function decrement() {
  number--;
  console.log(number)
  $("#show-number").html("<h2>Remaining time:" + number + "</h2>");

  if (number === 0) {
    stop();
    submit();
    // include if statement for end of game & input
  }
};

// "input[name=question1]:checked"

function checkAns() {
  for (var i = 1; i < 11; i++) {
    var radioValue = $("input[name=question" + i + "]:checked").val();

    if (radioValue === "true") {
      console.log(radioValue)
      correct++;
      
    } else {
      incorrect++;
      
    }
  }console.log(correct);
  console.log(incorrect);
  $("#correct").text("Correct:"+ correct);
  $("#incorrect").text("Incorrect:"+ incorrect);
}

function submit() {
  checkAns();
  
}



function stop() {
  clearInterval(intervalID);
  clockRunning = false
};


$("#submit").on("click", function () {
  submit();
  stop();
  $(".questions").hide();
  $(".results").show()

});


$("#start").on("click", function () {
  console.log("bababa")
  start()
  $(".questions").show();
  $("#start").hide()
});







// var form = document.querySelector("form");
// var log = document.querySelector("#log");

// form.addEventListener("submit", function(event) {
//   var data = new FormData(form);
//   var output = "";
//   for (const entry of data) {
//     output = entry[0] + "=" + entry[1] + "\r";
//   };
//   log.innerText = output;
//   event.preventDefault();
// }, false);

// console.log(output)