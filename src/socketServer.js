var net = require('net');
var server = net.createServer(function(c) { //'connection' listener
  console.log('server connected');
  c.on('end', function() {
    console.log('server disconnected');
  });
  c.write('hello\r\n');
  c.pipe(c);

    c.on('data', function(data) {
        
        console.log('DATA ' + data);
        
    });

});
server.on("data", function(data) {
	console.log(data);
})

server.listen(8888, function() { //'listening' listener
  console.log('server bound');
});