let num1 = Math.floor(Math.random()*10);
let num2 = Math.floor(Math.random()*10);

let formElem = document.getElementById("form");
let questionOne = document.getElementById("question");
let input = document.getElementById("input");
let scoreElem = document.getElementById("score"); 
let score = JSON.parse(localStorage.getItem("score"));

if(!score){
    score=0;
} 

scoreElem.innerHTML =`score: ${score}`
questionOne.innerText = `what is ${num1} multplied by ${num2}?`;
let correctAns = num1*num2;

formElem.addEventListener("submit",()=>{
    const userAns = +input.value;
    if(userAns===correctAns){
        score++
        updateScore()
    }else{
        score--
        updateScore()
    };
})

function updateScore(){
    localStorage.setItem("score",JSON.stringify(score))
}




































