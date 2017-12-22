1. What is the difference between server side routing and client side routing?
server side routing: handles HTTP requests, and sends responses back. A server-side request will cause the whole page to refresh,and will only request the data that's needed.

Client-side routhing: handles user interaction and make requests to the server. A client-side route will be handled by the JavaScript that is loaded on the page, so the whole page won't refresh, just some elements that will change. But the whole website needs to be loaded on the first request, and this initial loading takes time, and thereis a possibility that there is data downloaded for views user won't even come across.



2. Mention some advantages of using client side routing.
Do not need to refresh pages every time when user requests from server. 

Less data is processed when requests, so routing is faster.




3. Which component is used to define a route and what props are commonly added to it?
react-router component Route. pass "path" and "components" props to it.
<Route path="/" components={Component} />




4. How can I make sure that the component associated with the "/" route is not displayed for every other route?
By using "exact" as props to the Route