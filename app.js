const questions = [
    { question: "What is the capital of France?", answers: ["Paris", "London", "Berlin", "Rome"], correct: 0 },
    { question: "What is 2 + 2?", answers: ["3", "4", "5", "6"], correct: 1 },
    { question: "What is the largest planet?", answers: ["Earth", "Mars", "Jupiter", "Venus"], correct: 2 },
    { question: "Which animal is known as the King of the Jungle?", answers: ["Elephant", "Tiger", "Lion", "Giraffe"], correct: 2 }
];

const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");
const result = document.getElementById("result");
const scoreEl = document.getElementById("score");
const restartBtn = document.getElementById("restart-btn");

let currentQuestion = 0;
let score = 0;

function startQuiz() {
    quiz.style.display = "block";
    result.style.display = "none";
    currentQuestion = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    const current = questions[currentQuestion];
    questionEl.textContent = current.question;
    answersEl.innerHTML = "";
    current.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.textContent = answer;
        button.classList.add("btn");
        button.onclick = () => checkAnswer(index);
        answersEl.appendChild(button);
    });
}

function checkAnswer(selected) {
    if (selected === questions[currentQuestion].correct) score++;
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quiz.style.display = "none";
    result.style.display = "block";
    scoreEl.textContent = `${score} / ${questions.length}`;
}

nextBtn.onclick = () => currentQuestion < questions.length && showQuestion();

restartBtn.onclick = startQuiz;

startQuiz();
