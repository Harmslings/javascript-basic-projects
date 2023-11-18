const inputBox = document.getElementById("inputBox");
const buttonArray = document.getElementsByClassName("button");
let string = "";

const arrButtons = Array.from(buttonArray);

arrButtons.forEach(button => {
    button.addEventListener("click",function(e){
        const value = e.target.innerHTML;
        if (value == "=") {
            string = eval(string);
        } else if (value == "AC") {
            string = ""
        } else if (value == "DEL") {
            string = string.substring(0,string.length-1);
        }
        
        else {
            string += e.target.innerHTML;
        }

        inputBox.value = string;
    })
})




















