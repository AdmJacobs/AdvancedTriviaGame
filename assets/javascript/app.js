$(document).ready(function () {

  function openingPage() {
    openScreen = "<p class='text-center main-button-container'><a class='btn btn-warning btn-md btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
    $("#content").append(openScreen);
  }

  openingPage();

  $("#content").on("click", ".start-button", function (event) {
    event.preventDefault();
    $('.jumbotron').hide();

    generateQuestions();

    timerWrapper();

  });

  $("body").on("click", ".answer", function (event) {

    selectedAnswer = $(this).text();
    selectedAnswer === correctAnswers[questionCounter] ? (
      clearInterval(theClock),
      generateWin()) :
      (clearInterval(theClock),
        generateLoss()
      )
  });

  $("body").on("click", ".reset-button", function (event) {
    resetGame();
  });

});

function timeoutLoss() {
  unansweredTally++;
  gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + correctAnswers[questionCounter] + "</p>" + "<img src='https://media1.giphy.com/media/NjevnbNiUmeLm/200.webp?cid=3640f6095c03495b6d62643149830b4e'>";
  $("#content").html(gameHTML);
  setTimeout(wait, 5000);
}

function generateWin() {
  correctTally++;
  gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + correctAnswers[questionCounter] + "</p>" + imageArray[questionCounter];
  $("#content").html(gameHTML);

  setTimeout(wait, 5000);
}

function generateLoss() {
  incorrectTally++;
  gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: " + correctAnswers[questionCounter] + "</p>" + "<img src='https://media1.giphy.com/media/NjevnbNiUmeLm/200.webp?cid=3640f6095c03495b6d62643149830b4e'>";
  $("#content").html(gameHTML);
  setTimeout(wait, 5000);
}

function generateQuestions() {
  gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>45</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. " + answerArray[questionCounter][1] + "</p><p class='answer'>C. " + answerArray[questionCounter][2] + "</p><p class='answer'>D. " + answerArray[questionCounter][3] + "</p>";
  $("#content").html(gameHTML);
};

function wait() {
  questionCounter < 7 ?
    (questionCounter++ ,
      generateQuestions(),
      counter = 45,
      timerWrapper()) :

    (finalScreen())
};

function timerWrapper() {
  theClock = setInterval(fourtyfiveseconds, 1000);
  function fourtyfiveseconds() {
    if (counter === 0) {
      clearInterval(theClock);
      timeoutLoss();
    }
    if (counter > 0) {
      counter--;
    }
    $(".timer").html(counter);
  }
}

function finalScreen() {
  gameHTML = "<p class='text-center'>All done, here's how you did!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correctTally + "</p>" + "<p>Wrong Answers: " + incorrectTally + "</p>" + "<p>Unanswered: " + unansweredTally + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-warning btn-md btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
  $("#content").html(gameHTML);
}

function resetGame() {
  questionCounter = 0;
  correctTally = 0;
  incorrectTally = 0;
  unansweredTally = 0;
  generateQuestions();
  timerWrapper();
}

var openScreen;
var gameHTML;
var counter = 45;
var questionArray =
  ["How long have Cats been domesticated?", "Which of the following is the most popular pet in the US and UK?", "Cats have how many teeth?", "How much better can Cats see in low light compared to Humans?", "Why do Cats rub up againgst us?", "How fast can Cats travel?", "What is the record for the most Cats kept by one person?", "Which of the following can a Cat not taste?"];

var answerArray = [
  ["4000 years", "3000 years", "2000 years", "1000 years"],
  ["Birds", "Dogs", "Cats, duh.", "Hamsters"],
  ["40", "30", "20", "15"],
  ["6 times better", "7 times better", "5 times better", "10 times better"],
  ["Because they want something", "Its a form of communication", "To get hair on your clean clothes", "Its relaxing for them"],
  ["15km per hour", "20km per hour", "25km per hour", "30km per hour"],
  ["50", "300", "689", "253"],
  ["Spice", "Sweetness", "Salt", "Tart"],];

var imageArray = new Array();
imageArray[0] = "<img src= https://media0.giphy.com/media/mlvseq9yvZhba/giphy.webp?cid=3640f6095c03495b6d62643149830b4e'>";
imageArray[1] = "<img src= https://media0.giphy.com/media/yFQ0ywscgobJK/giphy.webp?cid=3640f6095c03495b6d62643149830b4e'>";
imageArray[2] = "<img src= https://media2.giphy.com/media/uTCAwWNtz7U2c/200.webp?cid=3640f6095c03495b6d62643149830b4e'>";
imageArray[3] = "<img src= https://media1.giphy.com/media/1iu8uG2cjYFZS6wTxv/200w.webp?cid=3640f6095c036f0d6d62554a45b7a80a'>";
imageArray[4] = "<img src= https://media3.giphy.com/media/lJNoBCvQYp7nq/200w.webp?cid=3640f6095c0370486d672f6e2ec0e338'>";
imageArray[5] = "<img src= https://media0.giphy.com/media/11c7UUfN4eoHF6/giphy.webp?cid=3640f6095c0365b04d6a3631451946dd'>";
imageArray[6] = "<img src= https://media1.giphy.com/media/131zxKeMxUs81y/200w.webp?cid=3640f6095c0366ec444e744b738b6061'>";
imageArray[7] = "<img src='https://media0.giphy.com/media/13CoXDiaCcCoyk/200.webp?cid=3640f6095c0370486d672f6e2ec0e338'>";

var correctAnswers =
  ["A. 4000 years",
    "C. Cats, duh.",
    "B. 30",
    "A. 6 times better",
    "B. Its a form of communication",
    "D. 30km per hour",
    "C. 689",
    "B. Sweetness"];

var questionCounter = 0;
var selecterAnswer;
var theClock;
var correctTally = 0;
var incorrectTally = 0;
var unansweredTally = 0;