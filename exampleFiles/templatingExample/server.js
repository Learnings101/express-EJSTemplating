const express = require('express');
const app = express();
const PORT = 3000;

app.set('views', __dirname + '/views') //specify the views directory
app.set('view engine', 'ejs') //register the template engine

app.get('/', (req, res) => {
  res.render('default.ejs', {
    title: 'Homepage',
    classname: 'home',
    users: ['Tom', 'Dick', 'Harry']
  });
});

app.get('/about', (req, res) => {
  res.render('about.ejs', {
    title: 'About Us',
    classname: 'about'
  });
});

app.get('*', (req, res) => res.send('Bad Route'));

app.listen(PORT, () => console.log(`Visit http://localhost:${PORT}`));

