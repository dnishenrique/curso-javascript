let num = [6, 5, 8, 4]
num.push(9)
num.sort()

console.log(num)
let pos = num.indexOf(5)
if (pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`o valor 5 está na posição ${pos}`)
}