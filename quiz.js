const data = [
    {
        id: 1,
        question: "What frequency range is the High Frequency band?",
        answers: [
            {answer: "100 kHz", isCorrect: false},
            {answer: "1 GHz", isCorrect: true},
            {answer: "30 to 300 MHz", isCorrect: false},
            {answer: "3 to 30 MHz", isCorrect: false},
        ]
    },

    {
        id: 2,
        question: "Who wrote the famous book - 'We the people'?",
        answers: [
            {answer: "T.N.Kaul", isCorrect: false},
            {answer: "J.R.D.Tata", isCorrect: false},
            {answer: "Khushwant Singh", isCorrect: false},
            {answer: "Nani Palkhivala", isCorrect: true},
        ]
    },

    {
        id: 3,
        question: "Which of the following is used in pencils?",
        answers: [
            {answer: "Graphite", isCorrect: true},
            {answer: "Silicon", isCorrect: false},
            {answer: "Charcoal", isCorrect: false},
            {answer: "Phosphorous", isCorrect: false},
        ],
    },

    {
        id: 3,
        question: "Which planet has the most moons?",
        answers: [
            {answer: "Saturn", isCorrect: true},
            {answer: "Earth", isCorrect: false},
            {answer: "Venus", isCorrect: false},
            {answer: "Mars", isCorrect: false},
        ],
    },

    {
        id: 3,
        question: "Which is India’s first super computer?",
        answers: [
            {answer: "Param8000", isCorrect: true},
            {answer: "Param80000", isCorrect: false},
            {answer: "Param8", isCorrect: false},
            {answer: "Param888", isCorrect: false},
        ],
    },
];

const gameScreen = document.querySelector(".game");
const resultScreen = document.querySelector(".result");
const question = document.querySelector(".question");
const answerContainer = document.querySelector(".answers");
const submit = document.querySelector(".submit");
const play = document.querySelector(".play");

let qIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let total = 0;
let selectedAnswer;

const playAgain = () => {
    qIndex = 0;
    correctCount = 0;
    wrongCount = 0;
    total = 0;
    showQuestion(qIndex);
}

play.addEventListener('click', () => {
    resultScreen.style.display = "none";
    gameScreen.style.display = "block";
    playAgain();
})

const showResult = () => {
    resultScreen.style.display = "block";
    gameScreen.style.display = "none";

    resultScreen.querySelector(".correct").textContent = `Correct Answer: ${correctCount}`;

    resultScreen.querySelector(".wrong").textContent = `Wrong Answer: ${wrongCount}`;

    resultScreen.querySelector(".score").textContent = `Score: ${(correctCount - wrongCount) * 10}`;
}

const showQuestion = (qNumber) => {
    if(qIndex === data.length) return showResult();
    selectedAnswer = null;
    question.textContent = data[qNumber].question;
    answerContainer.innerHTML = data[qNumber].answers.map((item,index) =>
        `
        <div class="answer">
        <input name="answer" type="radio" id=${index} value=${item.isCorrect}>
        <label for="1">${item.answer}</label>
        </div>
        `
    ).join(""); //.join("") with an empty string, to remove the "," in every line.

    selectAnswer();
}

const selectAnswer = () => {
    answerContainer.querySelectorAll("input").forEach(el => {
        el.addEventListener('click', (e) => {
            selectedAnswer = e.target.value;
            console.log(e.target.value);
        })
    })
}

const submitAnswer = () => {
    submit.addEventListener('click', () => {
        if(selectedAnswer !== null) {
            selectedAnswer === "true" ? correctCount++ : wrongCount++;
            qIndex++;
            showQuestion(qIndex);
        } else alert("Please Select an Answer");
    });
}

showQuestion(qIndex);
submitAnswer();