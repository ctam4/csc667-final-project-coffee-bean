let url;
let port;
url = window.location.protocol + '//' + (process.env.API_HOST || window.location.hostname);
switch (window.location.protocol) {
  case 'http:':
    port = process.env.API_HTTP_PORT || window.location.port;
    if (port !== 80) {
      url += ':' + port;
    }
    break;
  case 'https:':
    port = process.env.API_HTTPS_PORT || window.location.port;
    if (port !== 443) {
      url += ':' + port;
    }
    break;
}
url += '/';

const apiUrl = url;
export default apiUrl;
