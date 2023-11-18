const endDate = "15 september 2023 3:00 PM";

document.getElementById("endDate").innerHTML = endDate;
const inputs = document.querySelectorAll("input");


function timer(){
    const end = new Date(endDate);
    const now = new Date();
    const diffrence = (end-now)/1000;
    if (diffrence<0) return;
    // convert into days
    inputs[0].value = (Math.floor(diffrence /3600/ 24));
    // convert into hours
    inputs[1].value =(Math.floor((diffrence /3600) % 24));
    // covert into minutes
    inputs[2].value = (Math.floor((diffrence / 60) %60));
    // convert into seconds
    inputs[3].value = (Math.floor(diffrence % 60))
}

timer()

setInterval(
    () => {
        timer()
    },1000
)


























































