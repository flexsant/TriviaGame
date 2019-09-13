document.onready;

// Questions (array of objects)
var questions = [
  {
    question: "What is the capital of California?",
    answers: ["San Francisco", "Los Angeles", "Sacramento", "San Diego"],
    correctAnswer: "Sacramento"
  },
  {
    question: "Which of the following is California's official flower?",
    answers: ["Poppy", "Sunflower", "Roses", "Tulips"],
    correctAnswer: "Poppy"
  },
  {
    question: "What is the name of the highest mountain peak in California?",
    answers: ["Mt. Tam", "Mt. Whitney", "Mt. Russell", "Mt. Diablo"],
    correctAnswer: "Mt. Whitney"
  },
  {
    question: "How many miles of coastline are within the state of California?",
    answers: ["1120", "666", "840", "777"],
    correctAnswer: "840"
  },
  {
    question: "What is California's official sport?",
    answers: ["Basketball", "Baseball", "Skateboarding", "Surfing"],
    correctAnswer: "Surfing"
  }
];

// Ticker clock set at 10 seconds to speed up bugging purposes
var number = 30;
// Var holding intervalId for running the function run.
var intervalId;
//variable to keep track of correct
var correct = 0;
//variable to keep track of incorrect
var incorrect = 0;

var userAnswers = $("#questions").children("input:checked");


function displayQuestions() {
  console.log(questions);
  //Function that dynamically creates all the questions on the screen
  //for loop to loop over all of your questions
  for (var i = 0; i < questions.length; i++) {
    //append each question to the questions area in html
    $("#questions").append("<h2>" + questions[i].question + "</h2>");
    //dynamically create each of the answer choices by looping through the answers of each questions
    for (var j = 0; j < questions[i].answers.length; j++) {
      $("#questions").append(
        "<input type='radio' name='question-" +
          i +
          "' value='" +
          questions[i].answers[j] +
          "''>" +
          questions[i].answers[j]
      );
    }
  }
  run();
}
displayQuestions();
// Runs interval one second at a time and clears interval ID before setting up new one.
function run() {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
}
//
function decrement() {
  number--;

  $("#ticker").html("<h2>" + number + "</h2>");

  if (number === 0) {
    stop();

    alert("Times up!");
    //call the check answer function
  }
}

function stop() {
  clearInterval(intervalId);
  console.log(userAnswers);
}

//function to check all of the answers

//store all the user's answers in a variable that will end up being an array of answers

//for loop through the answer array and compare them to the correct answer

//if else statement that if the userAnswer[i] === question[i].correctAnswer

//if true then we will increase the correct count

//else increase the incorrect count

//Show user the results invoke the show result function

//function to show the reults to the user

//empty the questions from the questions div

//append the user results to the results div
//Correct Answers:
//Incorrect Answers
