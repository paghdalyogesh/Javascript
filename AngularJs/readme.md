# Index

| [Intro](#intro) | [Bootstrapping](#bootstrapping) | [Scopes](#scopes) | [Inheritance](#inheritance) | [Events](#events) | [Data-Binding](#data-binding) |
| --- | --- | --- | --- | --- | --- |
| [Modules](#modules) | [Directives](#directives) | [Controller](#controller) | [Filters](#filters) | [Services](#services) | [Routing](#routing) |

# Intro
AngularJS is an open-source JavaScript framework developed by Google. It helps you to create single-page applications or one-page web applications that only require HTML, CSS, and JavaScript on the client side. It is based on MV-* pattern and allow you to build well structured, easily testable, and maintainable front-end applications.

```
Model: Models are plain old JavaScript objects that represent data used by your app and represents the current state.
View: The View represents HTML and presentation of the data.
View-Model: A viewmodel is an object that provides specific data and methods to maintain specific views. Basically, it is a $scope object which lives within your AngularJS app's controller. A viewmodel is associated with a HTML element with the ng-model and ng-bind directives.
Controller: The controller defines the actual behavior of your app. It contains business logic for the view and connects the model to view with the help of $scope. A controller is associated with a HTML element with the ng-controller directive.
```

# Expressions [^](#index)
AngularJS expressions are much like JavaScript expressions, placed inside HTML templates by using double braces such as:
{{ a + b}}, {{ 1 + 2}}, {{ a = b}}, {{ a == b}}

# Bootstrapping [^](#index)
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

# Scopes [^](#index)
Scope is a JavaScript object that refers to the application model. It acts as a context for evaluating angular expressions. Basically, it acts as glue between controller and view.
Scopes are hierarchical in nature and follow the DOM structure of your AngularJS app. AngularJS has two scope objects: $rootScope and $scope.

#### $scope
A $scope is a JavaScript object which is used for communication between controller and view. Basically, $scope binds a view (DOM element) to the viewmodel and functions defined in a controller.

#### $rootScope
The $rootScope is the top-most scope. An app can have only one $rootScope which will be shared among all the components of an app. Hence it acts like a global variable. All other $scopes are children of the $rootScope.


# Inheritance [^](#index)
The $scope object used by views in AngularJS are organized into a hierarchy. There is a root scope, and the $rootScope can has one or more child scopes. Each controller has its own $scope (which is a child of the $rootScope), so whatever variables you create on $scope within controller, these variables are accessible by the view based on this controller.

# Events [^](#index)
AngularJS provides event listener directives to handle HTML events. You can attach an event listener to an appropriate HTML element by using one of the following AngularJS event listener directives:
- ng-click
- ng-dbl-click
- ng-keydown
- ng-keyup
- ng-keypress
- ng-change
- ng-mousedown
- ng-mouseup
- ng-mouseenter
- ng-mouseleave
- ng-mousemove
- ng-mouseover

# Modules [^](#index)
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

# Directives [^](#index)
AngularJS directives are a combination of AngularJS template markups (HTML attributes or elements, or CSS classes) and supporting JavaScript code. The JavaScript directive code defines the template data and behaviors of the HTML elements.

Ways to invoke Directives:
##### Directive as Attribte: \<div ng-directive>\</div>
##### Directive as Class: \<div class="ng-directive: expression;">\</div>
##### Directive as Elements: \<ng-directive>\</div>
##### Directive as Comment: <!-- directive: ng-directive expression -->

- ng-app
- ng-init
- ng-if
- ng-model
- ng-switch
- ng-repeat

# Filters [^](#index)
Filters are used to format data before displaying it to the user. They can be used in view templates, controllers, services and directives. There are some built-in filters provided by AngularJS like as Currency, Date, Number, OrderBy, Lowercase, Uppercase etc. You can also create your own filters.
```
<p>Total Price: <span ng-bind="quantity * price | currency:'₹'"></span></p>
<p>Full Name: <span ng-bind="firstName + ' ' + lastName | uppercase"></span></p>
```

# Controller [^](#index)
The controller contains business logic for the view and connects the model to view with the help of $scope. 
A controller is associated with a HTML element with the ng-controller directive.
 
# Services [^](#index)
A service is a reusable singleton object which is used to organize and share code across your app. A service can be injected into controllers, filters, directives. AngularJS offers several built-in services (like $http, $provide, $resource, $window, $parse) which always start with $ sign.

## Methods to create a Service

| Service | Factory | Provider | Value | Constant |
|   ---   |   ---   |    ---   |  ---  |   ---    |
| A service is a constructor function which creates the object using new keyword. You can add properties and functions to a service object by using this keyword. Unlike factory, it doesn’t return anything. | A factory is a simple function which allows you to add some logic before creating the object. It returns the created object. | A provider is used to create a configurable service object. It returns value by using $get() function. | A value can be a number, string, date-time, array or object. You can also register a function as a value. Values are typically used as configuration which is injected into factories, services or controllers. | A constant is like as value. The difference between a value and a constant service is that constant service can be injected into a module configuration function i.e. config() but value service cannot be. |

# Routing [^](#index)
Rouuting is a mechanism which helps you to divide your single page application into multiple views and bind these views to corresponding controllers. An angular route is specified within the URL by using # sign and enables you to show a specific view. http://yourdomain.com/index.html#users

## AngularJS Route Module
The routing functionality is provided by the angular's ngRoute module, which is the part of angular-route.js JavaScript file. Hence, include angular-route.js file into your AngularJS application for using routing. 
```
var app = angular.module("app", ['ngRoute']);
```

## Configuring the $routeProvider
The routes in your angular application are declared with the help of $routeProvider which is the provider of the $route service. The $routeProvider is configured in your app module's config() function.

```
<script>
 appmodule.config(['$routeProvider',
 function($routeProvider) {
 $routeProvider.
  when('/route1', {
   templateUrl: 'template-1.html',
   controller: 'RouteController1'
  }).
  when('/route2:param', {
   templateUrl: 'template-2.html',
   controller: 'RouteController2'
  }).
  otherwise({ // if no route paths matches
  redirectTo: '/' 
  });
 }]);
</script>
 
<!-- And links should be defined as: -->
 
<a href="#/route1">Route 1</a><br/>
<a href="#/route2:123">Route 2</a><br/>
```

# Data-Binding [^](#index)
Developers are not responsible for manually updating HTML elements to reflect model changes. AngularJS provides its powerful data-binding mechanism to handle the synchronization of data between model and view.

#### How AngularJS handle data binding
AngularJS handle data-binding mechanism with the help of three powerful functions: $watch(), $digest() and $apply(). Most of the time AngularJS will call the $scope.$watch() and $scope.$digest() functions for you, but in some cases you may have to call these functions yourself to update new values.

#### Two-way data binding
It is used to synchronize the data between model and view. It means, any change in model will update the view and vice versa. ng-model directive is used for two-way data binding.


