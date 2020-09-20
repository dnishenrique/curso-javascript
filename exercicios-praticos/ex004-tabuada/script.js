function  tabuada() {
    //crio variaveis para pegar os valores digitados
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    //faço uma verificação para ver se os numeros não estão em brancos
    if (num.value.length == 0) {
        window.alert('Por favor, digite um numero!')
    } else {
        let n = Number(num.value) //faço a converção para numero
        /*let c = 0 //crio uma variavel 1*/
        tab.innerHTML = '' //limpo o item antes de começar a tabuada
        /*
        //exemplo em while
        while (c <= 10) {
            let item = document.createElement('option') //crio uma variavel que cria um option
            item.text = `${n} x ${c} = ${n*c}` //configuro o item para receber e exibir a conta
            item.value = `tab${c}` //configuro o value
            tab.appendChild(item)
            c++
        }
        */
       //exemplo em for
        for (let c = 0; c <= 10; c++) {
            let item = document.createElement('option') //crio uma variavel que cria um option
            item.text = `${n} x ${c} = ${n*c}` //configuro o item para receber e exibir a conta
            item.value = `tab${c}` //configuro o value para uso o value em outras linguagens
            tab.appendChild(item)
         }
    }
}