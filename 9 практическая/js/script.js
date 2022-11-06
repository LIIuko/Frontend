"use strict";

// while (true) {
//     let answer = prompt("Желаете пройти регистрацию на сайте?").toLowerCase();
//     if (answer == "да") {
//         alert("Круто");
//         break;
//     }
//     else {
//         alert("Попробуй ещё раз");
//     }
// }

// while (true) {
//     let login = prompt("Введите ваш логин");
//     let password;
//     if (login == "Админ") {
//         while(true){
//             password = prompt("Введите пароль");
//             if (!password) {
//                 alert("Отменено");
//                 break;
//             } else if (password == "Я главный") {
//                 alert("Здравствуйте!");
//                 break;
//             } else {
//                 alert("Неверный пароль");
//             }
//         }
//         break;
//     } else if (!login) {
//         alert("Отменено");
//         break;
//     } else {
//         alert("Я вас не знаю");
//     }
// }

let button = document.querySelector(".red__button");
button.addEventListener("click", event => {
    if(button.style.backgroundColor === "red"){
        button.style.backgroundColor = "blue";
    } else{
        button.style.backgroundColor = "red";
    }
});

let create = document.querySelector(".create__buttons");
create.addEventListener("click", event => {
    let newButton = document.createElement("a");
    newButton.text = "Button";
    newButton.classList.add("red__button");
    console.log(newButton);
    document.body.prepend(newButton);
});

