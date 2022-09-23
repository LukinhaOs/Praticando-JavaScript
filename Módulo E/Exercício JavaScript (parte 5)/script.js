function verificar () {
    var conti = document.getElementById('parte1')
    var contp = document.getElementById('parte2')
    var contf = document.getElementById('parte3')
    var resultado = document.getElementById('resultado')

    if (conti.value.length == 0 || contp.value.length == 0 || contf.value.length == 0) {
        resultado.innerHTML = 'Faltando valores, por favor. Tente novamente!'      
    }
    else {
        var ini = Number(conti.value)
        var passo = Number(contp.value)
        var fim = Number(contf.value)

        if (passo <= 0) {
            resultado.innerHTML = 'Não é possível de realizar a contagem com passo menor ou igual a 0! <br>'
            passo = 1
        }

        if (ini < fim) {
            for (var item = ini; item <= fim; item += passo) {
                resultado.innerHTML += `${item} \u{27A1}`
            }
        } else {
            for (var item = ini; item >= fim; item -= passo) {
                resultado.innerHTML += `${item} \u{27A1}` 
            }
        }
        resultado.innerHTML += ' Acabei :)'
    }

}