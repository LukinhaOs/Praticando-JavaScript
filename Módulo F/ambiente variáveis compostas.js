let num = [2, 4, 5, 9, 3] 
num[5] = 8

console.log(`O nosso vetor possui os números: ${num}`)
console.log(`Existem ${num.length} valores no vetor O.O`)
console.log(`Números ordenados ${num.sort()}`)
console.log(`O primeiro número do vetor é ${num[0]}`)
console.log()
console.log('---------------- FOR E VETOR :) ----------------')
console.log()

let valores = [1, 2, 8, 9, 4, 5]

for (let pos=0; pos < valores.length; pos ++){
    console.log(`A ${pos}° posição tem o valor ${valores[pos]}`)
}