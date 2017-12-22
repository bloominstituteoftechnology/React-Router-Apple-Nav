Questions
What is the difference between server side routing and client side routing?

*Answer* - All web-based products are accessed from a *server*. *Routing* takes the way that the user navigates through a web page or application and connects requests to code by changing urls. _Server-side routing_ - has traditionally been the method for accomplishing this and involves sending an http get request to the server whenever a link is clicked on current webpage. When this occurs, the old webpage is completely discarded and new webpage is fetched from the server. In the case of _Client-side routing_ - has risen with the popularity of new JavaScript frameworks and involves a scenario in which the webpage sends an http get request to the server. In this case only the new data needs to be fetched as current webpage is not discarded.


Mention some advantages of using client side routing.
*Answer* - In client-side routing, only impacted components require changes rather than entire pages. This results in a faster, more efficient process that is cheaper to maintain while simultaneously improving the user experience.


Which component is used to define a route and what props are commonly added to it?

*Answer* - In React Router you use the Route component and you path it a path and component prop.

How can I make sure that the component associated with the "/" route is not displayed for every other route?
*Answer* - this can be accomplished by using the exact prop before specifying the path.