1. What is the difference between server side routing and client side routing?

Answer: server side routing is when user clicks the link sending the request, the whole page will be rendered from server and old page will be replaced. 
Client side routing is when user clicks the link sending the request, the server doesn't respond that request but the state of the web application will be change and part of the web page will be rendered with different view. That view is usually a new component with some data from server or not.

2. Mention some advantages of using client side routing.

Answer: 
* the rendering speed is faster since the whole doesn't need to be changed but the part of the page will be replaced by some components with data from server or not. 
* the transition and the animations between views are easier to implement. 

3. Which component is used to define a route and what props are commonly added to it?

Answer: `<Route>` is used to define a route using react router. `path`, `component`, and `exact` are commonly added to it. There are `render` function, `children` function, `strict`, and `location` available to deal with more with `<Route>`. 

4. How can I make sure that the component associated with the "/" route is not displayed for every other route?

Answer: Usually we add `exact` props to `<Route>` which should be `<Route exact path="/">` afterwards to ensure that we want the path "/" match exactly what it is not partially matching.