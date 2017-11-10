1) What is the difference between server side routing and client side routing?
* Server-side routing happens remotely on the server and involves the whole page refreshing, while client-side routing happens on the user's computer and only updates the necessary portion of the page.

2) Mention some advantages of using client side routing.
* Client-side routing is generally faster the page does not need to send a response to the server and wait for a response, plus it is only updating a portion of the page so that can be accomplishd faster than a full page update. It is also easier to implement smooth transitions and animations between views.

3) Which component is used to define a route and what props are commonly added to it?
* I believe this is happening in App, but I'm not fully confident as it feels like that's only part of it. The reducer with the switch statement feels like it's the other part. The Route statement is in App within App.js, though, so I believe that's the answer.

4) How can I make sure that the component associated with the "/" route is not displayed for every other route?
Specify it with _exact_ so that it will only display if a slash alone is displayed with no other charactes following it(that's intended to be underlined, not to include the underline markdown).