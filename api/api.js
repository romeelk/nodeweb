var express = require('express')
var bodyParser = require('body-parser')
var Post = require('./models/post')

var app = express()
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.sendfile('layouts/index.html')
})


/*app.get('/api/posts', function (req, res, next) {
  Post.find(function(err, posts) {
    if (err) { return next(err) }
    res.json(posts)
  })
})
app.post('/api/posts', function (req, res, next) {
  var post = new Post({
    username: req.body.username,
    body: req.body.body
  })
  post.save(function (err, post) {
    if (err) { return next(err) }
    res.json(201, post)
  })
})*/
app.use(require('./controllers/api/posts'))
app.use( require('./controllers/static'))
app.use(function(req, res) {
        res.sendfile('layouts/404.html', 404);
        });

app.listen(3000, function () {
  console.log('Server listening on', 3000)
})
