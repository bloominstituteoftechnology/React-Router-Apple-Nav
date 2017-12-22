1. What is the difference between _server side routing_ and _client side routing_?

  Server side routing is done with something like Express on the server. It's sets up routes for your app and handles the requests for different routes. Client side routing is done through something like React-Router. You setup all your routes in your React app and all requests are handled there.

1. Mention some advantages of using client side routing.
  Easier to handle state changes and the load of router is placed on the clients machine.

1. Which component is used to define a route and what _props_ are commonly added to it?

  You use the `<Route>` component and give it a `path` prop and a `component` prop.


1. How can I make sure that the component associated with the _"/"_ route is not displayed for every other route?

  Use the exact prop/keyword to only have that route render when the URL match exactly that.