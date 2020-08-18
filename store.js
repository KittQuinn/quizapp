'use strict';

const STORE = {
  quizStarted: false,
  currentQuestion:0,
  questionNumber: 1,
  currentScore:0,
  totalScore:0,
  questions:
[
  {
    name: 'When does the narwhal bacon?',
    answers: ['Noon.', 'Midnight.'],
    correctAnswer: 'Midnight.'
  },
  {
    name: 'What is the answer to the ultimate question of life, the universe, and everything?',
    answers: ['42.', 'Kilroy was here.'],
    correctAnswer: '42.'
  },
  {
    name: 'If someone asks if you\'re a god, what should you always say?',
    answers: ['Yes!', 'No.'],
    correctAnswer: 'Yes!'
  },
  {
    name: 'Who would dare give you the raspberry?',
    answers: ['Lonestar.', 'Smuckers.'],
    correctAnswer: 'Lonestar.'
  },
  {
    name: 'What holds up the turtle that holds up the world?',
    answers: ['Sheer willpower.', 'It\'s turtles, all the way down.'],
    correctAnswer: 'It\'s turtles, all the way down.'
  }
]  
};
