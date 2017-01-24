# Intro
AngularJS is an open-source JavaScript framework developed by Google. It helps you to create single-page applications or one-page web applications that only require HTML, CSS, and JavaScript on the client side. It is based on MV-* pattern and allow you to build well structured, easily testable, and maintainable front-end applications.

```
Model: Models are plain old JavaScript objects that represent data used by your app and represents the current state.
View: The View represents HTML and presentation of the data.
View-Model: A viewmodel is an object that provides specific data and methods to maintain specific views. Basically, it is a $scope object which lives within your AngularJS app's controller. A viewmodel is associated with a HTML element with the ng-model and ng-bind directives.
Controller: The controller defines the actual behavior of your app. It contains business logic for the view and connects the model to view with the help of $scope. A controller is associated with a HTML element with the ng-controller directive.
```

#Modules
AngularJS modules are containers which divide an angular app into small, reusable and functional components which can be integrated with other angular app. 
Each module is identified by a unique name and can be dependent on other modules. In AngularJS, every web page (view) can have a single module assigned to it via ng-app directive.

### Creating an AngularJS module
```
<script type="text/javascript"> 
// defining module 
angular.module('myApp', []); 
 
//OR defining module which has dependency on other modules 
angular.module('myApp', ['dependentModule1', 'dependentModule2']); 
</script>
```

### Using an AngularJS module into your app
```
<html ng-app="myApp"> 
<head> 
... 
</head> 
<body> 
... 
</body>
```

# Directives
AngularJS directives are a combination of AngularJS template markups (HTML attributes or elements, or CSS classes) and supporting JavaScript code. The JavaScript directive code defines the template data and behaviors of the HTML elements.

Ways to invoke Directives:
* Directive as Attribte: \<div ng-directive>\</div>
* Directive as Class: \<div class="ng-directive: expression;">\</div>
* Directive as Elements: \<ng-directive>\</div>
* Directive as Comment: <!-- directive: ng-directive expression -->

- ng-app
- ng-init
- ng-if
- ng-model
- ng-switch
- ng-repeat

# Expressions
AngularJS expressions are much like JavaScript expressions, placed inside HTML templates by using double braces such as:
{{ a + b}}, {{ 1 + 2}}, {{ a = b}}, {{ a == b}}

# Filters
Filters are used to format data before displaying it to the user. They can be used in view templates, controllers, services and directives. There are some built-in filters provided by AngularJS like as Currency, Date, Number, OrderBy, Lowercase, Uppercase etc. You can also create your own filters.
```
<p>Total Price: <span ng-bind="quantity * price | currency:'₹'"></span></p>
<p>Full Name: <span ng-bind="firstName + ' ' + lastName | uppercase"></span></p>
```

# Bootstrapping
Angular initializes automatically upon _DOMContentLoaded event_ or when the angular.js script is downloaded to the browser and the _document.readyState is set to complete_. At this point AngularJS looks for the ng-app directive which is the root of angular app compilation and tells about AngularJS part within DOM. When the ng-app directive is found then Angular will:
- Load the module associated with the directive.
- Create the application injector.
- Compile the DOM starting from the ng-app root element.
This process is called auto-bootstrapping.

#### Manual Bootstrap Process
You can manually initialized your angular app by using _angular.bootstrap()_ function. This function takes the modules as parameters and should be called within _angular.element(document).ready()_ function. The _angular.element(document).ready()_ function is fired when the DOM is ready for manipulation.
- You should not use the ng-app directive when manually bootstrapping your app.
- You should not mix up the automatic and manual way of bootstrapping your app.
- Define modules, controller, services etc. before manually bootstrapping your app as defined in above example.
