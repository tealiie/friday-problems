var fs = require('fs')
var path = require('path')

module.exports = {
  getMovies: getMovies,
  saveMovie: saveMovie
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

function saveMovie(entry, callback) {
  var movieEntry = path.join(__dirname, './movies.json')
  fs.readFile(movieEntry, function (err, data) {
    if (!err) {
      var newmovieArr = JSON.parse(data)
      newmovieArr.push(entry)
      var newMovie = JSON.stringify(newmovieArr)
      fs.writeFile(movieEntry, newMovie, function (err) {
        if (!err) {
          callback()
        }
      })
    }
  })
}
