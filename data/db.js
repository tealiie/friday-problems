var fs = require('fs')
var path = require('path')

module.exports = {
  getMovies: getMovies
    // yourRec: yourRec
}

function getMovies(genre, callback) {
  fs.readFile('./data/movies.json', function (err, json) {
    var movieEntries = JSON.parse(json)
    var movies = movieEntries.filter(function (movie) {
      return movie.genre === genre
    })
    callback(null, movies)
  })
}

// function yourRec(callback) {
//   fs.writeFile
// }
