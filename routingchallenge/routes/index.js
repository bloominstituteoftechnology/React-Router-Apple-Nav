const router = require('express').Router();
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Component = require('../Component');
const ReactRouter = require('react-router');

router.get('*', function(request, response) {
    var props = { title: 'Apple Menu' };
    ReactRouter.match({
        routes: (
            <ReactRouter.Router history={ReactRouter.browserHistory}>
                <ReactRouter.Route path='/' component={require('../Component')}>
                </ReactRouter.Route>
            </ReactRouter.Router>
        ), location: request.url }, 
    function(error, redirectLocation, renderProps) {
        if (renderProps) {
            var html = ReactDOMServer.renderToString(
                <ReactRouter.RouterContext {...renderProps} />
            );
            response.send(html);
        } else {
            response.status(404).send('Not Found');
        }
    });
});

module.exports = router;