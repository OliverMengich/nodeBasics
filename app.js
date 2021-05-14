const http = require('http');
const port = 3000;
const routes = require('./routes.js');
const server = http.createServer(routes);
server.listen(port);