let username = "karabayemre10"
const DOMAIN = "gmail.com"

let email = username + "@" + DOMAIN

console.log("Merhaba", username, "sitemize hosgeldin", "mail adresin:", email)

let info = `
Merhaba ${username} sitemize hosgeldin.. 
mail adresin: ${email}

mail adresinin uzunlugu: ${email.length}
borcunuz: ${(2 + 3) * 40} TL
gunun saat bilgisi : ${new Date().getHours()}

kisa isminiz: ${username[0]}.
`

console.log(info)