setInterval(currentDate,1000);

function currentDate(){
    let date = new Date();
    let clockTime = date.toLocaleTimeString();
    document.getElementById('time').innerHTML = clockTime
}























