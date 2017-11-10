1. Server-side routing is when your request causes the whole page to refresh. This is because a new GET request is sent to the server. Client-side routing is when the route is handled internally by the JS that is loading on the page.

2. Pros: Less data is processed and routing bewteen views is generally faster. It also has smoother transitions and animations between views.

3. <Route /> is used to define a route. Common props used would be 'path' and 'component'.

4. Just add exact.
