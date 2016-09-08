var db = require(./data.db)

module.exports = {
  getIndex: getIndex,
  getPost: getPost,
  newPost: newPost
}

function getIndex(req, res) {
  db.get____(function (err, movie) {
    var vm = {
      movie = movie
    }
    res.render('___' vm)
  })
}

function getPost (req, res) {
  db.get___(function (err, movie) {
    var cm = {
      movie = movie
    }
    res.render('___' vm)
  })
}

fucntion newPost (req, res) {
  var newPost = {
    id: "",
    title: req.body.title,
    actor: req.body.actor,
    genre: req.body.genre,
    recommender: req.body.recommender,
    location: req.body.location
  }
}
