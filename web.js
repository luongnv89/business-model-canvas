var express = require('express');

var app = express();
app.use(express.static('./'));
app.get('/', function(request, response) {
	response.render('index.html');
});
app.listen(process.env.PORT || 4000);
