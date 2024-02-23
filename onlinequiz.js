
 // Quiz questions and answers
 const questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Rome"],
      answer: 0
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Mercury"],
      answer: 1
    },
    {
      question: "What is the chemical symbol for water?",
      options: ["H2O", "CO2", "NaCl", "O2"],
      answer: 0
    }
  ];
  
  // Initialize score
  let score = 0;
  

// Function to display a question
function displayQuestion(question) {
    console.log(question.question);
    question.options.forEach(function(option, index) {
      console.log(`${index + 1}. ${option}`);
    });
  }
  
  // Function to check the user's answer
  function checkAnswer(userAnswer, question) {
    return parseInt(userAnswer) === question.answer + 1;
  }
  
  // Function to remove a question from the array
  function removeQuestion(questions, index) {
    questions.splice(index, 1);
  }
  
  // Function to end the quiz and display the final score
  function endQuiz(score, totalQuestions) {
    console.log(`Quiz ended. Your final score is: ${score}/${totalQuestions}`);
  }
  
  // Function to display a random quiz question
  function displayRandomQuestion(questions, score) {
    if (questions.length === 0) {
      endQuiz(score, totalQuestions);
      return;
    }
  
    const randomIndex = Math.floor(Math.random() * questions.length);
    const currentQuestion = questions[randomIndex];
  
    displayQuestion(currentQuestion);
  
    process.stdin.once('data', function(data) {
      const userAnswer = parseInt(data.toString().trim());
      if (!isNaN(userAnswer) && userAnswer >= 1 && userAnswer <= currentQuestion.options.length) {
        if (checkAnswer(userAnswer, currentQuestion)) {
          score++;
          console.log("Correct!");
        } else {
          console.log(`Incorrect. The correct answer is: ${currentQuestion.options[currentQuestion.answer]}`);
        }
      } else {
        console.log(`Please enter a valid option (1-${currentQuestion.options.length})`);
      }
  
      removeQuestion(questions, randomIndex);
      displayRandomQuestion(questions, score);
    });
  }
  
   // Start the quiz
   displayRandomQuestion(questions, score);
  