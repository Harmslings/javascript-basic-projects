const item = document.querySelector("#item");
const todoBOx = document.querySelector("#todoBox");

item.addEventListener("keyup",function(events){
  if(events.key == "Enter"){
    addTodo(this.value);
    this.value = "";
  }
})

const addTodo = (item) => {
  const listItem = document.createElement("li");
    listItem.innerHTML = `${item} <i class="fas fa-times"></i>`;

    listItem.addEventListener("click",function(){
      this.classList.toggle("done");
    })

    listItem.querySelector("i").addEventListener("click",function(){
      listItem.remove()
    })
    todoBOx.appendChild(listItem)

}







































