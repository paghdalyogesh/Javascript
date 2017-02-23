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
