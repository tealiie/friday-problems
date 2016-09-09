var db = require('./data/db')

module.exports = {
  getGenre: getGenre,
  // newPost: newPost
}

function getGenre(req, res) {
  var genre = req.query.genre
  db.getMovies(genre, function (err, movies) {
    if (err) {
      return res.send(err.message)
    }
    var vm = {
      movies: movies
    }
    res.render('index', vm)
  })
}




// db.getMovie(function (err, movie) {
//   var vm = {
//     movie = movie
//   }
//   res.render('home', vm)
// })
// }
//
// function yourRec(req, res) {
//   var yourRec = {
//     title: req.body.title,
//     actor: req.body.actor,
//     recommender: req.body.recommender,
//     location: req.body.location
//   }
// }
