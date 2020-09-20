function calcular() {
    //crio variaveis para armazenar os valores
    let qtda = document.getElementById('qtdab')
    let qtdr = document.getElementById('qtdrd')
    let res = document.getElementById('res')

    //transformo para numeros
    let qta = Number(qtda.value)
    let qtr = Number(qtdr.value)

    //verifico se não esta vazio
    if (qta == 0 || qtr == 0) {
        alert('[Erro] preencha todos os campos!')
    } else {
        let med = qtr/qta
        res.innerHTML = `A media é: ${med.toFixed(2)} KM/L`
    }
}