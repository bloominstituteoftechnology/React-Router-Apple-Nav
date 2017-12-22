const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const server = express();

const allowedClients = {
  origin: 'http://localhost:3000'
};

server.use(cors(allowedClients));

server.use(bodyParser.json());

const menus = [
  {name: "Mac", menuItems: [
    "MacBook", "MacBook Air", "MacBook Pro", "iMac", "iMac Pro", "Mac Pro", "Mac Mini", "Accessories", "High Sierra", "Compare"
  ]}
]

server.get('/api/menu/:menuName', (req, res) => {
  const menu = menus.filter(menu => menu.name === req.params.name)
  res.status(200).send(menu);
});


server.listen(9000, () => {
  console.log('running on port 9000');
})
