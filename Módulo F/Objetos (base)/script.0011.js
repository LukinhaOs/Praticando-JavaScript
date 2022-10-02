let amigo = {nome:'José', sexo:'M', idade: 24, peso: 85.5, nacionalidade: 'Brasileiro(a)',
engordar(p=0){
    console.log('Engordou')
    this.peso += p 
}}

amigo.engordar(5)

console.log(`O ${amigo.nome} tem ${amigo.idade} anos e pesa ${amigo.peso}kg, ${amigo.nacionalidade}.`)