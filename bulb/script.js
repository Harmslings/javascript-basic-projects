let img = document.querySelector('#img').src= "assets/off.png"
let body = document.querySelector('body');
console.log(body);


function btnOn(){
    document.getElementById('img').src = "assets/on.png"
    body.style.backgroundColor = "black"
    body.style.color = "black"
}
function btnOff(){
    document.getElementById('img').src = "assets/off.png"
    body.style.backgroundColor = "black"
    body.style.color = "white"
}

























