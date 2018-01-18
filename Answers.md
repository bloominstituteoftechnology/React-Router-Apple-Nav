## What is the difference between _server side routing_ and _client side routing?
1. Server Side Routing: This handles HTTP requests. A server side request will cause the whole page to refresh, but it will only request necessary data.
2. Client Side Routing: This handles user interaction. It is handled by JS and will not refresh the whole page, though the page must be loaded on the first request, which will slow the initial loading time.





## Mention some advantages of using client side routing.

1. Routing between views is generally faster.
2. Smooth transitions and  animations are easier to implement.



## Which component is used to define a route and what _props_ are commonly added to it?

1. The `Route` component defines a route, while the props `path` and `component` are generally added to it.



## How can I make sure that the component associated with the _"/"_ route is not displayed for every other route?

1. Inputting the keyword `exact` after it.