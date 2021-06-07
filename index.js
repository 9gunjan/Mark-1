var readlineSync = require('readline-sync');
var score = 0;
var userName = readlineSync.question("What is your name?");

console.log("Welcome " + userName + " to the most amazing quiz which you are going to love ");

function play(question,answer){
  var userAnswer = readlineSync.question(question);
  
  if(userAnswer === answer){
    console.log("right");
    score++;
  }else{
    console.log("wrong!");
  
  }
  console.log("The score is" + score);
  console.log("----------------------")
}



questions = [questionOne = {
  question:"Where do I live?",
  answer: "Noida"
},questionTwo = {
  question:"Where do you study?",
  answer:"IGDTUW"
},questionThree = {
  question:"What's my favourite food?",
  answer:"Rajma Chawal"
},questionFour = {
  question:"What is my hobby?",
  answer:"Dancing"
}];

for(var i=0 ; i<questions.length ;i++){
  var currentQuestion = questions[i];

  play(currentQuestion.question , currentQuestion.answer);
}
