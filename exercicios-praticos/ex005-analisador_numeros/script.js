//crio componentes basicos que irei poder usar ou chamar em qualquer função
let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = [] //irei usar esse vetor vazio para analisar os dados

//crio uma função que recebe um paramentro n para saber se é um numero
function inNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

//crio uma função que recebe dois paramentros, n e l, que vai receber um numero e uma lista para ver se esta na lista
function inLista(n, l) {
    // uso o indexOf para ver se é diferente ou igual a -1, ver aula sobre arrays
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

//crio a função a adicionar que sera executada via onclick
function adicionar() {
    //crio inNumero e inLista, para avaliar se foi add um numero e se esse numero não esta na lista, poderia ser usar qualquer outro nome não apenas inLista e inNumero
    if(inNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value)) //adiciono a lista
        let item = document.createElement('option') // crio a variavel item, para que ela possa criar os valores
        item.text = `Valor ${num.value} adicionado.` //informo o que sera exibido quando o valor for adicionado
        lista.appendChild(item)//exibo a lista com os valore adicionado na var item
        res.innerHTML = '' //limpo o res, para que seja feito uma nova finalização com os valores add
    } else {
        window.alert('Valor inválido ou já encontrado na lista.') //crio um alert caso algum numero ja esteja na lista ou seja invalido
    }
    //faço a excução fora, para que independente de dar ou não certo, os valores serão zerados
    num.value = '' //limpo os valores
    num.focus() //cursor volta a piscar após limpar valores
}

//crio a função a finalizar que é executada via onclick
function finalizar() {
    //crio um if e verifico se a lista esta vazia
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length //verifico quantos numeros estão cadastrados
        let maior = valores[0] //crio a variavel que verifica o maior numero
        let menor = valores[0] //crio a variavel que verifica o menor numero
        let soma = 0 //crio a variavel
        let media = 0
        
        //crio um for para verificar o valor maior e o valor menor a soma etc..
        for(let pos in valores) {
            soma += valores[pos] //faço a soma dos valores armazenado na lista
            //verifico se o valor digitado é maior do que um já existente, caso for substituo o valor se não matenho o valor
            if (valores[pos] > maior)
                maior = valores[pos]
            //verifico se o valor digitado é menor do que o já existente, caso for substituo o valor se não matenho o valor
            if (valores[pos] < menor)
                menor = valores[pos]
        }

        media = soma / tot //faço o calculo para descobrir a media
        res.innerHTML = '' //limpo o campo res
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>` //exibo o total de numeros cadastros
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>` //exibo o maior numero
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>` //exibo o menor numero
        res.innerHTML += `<p>Somando todos os valores temos ${soma}.</p>` //exibo a soma dos valores
        res.innerHTML += `<p>A média dos valores digitados é ${media.toFixed(2)}.</p>` //exibo a media dos valores

    }
}