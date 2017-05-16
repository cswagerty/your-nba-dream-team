var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.use(express.static("."));

var port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log('Server started on port ' + port);
});
