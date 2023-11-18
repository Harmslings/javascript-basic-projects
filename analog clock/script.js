const numberHours = document.querySelector('.number-hours');
const secondsBar = document.querySelector('.bar-seconds');

const numberElemnt = [];
const barElemnt = [];

for (let i =1; i <=12; i++) {
    numberElemnt.push(
        `<span style = "--index:${i};"><p>${i}</p></span>`
    );
}

numberHours.insertAdjacentHTML("afterbegin",numberElemnt.join(""))

for (let i =1; i <=60; i++) {
    barElemnt.push(
        `<span style = "--index:${i};"><p>${i}</p></span>`
        );
        
    }
secondsBar.insertAdjacentHTML("afterbegin",barElemnt.join(""))

const hoursHand= document.querySelector(".hand.hours");
const minutesHand= document.querySelector(".hand.minutes");
const secondsHand= document.querySelector(".hand.seconds");

function getCurrentTime(){
    let date = new Date();
    let currentHours = date.getHours();
    let currentMinutes = date.getMinutes();
    let currentSeconds = date.getSeconds();

    secondsHand.style.transform = `rotate(${currentSeconds * 6}deg)`
    minutesHand.style.transform = `rotate(${currentMinutes * 6}deg)`
    hoursHand.style.transform = `rotate(${currentHours * 30 + currentMinutes/2}deg)`
}

getCurrentTime();

setInterval(getCurrentTime,1000);



