## Answers
1. Question: What is the difference between _server side routing_ and _client side routing_?
  * server side routing is done through HTTP requests and information is transfered between the server and the client when the client needs it. Client side routing is is done inside the client and uses information the client already has in memory, or locally.
1. Question: Mention some advantages of using client side routing.
  * The software is not dependent on a conductive environment, where a connection to the server is always needed.
  * The information is available instantly without the latency involved in a server request and response process.
1. Which component is used to define a route and what _props_ are commonly added to it?
  * <Route /> and the props are usually "path" and "component"
  * Example: <Route exact path='/' component={Home}/>
1. How can I make sure that the component associated with the _"/"_ route is not displayed for every other route?
  * Using 'exact' inside your route declarations.