const express = require('express');
const app = express();
const PORT = 3010;
// const prettyLog = require('pretty-log');

//
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    var mascots = [
      { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
      { name: 'Tux', organization: "Linux", birth_year: 1996},
      { name: 'Moby Dock', organization: "Docker", birth_year: 2013}
    ];
    var tagline = "No programming concept is complete without a cute animal mascot.";
  
    res.render('pages/index', {
      mascots: mascots,
      tagline: tagline
    });
  });

  
  // about page
  app.get('/about', function(req, res) {
    res.render('pages/about');
  });
// app.use(express.urlencoded({ extended: false }));

// Handle GET request
app.get('/', function (req, res) {
    res.send('Hello, World!'); 
    prettyLog('This is a success message', 'success');
});

// Handle POST request
app.post('/', function (req, res) {
    console.log(req.body);
    res.end();
});

// Handle PORT request
app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});
