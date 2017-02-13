### 1. Name some of the JavaScript features.
Following are the features of JavaScript −
JavaScript is a lightweight, interpreted programming language.
JavaScript is designed for creating network-centric applications.
JavaScript is complementary to and integrated with Java.
JavaScript is is complementary to and integrated with HTML.
JavaScript is open and cross-platform.

### 2. Is JavaScript a case-sensitive language?
Yes! JavaScript is a case-sensitive language. This means that language keywords, variables, function names, and any other identifiers must always be typed with a consistent capitalization of letters.

### 3. What are the different types of Datatypes.
Six data types that are primitives:
Boolean.
Null.
Undefined.
Number.
String.
Symbol (new in ECMAScript 6)

### 4. What is the difference between UNDEFINED and NULL?
UNDEFINED: Undefined means a variable has been declared but has not yet been assigned a value.Unassigned variables are initialized by JavaScript with a default value of undefined. 
NULL: Null is an assignment value. It can be assigned to a variable as a representation of no value.Javascript never assignes a NULL value by default it has to be done programatically.


### 5. How can you create an Array in JavaScript?
You can define arrays using the array literal as follows −

var x = [];
var y = [1, 2, 3, 4, 5];

### 6. How many types of functions JavaScript supports?
A function in JavaScript can be either named or anonymous.

### 7. Difference between named and anonymous functions
Named: A named function has a name when it is defined.
Anonymous: An anonymous function can be defined in similar way as a normal function but it would not have any name. 
It can be assigned to a variable.
It can be passed as an argument to another function.

### 8. What are the different type of arguments passed to a function?
func();                //==> "undefined", 0
func(1);               //==> "number", 1
func("1", "2", "3");   //==> "string", 3

### 9. How can you get the reference of a caller function inside a function?
The arguments object has a callee property(arguments.callee), which refers to the function you're inside in.

### 10. What is the purpose of 'this' operator in JavaScript?
JavaScript famous keyword this always refers to the current context.

### 11. Valid scopes in Javascript?
Global variables: They are having global scope which means they are visible everywhere in code.
Local variables: They are visible only in the function they are defined. also function parameters are local variables.
Local Variable took precedence over Global variable.

### 12. What is callback?
A callback is a plain JavaScript function passed to some method as an argument or option. Some callbacks are just events, called to give the user a chance to react when a certain state is triggered.

### 13. What is closure?
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

### 14. What are the variable naming conventions in JavaScript?
No JavaScript reserved keyword as variable name. For example, break or boolean variable names are not valid.
Should not start with a numeral (0-9). 
They must begin with a letter or the underscore character. For example, 123test is invalid but _123test is a valid one.
JavaScript variable names are case sensitive.

### 15. Build In methods.
- charAt()  : returns the character at the specified index.
- concat()  : returns the character at the specified index.
- orEach()  : calls a function for each element in the array.
- indexOf() : returns the index within the calling String object of the first occurrence of the specified value, or −1 if not found.
- length()  : returns the length of the string.
- pop()     : removes the last element from an array and returns that element.
- push()    : adds one or more elements to the end of an array and returns the new length of the array.
- reverse() : reverses the order of the elements of an array −− the first becomes the last, and the last becomes the first.
- sort()    : sorts the elements of an array.
- substr()  : returns the characters in a string beginning at the specified location through the specified number of characters.
- toLowerCase() : returns the calling string value converted to lower case.
- toUpperCase() : returns the calling string value converted to upper case.
- toString()    : returns the string representation of the number's value.

### 16. How typeof operator works?
The typeof is a unary operator that is placed before its single operand, which can be of any type. Its value is a string indicating the data type of the operand.
The typeof operator evaluates to "number", "string", or "boolean" if its operand is a number, string, or boolean value and returns true or false based on the evaluation.

| Type | Result |
| --- | --- |
| Undefined | "undefined" |
| Null |	"object" |
| Boolean | "boolean" |
| Number | "number" |
| String | "string" |
| Symbol (new in ECMAScript 2015) |	"symbol" |
| Host object (provided by the JS environment) | Implementation-dependent |
| Function object (implements [[Call]] in ECMA-262 terms) | "function" |
Any other object	"object"

### 17. How to implement and access cookies in JS?
- Create a cookie is assiging a string value to the document.cookie object, which looks like this −
```
document.cookie = "key1 = value1; key2 = value2; expires = date";
```
Here expires attribute is option. If you provide this attribute with a valid date or time then cookie will expire at the given date or time and after that cookies' value will not be accessible.

- Reading a cookie is to read document.cookie which keep a list of name = value pairs separated by semicolons, where name is the name of a cookie and value is its string value.
You can use strings' split() function to break the string into key and values.

- Delete a cookie cabn be achieved by setting an expiration time.
