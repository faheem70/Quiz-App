const questions = [
    {
        question: "What is the capital of France?",
        options: ["New York", "London", "Paris", "Dublin"],
        answer: "Paris"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent Van Gogh", "Pablo Picasso", "Leonardo Da Vinci", "Claude Monet"],
        answer: "Leonardo Da Vinci"
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Jupiter", "Mars", "Venus"],
        answer: "Jupiter"
    },
    {
        question: "Who is known as the 'Father of Modern Physics'?",
        options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"],
        answer: "Albert Einstein"
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Fe", "Cu"],
        answer: "Au"
    },
    {
        question: "Which gas is most abundant in the Earth's atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
        answer: "Nitrogen"
    },
    {
        question: "In which year did the Titanic sink?",
        options: ["1907", "1912", "1920", "1931"],
        answer: "1912"
    },
    {
        question: "What is the smallest prime number?",
        options: ["0", "1", "2", "3"],
        answer: "2"
    },
    {
        question: "Which planet is known as the 'Morning Star'?",
        options: ["Mars", "Venus", "Jupiter", "Mercury"],
        answer: "Venus"
    },
    {
        question: "Which famous scientist formulated the laws of motion and universal gravitation?",
        options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"],
        answer: "Isaac Newton"
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["H2O", "CO2", "O2", "CH4"],
        answer: "H2O"
    },
    {
        question: "How many continents are there in the world?",
        options: ["5", "6", "7", "8"],
        answer: "7"
    },
    {
        question: "What is the national flower of Japan?",
        options: ["Rose", "Tulip", "Cherry Blossom", "Daisy"],
        answer: "Cherry Blossom"
    },
    {
        question: "Who is the author of 'To Kill a Mockingbird'?",
        options: ["Jane Austen", "William Shakespeare", "Harper Lee", "George Orwell"],
        answer: "Harper Lee"
    },
    {
        question: "What is the chemical symbol for carbon?",
        options: ["Co", "Cn", "Ca", "C"],
        answer: "C"
    },
    {
        question: "What is the largest desert in the world?",
        options: ["Sahara Desert", "Arctic Desert", "Antarctic Desert", "Gobi Desert"],
        answer: "Antarctic Desert"
    },
    {
        question: "What is the square root of 144?",
        options: ["12", "14", "16", "18"],
        answer: "12"
    },
    {
        question: "Which gas is responsible for the green color of leaves in plants?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Chlorophyll"],
        answer: "Chlorophyll"
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "Korea", "Japan", "Vietnam"],
        answer: "Japan"
    },
    {
        question: "Who wrote '1984'?",
        options: ["George Orwell", "Aldous Huxley", "J.R.R. Tolkien", "Agatha Christie"],
        answer: "George Orwell"
    },
    {
        question: "Which planet is known for its beautiful rings?",
        options: ["Mars", "Venus", "Saturn", "Neptune"],
        answer: "Saturn"
    },

];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-btn");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    optionsElement.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
        const optionButton = document.createElement("button");
        optionButton.textContent = option;
        optionButton.addEventListener("click", () => checkAnswer(option));
        optionsElement.appendChild(optionButton);
    });
}

function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionElement.classList.add("hidden");
    optionsElement.classList.add("hidden");
    nextButton.classList.add("hidden");

    resultElement.style.display = "block";
    scoreElement.textContent = `${score} out of ${questions.length}`;
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        showResult();
    }
}

displayQuestion();
