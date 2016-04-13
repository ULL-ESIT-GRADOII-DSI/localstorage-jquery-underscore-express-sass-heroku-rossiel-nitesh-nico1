var express = require('express')
var app = express()
var path = require('path');
var calculate = require('./csv.js');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

var expressLayouts = require('express-ejs-layouts');
app.set('layout', 'layout');
app.use(express.static('public')); 
app.use(expressLayouts);

app.set('port', (process.env.PORT || 8080)); 

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res){
  res.render('index', { title: "CSV", error: ""});
});

app.post('/csv', function(req, res){
  console.log(req.body);
  var original = req.body.original;
  if (!original) {
    res.render('index', {title:"CSV2", error: "Has introducido una entrada erronea"});
  }
  else {
    var data = calculate(original);
    res.render('csv', {items: data, title: 'CSV3'});
  }
});



app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
