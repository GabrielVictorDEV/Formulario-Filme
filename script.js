function enviarDados(){
    var horarioFilme = document.getElementById("horario-filme").value

    var dataFilme = document.getElementById("data-filme").value

    var local = document.getElementById("local-filme").value

    var filme = document.getElementById("filme").value
    
    ticket( horarioFilme, dataFilme, local, filme)
}

function ticket(hora, data, local, filme) {
    document.getElementById("titulo-tic").innerHTML = `Movie Night 🥳`

    document.getElementById("sub-tic").innerHTML = `Parabéns! O seu ticket para o filme "${filme.toUpperCase()}" foi gerado com sucesso. Basta realizar um print, e enviar para seu acompanhante. `

    document.getElementById("p-tic").innerHTML = `O filme escolhido foi ${filme}`

    document.getElementById("data-tic").innerHTML = `A data definida será no dia ${data} as ${hora}horas` 

    document.getElementById("local-tic").innerHTML = `O local escolhido foi ${local}`

    document.getElementById("parabens").innerHTML = `Parabéns pela bela escolha! Que você tenha um bom filme. 🎥`
}