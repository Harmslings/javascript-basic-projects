const passwordBox = document.getElementById("password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
let numbers = "0123456789"
let symbol = "@#!$%&_+=-"
let allchars = upperCase+lowerCase+numbers+symbol;

function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random()*upperCase.length)];
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password += numbers[Math.floor(Math.random()*numbers.length)];
    password += symbol[Math.floor(Math.random()*symbol.length)];
    
    while(length>password.length){
        password += allchars[Math.floor(Math.random()*allchars.length)]; 
    }
    passwordBox.value = password;
    return password
}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}


// console.log(createPassword());
















