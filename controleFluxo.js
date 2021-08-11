var idade = prompt("Qual sua idade?")

if (idade >= 18) {
    console.log("Você pode ir ao show do Iron Maiden")
} else if (idade >= 12) {
    console.log("Você pode ir no show do Jonas Brothers")
} else {
    console.log("Você pode ir ao show do Patati e Patatá")
}

var ingresso = prompt("Qual o tipo do seu ingresso")

switch (ingresso) {
    case 'vip':
        console.log("Acesse o camarote")
        break;
    case 'premium':
        console.log("Acesse a pista")
        break;
    case 'comum':
        console.log("Acesse a arquibancada")
        break;
    default:
        console.log("Seu ingresso é inválido")
        break;
}