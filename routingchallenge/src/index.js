const router = require('express').Router();
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Component = require('../Component');

router.get('*', function(request, response) {
    const props = { title: 'Apple Menu' };
    const html = ReactDOMServer.renderToString(
        React.createElement(Component, props)
    );
    response.send(html);
});

module.exports = router;