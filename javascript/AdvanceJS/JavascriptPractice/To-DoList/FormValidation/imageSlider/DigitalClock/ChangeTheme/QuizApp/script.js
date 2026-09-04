let questions = [
    {
        question: "What is the capital of India?",
        options: ["Mumbai", "Delhi", "Chennai", "Kolkata"],
        answer: "Delhi"
    },
    {
        question: "Which language is used for web development?",
        options: ["HTML", "CSS", "JavaScript", "All of these"],
        answer: "All of these"
    },
    {
        question: "Which keyword is used to declare a variable?",
        options: ["var", "let", "const", "All of these"],
        answer: "All of these"
    }
];

let currentQuestion = 0;
let score = 0;

let question = document.getElementById("question");
let buttons = document.querySelectorAll(".option");
let scoreText = document.getElementById("score");


function showQuestion() {

    if (currentQuestion >= questions.length) {
        question.innerHTML = "Quiz Completed!";

        buttons.forEach(function(button) {
            button.style.display = "none";
        });

        scoreText.innerHTML =
            "Your Score: " + score + " / " + questions.length;

        return;
    }

    let q = questions[currentQuestion];

    question.innerHTML = q.question;

    buttons.forEach(function(button, index) {
        button.innerHTML = q.options[index];
        button.style.display = "block";

        button.onclick = function() {
            checkAnswer(button.innerHTML);
        };
    });
}


function checkAnswer(selectedAnswer) {

    if (selectedAnswer === questions[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;

    showQuestion();
}


showQuestion();