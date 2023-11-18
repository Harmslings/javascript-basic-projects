// let elemOne = document.querySelector("#elemone");
// // let elmImg = document.querySelector("#elemone img");

// // elemOne.addEventListener("mousemove",function(dets){
// //     elmImg.style.left = dets.x + "px"
// //     elmImg.style.top = dets.y + "px"
// // })

// // elemOne.addEventListener("mouseenter",function(dets){
// //     elmImg.style.opacity = 1;
// // })

// // elemOne.addEventListener("mouseleave",function(dets){
// //     elmImg.style.opacity = 0;
// // })


let elem = document.querySelectorAll(".elem")

elem.forEach(function(getValue){
    getValue.addEventListener("mouseenter",function(){
        getValue.childNodes[3].style.opacity = 1;
    })
    getValue.addEventListener("mouseleave",function(){
        getValue.childNodes[3].style.opacity = 0;
    })
    getValue.addEventListener("mousemove",function(dets){
        getValue.childNodes[3].style.left = dets.x+"px";
        getValue.childNodes[3].style.top = dets.y+"px";
    })
})







