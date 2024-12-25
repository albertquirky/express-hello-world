const express = require("express");
const app = express();
const port = process.env.PORT || 3001;


const server = app.listen(port, () => console.log('Example app listening on port ${port}!'));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

var meow = "hi";
const fs = require('node:fs');

fs.readFile('index2.html', 'utf8', (err, data) => { 
  
  
  app.get("/", (req, res) => res.type('html').send(data));


});

app.post('/', (req, res) => {
  res.send('Got a POST request')
});
