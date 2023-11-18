let isStatus = document.querySelector("h5");
let addFriend = document.querySelector("#add");
let check = 0

addFriend.addEventListener("click",function(){
    if (check==0){
        isStatus.innerHTML = "Friends";
        isStatus.style.color = "green"
        addFriend.innerHTML = "remove friend"
        check = 1;
    } else {
        isStatus.innerHTML = "stranger";
        isStatus.style.color = "red"
        addFriend.innerHTML = "add friend"
        check = 0;
    }
})


 























