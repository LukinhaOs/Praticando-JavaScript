function tabuada () {
    var resultado = document.getElementById('resultado')
    var vezes = document.getElementById('tabu')

    var num = Number(tabu.value)

    if (vezes.value.length == '') {
        resultado.innerHTML = 'Por favor. Digite um número :)'
    } else {
        var tabuada = ''
        resultado.innerHTML = ''
        for (var c = 1; c <= 10; c++) {
            tabuada += num +" x " + c + " = " + num*c + "<br>";

            resultado.innerHTML = tabuada

        }
    }
}