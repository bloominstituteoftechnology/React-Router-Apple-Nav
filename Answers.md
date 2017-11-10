What is the difference between server side routing and client side routing?

Server side routing requests a page from the server, and causes a new document to be rendered
Client side routing results in a change of state to the current render, which prevents the entire document from being reloaded


Mention some advantages of using client side routing.

There are plusses and minuses to each system. 
With server side, you know you're only getting the exact data that's needed, and search engines are optimized for this style due to their long time use. However, each request requires a full refresh of data and a full re-render. This can be an issues for slower internet and graphic heavy pages.
Client side usually takes longer for the initial load, but is faster and smoother after that. Since each request only results in a re-render of the changes, transitions and animations are quick and easy.


Which component is used to define a route and what props are commonly added to it?

route - path component
connect - mapStateToProps Action

How can I make sure that the component associated with the "/" route is not displayed for every other route?

exact
