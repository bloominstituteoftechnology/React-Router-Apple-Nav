1. What is the difference between _server side routing_ and _client side routing_?
    Server Side Routing -
        Server side routing is when a request is sent to a server to get a new page to display. In this type of routing all the work is done on the server side and an entirely new page is sent to the user, and the old page is discarded. Every request requires a full page refresh.
    Client Side Routing -
        Client side routing is routing handled internally by the code written, when a request is made for different information the entire page does not need to refresh; only the componenets needed to change the state to match the users request are called. This results in a different view of the page; but an entire refresh of the page is not necessary .

1. Mention some advantages of using client side routing.
    Client side routing provides a smoother experience for the user; full page refreshes are no longer necessary; data is changed generally much faster since the whole process is streamlined, and unecessary data is no longer be transmitted. For example: if your header never changes than why have it re-rendered each time you make a request for additional information. 
    Client side routing only changes the components related to the data request; and the code just changes the applications state and renders the altered state resulting in a changed view.

1. Which component is used to define a route and what _props_ are commonly added to it?
    Routes are defined by the <Route> component. This component is used to target a specific component and provide an anchor for <Link> to link to. Components that need to be rendered when the Link is called and the <Route> is navigated to.

1. How can I make sure that the component associated with the _"/"_ route is not displayed for every other route?
    To prevent "/" from displaying every route you will need to use the exact path designation to specify what "/" will implicitly render.