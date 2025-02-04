var express = require('express')
var responseTime = require('response-time')
const port = process.env.PORT || 1001; //server running on 8081;

var app = express()

app.use(responseTime((req, res, time) => {
    console.log(`Response time: ${time.toFixed(2)} ms`);
}));

app.get('/', function (req, res) {
    console.log(`hello world`);
    res.send(`hello world`);
})

app.listen(port, () => {   //read port
    console.log(`Server is running on port ${port}`);
});

