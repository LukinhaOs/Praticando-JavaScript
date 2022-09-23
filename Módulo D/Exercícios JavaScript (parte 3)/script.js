function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var formano = document.getElementById('msgano')
    var resultado = document.getElementById('detalhe')
    if (formano.value.length == 0 || formano.value > ano) {
        window.alert('Dado inválido! Verifique o ano e tente novamente.')
    } else {
        var fsex = document.getElementsByName('sex')
        var idade = ano - Number(formano.value)
        var genero = ''
        var img = document.createElement('img') // Essa linha de código cria a parte 'img' no HTML
        img.setAttribute('id', 'foto') // Essa linha de código cria o ID para a parte 'img'. Resumo <img id="foto">
        if (fsex[0].checked) {
            genero = 'Masculino'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'imagens/menino_criança.jpg')
            } else if (idade >= 10 && idade < 20) {
                // Adolescente
                img.setAttribute('src', 'imagens/garoto_adolescente.jpg')
            } else if (idade >= 20 && idade < 50) {
                // Adulto
                img.setAttribute('src', 'imagens/homem.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/idoso.jpg')
            }
            
        } else if (fsex[1].checked) {
            genero = 'Feminino'
              if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'imagens/menina_criança.jpg')
            } else if (idade >= 10 && idade < 20) {
                // Adolescente
                img.setAttribute('src', 'imagens/garota_adolescente.jpg')
            } else if (idade >= 20 && idade < 50) {
                // Adulto
                img.setAttribute('src', 'imagens/mulher.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/idosa.jpg')
            }
        }
        img.style.borderRadius = '20px'
        resultado.innerHTML = `<strong>Sexo ${genero} e idade com ${idade} anos.</strong><br>`
        resultado.appendChild(img)
    }
}