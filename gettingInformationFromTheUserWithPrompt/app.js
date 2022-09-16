let nameQuestion = prompt("Lutfen Adinizi Giriniz: ")
let lastNameQuestion = prompt("Lutfen Soyadinizi Giriniz: ")

let isim = document.querySelector("#isim")
let soyisim = document.querySelector("#soyisim")

isim.innerHTML = `<b>${nameQuestion}</b>`
soyisim.innerHTML = `<b>${lastNameQuestion}</b>`