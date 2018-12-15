const express = require('express');
const app = express();
const hbs = require('hbs');

//To make public a dir
app.use(express.static(__dirname + '/public'));

const PORT = process.env.PORT || 5000;

//Using HBS as the default view engine
hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');

app.get('/', function (req, res) {
  res.render('home', {title: 'Home'});
})

console.log(port);

app.listen(port, () => {
  console.log(`Running in the port ${port}`);
})