let textbox = document.getElementById("textbox");

textbox.addEventListener("input",function(){
    // characters
    let text = this.value;
    let char = text.length;
    document.getElementById("char").innerHTML = char;

    text = text.trim();

    // words
    let words = text.split(" ");
    let cleanList = words.filter(function(elm){
        return elm != "";
    })
    console.log(cleanList);
    document.getElementById("word").innerHTML = words.length;
});














