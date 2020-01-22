var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var bayes = require('bayes');
var os = require('os').userInfo();

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
app.get('/jq.js', function(req, res){
  res.sendFile(__dirname + '/jquery-1.11.1.js');
});

io.on('connection', function(socket){
  var classifier = bayes();
 
  socket.on('xman', function(data){
   console.log('username:',socket.id)
   io.emit('response',{message:data.q,user:(os.username)});
  });
  
  
});

http.listen(3000, function(){
  console.log('listening on 127.0.0.1:3000');
});
