// var insertPlayerName = document.querySelector("#insertPlayerName");

// // Get the player's name from localStorage
// var getPlayerName = localStorage.getItem("playerName");
// insertPlayerName.textContent = getPlayerName;

// Idea 1: Generate the questions from an object and insert them dynamically into the right elements
var gameQuestionNumber = parseInt(document.querySelector("#game").dataset.question);
var questionNumberText = document.querySelector("#progressText");
var scoreText = document.querySelector("#score");
var score = 0;
var questionText = document.querySelector("#question");
var answerBoxes = document.querySelectorAll(".choice-text");

scoreText.textContent = score;

var questions = {
  question1: {
    questionNumber: "1",
    question: 'Which planet is known as the "Red Planet"?',
    answers: ["Venus", "Saturn", "Jupiter", "Mars"],
    correctAnswer: "Mars",
  },
  question2: {
    questionNumber: "2",
    question: "What is the capital of France?",
    answers: ["London", "Paris", "Madrid", "Berlin"],
    correctAnswer: "Paris",
  },
  question3: {
    questionNumber: "3",
    question: "What is the largest mammal on Earth?",
    answers: ["Elephant", "Giraffe", "Blue Whale", "Rhinoceros"],
    correctAnswer: "Blue Whale",
  },
  question3: {
    questionNumber: "3",
    question: "What is the largest mammal on Earth?",
    answers: ["Elephant", "Giraffe", "Blue Whale", "Rhinoceros"],
    correctAnswer: "Blue Whale",
  },
};

//  >> Function to set the questions up dynamically!
function runQuestion(x) {
  // Set the question set  
  var q = questions["question" + x];
  var rightAnswer = q.correctAnswer;

  // Add the question number
  questionNumberText.textContent = "Question " + q.questionNumber;

  // Add the actual question
  questionText.textContent = q.question;

  // Add the possible answers by looping through
  // the choice-boxes in the document and adding the answers in
  for (i = 0; i < answerBoxes.length; ++i) {
    answerBoxes[i].textContent = q.answers[i];

    // reset the colour for each question (i.e. turn from red/green to bg colour)
    answerBoxes[i].style.color = "var(--bg-colour)";
  }
  
  answerBoxes.forEach((answerBox) => {
    answerBox.addEventListener('click', () => {
        // TESTING: when you click on the right answer, it turns green and adds one point
        if (answerBox.textContent == rightAnswer){
            answerBox.style.color = "green";
            score += 1;
            scoreText.textContent = score;
            setTimeout( () => {runQuestion(x+1)}, 1000);
        }
        else if (answerBox.textContent != rightAnswer) {
            answerBox.style.color = "red";
        }
      
    });
  });


}

runQuestion(gameQuestionNumber);
