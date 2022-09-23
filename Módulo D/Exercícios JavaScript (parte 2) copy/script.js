function carregar() {
    var msg = window.document.getElementById('msg')
    var imagem = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    var minutes = data.getMinutes()
    msg.innerHTML = `<strong>Agora são ${hora} horas e ${minutes} minutos.</strong>`
    if (hora >= 0 && hora < 12) {
        // BOM DIA
        imagem.src ='manha.jpg'
        document.body.style.background = 'rgb(97, 165, 170)'
        coment.innerHTML = '<strong>Tenha um bom dia</strong>'
    } else if (hora >= 12 && hora < 18 ) {
        // BOA TARDE
        imagem.src ='tarde.jpg'
        document.body.style.background = 'rgb(175, 120, 75)'
        coment.innerHTML = '<strong>Tenha uma boa tarde!</strong>'
    } else {
        // BOA NOITE
        imagem.src ='noite.jpg'
        document.body.style.background = 'rgb(42, 70, 105)'
        coment.innerHTML = '<strong>Tenha uma boa noite!</strong>'
    }
}