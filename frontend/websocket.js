import { client as WebSocketClient } from 'websocket';
const client = new WebSocketClient();

let websocketUrl = 'ws://' + process.env.WEBSOCKET_HOST || window.location.hostname;
let port;
switch (window.location.protocol) {
  case 'http:':
    port = process.env.WEBSOCKET_HTTP_PORT || window.location.port;
    if (port !== 80) {
      websocketUrl += ':' + port;
    }
    break;
  case 'https:':
    port = process.env.WEBSOCKET_HTTPS_PORT || window.location.port;
    if (port !== 443) {
      websocketUrl += ':' + port;
    }
    break;
}
websocketUrl += '/';

export default client.connect(websocketUrl, 'echo-protocol');

/*
client.on('connectFailed', function(error) {
  console.log('Connect Error: ' + error.toString());
});

client.on('connect', function(connection) {
  console.log('WebSocket Client Connected');
  connection.on('error', function(error) {
    console.log('Connection Error: ' + error.toString());
  });
  connection.on('close', function() {
    console.log('echo-protocol Connection Closed');
  });
  connection.on('message', function(message) {
    if (message.type === 'utf8') {
      console.log('Received: '' + message.utf8Data + ''');
    }
  });

  function sendNumber() {
    if (connection.connected) {
      var number = Math.round(Math.random() * 0xFFFFFF);
      connection.sendUTF(number.toString());
      setTimeout(sendNumber, 1000);
    }
  }
  sendNumber();
});
*/
