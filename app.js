const express = require('express');
const app = express();
const port = 3000;
const wiki = require('./wiki.js');

app.get('/', (req, res) => {
  res.send('Hello World!')
});
app.use('/wiki', wiki);
app.all('/secret', function(req, res, next) {
  console.log('Accessing the secret section ...');
  next(); // pass control to the next handler
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});