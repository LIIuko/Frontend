'use strict'

//task 1
let array = [];

const containerArray = document.querySelector(".container__array");
const addButton = document.querySelector(".add__button");
const shiftButton = document.querySelector(".shift__button");
const replaceButton = document.querySelector(".replace__button");

var count = array.length;

addButton.addEventListener("click", event => {
    let block = document.createElement("div");
    block.classList.add("card");
    let title = document.createElement("h2");
    title.classList.add("title", "title_h2");
    title.innerHTML = "text " + count;
    array.push(title.innerHTML);
    block.append(title);
    containerArray.append(block);
    count++;
});

shiftButton.addEventListener("click", event => {
    while(containerArray.lastElementChild){
        containerArray.removeChild(containerArray.lastElementChild);
    }
    array.shift();
    for (let el of array){
        let block = document.createElement("div");
        block.classList.add("card");
        let title = document.createElement("h2");
        title.classList.add("title", "title_h2");
        title.innerHTML = el;
        block.append(title);
        containerArray.append(block);
    }
});

replaceButton.addEventListener("click", event => {
    while(containerArray.lastElementChild){
        containerArray.removeChild(containerArray.lastElementChild);
    }
    let index = Math.floor(Math.random() * array.length);
    let el = Math.floor(Math.random() * array.length);
    let tmp = array[index];
    array[index] = array[el];
    array[el] = tmp;
    // array.splice(index, 1, array[el]);
    for (let el of array){
        let block = document.createElement("div");
        block.classList.add("card");
        let title = document.createElement("h2");
        title.classList.add("title", "title_h2");
        title.innerHTML = el;
        block.append(title);
        containerArray.append(block);
    }
});

//task 2
let array2 = [1, 2, 3, 2, 5, 3, 6, 1, 9, 4];
// console.log(array2);
let newArray = array2.filter(item => (item >= 2 && item <= 5));
// console.log(newArray);

//task 3
const sortButton = document.querySelector(".sort__button");
let list = document.querySelectorAll(".array3");
let array3 = new Array();
for(let el of list){
    array3.push(Number(el.innerHTML));
}
function compare(a, b){
    return Number(a) - Number(b);
}
sortButton.addEventListener("click", event => {
    array3.sort(compare);
    for(let i = 0; i < array3.length; i++){
        list[i].innerHTML = array3[i];
    }
});

//task 4-5
const notification = document.querySelector(".img__notification");
const listNotification = document.querySelector(".text__notification");
let counter = document.querySelector(".counter");

function counterN(){
    counter.style.opacity = 1;
    counter.innerHTML++;
    let el = document.createElement("li");
    el.innerHTML = "text";
    listNotification.append(el);
}

let timerId = setTimeout(
    function tick(){
        counterN();
        timerId = setTimeout(tick, 3000);
    }, 3000);

notification.addEventListener("click", event => {
    if(listNotification.classList.contains("active")){
        clearTimeout(timerId);
        listNotification.classList.remove("active");
        while(listNotification.lastElementChild){
            listNotification.removeChild(listNotification.lastElementChild);
        }
        counter.innerHTML = 0;
        counter.style.opacity = 0;
        timerId = setTimeout(
            function tick(){
                counterN();
                timerId = setTimeout(tick, 3000);
            }, 10000);
    }
    else{
        listNotification.classList.add("active");
    }
});