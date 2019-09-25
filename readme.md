# Objectives

## Events

- Students can handle events using HTML attributes, Javascript properties, and addEventListener.
- Students can discuess the benefits and drawbacks of each approach.
- Students can define event bubbling.
- Students can use stopPropagation and preventDefault in event handlers.

## DOM

- Students can use querySelector and querySelectorAll to select elements in Javascript.
- Students can use createElement, append, parentNode and remove to dynamically update the DOM.
- Students can use getAttribute and setAttribute to update element properties.

## Compatability and Security

- Students can describe XSS.
- Students can describe polyfills and their importance.

**Functions set as Attributes**
- Easy to read and follow.
- Easy to write.
- No separation of concerns.
- Only one function per argument.

```html
<button onclick="saySomething('You said something.')">Click</button>
```

**Functions set as Properties**
- Easy to write.
- Provides separation of concerns.
- Less obvious events.
- Only one function per event.


```html
<button id="mybutton">Click</button>
```

```js
document.getElementById('mybutton').onclick = function() {
    alert("You've been alerted.");
};
```

**Functions as eventListeners**
- Easy to write.
- Provide separation of concerns.
- Events less obvious.
- Allows adding multiple functions to single event.

```html
<button id="mybutton">Click</button>
```

```js
function listenerAlert() {
    alert("You were clicked with the addEventListener method.");
};

document.getElementById("mybutton").addEventListener("click", listenerAlert);
```

```html
<div></div>
<div class="element"></div>
<div id="element"></div>
```

```js
document.getElementsByTagName("div");
document.getElementsByClassName("element");
document.getElementById("element");
```

<!-- Introduce Jquery-->

```js
$("div")
$(".element")
$("#element")
```

<!-- 2013 Browser Catch-Up -->

```js
document.querySelector("div")
document.querySelector(".element")
document.querySelector("#element")
```