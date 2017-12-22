1. What is the difference between _server side routing_ and _client side routing_?
Server-side routing delivers different content *from the server* based on path, client-side routing delivers content that's hosted on the client making the request. Server side routing creates new documents where client-side changes the app's internal state.

2. Mention some advantages of using client side routing.
Going to a new routes doesn't require a full refresh of the page
Don't necessarily need to GET new data from a remote server every time route is changed, (ideally) resulting in fewer server calls.


3. Which component is used to define a route and what _props_ are commonly added to it?
The <Route /> component defines a react router route, with a match, history, and location props

4. How can I make sure that the component associated with the _"/"_ route is not displayed for every other route?
Use the "exact" modifier after the "/" route, like so: <Route path="/" component={foo} exact />