var express = require('express');
var session = require('express-session');
var favicon = require('serve-favicon');
var mongoose = require('mongoose');
var MongoStore = require('connect-mongo/es5')(session);
var dotenv = require('dotenv');
var app = express();


/**
 * Default path: .env
 */
dotenv.load({ path: '.env' });


/**
 * Controllers (route handlers).
 */
var dataController = require('./controllers/datas');


/**
 * Connect to MongoDB.
 */
mongoose.connect(process.env.MONGODB || process.env.MONGOLAB_URI);
mongoose.connection.on('error', function() {
  console.log('MongoDB Connection Error. Please make sure that MongoDB is running.');
  process.exit(1);
});
mongoose.connection.once('open', function() {
  console.log('Connected MongoDB!');
});

app.set('view engine', 'jade');
app.use(favicon(__dirname + '/public/favicon.png'));
app.use(express.static(__dirname + '/public'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: process.env.SESSION_SECRET,
  store: new MongoStore({
    url: process.env.MONGODB || process.env.MONGOLAB_URI,
    autoReconnect: true
  })
}));

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

// seed
// sudo mongoimport --host=127.0.0.1:27017 --db chart-datas --collection chickenDatas data.json --jsonArray
app.get('/chart-datas', dataController.index);

app.listen(8889, function () {
  console.log('Example app listening on port 8889!');
});
