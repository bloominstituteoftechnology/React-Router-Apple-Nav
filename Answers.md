## Questions
1. What is the difference between _server side routing_ and _client side routing_?
1. Mention some advantages of using client side routing.
1. Which component is used to define a route and what _props_ are commonly added to it?
1. How can I make sure that the component associated with the _"/"_ route is not displayed for every other route?

## Answers

1. Routing is the way you navigate through a website or web application. Clicking on a link   
   provides a user with new data or webpage
   Sever side routing is the routing we are all familiar with. When a user click on a links a request is
   sent to the server for a resource. The server sends back html and optionally javascript and css to the client and a new page is rendered.
   Client side routing happens when it is handled by the app itself usually with javascript. When a user clicks
   on a url, it is matched to a route and it's corresponding components are loaded onto the webpage as well as any asynchronous ajax requests for data. This makes the web application behave as if it's a single page normal app. Examples of this are google map, google docs, web mail many react applications.
2. The disadvantage of server routing is that a page needs to be loaded each time which can be annoying for   the user. The main disadvantage to client side routing is that search engines cannot crawl these pages too easily.
3. the ReactRouter is used to define the component and Route and Router props are added to it.
4. you can make sure the component associated with / is not displayed for every other route if you add the prop word exact to it. 
