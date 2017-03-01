# REACT JS
https://github.com/nagabhushanamn

Document.object
```
Console exp:
var box=document.querySelector('.well');
console.dir(box);

- property update
box.style.display='none'
```

```
With User intertaction
<button class="btn btn-primary">Show</button>
<button class="btn btn-danger">Hide</button>
```

```
//Using DOM API

var box=document.querySelector('.well');
var hideBtn=document.querySelector('.btn-danger');
var showBtn=document.querySelector('.btn-primary');

hideBtn.addEventListener('click', function(event) { 
  box.style.siaplay='none';
});

showeBtn.addEventListener('click', function(event) { 
  box.style.siaplay='';
});
```

## Limitations/complexities of plain JS :
- browser compatibilities
Use caniuse.com to check browser compatibility.
- too much code for simple-operations
- performance issues (eg DOM manipulation )
- memory management (cleaning unused DOm-elements, un registering event listner)
- code organization is difficult

### Solution: using .js libraries and frameworks
Difference between Library and Framework:
- Library: call functions to achieve functionality. No pre-organized code.
- Framework: write own function.Pre organzied code.

## Limitations of Jquery:
- Close to DOM
- View, Logic and Data together 
- Developing re-usable component is difficult
- code organization is difficult
- data-binding difficult

## Build tools:
### What is the use:
- Combining Files
- Minified
- Maintaining File Order
- Transpilation(kangax.github.io/compat-table/es6/)
- Linting(JScode quality check)

### Tools:
-- Server-Side Tools(ASP.Net, Rails etc)
-- Task Runners()
Webpack Module Bundler 
-- npm install webpack --save-dev (Local)
-- npm install webpack-dev-server --save-dev (Local)
-- npm install webpack -g (Global)
-- webpack
-- webpack --watch
-- Update package.json
"script":{ "build":"webpack --watch"},

### .js Module standards from third parties
- AMD(Async Module Definition=>AMD module wiki) {require.js}
 - define: ==>define('mid',[],factory)
 - load/require module: ==>require(config,[], callback);

- commonJs standards
 - Simple approach to define module
 - every .js file is module by default
 - all variable/func in .js are private to that module by default
 - to abstract any member to other module, use 'module.exports'
 - to require any member, use 'require(module)'
 - we can group related modules in package
* imp-note :Node.js runtime uses commonJs as default module standard

browserify: npm install browserify
browserify app.js -o bundle.js

- SystemJs(Out of scope)
- UMD(Out of scope)

# Frameworks
-------------------------------------
React -> View Library -> View Componenets : from facebook

## Three questions about each piece of data:
- Is it passed in from a parent via props? If so, it probably isn't state.
- Does it remain unchanged over time? If so, it probably isn't state.
- Can you compute it based on any other state or props in your component? If so, it isn't state.


## ECMAScript 2015 or ES6
#### ES6 modules
AMD or commonjS 

# REACT
### TODO Example
ToDo: todomvc-app-css (https://npmjs.com/package/todomvc-app-css)

### React Routing
https://www.npmjs.com/package/react-router
