let vize1 = document.querySelector("#vize1")
let vize2 = document.querySelector("#vize2")
const percentVize1 = document.querySelector("#percentVize1")
const percentVize2 = document.querySelector("#percentVize2")
let gecmeNotu = document.querySelector("#gecmeNotu")
const hesapla = document.querySelector("#hesapla")
const finalYuzdesi = document.querySelector("#finalYuzdesi")
let uzunYazi = document.querySelector("#uzunYazi")
hesapla.addEventListener("click",
function(){
    let percentFinal = 100 - Number(percentVize1.value) - Number(percentVize2.value)
    
    let geciciPuan = Number(vize1.value)*(Number(percentVize1.value)/100)+Number(vize2.value)*(Number(percentVize2.value)/100);
    let almasiGereken1 = Number(gecmeNotu.value) - geciciPuan
    let almasiGereken2 = (almasiGereken1 * 100) / Number(finalYuzdesi.value)
    uzunYazi.innerHTML = `Finalden alman gereken not: ${almasiGereken2}`
})
