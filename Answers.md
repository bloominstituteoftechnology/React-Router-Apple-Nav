What is the difference between server side routing and client side routing?
    Answer: Server side routing is when clicking on a link, which in turn will request a new page from the server.  As for client side routing, it is handled internally when changing the state of the application.
Mention some advantages of using client side routing.
    Answer: The advantages of using client side routing is processing less data, routing between views are usually quicker.  Smooth transitions and animations between views are easier to setup.
Which component is used to define a route and what props are commonly added to it?
    Answer: The component used to define a route is called "Router" while "Route" are commonly added props.
How can I make sure that the component associated with the "/" route is not displayed for every other route?
    Answer: When establishing a "/" route to one component, you are to no longer repeat "/" with another.  Would be advisable to use different route names such as "/about" or "/contact"