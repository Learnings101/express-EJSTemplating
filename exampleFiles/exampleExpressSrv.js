const express = require('express');
const app = express(); //namespace our application
const PORT = 3000;

app.get('/', (req, res) => res.send('Hello World'));
app.get('/who/:name?', (req, res) => {
  let name = req.params.name;
  res.send(`Hello ${name}!`);
});
app.get('*', (req, res) => {
  // res.redirect('/');
  res.send('Bad route');
});

const server = app.listen(PORT, () => console.log(`Go to http://localhost:${PORT}`));