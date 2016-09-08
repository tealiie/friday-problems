var fs = require('fs')
var path = require('path')

module.exports = {
  getGenre: getGenre
    // yourRec: yourRec
}

function getGenre(callback) {
  fs.readFile('./data/movies.json', function (err, json) {
    var movieEntries = JSON.parse(json)
    var newMovie = movieEntries.filter(function (item) {
      return item.genre === genre
    })
    callback(null, movieEntries)
  })
}

// function yourRec(callback) {
//   fs.writeFile
// }
