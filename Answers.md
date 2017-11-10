1. What is the difference between _server side routing_ and _client side routing_?

    Routing in general can be described as process that connects certain requests to the code in order to alter or update data and/or webpages.

    Server Side Routing - Is when a GET request is sent to the server to send back a whole new document/page to be loaded. This refreshes the entire page and becomes a whole new document, disregarding the old page previous to it. Only plus side for this kind of routing that I can think of is for search engine optimization for that webpage.

    Client-Side Routing - The application that makes up the pages are all loaded up once in the first request. Then any change made on the page, such a URL change, or link clicked, will result in an adjustment in the state of the application. The change in state results to a change of the view in the application, such as rendering a component or even a request to a server for some data that the application will turn into some HTML elements. But the page never needs to refresh itself, it maintains it's Single Page Application status. This helps keep the page loading incredibly efficient when changing states in the app.

2. Mention some advantages of using client side routing.

    - Once the page has been loaded once, the change in views of the page withing the app render extremely efficient because less data is processed and all changes happen locally instead of having to request data from the server everytime.


3. Which component is used to define a route and what _props_ are   commonly added to it?

    When implementing the routes into an application, importing BrowserRouter and Route to your application create the ability to navigate throughout the page with URLs and Links.
    You use Route to attach the URL to a specific component.

    Props that are added to the Route method are:
    `match` - contains information about how a <Route path> matched the URL
    `location` - represent where the app is now, where you want it to go, or even where it was
    `history` - provides a history in memory of previous locations visted in the application

4. How can I make sure that the component associated with the _"/"_  route is not displayed for every other route?

    When creating the Route and Link component and connecting it with components created for the application, using the **exact** `path` syntax with ensure that when that view is loaded only associated with the `/` in the URL.