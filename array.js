// var vingadores = new Array();

var vingadores = ['Homem de ferro', 'Capitao America', 'Thor']

vingadores.push('Hulk', 'Gaviao Arqueiro', 'Viuva Negra', 'Homem Aranha')

// vingadores.pop(); // apaga o ultimo registro do array
// vingadores.shift(); // apaga o primeiro registro do array

var indice = vingadores.indexOf('Homem Aranha')

vingadores.splice(indice)

var novosVingadores = ['Homem Aranha', 'Visao', 'Wanda', 'Pantera Negra']

var todosVingadores = vingadores.concat(novosVingadores)

console.log(todosVingadores)