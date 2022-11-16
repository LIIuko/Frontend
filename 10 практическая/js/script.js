'use strict'

// Task 2
const list = document.querySelector(".text__basket");

const position = document.querySelectorAll(".title_h2");

function Basket(position){
    for(let el of position){
        this[el.textContent] = 0;
    }
}

let basket = new Basket(position);

let basketButton = document.querySelector(".img__basket");
basketButton.addEventListener("click", event => {
    if(basketButton.classList.contains("active")){
        basketButton.classList.remove("active");
        while(list.lastElementChild){
            list.removeChild(list.lastElementChild);
        }
    }else{
        basketButton.classList.add("active");
        for(let el in basket){
            if(basket[el] != 0){
                let text = document.createElement("li");
                text.innerHTML = el + ": " + basket[el];
                list.append(text);
            }
        }
    }
});

const inputs = document.querySelectorAll(".volume");
const buttons = document.querySelectorAll(".button");

for(let button of buttons){
    button.addEventListener("click", event => {
        for(let name of button.classList){
            for(let input of inputs){
                if(input.classList.contains(name)){
                    if(name == "apple"){
                        basket["Яблоко"] += Number(input.value);
                    }else if(name == "orange"){
                        basket["Апельсин"] += Number(input.value);
                    }else if(name == "banana"){
                        basket["Банан"] += Number(input.value);
                    }
                }
            }
        }
    });
}

// Task 1
const textCapture = document.querySelector(".text");
const checkButton = document.querySelector(".check__button");
const disabledButton = document.querySelector(".disabled__button");
const answer = document.querySelector(".text__capture");

var count = true;
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function click1(){
    count = false;
    console.log(count);
    if(answer.value == textCapture.innerHTML){
        disabledButton.disabled = false;
    }else{
        capture();
    }
}
function capture(){
    if(count){
        const abc = "abcdefghijklmnopqrstuvwxyz";
        while (textCapture.innerHTML.length < 6) {
            textCapture.innerHTML += abc[Math.floor(Math.random() * abc.length)];
        }
        checkButton.addEventListener("click", click1);
    }else{
        let numb1 = getRandomInt(10);
        let numb2 = getRandomInt(10);
        textCapture.innerHTML = numb1 + " + " + numb2;
        checkButton.removeEventListener("click", click1);
        checkButton.addEventListener("click", event => {
            if(Number(answer.value) === numb1 + numb2){
                disabledButton.disabled = false;
            }
            else{
                capture();
            }
        });
    }

}
capture();

// Task 3
const descriptions = document.querySelectorAll(".decription");
for(let el of descriptions){
    el.innerHTML = truncate(el.innerHTML, 280);
}
function truncate(str, maxlength){
    if(str.length > maxlength){
        return str.slice(0, maxlength - 3) + "...";
    }
    return str;
}