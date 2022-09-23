var agora = new Date()
var diasem = agora.getDay()
/* 
    Domingo 0°
    Segunda 1°
    Terça 2°
    Quarta 3°
    Quinta 4°
    Sexta 5°
    Sabádo 6°
*/

/* console.log(diasem) -- Aqui é somente um valor, 
para identificar o dia da semana */

switch(diasem) {
    case 0:
        console.log('Domingo')
    case 1:
        console.log('Segunda-Feira')
    case 2:
        console.log('Terça-Feira')
    case 3:
        console.log('Quarta-Feira')
    case 4:
        console.log('Quinta-Feira')
    case 5:
        console.log('Sexta-Feira')
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('ERRO. Dia da Semana inválido!')
        break
}