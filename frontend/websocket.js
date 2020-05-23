import { w3cwebsocket as W3CWebsocket } from 'websocket';

let websocketUrl = `ws://${process.env.WEBSOCKET_HOST || window.location.hostname}`;
let port;
switch (window.location.protocol) {
  case 'http:':
    port = process.env.WEBSOCKET_HTTP_PORT || window.location.port;
    if (port !== 80) {
      websocketUrl += `:${port}`;
    }
    break;
  case 'https:':
    port = process.env.WEBSOCKET_HTTPS_PORT || window.location.port;
    if (port !== 443) {
      websocketUrl += `:${port}`;
    }
    break;
}

export default new W3CWebsocket(websocketUrl, 'echo-protocol');

/*
client.onerror = function() {
    console.log('Connection Error');
};

client.onopen = function() {
    console.log('WebSocket Client Connected');

    function sendNumber() {
        if (client.readyState === client.OPEN) {
            var number = Math.round(Math.random() * 0xFFFFFF);
            client.send(number.toString());
            setTimeout(sendNumber, 1000);
        }
    }
    sendNumber();
};

client.onclose = function() {
    console.log('echo-protocol Client Closed');
};

client.onmessage = function(e) {
    if (typeof e.data === 'string') {
        console.log("Received: '" + e.data + "'");
    }
};
*/
