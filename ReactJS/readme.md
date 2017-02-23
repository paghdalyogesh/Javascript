# REACT JS

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

Limitations/complexities of plain JS :
- browser compatibilities
Use caniuse.com to check browser compatibility.
- too much code for simple-operations
- performance issues (eg DOM manipulation )
- memory management (cleaning unused DOm-elements, un registering event listner)
- code organization is difficult


