1. What is the difference between _server side routing_ and _client side routing_?
   * Server Side Routing- an application in which the client's server responds to requests and sends data to the user accordingly, causing the page to refresh. 
   * Client Side Routing- Takes place in the browser and immedietly responds to user input based on changing the components of the page being viewed. 


2. Mention some advantages of using client side routing.
   * A. Routing between views is quicker and doesn't have to refresh the entire page. 
     B. Ideal for employing a single page application.
     C. Renders based solely on the URL. 


3. Which component is used to define a route and what _props_ are commonly added to it?
   * Route is the component used to define a route.  'Exact' 'Component' and 'Link' are common props added to this. 

4. How can I make sure that the component associated with the _"/"_ route is not displayed for every other route?
   * Specifying 'exact' after the route will solve this problem.