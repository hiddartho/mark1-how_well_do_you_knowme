var readlineSync = require('readline-sync')

var score = 0
var userName = readlineSync.question("What is your name? ");

console.log("Welcome " + userName + ", DO YOU KNOW SIDDHARTHA ?")

function play(question, answer) {
  var userAnswer = readlineSync.question(question)
  if (userAnswer === answer) {
    console.log("Right")
    score = score + 1
  }
  else {
    console.log("Wrong")
  }
  console.log("CurrentScore: " + score)
  console.log("--------------")
}

var questions = [{
  question: "Where do i live? ",
  answer: "dibrugarh"
},
{
  question: "Which PC game do I play? ",
  answer: "valorant"
},
{
  question: "Am I coffee person or a tea person? ",
  answer: "coffee"
},
{
    question: "Do I like to ready books? ",
    answer:"yes"
},
{
    question: "Which school did I passed from? ",
    answer: "saint mary's"
}];


for (i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i]
  play(currentQuestion.question, currentQuestion.answer)
}

console.log("Final score: " + score)

console.log("------------------------")
console.log("--ANSWERS--\n")

var answers=["dibrugarh","valorant","coffee","yes","saint mary's",]

for(j=0;j<answers.length;j++){
  console.log(j+1+"."+answers[j])
}