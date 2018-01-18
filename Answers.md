## Answers
> (1) What is the difference between _server side routing_ and _client side routing_?

*Server side routing loads webpages using routes on the server whereas client side routing loads routes on the client side (client's web browser).*

> (2) Mention some advantages of using client side routing.

*Client side routing allows for decrease load on the server as well as improved webpage experience when routing to different routes on the client side as most resources are loaded on first webpage load (via server).*

> (3) Which component is used to define a route and what _props_ are commonly added to it?

*The `<Route />` component is used to define a route and `params` (usually unique URLs) are added to `match.props` on `<Route />` components.*

> (4) How can I make sure that the component associated with the _"/"_ route is not displayed for every other route?

*Use an `exact path` to ensure `/` is not displayed on every other route such as `<Route exact path="/" component={} />`.*