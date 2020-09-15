function carregar() {
    var msg = window.document.getElementById('msg')
    var cors = window.document.getElementsByName('radcor')
    
    //cors = 'Azul'

    if (cors[0].checked) {
        //Azul
        document.body.style.background = 'blue'
    } else if (cors[1].checked) {
        //Vermelho
        document.body.style.background = 'red'
    } else if (cors[2].checked) {
        //Verde
        document.body.style.background = 'green'
    } else {
        msg.innerHTML = '[Erro] Nenhuma cor foi selecionada!'
    }

    msg.innerHTML = `A cor escolhida foi .`

    /*
    switch(cors) {
        case 0:
            corrs = 'Azul'
            document.body.style.background = 'blue'
        break
        case 1:
            corrs = 'Vermelho'
            document.body.style.background = 'red'
        break
        case 2:
            corrs = 'Verde'
            document.body.style.background = 'green'
        break
        default:
            msg.innerHTML = '[Erro] Nenhuma cor foi selecionada!'
    }*/
    
}