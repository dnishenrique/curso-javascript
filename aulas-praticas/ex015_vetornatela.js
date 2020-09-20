let num = [6, 5, 8, 4]
num.sort()

    console.log(num)

    /*
    //codigo tradicional
    for (let pos = 0; pos < num.length; pos++) { //faço a comparação através do num.legth, para dizer que enquanto for menor que isso continue digitando, isso é importante, pois eu não preciso saber quantas posições eu tenho basta dar o length que ele já faz isso para mim
        console.log(`A posição ${pos} tem o valor ${num[pos]}`)
    }
    */

    //simplificando o for - isso só vale para arrays e obejtos
    for (let pos in num) { //lendo em pt 'Para cada pos(posição) em num(numero) eu vou mostrar o num[pos]'
        console.log(num[pos])
    }