### 1. What is jQuery?
JQuery is client side scripting fast, lightweight and feature-rich client side JavaScript Library/Framework which helps in to traverse HTML DOM, make animations, add Ajax interaction, manipulate the page content, change the style and provide cool UI effect. It is one of the most popular client side library and as per a survey it runs on every second website.

### 2.Is jQuery replacement of Java Script?
No. jQuery is not a replacement of JavaScript. jQuery is a different library which is written on top of JavaScript. jQuery is a lightweight JavaScript library that emphasizes interaction between JavaScript and HTML.

### 3. Which is the starting point of code execution in jQuery?
$(document).ready() function which is executed when DOM is loaded.

### 4. What does dollar sign ($) means in jQuery?
Dollar Sign is alias for JQuery. You can pass a selector string to $() function and it will return jQuery object which contains an array of all matched DOM elements.

### 5. Can we have multiple document.ready() function on the same page?
YES. We can have any number of document.ready() function on the same page.
 
### 6. Can we use our own specific character in the place of $ sign in jQuery?
Yes. It is possible using jQuery.noConflict().

### 7. What is a CDN?
CDN stands for Content Delivery Network or Content Distribution Network. It is a large distributed systems of servers deployed in multiple data centers across the internet.
- It reduces the load from the server.
- It saves bandwidth. jQuery framework is loaded faster from these CDN.
- If a user visits regularly a site which is using jQuery framework from any of these CDN, it will be cached.

### 8. What are selectors in jQuery? How many types of selectors in jQuery?
If you want to work with an element on the web page, first you need to find it. Selectors are used to find the HTML elements in jQuery. 

There are many types of selectors. Some basic selectors are:
- Name: It is used to selects all elements which match with the given element Name.
- #ID: It is used to selects a single element which matches with the given ID
- .Class: It is used to selects all elements which match with the given Class.
- Universal (*): It is used to selects all elements available in a DOM.
- Multiple Elements E, F, G: It is used to selects the combined results of all the specified selectors E, F or G.
- Attribute Selector: It is used to select elements based on its attribute value.

### 9. What are the different types of selectors in jQuery?
There are three types of selectors in jQuery:
- CSS Selector
- Custom Selector
- XPath Selector

### 10. What is use of jQuery filter?
: jQuery filter is used to filter the certain values from the object. It filters the result of your original query into specific elements.
```
$( "li" ).filter( ":even" ).css( "background-color", "red" );

$( "div" )
  .css( "background", "#c8ebcc" )
  .filter( ".middle" )
    .css( "border-color", "red" );
```

### 11. Different JQuery functions.
- addclass() : Add classes.
- removeclass() : Remove classes.
- attr(): It gets the value of an attribute for the first element in the set of matched element.
- prop(): it gets the value of a property for the first element in the set of matched elements. It is introduced in jQuery 1.6.

### 12. What is the use of animate function in jQuery?
The animate function is used to apply the custom animation effect to elements. 
```
$(selector).animate({params}, [duration], [easing], [callback])  

"param" defines the CSS properties on which you want to apply the animation.
"duration" specify how long the animation will run. It can be one of following values : "slow", "fast", "normal" or milliseconds
"easing" is the string which specify the function for the transition.
"callback" is the function which we want to run once the animation effect is complete.
```

