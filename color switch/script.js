function changeBG(color){
    document.body.style.backgroundColor = color;
    let txt = document.getElementsByClassName("text")
    if(color == "#0000ff") {
        for(let elm of txt) {
            elm.style.color = "white";
        }
    } else {
        for(let elm of txt) {
            elm.style.color = "black";
        }
    }
}



