const express = require('express');
const app = express();
const hbs = require('hbs');

//To make public a dir
app.use(express.static(__dirname + '/public'));

//Using HBS as the default view engine
hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');

app.get('/', function (req, res) {
  res.render('home', {title: 'Home'});
})

app.listen(3000, () => {
  console.log('Running in the port 3000');
})