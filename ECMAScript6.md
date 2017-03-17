# Comparision between ES6 and ES5
## Scoping
### Block-scoped variables (and constants) without hoisting
```
// ES6 
for (let i = 0; i < a.length; i++) {
    let x = a[i]
    …
}

// ES5
var i, x, y;
for (i = 0; i < a.length; i++) {
    x = a[i];
    …
}
```
### Blocked-scoped function without definition
```
// ES6
{
    function foo () { return 1 }
    foo() === 1
    {
        function foo () { return 2 }
        foo() === 2
    }
    foo() === 1
}

// ES5

(function () {
    var foo = function () { return 1; }
    foo() === 1;
    (function () {
        var foo = function () { return 2; }
        foo() === 2;
    })();
    foo() === 1;
})();
```

## Arrow Function
