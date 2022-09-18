let counter = 0;
let counterDOM = document.querySelector('#counter');

let increaseDOM = document.querySelector('#increase');
let decreaseDOM = document.querySelector('#decrease');
let increaseDouble = document.querySelector('#increaseDouble');
let decreaseDouble = document.querySelector('#decreaseDouble');

counterDOM.innerHTML = counter;

increaseDOM.addEventListener("click", clickEvent);
decreaseDOM.addEventListener("click", clickEvent);
increaseDouble.addEventListener("click", doubleClickEvent);
decreaseDouble.addEventListener("click", doubleClickEvent);

function clickEvent() {
    this.id == "increase" ?  counter += 1 : counter -= 1;
    counterDOM.innerHTML = counter;
}

function doubleClickEvent() {
     this.id == "increaseDouble" ?  counter += 2 : counter -= 2;
     counterDOM.innerHTML = counter;
 }