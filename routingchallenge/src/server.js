const express = require('express');
const app = express();

server.use(express.static('public'));
server.use(require('./routes/index.jsx'));

var PORT = 3000;
server.listen(PORT, function() {
    console.log('http://localhost:' + PORT);
});