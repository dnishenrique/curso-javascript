function contar() {
    //crio variaveis para pegar os valores digitados
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')

    //faço uma verificação para ver se os numeros não estão em brancos
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossivel contar!' //limpo caso haja algum numero contado
    } else {
        res.innerHTML = 'Contando: <br>'

        //crio uma variavel para transformar os valores em numeros
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if (p <= 0) {
            window.alert('Passo inválido! Consideranto PASSO COMO 1')
            p = 1
        }

        //faço uma verificação para ver se o numero i(inicial) é maior que o numero f(final), se for uso a contagem crescente, se não uso contagem regressiva
        if (i < f) {
            //contagem crescente
            for (var c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}` /*para colocar o emoji, deve colocar entre crase `` pois só funciona entre `` posso acessar o site https://unicode.org/emoji/charts/full-emoji-list.html*/
            }
        } else {
            //contagem regressiva
            for (var c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}` /*para colocar o emoji, deve colocar entre crase `` pois só funciona entre `` posso acessar o site https://unicode.org/emoji/charts/full-emoji-list.html*/
            }
        }
        res.innerHTML += `\u{1F3C1}` //retorno um emoji de finalização
    }
}