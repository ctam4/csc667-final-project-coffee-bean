const http = require('http');
const https = require('https');
const fs = require('fs');
const websocketServer = require('websocket').server;
const { incrementView, decrementView, getViews } = require('./views');

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

const app = new websocketServer(websocketOptions);

const broadcastMessage = (message) => {
  app.connections.forEach((client) => {
    client.send(JSON.stringify(message));
  });
};

const update = (pid) => {
  broadcastMessage({
    type: 'UPDATED_VIEW',
    pid,
    viewers: getViews(pid),
  });
};

// put logic here to detect whether the specified origin is allowed.
const originIsAllowed = (origin) => true;
app.on('request', (request) => {
  if (!originIsAllowed(request.origin)) {
    request.reject();
    return;
  }
  const connection = request.accept('echo-protocol', request.origin);
  connection.on('message', (message) => {
    if (message.type === 'utf8') {
      const data = JSON.parse(message.utf8Data);
      switch (data.action) {
        case 'INCREMENT_VIEW': {
          incrementView(data.pid);
          update(data.pid);
          break;
        };
        case 'DECREMENT_VIEW': {
          decrementView(data.pid);
          update(data.pid);
          break;
        }
        default: {
          console.log('default');
        }
      }
      connection.sendUTF(message.utf8Data);
    } else if (message.type === 'binary') {
      connection.sendBytes(message.binaryData);
    }
  });
  connection.on('close', (reasonCode, description) => {
  });
});

httpServer.listen(httpPort);
httpsServer.listen(httpsPort);
