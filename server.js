const express = require('express');
const bodyParser = require('body-parser');
const CORS = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(CORS());

const dummyData = [
    {
        id: 0,
        name: 'Mac',
        sub: [
            {
                name: 'MacBook'
            },
            {
                name: 'MacBook Air'
            },
            {
                name: 'MacBook Pro'
            },
            {
                name: 'iMac'
            },
            {
                name: 'iMac Pro'
            },
            {
                name: 'Mac Pro'
            },
            {
                name: 'Mac mini'
            },
            {
                name: 'Accessories'
            },
            {
                name: 'High Sierra'
            },
            {
                name: 'Compare'
            }
        ]
    },
    {
        id: 1,
        name: 'iPad',
        sub: [
            {
                name: 'iPad Pro'
            },
            {
                name: 'iPad'
            },
            {
                name: 'iPad mini 4'
            },
            {
                name: 'iOS 11'
            },
            {
                name: 'Accessories'
            },
            {
                name: 'Compare'
            }
        ]
    },
    {
        id: 2,
        name: 'iPhone',
        sub: [
            {
                name: 'iPhone X'
            },
            {
                name: 'iPhone 8'
            },
            {
                name: 'iPhone 7'
            },
            {
                name: 'iPhone 6s'
            },
            {
                name: 'iPhone SE'
            },
            {
                name: 'iOS 11'
            },
            {
                name: 'Accessories'
            },
            {
                name: 'Compare'
            }
        ]
    },
    {
        id: 3,
        name: 'Watch',
        sub: [
            {
                name: 'Apple Watch Series 3'
            },
            {
                name: 'Apple Watch Nike+'
            },
            {
                name: 'Apple Watch Hermès'
            },
            {
                name: 'Apple Watch Edition'
            },
            {
                name: 'Apple Watch Series 1'
            },
            {
                name: 'watchOS'
            },
            {
                name: 'Bands'
            },
            {
                name: 'Accessories'
            },
            {
                name: 'Compare'
            }
        ]
    },
    {
        id: 4,
        name: 'TV',
        sub: [
            {
                name: 'Apple TV 4K'
            },
            {
                name: 'Apple TV'
            },
            {
                name: 'TV App'
            },
            {
                name: 'Accessories'
            },
            {
                name: 'Compare'
            }
        ]
    },
    {
        id: 5,
        name: 'Music',
        sub: [
            {
                name: 'Apply Music'
            },
            {
                name: 'iTunes'
            },
            {
                name: 'HomePod'
            },
            {
                name: 'iPod touch'
            },
            {
                name: 'Music Accessories'
            },
            {
                name: 'Gift Cards'
            }
        ]
    },
    {
        id: 6,
        name: 'Support',
        sub: []
    }
];

app.get('/api/:name', (req, res) => {
	res.send(dummyData);
});

app.get('/api/:name/:id', (req, res) => {
	const data = dummyData.filter(data => data.id.toString() === req.params.id)[0];
	res.status(200).json(data);
});

app.post('/api/:name', (req, res) => {
	if (req.body.id !== undefined) dummyData.push(req.body);
	res.status(201).json(dummyData);
});

app.listen(5000, () => {
	console.log('Server listening on port 5000');
});
