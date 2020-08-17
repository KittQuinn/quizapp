'use strict';
/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material, consult your instructor, and reference the slides for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/
function generateStart(){
  return `
  <div class="startBox">
  <div class="startTitle">Pop Culture and Obscure Reference Quiz</div>
  <form class="startform">
    <button type="start" id="start">Start</button>
  </form>
</div>
`;
}

function generateQuiz(){
  let question = STORE.questions[STORE.currentQuestion];
  
  
  return `
  <div class="box">
    <div class="questionCount">Question ${STORE.questionNumber} of 5</div>
    <div class="scoreSection">Your current score is ${STORE.currentScore}</div>
    <div class="question">${question.name}</div>
    <form class="form">
      <input type="radio" id="true" name="answers" value="${question.answers[0]}">
      <label for="true">${question.answers[0]}</label><br>
      <input type="radio" id="false" name="answers" value="${question.answers[1]}">
      <label for="false">${question.answers[1]}</label><br>
      <button type="submit" id="submit">Submit</button>
    </form>
  </div>
  `;
}

function generateEnd(){ 
  return `
  <div class="endbox">
  <h2>You completed the quiz! Good Job!</h2>
    <div class="finalScore">Your Final score is ${STORE.currentScore}</div>
    <p>Click below to start over!</p>
    <form class="endform">
    <button type="end" id="end">Start</button>
  </form>
  `;
}

function loadStartPage(){
  renderStart();
}

function startQuiz(){
  renderQuiz();
}


$("main").on("submit",".startform",startTheQuiz);
$("main").on("submit",".form",submitAnswer);
$("main").on("submit",".endform",restartTheQuiz);
$("main").on("submit",".wrongform",submitAnswer);

$(loadStartPage);
// These functions return HTML templates
/********** RENDER FUNCTION(S) **********/
function renderQuiz(){
  let html = generateQuiz();
  $('main').html(html);
}

function renderStart(){
  let startPageHTML = generateStart();
  $('main').html(startPageHTML);
}
// This function conditionally replaces the contents of the <main> tag based on the state of the store
/********** EVENT HANDLER FUNCTIONS **********/
function startTheQuiz(event){
  event.preventDefault();
  renderQuiz();
}

function restartTheQuiz(event){
  event.preventDefault();
  STORE.currentQuestion = 0;
  STORE.currentScore = 0;
  STORE.questionNumber = 0;
  renderQuiz();
}

function submitAnswer(event){
  event.preventDefault();
  let answer =$('input[name=answers]:checked').val();
  if(STORE.questions[STORE.currentQuestion].correctAnswer === answer){
    alert("You are right!");
    STORE.currentScore++
  } else { 
    alert(`You're wrong! The correct answer was: ${STORE.questions[STORE.currentQuestion].correctAnswer}`);
  }
  STORE.questionNumber++
  STORE.currentQuestion++;
  if(STORE.currentQuestion === STORE.questions.length){
    alert("Quiz over!")
    let resultspage = generateEnd();
    $('main').html(resultspage);
  } else{
    renderQuiz();
  }
  
}
// These functions handle events (submit, click, etc)