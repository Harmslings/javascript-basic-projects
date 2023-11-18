let cel = document.getElementById("cel");
let fah = document.getElementById("fah");

cel.addEventListener('input',function(){
    let celsius = this.value;
    let f = (celsius * 9/5) + 32;
    if(!Number.isInteger(f)){
        f = f.toFixed(2); 
    };
    fah.value = f;
});

fah.addEventListener('input',function(){
    let Fahrenheit = this.value;
    let c = (Fahrenheit - 32 )* 5/9;
    if (!Number.isInteger(c)){
        c = c.toFixed(2);
    };
    cel.value = c
});












