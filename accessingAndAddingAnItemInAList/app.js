
let lastChild = document.querySelector("ul#liste>li:last-child")
lastChild.innerHTML = "son oge degisti..."

let firstChild = document.querySelector("ul#liste>li:first-child")
firstChild.innerHTML = "ilk oge degisti..."

let ulDOM = document.querySelector("ul#liste")
let liDOM = document.createElement('li')
let liDOM2 = document.createElement('li')
liDOM.innerHTML = "ilk satir kendi Olusturdugumuz Oge"
liDOM2.innerHTML = "son satir kendi Olusturdugumuz Oge"

ulDOM.prepend(liDOM)
ulDOM.append(liDOM2)