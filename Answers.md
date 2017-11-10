1. What is the difference between _server side routing_ and _client side routing_?

Serverside routing takes place behind the application. The server will return coresponding data/xml when a route changes and the application view will render what the server returns. Client side routing takes place in browser. The history api is responsible for setting the url and adding the page into the history so that back and forward buttons work accordingly. The app also renders componenets conditionally based on the url.

2. Mention some advantages of using client side routing.

Advantages of client side routing include performance and persistence of application state and variables. The simplicity is nice for front end people so that they can implement routing without touching server code.

3. Which component is used to define a route and what _props_ are commonly added to it?

The Route component defines a route. It has an asociated URL, Component, and sometimes 'exact'

4. How can I make sure that the component associated with the _"/"_ route is not displayed for every other route?

Exact prop