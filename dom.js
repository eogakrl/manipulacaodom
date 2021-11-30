var abrir = document.getElementById('abrir')
var fechar = document.getElementById("fechar")

document.querySelector("body")

var p = document.createElement('p')
var corpo = document.querySelector('body')

abrir.addEventListener('click', ()=>{
    corpo.append(p)
    p.innerText = 'Estamos abertos!'
})
fechar.addEventListener('click', ()=>{
    corpo.append(p)
    p.innerText = 'Estamos Fechados!'
})

