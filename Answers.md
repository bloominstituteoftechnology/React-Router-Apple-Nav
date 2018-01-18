# Questions
1. What is the difference between _server side routing_ and _client side routing_?
   * *Server side routing* renders a new HTML page from the server every time the url changes.
   * *Client side routing* happens when the route is handled internally. As opposed to rendering a new HTML page every time the url changes, the application changes state and renders a new component internally.
1. Mention some advantages of using client side routing.
   * Since less data is processed, routing between pages is faster
   * Smoother transitions and animations between views are easier to implement
1. Which component is used to define a route and what _props_ are commonly added to it?
   * A *Route* component is used to define a route. It typically includes *path* and *component* properties.
1. How can I make sure that the component associated with the _"/"_ route is not displayed for every other route?
   * By adding the word *exact* in the *Route* tag.
