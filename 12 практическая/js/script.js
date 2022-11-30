//task 1
const list = document.querySelector(".list");
let text = prompt("Ввелите содержимое элемента списка");
while(text){
    let el = document.createElement("li");
    el.textContent = text;
    list.append(el);
    text = prompt("Ввелите содержимое элемента списка");
}

//task 2
const header = document.querySelector(".header");
const textNotification = document.querySelector(".text__notification");
const sendNotification = document.querySelector(".send__notification");
function showNotification(options){
    let div = document.createElement("div");
    div.classList.add("notification");
    div.textContent = options;
    header.append(div);
    setTimeout(() => {
        div.remove();
    }, 1500);
}
sendNotification.addEventListener("click", event => {
    let text = textNotification.value;
    if(text){
        showNotification(text);
    }
})

//task 3
const border = document.querySelector(".border");
const img = document.querySelector(".img");
const change = document.querySelector(".change");
img.style.width = 100 + "%";
border.style.width = 400 + "px";
border.style.margin = '0 auto';
change.addEventListener("click", event => {
    console.log(border.style.width);
    if(border.style.width == "400px"){
        border.style.width = 800 + "px";
        img.src = "img/mikasa.jpg";
    }else{
        border.style.width = 400 + "px";
        img.src = "img/angel.jpg";
    }
});
const coordinate = document.querySelector(".coortdinate");
img.addEventListener("click", event => {
    coordinate.textContent = "Координат x=" + event.pageX + "\nКоордината y=" + event.pageY;
});


//task 5
const listNotification = document.querySelector(".text__notification_");

document.body.addEventListener("click", event=> {
    if(listNotification.classList.contains("active")){
        listNotification.classList.remove("active");
    }
    else if(event.target.classList.contains("img_n")){
        listNotification.classList.add("active");
    }
});