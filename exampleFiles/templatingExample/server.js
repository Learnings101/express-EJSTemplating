const express = require('express');
const app = express();
const PORT = 3000;
const routes = require('./routes');

app.set('views', __dirname + '/views') //specify the views directory
app.set('view engine', 'ejs') //register the template engine

/*
With Express, we can use the locals object to pass along information that we 
want any of our templates to be able to access. 
It can be a variable, object or any type of data set.
*/
app.locals.pagetitle = 'Awesome website';
// app.locals.

app.get('/', routes.index);

app.get('/about', routes.about);

app.get('*', (req, res) => res.send('Bad Route'));

app.listen(PORT, () => console.log(`Visit http://localhost:${PORT}`));

