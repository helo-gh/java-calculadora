alert("Veja seu boletim aqui!")
 
let html = Number ( prompt("Digite aqui sua nota em HTML"))
let css = Number (prompt("Digite aqui sua nota em CSS"))
let javaScript = Number (prompt("Digite aqui sua nota em JavaScript"))

let resultado = html + css + javaScript

let media = resultado / 3 

alert(`Sua média é: ${media}`)