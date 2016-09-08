// var db = require(. / data.db)

module.exports = {
  getGenre: getGenre,
  // newPost: newPost
}

function getGenre(req, res) {
  // db.get___(function (err, movie) {
  //   var vm = {
  //     movie = movie
  //   }
  res.render('___', vm)
})
}

function yourRec(req, res) {
  var yourRec = {
    title: req.body.title,
    actor: req.body.actor,
    recommender: req.body.recommender,
    location: req.body.location
  }
}
