var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');
/* GET users listing. */
router.get('/', function(req, res, next) {
  knex.table('posts').select().then(function(posts){
    res.render('gwall', {posts: posts});

  });
});
router.get('/post', function(req, res, next) {
  res.render('post');
});
router.post('/post', function(request, response, next) {
  var username = request.body.username;
  var image = request.body.image;
  var rant = request.body.rant;
  var data = {
    username: username,
    image: image,
    rant: rant
  };
  // insert into tables
  knex.table('posts').insert(data).then(function(){
    console.log('you did it!');
    response.redirect('/gwall');
  }).catch(function(error){
      next(error);
  });
});



module.exports = router;
