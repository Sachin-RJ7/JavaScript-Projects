const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

const questionE1 = document.getElementById("question");
const formE1 =document.getElementById("form");
const inputE1 = document.getElementById("input");
const scoreE1 = document.getElementById("score");

questionE1.innerText = ` What is ${num1} multiply by ${num2} ?`;

const correctAns = num1 * num2;
let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
    score = 0;
}

scoreE1.innerText = `score: ${score}`;

// adding evenlistner to form when clicking submit button 
formE1.addEventListener("submit",() => {
    
    // inputE1.value will give string so to convert into number + operator is added
    const userAns = +inputE1.value;

    if(userAns === correctAns) {
        score++;
        updateLocalStorage();
    }
    else{
        score--;
        updateLocalStorage();
    }

});

function updateLocalStorage() {
    localStorage.setItem("score", JSON.stringify(score));
}