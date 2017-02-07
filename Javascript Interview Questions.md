#### 1. Name some of the JavaScript features.
Following are the features of JavaScript −
JavaScript is a lightweight, interpreted programming language.
JavaScript is designed for creating network-centric applications.
JavaScript is complementary to and integrated with Java.
JavaScript is is complementary to and integrated with HTML.
JavaScript is open and cross-platform.

#### 2. Is JavaScript a case-sensitive language?
Yes! JavaScript is a case-sensitive language. This means that language keywords, variables, function names, and any other identifiers must always be typed with a consistent capitalization of letters.

#### 3. What are the different types of Datatypes.
Six data types that are primitives:
Boolean.
Null.
Undefined.
Number.
String.
Symbol (new in ECMAScript 6)

#### 4. What is the difference between UNDEFINED and NULL?
UNDEFINED: Undefined means a variable has been declared but has not yet been assigned a value.Unassigned variables are initialized by JavaScript with a default value of undefined. 
NULL: Null is an assignment value. It can be assigned to a variable as a representation of no value.Javascript never assignes a NULL value by default it has to be done programatically.


#### 5. How can you create an Array in JavaScript?
You can define arrays using the array literal as follows −

var x = [];
var y = [1, 2, 3, 4, 5];

#### 6. How many types of functions JavaScript supports?
A function in JavaScript can be either named or anonymous.

#### 7. Difference between named and anonymous functions
Named: A named function has a name when it is defined.
Anonymous: An anonymous function can be defined in similar way as a normal function but it would not have any name. 
It can be assigned to a variable.
It can be passed as an argument to another function.

#### 8. What are the different type of arguments passed to a function?
func();                //==> "undefined", 0
func(1);               //==> "number", 1
func("1", "2", "3");   //==> "string", 3

#### 9. How can you get the reference of a caller function inside a function?
The arguments object has a callee property(arguments.callee), which refers to the function you're inside in.

#### 10. What is the purpose of 'this' operator in JavaScript?
JavaScript famous keyword this always refers to the current context.

#### 11. Valid scopes in Javascript?
Global variables: They are having global scope which means they are visible everywhere in code.
Local variables: They are visible only in the function they are defined. also function parameters are local variables.
Local Variable took precedence over Global variable.

#### 12. What is callback?
A callback is a plain JavaScript function passed to some method as an argument or option. Some callbacks are just events, called to give the user a chance to react when a certain state is triggered.

#### 13. What is closure?
Closures are created whenever a variable that is defined outside the current scope is accessed from within some inner scope.
```
function create() {
   var counter = 0;
   return {
      increment: function() {
         counter++;
      },
  
      print: function() {
         console.log(counter);
      }
   }
}
var c = create();
c.increment();
c.print();     // ==> 1
```

#### 14. hat are the variable naming conventions in JavaScript?
No JavaScript reserved keyword as variable name. For example, break or boolean variable names are not valid.
Should not start with a numeral (0-9). 
They must begin with a letter or the underscore character. For example, 123test is invalid but _123test is a valid one.
JavaScript variable names are case sensitive.
