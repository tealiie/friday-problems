var fs = require('fs')
var path = require('path')

module.exports = {
  getGenre: getGenre,
  yourRec: yourRec
}

function getGenre(callback) {
  fs.readFile('./data/----_.json', function (err, json) {
    var movieEntries = JSON.parse(json)
    callback(null, movieEntries)
  })
}

function yourRec(callback) {
  fs.writeFile
}
