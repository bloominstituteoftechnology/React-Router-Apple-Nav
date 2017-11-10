1 - In server-side routing, when a link is clicked a new page is requested from the server. This causes the 
whole page to refresh. In client-side, when a link is clicked no request is sent to the server, instead the 
application state changes to re-render the page. 

2- Some advantages to client-side routing are that because less data is processed, page renders generally 
happen faster. Also, animations and smooth transitions are easier to implement. 

3 - The Route component is used to define the route. It accepts a path and a component as props. 

4 - In order to ensure that the component associated with "/" is not displayed with all routes, we use the
exact={True} line. 
