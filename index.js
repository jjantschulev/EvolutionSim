var PORT = 3014;

var express = require('express');
var app = express();
var server = app.listen(PORT, function () {
  console.log("Evolution server running on port: " + PORT);
});
app.use(express.static('public'));
