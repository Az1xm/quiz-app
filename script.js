const startButton = document.querySelector("#start-button");
const startScreen = document.querySelector("#start-screen");
const quizScreen = document.querySelector("#quiz-screen");
const questionElement = document.querySelector("#question");
const answersElement = document.querySelector("#answers");

let currentQuestion = 0;
let score = 0;

const questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            "Hyper Text Markup Language",
            "High Tech Modern Language",
            "Hyperlink Text Management Language",
            "Home Tool Markup Language"
        ],
        correctAnswer: "Hyper Text Markup Language"
    },

    {
        question: "Which language is used to style web pages?",
        answers: [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        correctAnswer: "CSS"
    },

    {
        question: "Which language is used to make web pages interactive?",
        answers: [
            "HTML",
            "CSS",
            "JavaScript",
            "SQL"
        ],
        correctAnswer: "JavaScript"
    }
];

function showQuestion() {

    answersElement.innerHTML = "";

    questionElement.textContent =
        questions[currentQuestion].question;

    questions[currentQuestion].answers.forEach(function (answer) {

        const button = document.createElement("button");

        button.textContent = answer;

        button.addEventListener("click", function () {

            const correctAnswer =
                questions[currentQuestion].correctAnswer;

            const allButtons =
                answersElement.querySelectorAll("button");

            allButtons.forEach(function (btn) {

                btn.disabled = true;

                if (btn.textContent === correctAnswer) {
                    btn.style.backgroundColor = "green";
                }

            });

         if (answer === correctAnswer) {
    score++;
} else {
    button.style.backgroundColor = "red";
}

            setTimeout(function () {

                currentQuestion++;

                if (currentQuestion < questions.length) {
                    showQuestion();
                } else {
                    questionElement.textContent = "Quiz Complete!";
                    answersElement.innerHTML = "";
                    answersElement.innerHTML = `<p>Your score: ${score} / ${questions.length}</p>`;
                }

            }, 1000);

        });

        answersElement.appendChild(button);

    });
}

startButton.addEventListener("click", function () {

    startScreen.style.display = "none";
    quizScreen.style.display = "block";

    showQuestion();

});
