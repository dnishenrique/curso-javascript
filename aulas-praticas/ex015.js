let num = [5, 6, 9, 15]
num[3] = 4 //uso o [] para especificar a posição que quero acrescentar os valores
num.push(7) //uso o push para acrescentar um elemento no ultimo espaço do meu array
num.length //length é um atributo e serve para saber qual o comprimento do vetor
num.sort() //sort() é um metodo interno de todo elemento, serve para colocar todos os elementos em forma crescente

console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} posições.`)
console.log(num)
console.log(`Ordenar vetores acima ${num.sort()}`)
console.log(`O primeiro valor do vetor é ${num[0]}`) //mostro o num que esta na posição entre []