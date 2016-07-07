var express = require('express');
var favicon = require('serve-favicon');
var app = express();

app.set('view engine', 'jade');

app.use(favicon(__dirname + '/public/favicon.png'));
app.use(express.static(__dirname + '/public'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

app.get('/', function (req, res) {
  res.render('index', {
    title: 'Hello!',
    message: '그 많던 치킨은 누가 다 먹었나.'
  });
});

app.get('/datas', function (req, res) {
  res.render('datas', {
    title: 'Hello!',
    message: '그 많던 치킨은 누가 다 먹었나.'
  });
});

app.get('/api', function (req, res) {
  res.sendFile(__dirname + '/public/data.json')
});

app.listen(8889, function () {
  console.log('Example app listening on port 8889!');
});
