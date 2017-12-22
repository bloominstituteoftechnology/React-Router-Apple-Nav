1. What is the difference between _server side routing_ and _client side routing_?
1. Mention some advantages of using client side routing.
1. Which component is used to define a route and what _props_ are commonly added to it?
1. How can I make sure that the component associated with the _"/"_ route is not displayed for every other route?

Server side rendering is when HTML is created on server and sent to client. In client side rendering HTML is created in browser by JS. 

Traditionally in client side rendering you see ReactDOM render your target app first and then you render your own app inside that target app. Client sends api requests to server, receives all data that is needed and component is rerendered on the screen again.

When you use component (instead of render or children, below) the router uses React.createElement to create a new React element from the given component. That means if you provide an inline function to the component prop, you would create a new component every render. This results in the existing component unmounting and the new component mounting instead of just updating the existing component. When using an inline function for inline rendering, use the render or the children prop (below).

This function is a valid React component because it accepts a single “props” (which stands for properties) object argument with data and returns a React element. We call such components “functional” because they are literally JavaScript functions.

Components can refer to other components in their output. This lets us use the same component abstraction for any level of detail. A button, a form, a dialog, a screen: in React apps, all those are commonly expressed as components.
