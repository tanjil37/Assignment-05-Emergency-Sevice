# JavaScript DOM & Events Notes

## 1. Difference between `getElementById`, `getElementsByClassName`, and `querySelector / querySelectorAll`

- **`getElementById`**  
  Selects a single element by its **unique ID** attribute.

- **`getElementsByClassName`**  
  Selects **multiple elements** by their **class name**.

- **`querySelector / querySelectorAll`**  
  - `querySelector` → returns the **first element** that matches a CSS selector.  
  - `querySelectorAll` → returns **all elements** that match a CSS selector.  

---

## 2. How do you create and insert a new element into the DOM?

```js
const newDiv = document.createElement("div");
```
## 3. What is Event Bubbling and how does it work?

When an event is triggered on a **child element**, it **propagates up** to its **parent elements** in the DOM hierarchy.  
This means the event handler for the parent elements can also be executed.

---

## 4. What is Event Delegation in JavaScript? Why is it useful?

Rather than adding separate event listeners to each child element, you can add just **one listener** to the **parent** and rely on **event bubbling** to detect and handle events from its children.

### ✅ Benefits of Event Delegation:
- Reduces **memory usage**  
- Improves **performance**  
- Automatically handles **dynamically added elements**  

---

## 5. Difference between `preventDefault()` and `stopPropagation()`

- **`preventDefault()`**  
  Prevents the default action of an element.  
  **Example**: Stop a form from auto-reloading when the submit button is clicked.

- **`stopPropagation()`**  
  Stops the event from **bubbling up** or **capturing down** to other elements.  

---

