let apiUrl = window.location.protocol + '//' + (process.env.API_HOST || window.location.hostname);
let port;
switch (window.location.protocol) {
  case 'http:':
    port = process.env.API_HTTP_PORT || window.location.port;
    if (port !== 80) {
      apiUrl += ":" + port;
    }
    break;
  case 'https:':
    port = process.env.API_HTTPS_PORT || window.location.port;
    if (port !== 443) {
      apiUrl += ":" + port;
    }
    break;
}
apiUrl += '/';

export default apiUrl;
