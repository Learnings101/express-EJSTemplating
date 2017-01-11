exports.index = (req, res) => {
  res.render('default.ejs', {
    title: 'Homepage',
    classname: 'home',
    users: ['Tom', 'Dick', 'Harry']
  });
};

exports.about = (req, res) => {
  res.render('default.ejs', {
    title: 'About Us',
    classname: 'about'
  });
};