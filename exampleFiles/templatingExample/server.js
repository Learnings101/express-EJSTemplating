const express = require('express');
const app = express();
const PORT = 3000;

app.set('views', __dirname + '/views') //specify the views directory
app.set('view engine', 'ejs') //register the template engine

app.get('/', (req, res) => {
  res.render('default.ejs');
});

app.listen(PORT, () => console.log(`Visit http://localhost:${PORT}`));

