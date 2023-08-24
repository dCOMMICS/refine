const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: 2
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: 1
  },
  {
    question: "What is the largest mammal?",
    options: ["Blue Whale", "African Elephant", "Giraffe", "Hippopotamus"],
    answer: 0
  }
];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
  const questionContainer = document.getElementById("question-container");
  const currentQuestion = questions[currentQuestionIndex];
  
  questionContainer.innerHTML = `
    <h2>${currentQuestion.question}</h2>
    <ul>
      ${currentQuestion.options.map((option, index) => `
        <li>
          <button onclick="checkAnswer(${index})">${option}</button>
        </li>
      `).join("")}
    </ul>
  `;
}

function checkAnswer(selectedIndex) {
  const currentQuestion = questions[currentQuestionIndex];
  
  if (selectedIndex === currentQuestion.answer) {
    score++;
  }
  
  currentQuestionIndex++;
  
  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    const questionContainer = document.getElementById("question-container");
    questionContainer.innerHTML = `
      <h2>Quiz Complete!</h2>
      <p>Your score: ${score}/${questions.length}</p>
    `;
  }
}

displayQuestion();
