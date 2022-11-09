"use strict";

while (true) {
    let answer = prompt("Желаете пройти регистрацию на сайте?", "");
    if (answer == "Да") {
        alert("Круто");
        break;
    }
    else {
        alert("Попробуй ещё раз");
    }
}

while (true) {
    let login = prompt("Введите ваш логин");
    let password;
    if (login == "Админ") {
        while(true){
            password = prompt("Введите пароль");
            if (!password) {
                alert("Отменено");
                break;
            } else if (password == "Я главный") {
                alert("Здравствуйте!");
                break;
            } else {
                alert("Неверный пароль");
            }
        }
        break;
    } else if (!login) {
        alert("Отменено");
        break;
    } else {
        alert("Я вас не знаю");
    }
}

let button = document.querySelector(".red__button");
button.addEventListener("click", event => {
    if(button.style.backgroundColor === "pink"){
        button.style.backgroundColor = "gray";
        button.style.color = "aliceblue";
        button.innerHTML = "♥";
    } else{
        button.innerHTML += " 1";
        button.style.backgroundColor = "pink";
        button.style.color = "red";
    }
});


let containerCreate = document.querySelector(".container__create");
let main = document.main;

let create = document.querySelector(".create__buttons");
create.addEventListener("click", event => {
    if(create.classList.contains("active")){
        while(containerCreate.lastElementChild){
            containerCreate.removeChild(containerCreate.lastElementChild);
        }
        create.classList.remove("active");
    }
    else{
        create.classList.add("active");
    }
});
let x = 0;
let y = 0;

containerCreate.addEventListener('mousemove', (e) => {

    let newButton = document.createElement("a");
    let localY = e.pageY - containerCreate.getBoundingClientRect().top;
    let localX = e.pageX - containerCreate.getBoundingClientRect().left;

    if(create.classList.contains("active") && Math.abs(x - localX) > 5 && Math.abs(y - localY) > 5){
        newButton.text = "Button";
        newButton.classList.add("create__buttons");
        newButton.classList.add("created__button");
        // Если тащат, то высчитываем новое положение,
        // вычитая начальное положение элемента из положения курсора.
        newButton.style.top = `${localY}px`;
        newButton.style.left = `${localX}px`;
        containerCreate.append(newButton);
        x = localX;
        y = localY;
    }
  });