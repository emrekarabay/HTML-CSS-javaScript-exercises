let baslik = document.querySelector("#baslik");

console.log(baslik.classList);

baslik.classList.add("red");
baslik.classList.add("yellow");
baslik.classList.add("green");

console.log(baslik.classList);

baslik.classList.remove("yellow");

console.log(baslik.classList);