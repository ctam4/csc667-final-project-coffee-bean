const websocket = require('websocket');
const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');
const httpPort = 5080;
const httpsPort = 5443;
const httpsOptions = {
  key: fs.readFileSync('../../server.key'),
  cert: fs.readFileSync('../../server.cert'),
};
const httpServer = http.createServer();
const httpsServer = https.createServer(httpsOptions);
const websocketOptions = {
  httpServer: [httpServer, httpsServer],
  autoAcceptConnections: false,
};
const app = new websocket.server(websocketOptions);

const originIsAllowed = (origin) => {
  // put logic here to detect whether the specified origin is allowed.
  return true;
};

app.on('request', function(request) {
  if (!originIsAllowed(request.origin)) {
    // Make sure we only accept requests from an allowed origin
    request.reject();
    console.log((new Date()) + ' Connection from origin ' + request.origin + ' rejected.');
    return;
  }
  var connection = request.accept('echo-protocol', request.origin);
  console.log((new Date()) + ' Connection accepted.');
  connection.on('message', function(message) {
    if (message.type === 'utf8') {
      console.log('Received Message: ' + message.utf8Data);
      connection.sendUTF(message.utf8Data);
    }
    else if (message.type === 'binary') {
      console.log('Received Binary Message of ' + message.binaryData.length + ' bytes');
      connection.sendBytes(message.binaryData);
    }
  });
  connection.on('close', function(reasonCode, description) {
    console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
  });
});

httpServer.listen(httpPort)
httpsServer.listen(httpsPort);