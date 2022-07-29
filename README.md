# RomaJS
🔀 A super simple JS router.

## Setup :

### Step 1 :
Add the .htaccess to the root to redirect every request to index.html.

### Step 2 : 
Add Roma to your page.

### Step 3 : 
Somewhere in your code, instanciate Roma, add some routes and the corresponding callback function and don't forget to call the Roma init function :

```javascript
myRoma = new Roma();

myRoma.addRoute('/', () => {
  console.log("Homepage");
  document.getElementById("currentPage").textContent = "Homepage";
});

myRoma.addRoute('/works', () => {
  console.log("Works");
  document.getElementById("currentPage").textContent = "Works";
});

myRoma.addRoute('/about', () => {
  console.log("About");
  document.getElementById("currentPage").textContent = "About";
});

myRoma.addRoute('/work/:id', (params) => {
  console.log("Work " + params.id);
  document.getElementById("currentPage").textContent = "Work " + params.id;
});

myRoma.addRoute('/contact', () => {
  console.log("Contact");
  document.getElementById("currentPage").textContent = "Contact";
});

myRoma.init();
```
