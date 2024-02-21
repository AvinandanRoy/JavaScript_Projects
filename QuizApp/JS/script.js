// set the ques

const questions = [
    {question : "Which is the largest animal of the world?",
    answer : [
        {text : "Shark",correct : false},
        {text : "Tiger",correct: false},
        {text : "Blue whale",correct: true},
        {text : "Elephant",correct: false}
    ]
    },
    {question : "Which is the smallest Continent of the world?",
    answer : [
        {text : "Asia",correct : false},
        {text : "Australia",correct: true},
        {text : "Arctic",correct: false},
        {text : "Africa",correct: false}
    ]
    }
];

const questionElement = document.getElementById("question");

const answerButtons = document.getElementById("answerButtons");

const nextButton = document.getElementById("nextButton");

let currentQuestionIndex = 0;
let score = 0 ;


function startQuiz(){
    currentQuestionIndex =0 ;
    score=0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1 ;
    questionElement.innerHTML = questionNo+". "+currentQuestion.question;

    currentQuestion.answer.forEach(answer=>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    })
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct ==="true";
    if(isCorrect){
        selectBtn.classList.add("correct");
        score++;
    }
    else{
        selectBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}`;
    questionElement.style.margin= "0 auto";
    nextButton.innerHTML ="Play Again";
    nextButton.style.display = "block"
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})

startQuiz();
console.log(questions.length);