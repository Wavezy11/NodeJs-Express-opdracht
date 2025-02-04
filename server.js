const express = require('express');
const app = express();
const PORT = 3010;
const prettyLog = require('pretty-log');

//
app.use(express.urlencoded({ extended: false }));

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
