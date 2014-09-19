var net = require('net');


var port = 8888;
var name = "";

process.argv.forEach(function (val, index, array) {
  if (val == "-p") {
    port = array[index + 1];
  } else if (val == "-n") {
    name = array[index + 1];
  }
});

var server = net.createServer(function(c) { //'connection' listener
  console.log('server connected');
  c.on('end', function() {
    console.log('server disconnected');
  });
    c.pipe(c);

    c.on('data', function(data) {
        
        console.log('DATA ' + data);
        
    });

});
server.on("data", function(data) {
  console.log(data);
})

server.listen(port, function() { //'listening' listener
  console.log('server **' + name + '** bound in port **' + port + "**");
});