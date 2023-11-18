let hour = document.getElementById("hour");
let minute = document.getElementById("minutes");
let second = document.getElementById("seconds");
let AmPm = document.getElementById("AmPm")

function timer(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    if (h>=12){
        
        AmPm.innerText = "Pm"
    }
    h = h<10 ? "0"+h:h;
    m = m<10 ? "0"+m:m;
    s = s<10 ? "0"+s:s;

    hour.innerHTML = h
    minute.innerHTML = m
    second.innerHTML = s

    setTimeout(()=>{
        timer()
    },1000);
}

timer()












