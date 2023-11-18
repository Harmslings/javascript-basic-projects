let questions = [
    {
        question: "Which is the most expensive city to live in India? ",
            answers : [
                { text: "Delhi", correct:false},
                { text: "Gujrat", correct:false},
                { text: "Mumbai", correct:true},
                { text: "Kolkata", correct:false},
            ]
    },
    
    
    
    {
        question: " Which is the largest river in India? ",
            answers : [
                { text: "The Jhelum", correct:false},
                { text: "The Ganges", correct:true},
                { text: "The narmada", correct:false},
                { text: "The yamuna", correct:false},
            ]
    },
    
    
    
    {
        question: "Where was the world’s first university established in India? ",
            answers : [
                { text: "Takshashila", correct:true},
                { text: "Nalanda", correct:false},
                { text: "Banaras Hindu University", correct:false},
                { text: "Jamia islamia", correct:false},
            ]
    },
    
    
    
    
    {question: "What animal is considered sacred in India? ",
    answers : [
        { text: "goat", correct:false},
        { text: "dog", correct:false},
        { text: "cow", correct:true},
        { text: "buffalo", correct:false},
    ]},

];

let questionElem = document.getElementById("question");
let answersBtn = document.getElementById("answerBtn");
let nextBtn = document.getElementById("nextBtn");


let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestions();
}
function showQuestions(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNum = currentQuestion+1;
    questionElem.innerHTML = questionNum+". "+currentQuestion.question;

    currentQuestion.answers.forEach(answers =>{
        let button = document.createElement("button");
        button.innerHTML = answers.text
        button.classList.add("btns");
        answersBtn.appendChild(button);
        if(answers.correct){
            button.dataset.correct = answers.correct;
        }
        button.addEventListener("click",selectAnswer)
    })
};


function resetState (){
    nextBtn.style.display = "none";
    while(answersBtn.firstChild){
        answersBtn.removeChild(answersBtn.firstChild)
    }
}

function selectAnswer(e){
    let slectedBtn = e.target;
    let isCorrect = slectedBtn.dataset.correct === "true"
    if(isCorrect){
        slectedBtn.classList.add("correct");
        score++;
    } else {
        slectedBtn.classList.add("incorrect");
    }

    Array.from(answersBtn.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        };
        button.disabled = true;
    });
    nextBtn.style.display = 'block'
};


function showScore() {
    resetState();
    questionElem.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextBtn.innerHTML = "play again";
    nextBtn.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestions();
    } else {
        showScore();
    };
};

nextBtn.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    } else {
        startQuiz();
    }
})

startQuiz();


















