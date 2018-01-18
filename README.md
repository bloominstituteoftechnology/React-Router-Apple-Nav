# Assessing your React Router Fu
* The purpose of this exercise is to get you used to being quizzed on _Interview Questions_ commonly asked about React Router.
* Answers to your written questions should be recorded in *Answers.md* 
* This is to be worked on alone but you can use outside resources. You can *reference* any old code you may have, and the React Documentation, however, please refrain from copying and pasting any of your answers. Try and understand the question and put your responses in your own words. Be as thorough as possible when explaining something. 
* Don't fret or get anxious about this, this is a no-pressure assessment, NOT a pass/fail situation. 

## Start by forking and cloning this repository.
## Questions
1. What is the difference between _server side routing_ and _client side routing_?
  * Client side routing will dynamically load in content from the server based on the current route. Server side routing will redirect you to an entirely new page.
1. Mention some advantages of using client side routing.
  * The page doesn't have to completely reload and a SPA feels more responsive.
1. Which component is used to define a route and what _props_ are commonly added to it?
  * <Route to={route to go to} component={component to render}>
1. How can I make sure that the component associated with the _"/"_ route is not displayed for every other route?
  * Use the 'exact' attribute on the root route component.

## Project
1. Use *create-react-app* to make an application, name it anything you want.
1. Add a menu similar to the one on https://www.apple.com with a top level navigation.
1. For each top level navigation (Mac, iPad, iPhone, etc) display a sub-navigation bar with links that when clicked show the appropriate component.

This example shows the sub-navigation for the `/mac` route.

![Sample Navigation](images/sample.png)

Your goal is to get the nested navigation working, no need to add animation or content to the components displayed other than some text to uniquely identify them.
