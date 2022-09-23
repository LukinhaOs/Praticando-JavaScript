var agora = new Date()
var hora = agora.getHours()
var minute = agora.getMinutes()
console.log(`Agora são exatamente ${hora} horas e ${minute} minutos!`)
if (hora <= 12) {
    console.log('Tenha uma bom dia!')
} else if (hora <= 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}