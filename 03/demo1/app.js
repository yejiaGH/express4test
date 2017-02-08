var express = require('express');
var app = express();
app.get('/', function(req,res) {
	res.send(`<div>express demo01</div>`);
});

app.listen(3000);