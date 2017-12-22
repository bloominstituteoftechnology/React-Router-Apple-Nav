const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const server = express();

const allowedClients = {
  origin: 'http://localhost:3000'
};

server.use(cors(allowedClients));

server.use(bodyParser.json());

server.get('/api/subMenu/:menuName', (req, res) => {
  res.status(200).json()
});

server.listen(9000, () => {
  console.log('running on port 9000');
})
