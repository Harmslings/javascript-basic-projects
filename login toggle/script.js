const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const submit = document.getElementById("submit");
let error = document.querySelector("p");


submit.addEventListener("mouseover",(button)=>{
    let email = emailInput.value;
    let password = passwordInput.value;
    if(!email || !password){
        button.target.classList.toggle("move");
        submit.style.backgroundColor = "red";
        error.style.display = "block"
    }else{
        button.target.classList.toggle("stop")
        submit.style.backgroundColor = "#4fca4f"
        error.style.display = "none"
        
    }
})













