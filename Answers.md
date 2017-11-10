1. What is the difference between server side routing and client side routing?
With server-side routing, the server returns a new page every time the URL changes.
With client-side routing, the JavaScript loaded on the page generates and returns the new page. (It may request new data from the server, though.)

2. Mention some advantages of using client side routing.
Routing is faster and more data-efficient. Transitions between views are eaiser to implement. 

3. Which component is used to define a route and what props are commonly added to it?
<Router> and <Route /> tags are used to define a route, and these are included in index.js (or wherever the ReactDOM.render() function is.)
Props commonly include "path" and "component," which define the URL and the component that should be rendered in that place for that URL.

4. How can I make sure that the component associated with the "/" route is not displayed for every other route?
By adding "exact," as in:
<Route exact path="/path" component={example} />