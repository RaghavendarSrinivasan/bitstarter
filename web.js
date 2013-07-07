var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
var fs=require('fs');
var data=fs.readFileSync('index.html');
var buf=new Buffer(data.length);
for(i=0;i<data.length;i++)
buf[i]=data[i];
  console.log(buf.toString('utf8', 0,buf.length));
  
response.send(buf.toString('utf8', 0,buf.length));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
