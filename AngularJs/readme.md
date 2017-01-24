# Intro
AngularJS is an open-source JavaScript framework developed by Google. It helps you to create single-page applications or one-page web applications that only require HTML, CSS, and JavaScript on the client side. It is based on MV-* pattern and allow you to build well structured, easily testable, and maintainable front-end applications.

```
Model: Models are plain old JavaScript objects that represent data used by your app and represents the current state.
View: The View represents HTML and presentation of the data.
View-Model: A viewmodel is an object that provides specific data and methods to maintain specific views. Basically, it is a $scope object which lives within your AngularJS app's controller. A viewmodel is associated with a HTML element with the ng-model and ng-bind directives.
Controller: The controller defines the actual behavior of your app. It contains business logic for the view and connects the model to view with the help of $scope. A controller is associated with a HTML element with the ng-controller directive.
```

# Expressions
AngularJS expressions are much like JavaScript expressions, placed inside HTML templates by using double braces such as:
{{ a + b}}, {{ 1 + 2}}, {{ a = b}}, {{ a == b}}

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

# Scopes
Scope is a JavaScript object that refers to the application model. It acts as a context for evaluating angular expressions. Basically, it acts as glue between controller and view.
Scopes are hierarchical in nature and follow the DOM structure of your AngularJS app. AngularJS has two scope objects: $rootScope and $scope.

#### $scope
A $scope is a JavaScript object which is used for communication between controller and view. Basically, $scope binds a view (DOM element) to the viewmodel and functions defined in a controller.

#### $rootScope
The $rootScope is the top-most scope. An app can have only one $rootScope which will be shared among all the components of an app. Hence it acts like a global variable. All other $scopes are children of the $rootScope.
