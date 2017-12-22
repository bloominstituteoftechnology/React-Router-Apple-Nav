## Sprint Challenge (React-Router)

### 1. What is the difference between server side routing and client side routing?
Answer: _server-side routing_ is a standard routing where the actual process takes place in the server.
Whereas, _client-side routing_ takes place in the browser (client).

### 2. Mention some advantages of using client side routing.
Answer: 
 * Perfect for use in SPA (Single Page Applications)
 * Render based on the URL / Logic
 * Only request what is needed from the server, instead of loading the entire page.
 * Faster performance compared to Server-side routing

### 3. Which component is used to define a route and what props are commonly added to it?
Answer: `<Route>` component is used to define a route. 
_path_, _exact_, & _component_ are some commonly added props.

### 4. How can I make sure that the component associated with the "/" route is not displayed for every other route?
Answer: Using the keyword _exact_ like
  `<Route exact path="/" component={ someComponent } />`