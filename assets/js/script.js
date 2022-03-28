var startButtonEl = document.querySelector("#startButton");
var frontPage = document.querySelector("#frontPage");
var questionsEl = document.querySelector("#questions");
var timerEl = document.querySelector("#timeTick");
var timeLeft = 75;
var end = false;

var startQuiz = function() {
    frontPage.remove();
    questionOne();

    timer();
}

var timer = function() {
    var timeInterval = setInterval(() => {
        if (end === false) {
            timerEl.textContent = timeLeft;
            timeLeft --;
            return timeLeft;
        }
        else {
            timerEl.textContent = "";
            clearInterval(timeInterval); 
        }
    }, 1000);

    if (end === true){
        timerEl.textContent = timeLeft;
    }
}

var questionOne = function() {

    var removeWrong = function() {
        timeLeft = timeLeft - 10;
        questionContainer.remove();
        questionTwo();
        console.log("The answer you picked was wrong");
    }

    var questionContainer = document.createElement("div");
    questionContainer.className = "question-container";
    questionsEl.appendChild(questionContainer);


    var question = document.createElement("h1");
    question.className = "question";
    question.textContent = "Javascript is an _______ language?";
    questionContainer.appendChild(question);


    var answerContainer = document.createElement("div");
    answerContainer.className = "answers";
    questionContainer.appendChild(answerContainer);
    // answer One
    var answerOne = document.createElement("button");
    answerOne.className = "answer-One";
    answerOne.textContent = "1. Procedural";
    answerContainer.appendChild(answerOne);
    answerOne.addEventListener("click", event => {
        removeWrong();
    })
    // answer Two
    var answerTwo = document.createElement("button");
    answerTwo.className = "answer-Two";
    answerTwo.textContent = "2. Object-Based";
    answerContainer.appendChild(answerTwo);
    answerTwo.addEventListener("click", event => {
        removeWrong();
    })
    // answer Three
    var answerThree = document.createElement("button");
    answerThree.className = "answer-Three";
    answerThree.textContent = "3. Object-Oriented";
    answerContainer.appendChild(answerThree);
    answerThree.addEventListener("click", event => {
        questionContainer.remove();
        questionTwo();
        console.log("Correct!");
    })
    // answer Four
    var answerFour = document.createElement("button");
    answerFour.className = "answer-Four";
    answerFour.textContent = "4. None of the above";
    answerContainer.appendChild(answerFour);
    answerFour.addEventListener("click", event => {
        removeWrong();
    })
    console.log("Question One");
}

var questionTwo = function() {

    var removeWrong = function() {
        timeLeft = timeLeft - 10;
        questionContainer.remove();
        questionThree();
        console.log("The answer you picked was wrong");
    }

    var questionContainer = document.createElement("div");
    questionContainer.className = "question-container";
    questionsEl.appendChild(questionContainer);


    var question = document.createElement("h1");
    question.className = "question";
    question.textContent = "Which of the following keywords is used to define a variable in Javascript?";
    questionContainer.appendChild(question);


    var answerContainer = document.createElement("div");
    answerContainer.className = "answers";
    questionContainer.appendChild(answerContainer);
    // answer One
    var answerOne = document.createElement("button");
    answerOne.className = "answer-One";
    answerOne.textContent = "1. var";
    answerContainer.appendChild(answerOne);
    answerOne.addEventListener("click", event => {
        removeWrong();
    })
    // answer Two
    var answerTwo = document.createElement("button");
    answerTwo.className = "answer-Two";
    answerTwo.textContent = "2. let";
    answerContainer.appendChild(answerTwo);
    answerTwo.addEventListener("click", event => {
        removeWrong();
    })
    // answer Three
    var answerThree = document.createElement("button");
    answerThree.className = "answer-Three";
    answerThree.textContent = "3. Both A & B";
    answerContainer.appendChild(answerThree);
    answerThree.addEventListener("click", event => {
        questionContainer.remove();
        questionThree();
        console.log("Correct!");
    })
    // answer Four
    var answerFour = document.createElement("button");
    answerFour.className = "answer-Four";
    answerFour.textContent = "4. None of the above";
    answerContainer.appendChild(answerFour);
    answerFour.addEventListener("click", event => {
        removeWrong();
    })
    console.log("Question Two");
}

var questionThree = function() {

    var removeWrong = function() {
        timeLeft = timeLeft - 10;
        questionContainer.remove();
        questionFour();
        console.log("The answer you picked was wrong");
    }

    var questionContainer = document.createElement("div");
    questionContainer.className = "question-container";
    questionsEl.appendChild(questionContainer);


    var question = document.createElement("h1");
    question.className = "question";
    question.textContent = "Which of the following methods is used to access HTML elements using Javascript?";
    questionContainer.appendChild(question);


    var answerContainer = document.createElement("div");
    answerContainer.className = "answers";
    questionContainer.appendChild(answerContainer);
    // answer One
    var answerOne = document.createElement("button");
    answerOne.className = "answer-One";
    answerOne.textContent = "1. getElementbyId()";
    answerContainer.appendChild(answerOne);
    answerOne.addEventListener("click", event => {
        removeWrong();
    })
    // answer Two
    var answerTwo = document.createElement("button");
    answerTwo.className = "answer-Two";
    answerTwo.textContent = "2. getElementByClassName()";
    answerContainer.appendChild(answerTwo);
    answerTwo.addEventListener("click", event => {
        removeWrong();
    })
    // answer Three
    var answerThree = document.createElement("button");
    answerThree.className = "answer-Three";
    answerThree.textContent = "3. Both A & B";
    answerContainer.appendChild(answerThree);
    answerThree.addEventListener("click", event => {
        questionContainer.remove();
        questionFour();
        console.log("Correct!");
    })
    // answer Four
    var answerFour = document.createElement("button");
    answerFour.className = "answer-Four";
    answerFour.textContent = "4. None of the above";
    answerContainer.appendChild(answerFour);
    answerFour.addEventListener("click", event => {
        removeWrong();
    })
    console.log("Question Two");
}

var questionFour = function() {

}


startButtonEl.addEventListener("click", startQuiz);