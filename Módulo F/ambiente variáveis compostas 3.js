let numeros = [2, 4, 8, 7, 6, 5]

let procura = numeros.indexOf(6)


if (procura == -1){
    console.log(`Ops, eu ainda não encontrei o valor que procura :/`)
}
else{
    console.log(`Eu encontrei o valor e ele está na posição ${procura}`)
}