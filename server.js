var path = require('path')
var express = require('express')
var hbs = require('express-handlebars')
var bodyParser = require('body-parser')

var routes = require('./routes')

var PORT = 3000
var app = express()
app.use(bodyParser.urlencoded())

app.engine('hbs'.hbs())
app.set('view engine', 'hbs')
app.set('views', path.join(__name, 'views'))
app.use(express.static(path.join(__dirname, 'public'))

    app.get('/', routes.getIndex)
    // app.get('/[TK TK TK]', routes.getPosts)
    app.post('/[TK TK TK]', routes.newPost)

    app.listen(PORT, function () {
      console.log('Listening on PORT', PORT)
    })
