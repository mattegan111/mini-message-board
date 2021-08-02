var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello world!",
    user: "Charles",
    added: new Date()
  }
];

const title = 'Mini Message Board';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: title, messages: messages });
});

/* GET form page. */
router.get('/new', function(req, res, next) {
  res.render('form', { title: title});
});

/* POST form submission. */
router.post('/new', function(req, res, next) {
  const message = req.body.message;
  const messageUser = req.body.name;

  messages.push({text: message, user: messageUser, added: new Date()});

  res.redirect('/');
});

module.exports = router;
