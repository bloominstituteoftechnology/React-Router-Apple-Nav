1. What is the difference between _server side routing_ and _client side routing_?
Discovering different parts of a website by changing a url is called Routing.
Different urls of a website can be served from server by sending different HTML files when requested from server. In client side routing whole website is rendered in initial phase and roting is handled on client side by just changing the path and rendering the elements that are changed in a view.

2. Mention some advantages of using client side routing.
* There is no request to server side. Hence full page refreshing doesn't happen.
* Data can be sent as API requests in form of JSON objects.
* The transition between different URLs is super fast 

3. Which component is used to define a route and what _props_ are commonly added to it?
Ans Component - Route
    Props - Component to be routed to and url Path of that component 
    
4. How can I make sure that the component associated with the _"/"_ route is not displayed for every other route?
Ans Use keyword Exact in the Route Component.
