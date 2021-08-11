// var album = {
//     title: 'Depois da Guerra',
//     released: '2007',
//     showInfo: function() {
//         console.log(`${this.title} foi lançado em: ${this.released}`)        
//     }
// }

// album.showInfo();
// console.log(album.title);
// console.log(album.released);

var dvd = new Object();

dvd.title = 'Historias e Bicicletas'
dvd.released = 2016
dvd.tracks = ['Diz', 'Encontro', 'Confiar']
dvd.showInfo = function() {
    this.tracks.forEach(function(value, key) {
        console.log(value)
    });
}

console.log(dvd.title);
console.log(dvd.released);
dvd.showInfo();