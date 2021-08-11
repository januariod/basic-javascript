// for e movido por declaracao

for (var a = 0; a < 10; a++) {
    console.log(`Repetindo porque ${a} é menor que 10`)
    
};

var i = 0;

while (i <= 10) {
    console.log(`Repetindo porque ${i} é menor que 10`)

    i++
};

var heroes = ['Spider-Man', 'Ironman', 'Captain America', 'Black Panther', 'Black Window']

heroes.forEach(function(value, key) {
    console.log(`${value} na posição ${key}`)
});