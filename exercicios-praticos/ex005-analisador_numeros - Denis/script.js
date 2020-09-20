function Adicionar() {
    //adicionar valores
    let num = document.getElementById("txtn")
    let nu = Number(num.value)
    let numad = document.getElementById("txtad")

    //verificar se esta entre 1 e 100 e se mão esta vazio
    if (nu <= 1 || nu > 100) {
        alert("[Erro]. Numero menor que 1 ou maior que 100")
    } else {
        let item = document.createElement('option')
        item.text = `Valor ${nu} adicionado.`
        numad.appendChild(item)
    }
}

function Calcular() {
    
}