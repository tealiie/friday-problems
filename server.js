var path = require('path')
var express = require('express')
var hbs = require('express-handlebars')
var routes = require('./routes')
var bodyParser = require('body-parser')

var PORT = 3000
var app = express()
app.use(bodyParser.urlencoded())

app.engine('hbs', hbs())
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static('public'))
  //
app.get('/', routes.getGenre)
app.post('/new', routes.newPost)

app.listen(PORT, function () {
  console.log('Listening on PORT', PORT)
})
