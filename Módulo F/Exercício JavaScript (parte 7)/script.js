var n = window.document.getElementById('num')
var itens = window.document.getElementById('listaItens')
var check = window.document.getElementById('buttonConfere')
var resultado = window.document.getElementById('resultado')
var dados = window.document.getElementById('info')
var valores = []

function isNumeric (item) {
    if (Number(item) >= 1 && Number(item) <= 100){
        return true
    }
    else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    }
    else {
        return false
    }
}

function action () {
    if (isNumeric(n.value) && !inLista(n.value, valores)) {
        valores.push(Number(n.value))
        var mensagem = document.createElement('option')
        mensagem.text = `O valor ${n.value} foi adicionado...`
        itens.appendChild(mensagem)
        resultado.innerHTML = ''
        dados.innerHTML = ''
        var numero = valores[0]
        for (var np in valores) {
            numero = valores[np]
        }
        dados.innerHTML += `<p>Você já adicionou ${np} valores.</p>`
    }
    else {
        window.alert('Valor Inválido, não digitado ou encontrado na caixa!')
    }
    n.value = ''
    n.focus()
}

function verificar() {
    if (valores.length == 0) {
        window.alert('Nenhum valor Adicionado!')
    }
    else {
        var soma = 0
        var media = 0
        var menor = valores[0]
        var maior = valores[0]
        for (var numPosterior in valores) {
            soma += valores[numPosterior]
            if (valores[numPosterior] > maior) {
                maior = valores[numPosterior]
            } if (valores[numPosterior] < menor) {
                menor = valores[numPosterior]
            }
        }
        resultado.innerHTML = ''
        resultado.innerHTML += `<p>A soma dos números adicionados é <strong>${soma}</strong>.</p>`
        resultado.innerHTML += `<p>O maior número adicionado foi o <strong>${maior}</strong>.</p>`
        resultado.innerHTML += `<p>O menor número adicionado foi o <strong>${menor}</strong>.</p>`
        resultado.innerHTML += `<p>A média entre os valores é <strong>${media = soma / valores.length}</strong>.</p>`
    }

}
