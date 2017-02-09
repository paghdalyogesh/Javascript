# Modules
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

# Filters
Filters are used to format data before displaying it to the user. They can be used in view templates, controllers, services and directives. There are some built-in filters provided by AngularJS like as Currency, Date, Number, OrderBy, Lowercase, Uppercase etc. You can also create your own filters.
```
<p>Total Price: <span ng-bind="quantity * price | currency:'₹'"></span></p>
<p>Full Name: <span ng-bind="firstName + ' ' + lastName | uppercase"></span></p>
```

# Controller
The controller contains business logic for the view and connects the model to view with the help of $scope. 
A controller is associated with a HTML element with the ng-controller directive.

# Services

# Routing
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

